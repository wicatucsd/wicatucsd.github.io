import Calendar from "@/components/Calendar";
import SignIn from "@/components/SignIn";

export default function Events() {
  return (
    <section className="flex flex-col items-center gap-md">
      <h1>Events</h1>
      <div className="flex flex-col items-center gap-lg w-full">
        <div className="flex flex-col items-center gap-md w-full">
          <h2>Calendar</h2>
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