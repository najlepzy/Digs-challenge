import styled, { css } from "styled-components/native";
import { Colors } from "@/src/constants/Colors";
import { Platform } from "react-native";

const baseTextStyles = css`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const baseContainerStyles = css`
  border-radius: 4px;
  padding: 10px;
  padding-left: 20px;
  flex: 1;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LargeActivityIndicator = styled.ActivityIndicator.attrs(() => ({
  size: "large",
  color: Colors.green.primary,
}))`
  transform: scale(1.2);
`;

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const Header = styled.View`
  height: 84px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  margin-top: 8%;
`;

export const CalendarContainer = styled.View`
  margin-top: 1px;
`;

export const CalendarContainerEmpty = styled.View`
  width: 79%;
  margin-left: 20%;
`;

export const MonthText = styled.Text`
  font-size: 18px;
  padding: 20px;
`;

export const DayContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
`;

export const DayItem = styled.View`
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  margin-top: ${Platform.OS === "ios" ? "-3px" : "-3px"};
  margin-right: 12px;
  width: 60px;
`;

export const DateNumber = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const DayText = styled.Text`
  font-size: 11px;
  color: #505050;
  font-weight: 600;
`;

const createEventContainer = (bgColor) => styled.View`
  ${baseContainerStyles};
  background-color: ${bgColor};
`;

export const EventContainer = createEventContainer(Colors.green.primary);
export const EventContainerScheduled = createEventContainer(
  Colors.green.secondary
);
export const EventContainerUnscheduled = createEventContainer(
  Colors.blue.primary
);
export const EventContainerEmpty = createEventContainer(Colors.gray.primary);

export const EventText = styled.Text`
  ${baseTextStyles};
`;

export const EventDescription = styled.Text`
  color: white;
`;

export const PhoneNumber = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: white;
  margin-left: 2px;
`;

export const StatusText = styled.Text`
  color: white;
`;
