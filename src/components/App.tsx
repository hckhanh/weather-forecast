import { Text } from "@geist-ui/react";
import { lazy, ReactElement, Suspense, useCallback, useState } from "react";
import styled from "styled-components";
import { withSWRConfig } from "../hocs/withSWRConfig";
import { withTheme } from "../hocs/withTheme";
import { ForecastLocation, ThemeComponent } from "../types";
import ForecastLoading from "./ForecastLoading";
import SearchLocationInput from "./SearchLocationInput";
import SwitchThemeButton from "./SwitchThemeButton";

const DayForecastList = lazy(() => import("./DayForecastList"));

const StyledApp = styled.h1`
  width: 848px;
  margin: 0 auto;
`;

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

function App(props: ThemeComponent): ReactElement {
  const [location, setLocation] = useState<ForecastLocation>();

  const handleSelectLocation = useCallback((value?: ForecastLocation) => {
    setLocation(value);
  }, []);

  return (
    <StyledApp>
      <AppHeader>
        <Text h1>Weather Forecast</Text>
        <SwitchThemeButton onClick={props.onSwitchTheme} />
      </AppHeader>
      <SearchLocationInput onSelect={handleSelectLocation} />
      {location && (
        <Suspense fallback={<ForecastLoading />}>
          <DayForecastList location={location} />
        </Suspense>
      )}
    </StyledApp>
  );
}

export default withSWRConfig(withTheme(App));
