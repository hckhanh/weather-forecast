import { rest } from "msw";
import { apiURL } from "../apis";
import { getAPIFullPath } from "../utils";
import locations from "./locations.json";
import hcm from "./hcm.json";

export const handlers = [
  rest.get(
    getAPIFullPath(
      process.env.REACT_APP_PROXY_SERVER,
      apiURL,
      "/search/?query=City",
    ),
    (req, res, context) => {
      return res(context.json(locations));
    },
  ),
  rest.get(
    getAPIFullPath(process.env.REACT_APP_PROXY_SERVER, apiURL, "/1252431"),
    (req, res, context) => {
      return res(context.json(hcm));
    },
  ),
];
