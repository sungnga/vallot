import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Contests from './Contests'

class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path='/' component={Home} />
                    <Route path='/' component={Contests} />
                </BrowserRouter>
            </div>
        )
    }
}

export default Main