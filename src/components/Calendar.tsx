"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { useEffect, useState } from "react";

// Configure FullCalendar CSS variables in the globals.css
export default function Calendar() {
  const PUBLIC_GOOGLE_CALENDAR_API_KEY = "AIzaSyDDp3PGxcPokT5ZUli1P_VPgE49JP396YM"
  const PUBLIC_GOOGLE_CALENDAR_ID = "660d0f6a798426a94a177753ec35b4da7ea9e82c69fd4b81a95ca9183e05405a@group.calendar.google.com";

  const [isListView, setIsListView] = useState(false);
  const [initialView, setInitialView] = useState<string | null>(null);

  useEffect(() => {
      const mobile = typeof window !== "undefined" && window.innerWidth < 640;
      setInitialView(mobile ? "listMonth" : "dayGridMonth");
      setIsListView(mobile);
  }, []);

  if (!initialView) return null;

  return (
    <div className={`text-sm sm:text-base w-full ${isListView ? "is-list-view" : ""}`}>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey={PUBLIC_GOOGLE_CALENDAR_API_KEY}
        events={{
          googleCalendarId: PUBLIC_GOOGLE_CALENDAR_ID,
        }}

        eventColor="var(--color-primary-medium)"
        fixedWeekCount={false}
        height="auto"
        eventBackgroundColor="var(--color-primary-medium)"
        eventBorderColor="var(--color-primary-medium)"

        initialView={initialView}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listMonth",
        }}
        datesSet={(info) => setIsListView(info.view.type === "listMonth")}
      />
    </div>
  );
}