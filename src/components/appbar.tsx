import React, { useEffect,useState } from 'react'
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

export const AppBarComp: React.FC<RouteComponentProps> = (props) => {

    const [view, setView] = useState<'LOGIN' | 'SIGNUP' | 'HOME'>('LOGIN')

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>
                    <Button color="inherit" onClick={() => setView('LOGIN')}>Login</Button>
                    <Button color="inherit" onClick={() => setView('SIGNUP')}>Signup</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(AppBarComp)
