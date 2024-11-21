


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Weather from './Weather';
import { fetchWeather } from './weatherSlice';
import { WeatherProvider } from './WeatherContext';
import '@testing-library/jest-dom';


jest.mock('../assets/search.png', () => 'search_icon');
jest.mock('../assets/clear-sky.png', () => 'clear_icon');
jest.mock('../assets/clouds.png', () => 'cloud_icon');
jest.mock('../assets/drizzle.png', () => 'drizzle_icon');
jest.mock('../assets/rain.png', () => 'rain_icon');
jest.mock('../assets/snow.png', () => 'snow_icon');
jest.mock('../assets/humidity.png', () => 'humidity_icon');
jest.mock('../assets/wind.png', () => 'wind_icon');

// Mock the fetchWeather function
jest.mock('./weatherSlice', () => ({
  fetchWeather: (city) => ({ type: 'weather/fetchWeather', payload: city }), // Returns a plain object
}));

const mockStore = configureStore([]);

const renderWithProviderAndContext = (store) =>
  render(
    <Provider store={store}>
      <WeatherProvider> {/* Wrap in WeatherProvider correctly */}
        <Weather />
      </WeatherProvider>
    </Provider>
  );

describe('Weather Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      weather: { weatherData: null, status: 'idle', error: null },
    });
    store.dispatch = jest.fn();
  });

  it('dispatches fetchWeather when form is submitted', () => {
    renderWithProviderAndContext(store);

    // Simulate user input and form submission
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Lagos' } });
    fireEvent.click(screen.getByRole('button'));

    // Check if fetchWeather is dispatched
    expect(store.dispatch).toHaveBeenCalledWith(fetchWeather('Lagos'));
  });

  it('displays loading message when status is loading', () => {
    store = mockStore({
      weather: { weatherData: null, status: 'loading', error: null },
    });

    renderWithProviderAndContext(store);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('displays error message on fetch failure', () => {
    store = mockStore({
      weather: { weatherData: null, status: 'failed', error: 'Failed to fetch data' },
    });

    renderWithProviderAndContext(store);
    expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument();
  });

  it('renders weather data when available', () => {
    store = mockStore({
      weather: {
        weatherData: {
          temperature: 25,
          location: 'Lagos',
          humidity: 80,
          windSpeed: 10,
          icon: '10d',
        },
        status: 'succeeded',
        error: null,
      },
    });

    renderWithProviderAndContext(store);
    expect(screen.getByText(/25°C/i)).toBeInTheDocument();
    expect(screen.getByText(/Lagos/i)).toBeInTheDocument();
    expect(screen.getByText(/80 %/i)).toBeInTheDocument();
    expect(screen.getByText(/10 km\/h/i)).toBeInTheDocument();
  });
});
