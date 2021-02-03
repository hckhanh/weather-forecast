import { AutoCompleteOptions } from "@geist-ui/react/dist/auto-complete/auto-complete";
import { ThemeTypes } from "@geist-ui/react/dist/utils/prop-types";
import { apiURL, baseURL } from "./apis";
import { ForecastLocation } from "./types";

const fetchWithProxy = (url: string): Promise<Response> =>
  fetch(`${process.env.REACT_APP_PROXY_SERVER}/${url}`, {
    headers: { Origin: "null" },
  });

export const fetcher = (url: string): Promise<Response> =>
  fetchWithProxy(apiURL + url).then((r) => r.json());

export const mapLocationToAutoComplete = (
  locations: ForecastLocation[],
): AutoCompleteOptions =>
  locations.map((location) => ({
    label: location.title,
    value: location.title,
  }));

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDayOfWeek = (day: string): string => {
  const date = new Date(day);
  return daysOfWeek[date.getDay()];
};

export const getWeatherImage = (weatherState: string): string =>
  `${baseURL}/static/img/weather/${weatherState}.svg`;

export const getTheme = (): string | null =>
  localStorage.getItem("theme") || "light";

export const saveTheme = (theme: ThemeTypes): void =>
  localStorage.setItem("theme", theme);
