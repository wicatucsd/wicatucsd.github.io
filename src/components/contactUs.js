import React from "react";
import { Row, Col, Container } from "react-grid-system";
import { MdMailOutline } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";

class ContactUs extends React.Component {
  render() {
    const facebook = "https://www.facebook.com/groups/wicucsd/";
    const linkedIn = "https://www.linkedin.com/company/wicucsd/about/";
    const insta = "https://www.instagram.com/wicucsd/";
    const discord = "https://discord.gg/ZE62Zuh";
    return (
      <div className="lightest-background-section" id="contact-us-page">
        <Container className="contactUsLinks">
          <Row>
            <Col
              id="ContactUsTitle"
              className="lightest-background-section"
              md={12}
            >
              <h1 className="lightest-background-section">Contact Us</h1>
            </Col>
          </Row>
          <Row type="flex" justify="center" gutterWidth={10}>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href="mailto:wic.ucsd@gmail.com">
                <MdMailOutline />
                <h5>wic.ucsd@gmail.com</h5>
              </a>
            </Col>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href={facebook}>
                <RiFacebookFill />
                <h5>/wicucsd</h5>
              </a>
            </Col>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href={linkedIn}>
                <FaLinkedinIn />
                <h5>/wicucsd</h5>
              </a>
            </Col>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href={discord}>
                <FaDiscord />
                <h5>wic.ucsd.edu/discord</h5>
              </a>
            </Col>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href={insta}>
                <FaInstagram />
                <h5>@wicucsd</h5>
              </a>
            </Col>
          </Row>
          <Row>
            <Col id="Trademark" md={12}>
              <p>
                {" "}
                © <b>Women in Computing</b> at University of California, San
                Diego 2020{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactUs;
