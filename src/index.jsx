import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/App';

const container = document.getElementById('app')
render( <App />, container);
