import React from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Header,
  HeaderText,
  MonthText,
} from "@/src/constants/Styled";
import CalendarContainerCompleted from "@/src/components/cardCompleted";
import CalendarContainerScheduled from "@/src/components/cardScheduled";
import CalendarContainerUnscheduled from "@/src/components/cardUnscheduled";
import CalendarEmptyCard from "@/src/components/calendarEmptyCard";
import { CALENDAR_HEADER } from "@/src/constants/constants";
import { getMonthName } from "@/src/constants/months";
import useSortedCalendarData from "@/src/hooks/useFilteredActions";

const CalendarView: React.FC = () => {
  const calendarData = useSortedCalendarData();

  return (
    <Container>
      <Header>
        <HeaderText>{CALENDAR_HEADER}</HeaderText>
      </Header>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        {calendarData && calendarData.length > 0 ? (
          calendarData.map((cal) => (
            <React.Fragment key={`${cal.month}-${cal.year}`}>
              <MonthText>
                {getMonthName(cal.month)} {cal.year}
              </MonthText>
              {renderActions(cal)}
            </React.Fragment>
          ))
        ) : (
          <CalendarEmptyCard />
        )}
      </ScrollView>
    </Container>
  );

  function renderActions(cal) {
    const completedActions = cal.actions.filter(
      (action) => action.status === "Completed"
    );
    const scheduledActions = cal.actions.filter(
      (action) => action.status === "Scheduled"
    );
    const unscheduledActions = cal.actions.filter(
      (action) => action.status === "Unscheduled"
    );

    if (
      completedActions.length > 0 ||
      scheduledActions.length > 0 ||
      unscheduledActions.length > 0
    ) {
      return (
        <>
          {completedActions.length > 0 && (
            <CalendarContainerCompleted actions={completedActions} />
          )}
          {scheduledActions.length > 0 && (
            <CalendarContainerScheduled actions={scheduledActions} />
          )}
          {unscheduledActions.length > 0 && (
            <CalendarContainerUnscheduled actions={unscheduledActions} />
          )}
        </>
      );
    }
    return <CalendarEmptyCard />;
  }
};

export default CalendarView;
