import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../../routes';

export default () => {
   return (
      <div className='footer'>
         <div className='ContactInfo'>

         </div>
         <div className='about'>
            <Link route="/about">
               <a className="item">Introduction</a>
            </Link>
            <Link route="/FAQ">
               <a className="item">Faq</a>
            </Link>
            <Link route="/Team">
               <a className="item">Team</a>
            </Link>
            <Link route="/Press">
               <a className="item">Press</a>
            </Link>
            <Link route="/Contact">
               <a className="item">Contact</a>
            </Link>
         </div>
      </div>
   )
}