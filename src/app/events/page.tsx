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
            href="https://calendar.google.com/calendar/u/0?cid=YjI2YmVmODE3MzRhYjk3MzEwZGI4MjA3YmM5MTIxYmJkMTBlODNjZmY4ZTA1Y2RiMDA5ZmU4MmI2NGZiNWY2ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
          />
          <div className="w-full p-md z-0">
            <div className="min-w-[320px]">
              <Calendar/>
            </div>
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