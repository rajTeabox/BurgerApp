import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props)=>(
     <header className={classes.Toolbar}>
          <DrawerToggle clicked={props.Toggle}/>
          <div className={classes.Logo}>
                <Logo/>
          </div>

          <nav className={classes.DesktopOnly}>
               <Navigationitems isAuthenticated={props.isAuth}/>
          </nav>
     </header>
     );

export default Toolbar;