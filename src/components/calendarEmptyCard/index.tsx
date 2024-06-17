import React from "react";
import {
  CalendarContainerEmpty,
  DayContainer,
  EventContainerEmpty,
  EventText,
} from "@/src/constants/Styled";

const CalendarEmptyCard = () => {
  return (
    <CalendarContainerEmpty>
      <DayContainer>
        <EventContainerEmpty>
          <EventText>No Maintenance Scheduled</EventText>
        </EventContainerEmpty>
      </DayContainer>
    </CalendarContainerEmpty>
  );
};

export default CalendarEmptyCard;
