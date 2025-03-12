import React from "react";
import { Row, Col, Container } from "react-grid-system";
import "../styles/AboutUs.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="mid-background-section" id="about-us-page">
        <Container>
          <Row className="about-us-no-icon">
            <Col>
              <h1>About Us</h1>
              <div className="au-video">
                <div className="au-video-wrapper">
                  <div className="au-video-background"></div>
                  <iframe
                    title="wic-about-us"
                    className="about-us-video"
                    src="https://drive.google.com/file/d/1QUH0pwODg0rO6mJ63s97URJLrSI4Kam9/preview"
                  ></iframe>
                </div>
              </div>
              <p id="about-us-blurb">
                We're coders and engineers - of all genders - who support the
                female presence in computing. We run events, from tech talks to
                socials, and provide opportunities for female engineers to
                connect and succeed. Check out the above video from our
                2023-2024 presidents!
              </p>
              <p id="university-policy-statement">
                In accordance with applicable Federal and State law and University policy, 
                Undergraduate Women in Computing at UC San Diego does not discriminate, 
                or grant preferences, on the basis of race, color, national origin, religion, 
                sex, disability, and/or other protected categories. All enrolled students are 
                encouraged to participate in Undergraduate Women in Computing at UC San Diego 
                events and activities.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default AboutUs;
