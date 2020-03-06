import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function darkMode(clas0: string, clas1: string): string {
    let now = new Date();
    if (now.getHours() >= 17 || now.getHours() < 7) {
        return clas0;
    }
    return clas1;
}

function App() {
    return (
        <div className={darkMode('night-time', 'day-time')}>
            test
          <Button />
        </div>
    );
}

function Button() {
    return (<button
        type="button"
        onClick={(e): void => {
            e.preventDefault();
            window.location.href = '/posts/';
        }}
    > Click here</button>)
}

export default App;
