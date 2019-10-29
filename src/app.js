import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* styles */
import './app.scss';
/* store */
import store from './app-store';
/* screens */
import Facts from './screens/facts/facts';
import SingleFact from './screens/single-fact/single-fact';

const App = () => {
    return (
        <Provider store={store}>
            <div className='container'>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Facts} />
                        <Route path="/details/:factId" component={SingleFact} />
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
};

export default App;
