import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux';
import store from './Redux/Store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


