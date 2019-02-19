import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import RLinks from './links';
//import Clock from './clock';

ReactDOM.render(<RLinks/>,document.getElementById('root'));
//ReactDOM.render(<Clock /> ,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
    module.hot.accept();
    }
    