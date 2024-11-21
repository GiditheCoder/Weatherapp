
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './components/store';
import { WeatherProvider } from './components/WeatherContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </WeatherProvider>
  </StrictMode>
);
