import React, {Component} from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
     state = {
          showsideDrawer : false
     }
     sideDrawerClosedHandler = () => {
          this.setState({showsideDrawer:false});
     }
     sideDrawerToggleHandler = () => {
          this.setState(( prevstate ) =>{
               return {showsideDrawer:!prevstate.showsideDrawer}
          } );
     }
     render (){
          return (
               <Aux>
                    <Toolbar
                    Toggle={this.sideDrawerToggleHandler}
                    isAuth={this.props.isAuthenticated}
                    />
                    <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showsideDrawer}
                    closed={this.sideDrawerClosedHandler}/>
                    <main className={classes.content}>
                         {this.props.children}
                    </main>
               </Aux>
          )
     }
}
const mapStateToProps = state =>{
     return {
          isAuthenticated:state.auth.token != null
     }
}

export default connect(mapStateToProps)(Layout);