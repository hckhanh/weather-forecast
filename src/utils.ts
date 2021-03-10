import { AutoCompleteOptions } from "@geist-ui/react/dist/auto-complete/auto-complete";
import { getFullApiPath } from "./apis";
import { ForecastLocation, ThemeType } from "./types";

export const fetcher = (url: string): Promise<Response> =>
  fetch(getFullApiPath(url), { headers: { Origin: "null" } }).then((r) =>
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
