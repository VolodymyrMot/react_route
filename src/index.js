import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <AppRouter />
        </div>
    </Provider>
   , document.getElementById('root'));
registerServiceWorker();
