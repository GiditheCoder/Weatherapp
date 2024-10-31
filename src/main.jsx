// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './App';
import { WeatherProvider } from './components/WeatherContext';

ReactDOM.render(
  <Provider store={store}>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </Provider>,
  document.getElementById('root')
);

