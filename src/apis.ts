import joinUrl from "url-join";

export const baseURL = process.env.REACT_APP_BASE_URL || "";
export const apiURL = joinUrl(baseURL, "/api/location");

export const searchLocations = (query: string): string =>
  `/search/?query=${query}`;

export const getLocationForecasts = (woeid: number): string => `/${woeid}`;

export const getWeatherImage = (weatherState: string): string =>
  joinUrl(baseURL, "/static/img/weather", `${weatherState}.svg`);
