import React from "react";
import { SvgXml } from "react-native-svg";
import clockIcon from "@/src/assets/svgs/clockIcon";
import pinScheduledIcon from "@/src/assets/svgs/pinScheduledIcon";
import {
  CalendarContainer,
  DayContainer,
  DayItem,
  DateNumber,
  DayText,
  EventContainerScheduled,
  EventText,
  EventDescription,
  PhoneNumber,
  LocationContainer,
  LocationText,
  StatusText,
} from "@/src/constants/Styled";
import { CalendarContainerProps } from "@/src/constants/interface";
import { renderAddressText } from "@/src/utils/removeComma";

const CalendarContainerScheduled: React.FC<CalendarContainerProps> = ({
  actions = [],
}) => {
  return (
    <CalendarContainer>
      {actions.map((action) => (
        <DayContainer key={action.id}>
          <DayItem>
            <DayText>
              {new Date(action.scheduledDate!)
                .toLocaleDateString("en-US", { weekday: "short" })
                .toUpperCase()}
            </DayText>
            <DateNumber>{new Date(action.scheduledDate!).getDate()}</DateNumber>
            <SvgXml xml={clockIcon} width="23" height="23" style={{ marginTop: 8 }} />

          </DayItem>
          <EventContainerScheduled>
            <EventText>{action.name}</EventText>
            <EventDescription>{action.vendor?.vendorName}</EventDescription>
            <PhoneNumber>{action.vendor?.phoneNumber}</PhoneNumber>
            <LocationContainer>
              <SvgXml xml={pinScheduledIcon} width="13" height="13" />
              <LocationText>{renderAddressText(action.vendor)}</LocationText>
            </LocationContainer>
            <StatusText>{action.status}</StatusText>
          </EventContainerScheduled>
        </DayContainer>
      ))}
    </CalendarContainer>
  );
};

export default CalendarContainerScheduled;
