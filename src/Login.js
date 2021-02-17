import React from 'react'
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export function SignIn() {
    const classes = useStyles();}
  
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            password:'',
        }
    }

    change=(e)=>{
        let id=e.target.id
        let value=e.target.value
        switch(id){
            case '0': this.setState({userName:value});break;
            case '1': this.setState({password:value});break;
            default:break;
        }
    }

    registration=()=>{
        this.props.history.push({
            pathname:'/Register'
        })
    }

    render(){
        const inputs=['User Name','Password']
        return(
            
            <div>

                <Container component="main" maxWidth="xs">
                <CssBaseline />
      <div className={useStyles.paper}>
        <Avatar className={useStyles.avatar}> 
          <LockOutlinedIcon />
        </Avatar></div>

                <Typography component="h1" variant="h5">Sign in</Typography>
        <form className={useStyles.form} noValidate>

                    {inputs.map((i,index)=>
                            <label key={index}>{i}: <TextField             variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                 id={index} onChange={this.change} value={index===0?this.state.userName:this.state.password} /></label>
                    )}
        </form>

                <Button type="submit" fullWidth variant="contained" color="primary" onClick={()=>this.props.checkUser(this.state)}> Sign In </Button><hr></hr>
                <Button type="submit" fullWidth variant="contained" color="primary" onClick={this.registration}> Register </Button>

          </Container>

            </div>

        )
    }
}
export default withRouter(Login);
