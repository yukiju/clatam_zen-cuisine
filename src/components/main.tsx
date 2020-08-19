import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './navbar'
import { Register } from './register'
import { Login } from './login'
import { register } from '../serviceWorker'
import { Home } from './home'
import AppBarComp from './appbar'



export const MainComponent: React.FC = () => {
    const [view, setView] = useState<'LOGIN' | 'SIGNUP' | 'HOME'>('LOGIN')

    const viewSwitch = () => {
        switch(view) {
            case 'LOGIN': return <Login setView={setView} />
            case 'SIGNUP': return <Register setView={setView}/>
            case 'HOME': return <Home />
        }
    }

    return (
        <div className="main-container">
            <BrowserRouter>
                {/*<NavBar />*/}
                <AppBarComp />
                <main>
                    <Switch>
                        <Route exact path="/">
                            {/*// login component*/}
                        </Route>
                        <Route path="/home">
                            { viewSwitch() }
                        </Route>
                        <Route path="/login">
                            <Login setView={setView} />
                        </Route>
                        <Route path="/register">
                            <Register setView={setView} />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    )
}
