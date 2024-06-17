import React from "react";
import { SvgXml } from "react-native-svg";
import checkIcon from "@/src/assets/svgs/checkIcon";
import pinIcon from "@/src/assets/svgs/pinIcon";
import {
  CalendarContainer,
  DayContainer,
  DayItem,
  DateNumber,
  DayText,
  EventContainer,
  EventText,
  EventDescription,
  PhoneNumber,
  LocationContainer,
  LocationText,
  StatusText,
} from "@/src/constants/Styled";
import { CalendarContainerProps } from "@/src/constants/interface";
import { renderAddressText } from "@/src/utils/removeComma";

const CalendarContainerCompleted: React.FC<CalendarContainerProps> = ({
  actions = [],
}) => {
  return (
    <CalendarContainer>
      {actions.map((action) => {
        const addressText = renderAddressText(action.vendor);
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
                xml={checkIcon}
                width="23"
                height="23"
                style={{ marginTop: 8 }}
              />
            </DayItem>
            <EventContainer>
              <EventText>{action.name}</EventText>
              <EventDescription>{action.vendor?.vendorName}</EventDescription>
              <PhoneNumber>{action.vendor?.phoneNumber}</PhoneNumber>
              {addressText && (
                <LocationContainer>
                  <SvgXml xml={pinIcon} width="13" height="13" />
                  <LocationText>{addressText}</LocationText>
                </LocationContainer>
              )}
              <StatusText>{action.status}</StatusText>
            </EventContainer>
          </DayContainer>
        );
      })}
    </CalendarContainer>
  );
};

export default CalendarContainerCompleted;
