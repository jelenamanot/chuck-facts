import React from 'react';
import { Provider } from 'react-redux';
import './app.scss';
/* store */
import store from './app-store';
/* screens */
import Facts from './screens/facts/facts';

const App = () => {
    return (
        <Provider store={store}>
            <Facts />
        </Provider>
    );
};

export default App;
