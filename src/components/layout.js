import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import '../styles/style.css'

export default props => {
   return (
      <Container>
         <Head>
            <link
               rel="stylesheet"
               href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            />
            <link rel="stylesheet" href="/_next/static/style.css" />
         </Head>
         <div className='grid'>
            <Header />
            {props.children}
            <Footer />
         </div>
      </Container>
   );
};