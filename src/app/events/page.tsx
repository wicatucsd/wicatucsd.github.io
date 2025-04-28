import Calendar from "@/components/Calendar";
import SignIn from "@/components/SignIn";
import Button from "@/components/Button";

export default function Events() {
  return (
    <section className="flex flex-col items-center gap-md">
      <h1>Events</h1>
      <div className="flex flex-col items-center gap-lg w-full">
        <div className="flex flex-col items-center gap-md w-full">
          <h2>Calendar</h2>
          <Button
            text="Add it to Your Calendar"
            href="https://calendar.google.com/calendar/u/2/r?cid=NjYwZDBmNmE3OTg0MjZhOTRhMTc3NzUzZWMzNWI0ZGE3ZWE5ZTgyYzY5ZmQ0YjgxYTk1Y2E5MTgzZTA1NDA1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
          />
          <div className="w-full bg-primary-light p-md z-0">
            <Calendar/>
          </div>
        </div>
        <div className="flex flex-col items-center gap-md w-full">
          <h2>Sign in to an Event</h2>
          <SignIn/>
        </div>
      </div>
    </section>
  );
}