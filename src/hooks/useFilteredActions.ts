import { useState, useEffect } from "react";
import { getChallenge } from "@/src/services/calendar.service";
import { Calendar } from "@/src/models/ChallengeData";

const useSortedCalendarData = () => {
  const [calendarData, setCalendarData] = useState<Calendar[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChallenge(); 
        const sortedCalendar = data.calendar.map((month) => ({
          ...month,
          actions: sortActionsByDate(month.actions),
        }));
        setCalendarData(sortedCalendar);
      } catch (error) {
        console.error("Error fetching calendar data:", error);
      }
    };

    fetchData();
  }, []);

  const sortActionsByDate = (actions) => {
    return actions.sort((a, b) => {
      const dateA = new Date(a.scheduledDate).getTime();
      const dateB = new Date(b.scheduledDate).getTime();
      if (isNaN(dateA) || isNaN(dateB)) {
        return 0;
      }
      return dateA - dateB;
    });
  };

  return calendarData;
};

export default useSortedCalendarData;
