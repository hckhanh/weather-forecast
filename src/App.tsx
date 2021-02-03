import { Text } from "@geist-ui/react";
import { lazy, ReactElement, Suspense, useCallback, useState } from "react";
import styled from "styled-components";
import ForecastLoading from "./ForecastLoading";
import SearchLocationInput from "./SearchLocationInput";
import { ForecastLocation } from "./types";

const DayForecastList = lazy(() => import("./DayForecastList"));

const StyledApp = styled.h1`
  width: 848px;
  margin: 0 auto;
`;

const AppHeader = styled(Text)`
  padding-top: 20px;
`;

function App(): ReactElement {
  const [location, setLocation] = useState<ForecastLocation>();

  const handleSelectLocation = useCallback((value?: ForecastLocation) => {
    setLocation(value);
  }, []);

  return (
    <StyledApp>
      <AppHeader h1>Weather Forecast</AppHeader>
      <SearchLocationInput onSelect={handleSelectLocation} />
      {location && (
        <Suspense fallback={<ForecastLoading />}>
          <DayForecastList location={location} />
        </Suspense>
      )}
    </StyledApp>
  );
}

export default App;
