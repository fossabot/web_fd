import '../src/styles/style.css'
import React, { Component } from 'react';
import Layout from '../src/components/layout';
import { Link } from '../routes';

class HomePage extends Component {

   render() {
      return (
         <Layout>
            <div>
               <h3>Center</h3>
            </div>
         </Layout>
      );
   }
}

export default HomePage;