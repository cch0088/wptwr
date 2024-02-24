import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import modalReducer from './features/ModalSlice';
import contentReducer from './features/ContentSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    content: contentReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
