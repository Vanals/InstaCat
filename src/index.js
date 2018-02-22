import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Photo from './components/Photo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
