import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/redux-store'
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';


  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  let rerenderEntireTree = (state) => {
root.render(

    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
    ); 
};

rerenderEntireTree();
store.subscribe(()=>{
  rerenderEntireTree();
  }
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 