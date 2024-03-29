import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from "redux"
import { Provider } from "react-redux"
import {BrowserRouter} from 'react-router-dom'
import reducer from "./reducers"
import middleware from './middleware'
const store = createStore(reducer , middleware)

ReactDOM.render(<Provider store= {store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));