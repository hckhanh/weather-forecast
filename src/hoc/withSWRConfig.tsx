import { FC } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../utils";

const swrOptions = {
  fetcher,
};

export function withSWRConfig(Component: FC): FC {
  return function WithSWRConfigComponent() {
    return (
      <SWRConfig value={swrOptions}>
        <Component />
      </SWRConfig>
    );
  };
}
