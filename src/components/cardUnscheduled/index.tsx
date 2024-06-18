import React from "react";
import { SvgXml } from "react-native-svg";
import pinIcon from "@/src/assets/svgs/pinIcon";
import {
  CalendarContainer,
  DayContainer,
  DayItem,
  DayText,
  EventContainerUnscheduled,
  EventText,
  LocationContainer,
  LocationText,
  StatusText,
} from "@/src/constants/Styled";

import { renderAddressText } from "@/src/utils/removeComma";
import { CalendarContainerProps } from "@/src/constants/interface";

const CalendarContainerUnscheduled: React.FC<CalendarContainerProps> = ({
  actions,
}) => {
  return (
    <CalendarContainer>
      {actions.map((action) => {
        const addressText = renderAddressText(action.vendor);
        const statusText =
          action.status === "Unscheduled"
            ? "Schedule date & time TBD"
            : action.status;
        return (
          <DayContainer key={action.id}>
            <DayItem>
              <DayText>TBD</DayText>
            </DayItem>
            <EventContainerUnscheduled>
              <EventText>{action.name}</EventText>
              {addressText && (
                <LocationContainer>
                  <SvgXml xml={pinIcon} width="13" height="13" />
                  <LocationText>{addressText}</LocationText>
                </LocationContainer>
              )}
              <StatusText>{statusText} </StatusText>
            </EventContainerUnscheduled>
          </DayContainer>
        );
      })}
    </CalendarContainer>
  );
};

export default CalendarContainerUnscheduled;
