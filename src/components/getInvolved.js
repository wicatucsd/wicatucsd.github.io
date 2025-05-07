import React from "react";
import GetInvolvedText from "./getInvolvedText.js";
import { Row, Col, Container } from "react-grid-system";
import "../styles/GetInvolved.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/App.scss";
import Button from "./Button.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

import servicenow from "../static/sponsors/servicenow.png";
import w24 from "../static/bpc_w24.png";
import w25 from "../static/bpc_w25.png";
import sp24 from "../static/bpc_sp24.png";
import fa24 from "../static/bpc_fa24.png";
import sp25 from "../static/bpc_sp25.png";
import janestreet from "../static/sponsors/janestreet.png";
import ucsdcse from "../static/sponsors/ucsdcse.png";
import intuit from "../static/sponsors/intuit.png";

class GetInvolved extends React.Component {
  render() {
    const mentorTitle = (
      <a href="https://forms.gle/mqZjNG6VucbnSX5D8" target="_blank">
        {" "}
        MENTOR-MENTEE{" "}
      </a>
    );
    const mentorDescrip =
      "Our mentorship program is meant to offer a support system for junior women in computing. It is a great way to find inspiration, network with other women in CS, and find your niche in WIC’s community.";
    const mentorNum = "1";
    const bpcTitle = "BPC";
    const bpcDescrip =
      "Beginner's Programming Competition is an algorithmic problem solving competition open only to students who have yet to take upper division classes. Held every quarter, BPC is a fun way to prep for your next hackathon.";
    const bpcNum = "2";
    const edgeTitle = (
      <a href="https://tinyurl.com/edgement2021" target="_blank">
        {" "}
        EDGE{" "}
      </a>
    );
    const edgeDescrip =
      "WIC partners with Society of Women Engineers to offer EDGE, a program for high school students. Participants are paired with an undergraduate mentor and attend various engineering workshops!";
    const edgeNum = "3";
    const socialTitle = "EVENTS";
    const socialDescrip =
      "WIC hosts a variety of events. From tech talks that offer an opportunity to network with companies, to fun interactive socials, to workshops helping refine technical skills, there's something for everyone!";
    const socialNum = "4";
    return (
      <div className="mid-background-section" id="involvement-page">
        <Container className="getInvolved">
          <Row>
            <Col
              id="GetInvolvedMargin"
              className="mid-background-section"
              md={12}
            >
              <h1 className="mid-background-section" id="get-involved-title">
                Get Involved
              </h1>
            </Col>
            <Col
              id="GetInvolvedMentorBPC"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={mentorTitle}
                description={mentorDescrip}
                number={mentorNum}
              />
            </Col>
            <Col
              id="GetInvolvedMentorBPC"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={bpcTitle}
                description={bpcDescrip}
                number={bpcNum}
              />
            </Col>
            <Col
              id="GetInvolvedEdgeSocials"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={edgeTitle}
                description={edgeDescrip}
                number={edgeNum}
              />
            </Col>
            <Col
              id="GetInvolvedEdgeSocials"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={socialTitle}
                description={socialDescrip}
                number={socialNum}
              />
            </Col>
            <Col
              id="GetInvolvedBottom"
              className="mid-background-section"
              md={12}
            ></Col>
          </Row>
        </Container>

        <div className="mid-background-section">
          <h2 id="BPCMargin">Beginner's Programming Competition</h2>
          <p id="BPCMargin">
            For 4+ years, Women in Computing has been hosting quarterly
            programming competitions, Beginner's Programming Competition, for
            200+ undergraduate students who have not taken upper-division
            Computer Science or Data Science courses. The students solve 10
            questions similar to those used in programming interviews in 3
            hours. The competition format is similar to ACM ICPC, where
            participants brainstorm and pair-program to have fun and win prizes.
          </p>

          <div className="bpc-section">
            <Container>
              <Tabs>
                <TabList>
                  <Tab>
                    <h6>Previous BPC</h6>
                  </Tab>
                  <Tab>
                    <h6>Upcoming BPC</h6>
                  </Tab>
                  <Tab>
                    <h6>Sponsors</h6>
                  </Tab>
                </TabList>

                <TabPanel>
                  <h3>Previous BPC Events</h3>

                  <Row>
                  <Col xs={8} md={4}>
                      <LazyLoadImage src={w25} alt={"Winter 2025"} />
                      <p>
                        <b>Winter 2025:</b>
                      </p>
                      <p>
                        <a
                          href="https://docs.google.com/document/d/1ee5F2VXfXQPOgh32mfm4HDUkPQ2ovI_zKfxm02u2Uz0/edit?usp=sharing"
                          target="_blank"
                        >
                          Final Problemset
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://www.dropbox.com/scl/fo/fz0sanrg2qwa1rcrswqyi/AJS9nuOf0cz_FUSy7xK1Aq8?rlkey=ey9itmthe7j2anfvkn6nscxbq&st=bia4jo7k&dl=0"
                          target="_blank"
                        >
                          Solution
                        </a>
                      </p>
                      <br />
                    </Col>
                    <Col xs={8} md={4}>
                      <LazyLoadImage src={fa24} alt={"Fall 2024"} />
                      <p>
                        <b>Fall 2024:</b>
                      </p>
                      <p>
                        <a
                          href="https://docs.google.com/document/d/1vqgGeHG0lIiOZYssqjbHJYgEhdNokoGccgYytFY5540/edit?usp=sharing"
                          target="_blank"
                        >
                          Final Problemset
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://www.dropbox.com/scl/fo/90d8l7bjnla606zaast53/AOmaW_vi4CIhE9Fwvj88hzg?rlkey=0ifwpoc2757aiw8e7f25j3r2b&st=7s4ikkhr&dl=0"
                          target="_blank"
                        >
                          Solution
                        </a>
                      </p>
                      <br />
                    </Col>
                    <Col xs={8} md={4}>
                      <LazyLoadImage src={sp24} alt={"Spring 2024"} />
                      <p>
                        <b>Spring 2024:</b>
                      </p>
                      <p>
                        <a
                          href="https://docs.google.com/document/d/1gU675Pz3CoLy-EA_mnPizWgAOllFKSAeR2CKP_95bgI/edit?usp=sharing"
                          target="_blank"
                        >
                          Final Problemset
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://www.dropbox.com/scl/fo/g26winfpqufbfuku9i1ix/AKOLDePq3OW9BrL-iHZAy4g?rlkey=aru92w9co9rhq1ef80rxzt6ae&e=1&st=a5p1b3sb&dl=0"
                          target="_blank"
                        >
                          Solution
                        </a>
                      </p>
                      <br />
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <h3>Spring 2025</h3>
                  <Row>
                    <Col xs={12} md={6}>
                      <p id="upcomingBpcDesc">
                      An Inside Out themed beginner-level programming competition for UCSD undergrads who haven't taken upper-div CSE or DSC courses. Form teams of 1-2 and attempt to solve 10 problems in 3 hours!
                      </p>
                      <Button
                        type="primary"
                        text="Participant Sign-Up"
                        toLink="https://docs.google.com/forms/d/e/1FAIpQLSe4To8KxAjVOEAEF4RMfOIACiEdEHrmmZ38GNQc-GGiuJYSbA/viewform"
                      />
                      <Button
                        type="primary"
                        text="Volunteer Sign-Up"
                        toLink="https://docs.google.com/forms/d/e/1FAIpQLScF6uiETJ91DMQUs0I66e3yeq6-bbsf6AU75mMaEh4nQM8HAg/viewform"
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <LazyLoadImage src={sp25} alt={"Spring 2025"} />
                    </Col>
                  </Row>

                </TabPanel>
                <TabPanel>
                  <h3>Past Sponsors</h3>
                  <p>
                    A big thank you to our amazing sponsors who made our past
                    events a huge success!
                  </p>
                  <Row>
                    <Col id="logoMargin" xs={6} md={3}>
                      <div>
                        <LazyLoadImage src={servicenow} alt="service now" />
                      </div>
                    </Col>

                    <Col id="logoMargin" xs={6} md={3}>
                      <div>
                        <LazyLoadImage src={janestreet} alt="jane street" />
                      </div>
                    </Col>

                    <Col id="logoMargin" xs={6} md={3}>
                      <div>
                        <LazyLoadImage
                          src={ucsdcse}
                          alt="ucsd cse computer science and engineering"
                        />
                      </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}>
                      <div>
                        <LazyLoadImage src={intuit} alt="intuit" />
                      </div>
                    </Col>
                  </Row>
                </TabPanel>
              </Tabs>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default GetInvolved;
