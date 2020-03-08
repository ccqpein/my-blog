import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

let t = document.createElement('div');
t.setAttribute("id", "root");
let b = document.getElementsByTagName("body");
b[0].insertAdjacentElement("afterbegin", t);

ReactDOM.render(<App />, document.getElementById('root'));
