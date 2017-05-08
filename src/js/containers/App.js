import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';
import Home from '../pages/Home';

class App extends Component {
    render() {
        return(
            <AppContainer>
                <Home/>
            </AppContainer>
        );
    }
}

export default App;