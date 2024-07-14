import { useState, useEffect, useRef } from "react";
import axios from "axios";

import {
  add,
  sub,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  parseISO,
  isSameDay,
  isWithinInterval,
} from "date-fns";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_CALID = import.meta.env.VITE_CALID;

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today] = useState(new Date());
  const [tourNext, setTourNext] = useState([]);
  console.log(tourNext);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    const fetchDates = async () => {
      const startDate = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${VITE_CALID}/events?key=${VITE_API_KEY}&timeMin=${startDate}`;

      try {
        const response = await axios.get(url);
        const events = response.data.items;
        console.log("API :", events);
        setTourNext(
          events.map((event) => ({
            title: event.summary,
            place: event.location,
            start: event.start.dateTime,
            end: event.end.dateTime,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    if (!hasFetchedData.current) {
      fetchDates();
      hasFetchedData.current = true;
    }
  }, [VITE_CALID]);

  const buttonSetToday = () => setCurrentDate(new Date());

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = eachDayOfInterval({ start: startDate, end: endDate });
  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevYear = () => {
    if (format(today, "yy") < format(currentDate, "yy")) {
      setCurrentDate(sub(currentDate, { years: 1 }));
    }
  };

  const nextYear = () => setCurrentDate(add(currentDate, { years: 1 }));
  const prevMonth = () => {
    if (!isWithinInterval(today, { start: startDate, end: endDate })) {
      setCurrentDate(sub(currentDate, { months: 1 }));
    }
  };
  const nextMonth = () => setCurrentDate(add(currentDate, { months: 1 }));

  return (
    <div className="flex flex-col items-center min-h-[50vh]">
      <button
        className="text-main-text-light bg-accent-green px-4 py-1 rounded-full m-4 cursor-pointer"
        onClick={buttonSetToday}
      >
        Today
      </button>

      {/* grid of calendar */}
      <div className="grid grid-cols-7 gap-px ">
        {/* navigation arrows for months and years  */}
        <div onClick={prevYear} className="text-center py-2 cursor-pointer">
          {"<<"}
        </div>
        <div onClick={prevMonth} className="text-center py-2 cursor-pointer">
          {"<"}
        </div>
        <div className="col-span-3 text-center py-2">
          {format(currentDate, "LLLL yyyy")}
        </div>
        <div onClick={nextMonth} className="text-center py-2 cursor-pointer">
          {">"}
        </div>
        <div onClick={nextYear} className="text-center py-2 cursor-pointer">
          {">>"}
        </div>

        {/* render weekdays of current month */}
        {weeks.map((week) => (
          <div key={week} className="text-center py-2 text-base min-w-[3rem]">
            {week}
          </div>
        ))}

        {/* days of previous months - left empty */}
        {Array.from({ length: prefixDays }).map((_, index) => (
          <div
            key={`prefix-${index}`}
            className="text-center py-2 text-base min-w-[3rem]"
          ></div>
        ))}

        {/* days of current months - filled from useStates */}
        {numDays.map((day) => (
          <div
            key={day.toString()}
            className={`text-center py-2 text-base min-w-[3rem] cursor-pointer hover:bg-main-text-dark hover:text-main-text-light ${
              isToday(day)
                ? //   mark actual date if it's today
                  "bg-accent-green text-main-text-light rounded-sm"
                : ""
            }`}
            data-date={format(day, "dd-MM-y")}
          >
            {format(day, "d")}
            {tourNext
              // filter out events that start from today into future / forget past events
              .filter((upcoming) => isSameDay(day, parseISO(upcoming.start)))
              .map((upcoming) => (
                <div
                  key={upcoming.title}
                  onClick={() =>
                    alert(
                      `${upcoming.title}\nPlace: ${
                        upcoming.place
                      }\nFrom: ${format(
                        upcoming.start,
                        "dd-MM-y"
                      )}\nTill: ${format(upcoming.end, "dd-MM-y")}`
                    )
                  }
                  className="bg-banner-yellow w-10 h-6 rounded mx-auto text-main-text-dark"
                >
                  <p>new</p>
                </div>
              ))}
          </div>
        ))}
        {/* days of next months - left empty */}
        {Array.from({ length: suffixDays }).map((_, index) => (
          <div
            key={`suffix-${index}`}
            className="text-center py-2 text-base min-w-[3rem]"
          ></div>
        ))}
      </div>

      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FBerlin&bgcolor=%2333B679&showTz=0&showTabs=0&src=YmV0dHlzbWl0aDQ1MTIzQGdtYWlsLmNvbQ&color=%2333B679"
        // style="border:solid 1px #777"
        width="800"
        height="600"
        frameborder="0"
        // scrolling="no"
      ></iframe>
    </div>
  );
}

export default Calendar;
