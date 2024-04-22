import React from "react";
import { Container } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/App.scss";

class Resources extends React.Component {
  render() {
    return (
      <div
        className="darkest-background-section resources-section"
        id="resources-page"
      >
        <Container>
          <h1>Resources</h1>
          <Tabs>
            <TabList>
              <Tab>
                <h6>Scholarships & Programs</h6>
              </Tab>
              <Tab>
                <h6>Must Reads</h6>
              </Tab>
              {/* <Tab>
                <h6>Our Alumni</h6>
              </Tab> */}
              <Tab>
                <h6>Similar Orgs</h6>
              </Tab>
            </TabList>

            <TabPanel>
              <h3>Scholarships, Programs, Conferences, and Hackathons</h3>
              <p>
                <b>Scholarships:</b>
              </p>
              <ul>
                <li>
                  <p>Our scholarship application period is currently closed.</p>
                </li>
              </ul>
              <p>
                <b>Programs:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://ersp.eng.ucsd.edu/">
                      Early Research Scholars Programs
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Conferences:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://tapiaconference.cmd-it.org/">
                      ACM Richard Tapia Conference
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://ghc.anitab.org/">
                      Grace Hopper Celebration
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://we20.swe.org/">
                      Society of Women Engineers Conference
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://convention.nsbe.org/">
                      National Society of Black Engineers Convention
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Hackathons:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://www.athenahacks.com/">AthenaHacks</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.facebook.com/hackXXsd">Hack XX</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.facebook.com/harvardwecode/">
                      WECode: Women Engineers Code Conference
                    </a>
                  </p>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <h3>Articles, Books, and More</h3>
              <p>
                <b>Articles:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://www.amazon.com/Black-Science-Technology-Engineering-Mathematics/dp/1658697677">
                      101 Black Women in S.T.E.M.
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://medium.com/women-in-computing-ucsd/all-about-landing-a-software-engineering-internship-18298f246ab0">
                      All About Landing a Software Engineering Internship
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://medium.com/women-in-computing-ucsd/recap-women-in-computings-summer-dev-program-87b25a3a511f">
                      Recap: Women In Computing’s Summer Dev Program
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.afrikanblackcoalition.org/news/the-adversity-in-diversity">
                      The Adversity in “Diversity”
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://medium.com/women-in-computing-ucsd/women-in-computing-ucsds-website-redesign-489196c4226c">
                      Women in Computing @ UCSD’s Website Redesign
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Books:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://www.amazon.com/Algorithms-Oppression-Search-Engines-Reinforce/dp/1479837245">
                      Algorithms of Oppression: How Search Engines Reinforce
                      Racism
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.amazon.com/Ask-Women-Power-Negotiation-Really/dp/0553384554">
                      Ask For It
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.amazon.com/Cracking-Coding-Interview-Gayle-McDowell/dp/0984782850/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=careercup-ctciwebsite-20&linkId=173f3d8878a1d7f0d131a85fbfc9f67f">
                      Cracking the Coding Interview
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.amazon.com/Cracking-Data-Science-Interview-Questions/dp/171068013X">
                      Cracking the Data Science Interview
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818">
                      Cracking the PM Interview
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.amazon.com/Technically-Wrong-Sexist-Algorithms-Threats/dp/1681688611">
                      Technically Wrong: Sexist Apps, Biased Algorithms, and
                      Other Threats of Toxic Tech
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Podcasts:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://anchor.fm/women-in-computing">
                      WIC's Girl Code Podcast
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Videos:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://ucsd.zoom.us/rec/share/r1wMiXlC17D24KfaWJMFrfTGB4dwB6WjBBBaQT28cVuoflqVSc7VMubJkr0Yupi5.514c7HgvGhBN7BrV">
                      WIC's iOS Development Workshop
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://drive.google.com/file/d/1E7IsOfz_vpJxUPEWLyjP-OhU6yJTvYDY/view">
                      WIC's Web Dev Series: Introduction to React
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://drive.google.com/file/d/15U3O7pF5Hl0XuMP3Fk30fNWiJlL8uY2W/view">
                      WIC's Web Dev Series: Introduction to Backend Development
                      + API
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://drive.google.com/file/d/1dJOC_UI3vuF4JTg3G2or_Z56O2h4Wdae/view">
                      WIC Welcome Video
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.youtube.com/watch?v=-GrQ3BF-nVw">
                      Women In Computing - UCSD CSE
                    </a>
                  </p>
                </li>
              </ul>
            </TabPanel>
            {/* <TabPanel>
              <h3>Alumni and Where They are Now</h3>
              <p>
                Coming soon!
                Name + link to (info/resume/linkedin) + where they are now 
                Industry, research, graduate school
              </p>
            </TabPanel> */}
            <TabPanel>
              <h3>Engineering Organizations on Campus</h3>
              <p>
                <b>Diversity Engineering Organizations:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="http://nsbeucsd.weebly.com/">
                      {" "}
                      National Society of Black Engineers (NSBE)
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="http://ostem.ucsd.edu/">Out in STEM (oSTEM)</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://saseatucsd.weebly.com/">
                      Society of Asian Scientists and Engineers (SASE)
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://sites.google.com/view/shpeucsd/home">
                      Society of Hispanic Professional Engineers (SHPE)
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://swe-ucsd.netlify.app/">
                      Society of Women Engineers (SWE)
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>
                  <a href="https://jacobsschool.ucsd.edu/idea/student-orgs/undergraduate">
                    {" "}
                    All Engineering Organizations
                  </a>
                </b>
              </p>
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default Resources;
