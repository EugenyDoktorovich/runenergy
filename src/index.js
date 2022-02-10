import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';


/*REDUX ЛОГИКА */

const defaultState = {
  ozoneId:'',

  wildberriesId:0,
  aliexpressId:0,
  sbermmId:0,
  yandexmarketId:0,

  active:false,
  
  ozoneMagazinesData : [],
  
}


const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case "ADD_OZONE_ID":
        return {...state, ozoneId: state.ozoneId = action.information}

      case "SET_ACTIVE":
        return {...state,active:true}

      case "SET_DISACTIVE":
          return {...state,active:false}
      
      case "PUSH_OZONE_MAGAZINE":
          return {...state, ozoneMagazinesData:[...state.ozoneMagazinesData, action.data]}

      

    default:
      return state
  }
}


const store = createStore(reducer);
const unsubscribe = store.subscribe(() => console.log(store.getState()));


/*REDUX ЛОГИКА ТУТ ПОКА ЧТО */




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
