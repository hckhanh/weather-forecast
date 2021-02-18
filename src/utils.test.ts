import locations from "./mocks/locations.json";
import { ForecastLocation } from "./types";
import {
  getAPIFullPath,
  getDayOfWeek,
  getTheme,
  mapLocationToAutoComplete,
  saveTheme,
} from "./utils";

describe("utils", () => {
  describe("getAPIFullPath", () => {
    test("gets full path of api url with proxyServer, apiURL, apiEndpoint", () => {
      const api = getAPIFullPath("/location?q=City");
      expect(api).toBe(
        "https://www.metaweather.com/api/location/location?q=City",
      );
    });
  });

  describe("mapLocationToAutoComplete", () => {
    test("gets AutoComplete object", () => {
      const options = mapLocationToAutoComplete(
        locations as ForecastLocation[],
      );
      expect(options).toStrictEqual([
        {
          label: "Ho Chi Minh City",
          value: "Ho Chi Minh City",
        },
      ]);
    });
  });

  describe("getDayOfWeek", () => {
    test("gets monday with day = 2021-02-08", () => {
      const day = getDayOfWeek("2021-02-08");
      expect(day).toEqual("Monday");
    });

    test("gets undefined value with invalid day", () => {
      const day = getDayOfWeek("2000-22-98");
      expect(day).toBeUndefined();
    });
  });

  describe("getTheme", () => {
    test("returns default theme is light", () => {
      localStorage.removeItem("theme");
      const theme = getTheme();
      expect(theme).toEqual("light");
    });
  });

  describe("saveTheme", () => {
    test("saves dark theme", () => {
      saveTheme("dark");
      expect(localStorage.getItem("theme")).toEqual("dark");
    });
  });
});
