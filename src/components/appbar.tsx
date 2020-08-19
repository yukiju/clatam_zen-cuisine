import React, { useEffect,useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button, AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './navbar.css'
import { Register } from './register'
import { Login } from './login'
import { Home } from './home'

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

export const AppBarComp: React.FC<RouteComponentProps> = (props) => {

    const [view, setView] = useState<'LOGIN' | 'SIGNUP' | 'HOME'>('LOGIN')

    const viewSwitch = () => {
        switch(view) {
            case 'LOGIN': return <Login setView={setView} />
            case 'SIGNUP': return <Register setView={setView}/>
            case 'HOME': return <Home />
        }
    }

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} onClick={() => setView('HOME')} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Yuka
          </Typography>
                    <Button color="inherit" onClick={() => setView('LOGIN')}>Login</Button>
                    <Button color="inherit" onClick={() => setView('SIGNUP')}>Signup</Button>
                </Toolbar>
            </AppBar>
            {viewSwitch()}
        </div>
    )
}

export default withRouter(AppBarComp)
