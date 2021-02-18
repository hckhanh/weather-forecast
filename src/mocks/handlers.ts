import { rest } from "msw";
import { getWeatherImage } from "../apis";
import { getAPIFullPath } from "../utils";
import hcm from "./hcm.json";
import locations from "./locations.json";
import weatherIcon from "./weather.svg";

export const handlers = [
  rest.get(getAPIFullPath("/search"), (req, res, context) => {
    return res(context.json(locations));
  }),
  rest.get(getAPIFullPath("/*"), (req, res, context) => {
    return res(context.json(hcm));
  }),
  rest.get(getWeatherImage("*"), async (req, res, context) => {
    const image = await fetch(weatherIcon).then((res) => res.arrayBuffer());
    return res(
      context.set("Content-Length", image.byteLength.toString()),
      context.set("Content-Type", "image/svg+xml"),
      context.body(image),
    );
  }),
];
