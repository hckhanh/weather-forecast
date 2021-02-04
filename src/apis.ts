export const baseURL = process.env.REACT_APP_BASE_URL;

export const apiURL = `${baseURL}/api/location`;

export const searchLocations = (query: string): string =>
  `/search/?query=${query}`;

export const getLocationForecasts = (woeid: number): string => `/${woeid}`;

export const getWeatherImage = (weatherState: string): string =>
  `${baseURL}/static/img/weather/${weatherState}.svg`;
