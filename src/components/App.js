import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './Login';
import GoodsList from './GoodsList';

class App extends React.Component {
    render() {
        return (
            <div className="App ui container">
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Login} />
                        <Route path="/goods" exact component={GoodsList} />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;