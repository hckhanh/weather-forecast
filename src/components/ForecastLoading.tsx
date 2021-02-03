import { Loading, Text } from "@geist-ui/react";
import { ReactElement } from "react";

function ForecastLoading(): ReactElement {
  return (
    <Text small>
      <Loading>Loading</Loading>
    </Text>
  );
}

export default ForecastLoading;
