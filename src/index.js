import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from "./App";
import "./style.css";
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

const getInitValue = async () => {
  
  const init = await axios.get('http://3.34.193.46:5000/product/foodinfo')
  ReactDOM.render(
    <div>
      <BrowserRouter>
        <App initData={init.data}></App>
      </BrowserRouter>
    </div>,
    document.getElementById('root'),
  );
}
getInitValue();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
