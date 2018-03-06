import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Home</a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">About</a>
        </Link>
        <Link route="/">
          <a className="item">Team</a>
        </Link>
        <Link route="/">
          <a className="item">White Paper</a>
        </Link>
        <Link route="/">
          <a className="item">Press</a>
        </Link>
        <Link route="/">
          <a className="item">FAQ</a>
        </Link>
        <Link route="/">
          <a className="item">Contact</a>
        </Link>
        <Link route="/">
          <a className="item">Register</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
