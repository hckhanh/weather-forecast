import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { fetcher } from "./utils";

const swrOptions = {
  fetcher,
};

ReactDOM.render(
  <SWRConfig value={swrOptions}>
    <StrictMode>
      <App />
    </StrictMode>
  </SWRConfig>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
