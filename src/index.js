import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore } from 'redux';
import  reducer   from "./reducers";

const store =  createStore(
    reducer,
    window.__REDUX_DEVTOOL_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__()

      )


ReactDOM.render(<App store={store} />, document.getElementById('root'));
