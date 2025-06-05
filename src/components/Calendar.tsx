"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

// Configure FullCalendar CSS variables in the globals.css
export default function Calendar() {
  const PUBLIC_GOOGLE_CALENDAR_API_KEY = "AIzaSyDDp3PGxcPokT5ZUli1P_VPgE49JP396YM"
  const PUBLIC_GOOGLE_CALENDAR_ID = "660d0f6a798426a94a177753ec35b4da7ea9e82c69fd4b81a95ca9183e05405a@group.calendar.google.com";

  return (
    <div className="text-sm sm:text-base">
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        googleCalendarApiKey={PUBLIC_GOOGLE_CALENDAR_API_KEY}
        events={{
          googleCalendarId: PUBLIC_GOOGLE_CALENDAR_ID,
        }}
        eventColor="var(--color-primary-medium)"
        fixedWeekCount={false}
        height="auto"
        aspectRatio={1.2} // Adjust aspect ratio for better fit on small screens
        eventBackgroundColor="var(--color-primary-medium)"
        eventBorderColor="var(--color-primary-medium)"
      />
    </div>
  );
}