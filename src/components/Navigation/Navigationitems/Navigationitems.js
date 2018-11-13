import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigationitems.css';

const Navigationitems = (props) => (
          <ul className={classes.NavigationItems}>
               <NavigationItem link="/" exact>
                    Burger Builder
               </NavigationItem>
               {
                    !props.isAuthenticated ? null :
                    <NavigationItem link="/orders">
                    Orders
                    </NavigationItem>
               }

               {
                    !props.isAuthenticated ?
                    <NavigationItem link="/auth">
                    Authenticate
                    </NavigationItem> :
                    <NavigationItem link="/logout">
                    LOGOUT
                    </NavigationItem>
               }

          </ul>
     );
export default Navigationitems;