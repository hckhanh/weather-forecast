import { Card, Image, Text, Tooltip } from "@geist-ui/react";
import { memo, ReactElement } from "react";
import styled from "styled-components";
import { getWeatherImage } from "../apis";
import { ForecastDay } from "../types";
import { getDayOfWeek } from "../utils";

const DayForecastCardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DayForecastContent = styled.div`
  line-height: 20px;
`;

const DayForecastDay = styled(Text)`
  margin-bottom: 0;
`;

const DayForecastImage = styled(Image)`
  object-fit: cover;
  margin: unset !important;
`;

type DayForecastItemProps = {
  className?: string;
  day: ForecastDay;
};

function DayForecastItem(props: DayForecastItemProps): ReactElement {
  return (
    <Card width="250px" className={props.className}>
      <DayForecastCardContent>
        <DayForecastContent>
          <DayForecastDay h4>
            <Tooltip text={props.day.applicable_date}>
              {getDayOfWeek(props.day.applicable_date)}
            </Tooltip>
          </DayForecastDay>
          <Text type="secondary" small>
            Min: {Math.round(props.day.min_temp)}°C
          </Text>
          <Text type="secondary" small>
            &nbsp;&bull;&nbsp;
          </Text>
          <Text type="secondary" small>
            Max: {Math.round(props.day.max_temp)}°C
          </Text>
        </DayForecastContent>
        <Tooltip text={props.day.weather_state_name} placement="bottom">
          <DayForecastImage
            width={48}
            height={48}
            alt={props.day.weather_state_name}
            src={getWeatherImage(props.day.weather_state_abbr)}
          />
        </Tooltip>
      </DayForecastCardContent>
    </Card>
  );
}

export default memo(DayForecastItem);
