import React, {useState} from 'react'
import App from './App'
import './index.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {store} from "./store/store.js";

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
