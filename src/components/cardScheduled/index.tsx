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
      {actions.map((action) => {
        const addressText = renderAddressText(action.vendor);
        const windowTimeText =
          action.arrivalStartWindow && action.arrivalEndWindow
            ? ` ${action.arrivalStartWindow} - ${action.arrivalEndWindow}`
            : "";

        return (
          <DayContainer key={action.id}>
            <DayItem>
              <DayText>
                {new Date(action.scheduledDate!)
                  .toLocaleDateString("en-US", { weekday: "short" })
                  .toUpperCase()}
              </DayText>
              <DateNumber>
                {new Date(action.scheduledDate!).getDate()}
              </DateNumber>
              <SvgXml
                xml={clockIcon}
                width="23"
                height="23"
                style={{ marginTop: 8 }}
              />
            </DayItem>
            <EventContainerScheduled>
              <EventText>{action.name}</EventText>
              <EventDescription>{action.vendor?.vendorName}</EventDescription>
              <PhoneNumber>{action.vendor?.phoneNumber}</PhoneNumber>
              {addressText && (
                <LocationContainer>
                  <SvgXml xml={pinScheduledIcon} width="13" height="13" />
                  <LocationText>{addressText}</LocationText>
                </LocationContainer>
              )}
              <StatusText>{`${action.status}${windowTimeText}`}</StatusText>
            </EventContainerScheduled>
          </DayContainer>
        );
      })}
    </CalendarContainer>
  );
};

export default CalendarContainerScheduled;
