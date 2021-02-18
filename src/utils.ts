import { AutoCompleteOptions } from "@geist-ui/react/dist/auto-complete/auto-complete";
import joinUrl from "url-join";
import { apiURL } from "./apis";
import { ForecastLocation, ThemeType } from "./types";

export const getAPIFullPath = (apiEndpoint: string): string =>
  joinUrl(process.env.REACT_APP_PROXY_SERVER || "", apiURL, apiEndpoint);

export const fetcher = (url: string): Promise<Response> =>
  fetch(getAPIFullPath(url), { headers: { Origin: "null" } }).then((r) =>
    r.json(),
  );

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

export const getTheme = (): ThemeType =>
  localStorage.getItem("theme") || "light";

export const saveTheme = (theme: ThemeType): unknown =>
  theme && localStorage.setItem("theme", theme);
