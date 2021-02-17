import React, { Component } from 'react'
import { Switch,Route,withRouter,Link } from 'react-router-dom'

import Home from './Home'
import AdminPage from './AdminPage'
import Wish from './Wish'



import AddRice from './AddRice'
import AddMeat from './AddMeat'
import AddNoGluten from './AddNoGluten'

import UserRice from './UserRice'
import UserMeat from './UserMeat'
import UserNoGluten from './UserNoGluten'
import Login from './Login'
import Register from './Register'
import AddNewRecipes from "./AddNewRecipes";


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            borad:[],
            loggedUser:'',
        }
    }
    
    checkUser=(user)=>{
      if('test'===user.userName && 'test'===user.password){
              this.setState({
                  loggedUser:user
              })
              this.props.history.push({
                  pathname:'/AdminPage'
              })
          }
          else{
              alert("Username or Password is incorrect!");
          }
      }
      
        
    render() {
        return (
            <div>
                <div>
                <div className={this.makeStyles}>
      <AppBar position="static">
        
        <Toolbar>
        <Link to='/Wish'>
          <Button color="inherit">Wish List</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
                </div>

            <div>
                  <Switch>
              <Route exact path='/' render={()=><Home  />}/>
              <Route path='/AddRice' render={()=><AddRice />} />
              <Route path='/AddMeat' render={()=><AddMeat />} />
              <Route path='/AddNoGluten' render={()=><AddNoGluten />} />
              <Route path='/AdminPage' render={()=><AdminPage />} />
              <Route path='/Login' render={()=><Login checkUser={this.checkUser} />}/>
              <Route path='/Register' render={()=><Register />} />
              <Route exact path='/Home' render={()=><Home  />}/>
              <Route exact path='/Wish' render={()=><Wish  />}/>

              <Route path='/AddNewRecipes' render={()=><AddNewRecipes />} />

              <Route path='/UserRice' render={()=><UserRice />} />
              <Route path='/UserMeat' render={()=><UserMeat />} />
              <Route path='/UserNoGluten' render={()=><UserNoGluten />} />
             
              </Switch>
            </div>
            </div>
        )
    }
}

export default withRouter(Main);
