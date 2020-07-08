import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HelloWord extends Component {
    render() {
        return (
            <div>
                <h1>Hello World !</h1>
                <p>Selamat Telah selesai membuat basic MERN STACK APP</p>
                <p>OK BOSS</p>
            </div>
        )
    }
}

export default hot()(HelloWord)
