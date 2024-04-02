import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { Row, Col, Container } from "react-grid-system";
import Button from "../components/Button";
import "../styles/Events.scss";

class Events extends React.Component {
  render() {
    return (
      <Container id="events-page">
        <Row id="events-title">
          <Col>
            <h1>Events</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <FullCalendar
              plugins={[dayGridPlugin, googleCalendarPlugin]}
              //googleCalendarApiKey= 'AIzaSyBP_Qc9_Csvfqt2p3gwDnSbMJw-zNlw5fU'
              //googleCalendarApiKey= {process.env.REACT_APP_CALENDAR_API}
              googleCalendarApiKey="AIzaSyDDp3PGxcPokT5ZUli1P_VPgE49JP396YM"
              events={{
                //googleCalendarId: 'wic.ucsd@gmail.com',
                googleCalendarId:
                  "660d0f6a798426a94a177753ec35b4da7ea9e82c69fd4b81a95ca9183e05405a@group.calendar.google.com",
                className: "wic-calendar",
              }}
              eventColor="#ffffff"
              fixedWeekCount={false}
            />
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col>
            <Button
              type="primary"
              text="Add it to your Calendar"
              //toLink="https://calendar.google.com/calendar/u/3?cid=d2ljLnVjc2RAZ21haWwuY29t"
              toLink="https://calendar.google.com/calendar/u/2?cid=NjYwZDBmNmE3OTg0MjZhOTRhMTc3NzUzZWMzNWI0ZGE3ZWE5ZTgyYzY5ZmQ0YjgxYTk1Y2E5MTgzZTA1NDA1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
