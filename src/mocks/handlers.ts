import { rest } from "msw";
import { getFullApiPath, getWeatherImage } from "../apis";
import hcm from "./hcm.json";
import locations from "./locations.json";
import weatherIcon from "./weather.svg";

export const handlers = [
  rest.get(getFullApiPath("/search"), (req, res, context) => {
    return res(context.json(locations));
  }),
  rest.get(getFullApiPath("/*"), (req, res, context) => {
    return res(context.json(hcm));
  }),
  rest.get(getWeatherImage("*"), async (req, res, context) => {
    const image = await fetch(weatherIcon).then((response) =>
      response.arrayBuffer(),
    );
    return res(
      context.set("Content-Length", image.byteLength.toString()),
      context.set("Content-Type", "image/svg+xml"),
      context.body(image),
    );
  }),
];
