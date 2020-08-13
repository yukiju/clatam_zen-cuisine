import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './navbar'
import { Register } from './register'
import { Login } from './login'



export const MainComponent: React.FC = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <NavBar />
                <main>
                    <Switch>
                        <Route exact path="/">
                            {/*// login component*/}
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    )
}
