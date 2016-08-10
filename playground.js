import React from 'react';
import ReactDOM from 'react-dom';

import App from './src/components/App.js';


var css = document.createElement('link');
css.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,700,900');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');

document.head.appendChild(css);

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<App />, container);
