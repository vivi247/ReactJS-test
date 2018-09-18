import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
/*const getCurrentDate = () => {
    const date = new Date();
    return date.toString;
}; */

//const greeting = <h1> Hello New World with Date:{getCurrentDate()} </h1>;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
