"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

// Configure FullCalendar CSS variables in the globals.css
export default function Calendar() {

  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
      events={{
        googleCalendarId: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID,
      }}
      eventColor="var(--color-primary-medium)"
      fixedWeekCount={false}
      height="auto"
      aspectRatio={1}
      eventBackgroundColor="var(--color-primary-medium)"
      eventBorderColor="var(--color-primary-medium)"
    />
  )
}