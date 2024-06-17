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
import Loader from "@/src/components/loader";
import { CALENDAR_HEADER } from "@/src/constants/constants";
import { getMonthName } from "@/src/constants/months";
import useSortedCalendarData from "@/src/hooks/useSortedCalendarData";

const CalendarView: React.FC = () => {
  const { calendarData, loading } = useSortedCalendarData();

  return (
    <Container>
      <Header>
        <HeaderText>{CALENDAR_HEADER}</HeaderText>
      </Header>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
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
      )}
    </Container>
  );
};

const renderActions = (cal) => {
  const actions = {
    Completed: cal.actions.filter((action) => action.status === "Completed"),
    Scheduled: cal.actions.filter((action) => action.status === "Scheduled"),
    Unscheduled: cal.actions.filter((action) => action.status === "Unscheduled"),
  };

  return (
    <>
      {actions.Completed.length > 0 && (
        <CalendarContainerCompleted actions={actions.Completed} />
      )}
      {actions.Scheduled.length > 0 && (
        <CalendarContainerScheduled actions={actions.Scheduled} />
      )}
      {actions.Unscheduled.length > 0 && (
        <CalendarContainerUnscheduled actions={actions.Unscheduled} />
      )}
      {actions.Completed.length === 0 &&
        actions.Scheduled.length === 0 &&
        actions.Unscheduled.length === 0 && <CalendarEmptyCard />}
    </>
  );
};

export default CalendarView;
