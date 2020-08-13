import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './navbar'



export const MainComponent: React.FC = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
            <NavBar>
                <main>

                </main>
            </NavBar>
            </BrowserRouter>
        </div>

    )
}