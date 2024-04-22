import React from "react";
import { setConfiguration } from "react-grid-system";
import JoinUs from "./pages/JoinUs";
import AboutUs from "./pages/AboutUs";
import MeetTheTeam from "./pages/MeetTheTeam";
import GetInvolved from "./components/getInvolved.js";
import ContactUs from "./components/contactUs.js";
import Home from "./pages/home.js";
import Events from "./pages/Events.js";
import Sponsors from "./pages/sponsors";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import "./styles/App.scss";

import ReactGA from "react-ga";
ReactGA.initialize("UA-179181760-1");
ReactGA.pageview(window.location.pathname + window.location.search);

setConfiguration({ gutterWidth: 60 });

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Events />
      <MeetTheTeam />
      <GetInvolved />
      <Sponsors />
      <Resources />
      <JoinUs />
      <ContactUs />
    </div>
  );
}

export default App;
