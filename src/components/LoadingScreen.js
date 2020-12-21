import React from 'react'
import logo from './load.svg';

export default function LoadingScreen() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}