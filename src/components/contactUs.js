import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import { MdMailOutline } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineMedium } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";

class ContactUs extends React.Component {
  render() {
    const email = "wic.ucsd@gmail.com";
    const facebook = "https://www.facebook.com/groups/wicucsd/";
    const linkedIn = "https://www.linkedin.com/company/wicucsd/about/";
    const insta = "https://www.instagram.com/wicucsd/";
    const discord = "https://discord.gg/ZE62Zuh";
    // const medium = "https://medium.com/women-in-computing-ucsd";
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
              <a href={facebook} target="_blank">
                <RiFacebookFill />
                <h5>/wicucsd</h5>
              </a>
            </Col>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href={linkedIn} target="_blank">
                <FaLinkedinIn />
                <h5>/wicucsd</h5>
              </a>
            </Col>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href={discord} target="_blank">
                <FaDiscord />
                <h5>wic.ucsd.edu/discord</h5>
              </a>
            </Col>
            <Col className="contact-info" xs={12} sm={4} md={2}>
              <a href={insta} target="_blank">
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
