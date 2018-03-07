// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "development" });
const handler = routes.getRequestHandler(app);

var morgan = require("morgan");
// morgan provides easy logging for express, and by default it logs to stdout
// which is a best practice in Docker. Friends don't let friends code their apps to
// do app logging to files in containers.

// Constants
const PORT = process.env.PORT || 8080;
// if you're not using docker-compose for local development, this will default to 8080
// to prevent non-root permission problems with 80. Dockerfile is set to make this 80
// because containers don't have that issue :)

// With express
const express = require("express");
app.prepare().then(() => {
  const server = express();

  server.use(morgan("common"));

  server.get("/healthz", function(req, res) {
    // do app logic here to determine if app is truly healthy
    // you should return 200 if healthy, and anything else will fail
    // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
    res.send("I am happy and healthy\n");
  });

  server.use(handler);

  server.listen(PORT),
    err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    };

  // quit on ctrl-c when running docker in terminal
  /*   process.on("SIGINT", function onSigint() {
    console.info("Got SIGINT (aka ctrl-c in docker). Graceful shutdown ", new Date().toISOString());
    shutdown();
  });

  // quit properly on docker stop
  process.on("SIGTERM", function onSigterm() {
    console.info("Got SIGTERM (docker container stop). Graceful shutdown ", new Date().toISOString());
    shutdown();
  });

  // shut down server
  function shutdown() {
    server.close(function onServerClosed(err) {
      if (err) {
        console.error(err);
        process.exitCode = 1;
      }
      process.exit();
    });
  } */
});

// // Without express
// const {createServer} = require('http')
// app.prepare().then(() => {
//   createServer(handler).listen(3000)
// })
