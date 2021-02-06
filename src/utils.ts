import { AutoCompleteOptions } from "@geist-ui/react/dist/auto-complete/auto-complete";
import { ThemeTypes } from "@geist-ui/react/dist/utils/prop-types";
import joinUrl from "url-join";
import { apiURL } from "./apis";
import { ForecastLocation } from "./types";

export const getAPIFullPath = (apiURL: string, apiEndpoint: string): string =>
  joinUrl(process.env.REACT_APP_PROXY_SERVER || "", apiURL, apiEndpoint);

export const fetcher = (url: string): Promise<Response> =>
  fetch(getAPIFullPath(apiURL, url), {
    headers: { Origin: "null" },
  }).then((r) => r.json());

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

export const getTheme = (): string | null =>
  localStorage.getItem("theme") || "light";

export const saveTheme = (theme: ThemeTypes): void =>
  localStorage.setItem("theme", theme);
