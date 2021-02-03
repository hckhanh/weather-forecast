import { Text } from "@geist-ui/react";
import { ReactElement, Suspense } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { getLocationForecasts } from "../apis";
import { ForecastDays, ForecastLocation } from "../types";
import DayForecastItem from "./DayForecastItem";
import ForecastLoading from "./ForecastLoading";

const StyledDateForecastList = styled.div``;

const DayForecastTitle = styled(Text)`
  margin: 20px 0 0;
`;

const StyledDateForecastItem = styled(DayForecastItem)`
  margin: 10px !important;
  flex-grow: 1;
`;

const DayForecastContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

type DayForecastItems = {
  location: ForecastLocation;
};

function DayForecastItems(props: DayForecastItems): ReactElement {
  const { data } = useSWR<ForecastDays>(
    getLocationForecasts(props.location.woeid),
    { suspense: true },
  );
  return (
    <DayForecastContent>
      {data!.consolidated_weather.map((day) => (
        <StyledDateForecastItem key={day.id} day={day} />
      ))}
    </DayForecastContent>
  );
}

type DayForecastList = {
  location: ForecastLocation;
};

function DayForecastList(props: DayForecastList): ReactElement {
  return (
    <StyledDateForecastList>
      <DayForecastTitle h2>{props.location.title}</DayForecastTitle>
      <Suspense fallback={<ForecastLoading />}>
        <DayForecastItems location={props.location} />
      </Suspense>
    </StyledDateForecastList>
  );
}

export default DayForecastList;
