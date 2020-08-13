import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button, AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './navbar.css'


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
}))

export const NavBar: React.FC<RouteComponentProps> = (props) => {

  const classes = useStyles();
  const userName = (localStorage.getItem('userName')) ? localStorage.getItem('userName') : 'Guest';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const logOutButton = () => {
    localStorage.clear();
    props.history.push('/login');
  }

  const showLoginRegButton = () => {
    console.log('username = ' + userName);
    if (userName === 'Guest') {
      console.log('I am guest');
      return (
        <Button color="inherit" onClick={() => props.history.push('register')}>Sign Up</Button>
      );
    }
    else {
      return (
        <Button color="inherit" onClick={() => logOutButton()} >Log Out</Button>
      );
    }
  }
  /*
        const showStabelButton = () => {
            if (userName !== 'Guest'){
                return (
                  <MenuItem onClick={() => props.history.push('/stable')}>Stable</MenuItem>
                );
            }
        }*/

  useEffect(() => {
    showLoginRegButton();
  }, []);

  return (
    <div className='navbar-main'>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {/*showStabelButton()*/}
            <MenuItem onClick={() => props.history.push('/home')}>Home</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Welcome {userName}
          </Typography>
          <div className="logOut">
            {showLoginRegButton()}
          </div>

        </Toolbar>
      </AppBar>
    </div>
  )

}

export default withRouter(NavBar)
