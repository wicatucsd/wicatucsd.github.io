"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Project, Sponsor } from "@/types/index";
import ProjectsGallery from "@/components/ProjectsGallery";
import useCsvData from "@/utils/useCsvData";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Button from "@/components/Button";

export default function Programs() {
  const projects = useCsvData<Project>("/data/projects.csv");
  const bpcSponsors = useCsvData<Sponsor>("/data/bpc_sponsors.csv");

  return (
    <main>
      <section className="pb-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-light text-gray-dark gap-md">
          <Typewriter text="Teach a girl to code and she&apos;ll change the world. " className="text-left"/>
          <Image
              src="/images/programs_uke.png"
              alt="Picture"
              width={300}
              height={300}
              className="sm:w-1/3 object-cover flex-none"
            />
        </div>
      </section>
      <section id="bpc" className="bg-primary-medium text-gray-light flex flex-col gap-md">
        <h1 className="text-primary-light">Beginner&apos;s Programming Competition</h1>
        <p>For 4+ years, Women in Computing has been hosting quarterly programming competitions, Beginner&apos;s Programming Competition, for 200+ undergraduate students who have not taken upper-division Computer Science or Data Science courses. The students solve 10 questions similar to those used in programming interviews in 3 hours. The competition format is similar to ACM ICPC, where participants brainstorm and pair-program to have fun and win prizes.</p>
        <Tabs className="text-gray-dark">
          <TabList className="flex justify-between w-full">
            <Tab
              className="flex-1 text-center bg-primary-dark p-sm font-bold text-primary-light outline-none"
              selectedClassName="bg-primary-light text-primary-medium"
            >
              Upcoming
            </Tab>
            <Tab
              className="flex-1 text-center bg-primary-dark p-sm font-bold text-primary-light outline-none"
              selectedClassName="bg-primary-light text-primary-medium"
            >
              Past
            </Tab>
            <Tab
              className="flex-1 text-center bg-primary-dark p-sm font-bold text-primary-light outline-none"
              selectedClassName="bg-primary-light text-primary-medium"
            >
              Sponsors
            </Tab>
          </TabList>
          <div className="bg-primary-light p-md">
            <TabPanel>
              <h2>Upcoming BPC</h2>
              <p>Stay tuned for more information on the fall 2025 BPC!</p>
            </TabPanel>
            <TabPanel>
              <h2>Previous BPCs</h2>
              <div className="flex flex-wrap gap-md">
                <div className="flex-1 flex flex-col items-start gap-sm">
                  <h3>Spring 2025</h3>
                  <Image
                    src="/images/bpc_sp25.png"
                    alt="BPC graphic"
                    width={400}
                    height={400}
                    className="object-cover flex-none"
                  />
                  {/* TODO: Uncomment this and add the problems/solutions links when they are available */}
                  {/* <div className="flex gap-sm">
                    <Button
                      text="Problems"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                    <Button
                      text="Solutions"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                  </div> */}
                </div>
                <div className="flex-1 flex flex-col items-start gap-sm">
                  <h3>Winter 2025</h3>
                  <Image
                    src="/images/bpc_wi25.png"
                    alt="BPC graphic"
                    width={400}
                    height={400}
                    className="object-cover flex-none"
                  />
                  <div className="flex gap-sm">
                    <Button
                      text="Problems"
                      href="https://docs.google.com/document/d/1ee5F2VXfXQPOgh32mfm4HDUkPQ2ovI_zKfxm02u2Uz0/edit?usp=sharing"
                    />
                    <Button
                      text="Solutions"
                      href="https://www.dropbox.com/scl/fo/fz0sanrg2qwa1rcrswqyi/AJS9nuOf0cz_FUSy7xK1Aq8?rlkey=ey9itmthe7j2anfvkn6nscxbq&e=1&st=bia4jo7k&dl=0"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start gap-sm">
                  <h3>Fall 2024</h3>
                  <Image
                    src="/images/bpc_fa24.png"
                    alt="BPC graphic"
                    width={400}
                    height={400}
                    className="object-cover flex-none"
                  />
                  <div className="flex gap-sm">
                    <Button
                      text="Problems"
                      href="https://docs.google.com/document/d/1vqgGeHG0lIiOZYssqjbHJYgEhdNokoGccgYytFY5540/edit?usp=sharing"
                    />
                    <Button
                      text="Solutions"
                      href="https://www.dropbox.com/scl/fo/90d8l7bjnla606zaast53/AOmaW_vi4CIhE9Fwvj88hzg?rlkey=0ifwpoc2757aiw8e7f25j3r2b&e=1&st=7s4ikkhr&dl=0"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="flex flex-col items-start gap-sm">
              <h2>Past Sponsors</h2>
              <p>A big thank you to our amazing sponsors who made our past events a huge success!</p>
              <div className="flex flex-wrap gap-md">
                {bpcSponsors.map((sponsor) => (
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    key={sponsor.name}
                    width={200}
                    height={200}
                    className="object-contain flex-none"
                  />
                ))}
              </div> 
            </TabPanel>
          </div>
        </Tabs>
      </section>
      <section id="edge" className="flex flex-col items-center gap-md">
        <h1>Outreach</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <div className="sm:w-1/2 flex flex-col items-start gap-sm">
            <p>
              Empowerment and Development for Girls in Engineering (EDGE) is a mentorship program by WIC at UCSD and SWE at UCSD that aims to inspire and empower high school girls to consider STEM-related careers in order to bridge the gender gap in engineering fields.
              As an EDGE mentor, you will have the opportunity to get paired with a high school mentee and guide them through their journey in STEM. 
            </p>
            <Button
              text="Learn More"
              href="https://edgeucsd.wixsite.com/edge"
            />
          </div>
          <Image
            src="/images/programs_edge.jpg"
            alt="EDGE picture"
            width={500}
            height={500}
            className="sm:w-1/2 object-cover flex-none"
          />
        </div>
      </section>
      <section id="mentor-mentee" className="bg-primary-medium text-gray-light flex flex-col items-center gap-md">
        <h1 className="text-primary-light">Mentor-Mentee</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <Image
            src="/images/programs_mentor_mentee.jpg"
            alt="Mentor-mentee picture"
            width={500}
            height={500}
            className="sm:w-1/2 object-cover flex-none"
          />
          <p className="sm:w-1/2">
            WIC Mentor-Mentee is a collaborative partnership between a mentor and mentee that supports mutual growth through the sharing of talents, skills, and experiences. It involves a meaningful investment of time and effort from both parties and serves as a valuable opportunity for personal and professional development.
            Being a part of this program will give you the opportunity to support your peers and help contribute to their undergraduate experience in computing, in addition to giving you a chance to develop a closer relationship with the WIC community here at UCSD!
            Mentors and mentees are paired every fall quarter. Be on the look-out for applications to open in the fall!
          </p>
        </div>
      </section>
      <section id="project-teams" className="flex flex-col items-center gap-md">
        <h1>Project Teams</h1>
        <p>
          WIC Project Teams is designed to give students an opportunity to gain project experience. Join or get placed into a team and build a project (website application) over the quarter that you can showcase to potential employers.
          Prior website/mobile development experience is not necessary. We are looking less at technical experience and more at motivation and initiative!
          Each quarter, projects will be centered around a theme. For example, in Winter 2025, the theme was creating a website centered around activism. 
          Keep an eye out for when applications open each quarter. In the meantime, check out some of the past projects below! 
        </p>
        <h2>Selected Past Projects</h2>
        <ProjectsGallery projects={projects}/>
      </section>
    </main>
  );
};