import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux/Aux'

const SideDrawer = (props) => {
     let attachedClasses = [classes.SideDrawer,classes.Close];
     if(props.open){
          attachedClasses = [classes.SideDrawer,classes.Open];
     }
     return (
     <Aux>
          <BackDrop show={props.open} closed={props.closed}/>
          <div className={attachedClasses.join(' ')} onClick={props.closed}>
               <div className={classes.Logo}>
                   <Logo />
               </div>

               <nav>
                    <Navigationitems isAuthenticated={props.isAuth}/>
               </nav>
          </div>
     </Aux>
     );
};
export default SideDrawer;