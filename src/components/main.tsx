import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import NavBar from './navbar'
import { Register } from './register'
import { Login } from './login'
import { Home } from './home'
import AppBarComp from './appbar'



export const MainComponent: React.FC = () => {
   
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
                            
                        </Route>
                        <Route path="/login">
                        
                            {/*<Login setView={setView} />*/}
                        </Route>
                        <Route path="/register">
                        
                            {/*<Register setView={setView} />*/}
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    )
}
