import React from 'react'
import styles from './App.module.css'
import {BrowserRouter, Route} from 'react-router-dom'


export default function App() {

    return (
        <div className={styles._App} >
            <BrowserRouter>
                <Route path="/hello">
                    <h1>Hello1</h1>
                </Route>
                <Route path="/hi">
                    <h1>Hi</h1>
                </Route>
            </BrowserRouter>
        </div>
    )
}
