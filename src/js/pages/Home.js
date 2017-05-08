import React, { Component } from 'react';
import HelloWorld from '../actions/HelloWorld';

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
            </div>
        );
    }
}

export default Home;