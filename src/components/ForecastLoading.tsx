import { Loading, Text } from "@geist-ui/react";
import { ReactElement } from "react";
import styled from "styled-components";

const LoadingText = styled(Text)`
  font-weight: 400;
`;

function ForecastLoading(): ReactElement {
  return (
    <LoadingText size={16} span>
      <Loading>Loading</Loading>
    </LoadingText>
  );
}

export default ForecastLoading;
