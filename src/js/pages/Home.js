import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../actions/helloworld';

class Home extends Component {
    render() {
        return(
            <div>
                <h1>Webpack, React and Electron Minimal Setup</h1>
                <h2>{new HelloWorld().sayHello()}</h2>
                <p>
                    We are using Node.js <strong>{process.versions.node}</strong>
                    , Chromium <strong>{process.versions.chrome}</strong>
                    , Electron <strong>{process.versions.electron}</strong>
                    &nbsp;and React <strong>{React.version}</strong>
                </p>
                <p>We are shipping a Tic-Tac-Toe game made with React as a usage demo. You can play it here: <Link to="/tictactoe">Play Tic-Tac-Toe</Link></p>
            </div>
        );
    }
}

export default Home;