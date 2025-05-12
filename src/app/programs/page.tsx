"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Project } from "@/types/index";
import ProjectsGallery from "@/components/ProjectsGallery";
import useCsvData from "@/utils/useCsvData";
import Image from "next/image";
import Button from "@/components/Button";

export default function Programs() {
  const projects = useCsvData<Project>("/data/projects.csv");

  return (
    <main>
      <section>
        <h1>Women in tech quote</h1>
      </section>
      <section id="bpc" className="bg-primary-medium text-gray-light flex flex-col gap-md">
        <h1 className="text-primary-light">Beginner's Programming Competition</h1>
        <p>For 4+ years, Women in Computing has been hosting quarterly programming competitions, Beginner's Programming Competition, for 200+ undergraduate students who have not taken upper-division Computer Science or Data Science courses. The students solve 10 questions similar to those used in programming interviews in 3 hours. The competition format is similar to ACM ICPC, where participants brainstorm and pair-program to have fun and win prizes.</p>
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
                    src="/images/members/placeholder_image.png"
                    alt="BPC graphic"
                    width={400}
                    height={400}
                    className="object-cover flex-none"
                  />
                  <div className="flex gap-sm">
                    <Button
                      text="Problems"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                    <Button
                      text="Solutions"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start gap-sm">
                  <h3>Winter 2025</h3>
                  <Image
                    src="/images/members/placeholder_image.png"
                    alt="BPC graphic"
                    width={400}
                    height={400}
                    className="object-cover flex-none"
                  />
                  <div className="flex gap-sm">
                    <Button
                      text="Problems"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                    <Button
                      text="Solutions"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start gap-sm">
                  <h3>Fall 2024</h3>
                  <Image
                    src="/images/members/placeholder_image.png"
                    alt="BPC graphic"
                    width={400}
                    height={400}
                    className="object-cover flex-none"
                  />
                  <div className="flex gap-sm">
                    <Button
                      text="Problems"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                    <Button
                      text="Solutions"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfn2vX0g3q4x5r7J6z8Qe5G9"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="flex flex-col items-start gap-sm">
              <h2>Past Sponsors</h2>
              <p>A big thank you to our amazing sponsors who made our past events a huge success!</p>
              <div className="flex flex-wrap gap-md">
                <Image
                  src="/images/sponsors/google.png"
                  alt="Sponsor logo"
                  width={200}
                  height={200}
                  className="object-cover flex-none"
                />
                <Image
                  src="/images/sponsors/google.png"
                  alt="Sponsor logo"
                  width={200}
                  height={200}
                  className="object-cover flex-none"
                />
                <Image
                  src="/images/sponsors/google.png"
                  alt="Sponsor logo"
                  width={200}
                  height={200}
                  className="object-cover flex-none"
                />
                <Image
                  src="/images/sponsors/google.png"
                  alt="Sponsor logo"
                  width={200}
                  height={200}
                  className="object-cover flex-none"
                />
                <Image
                  src="/images/sponsors/google.png"
                  alt="Sponsor logo"
                  width={200}
                  height={200}
                  className="object-cover flex-none"
                />
                <Image
                  src="/images/sponsors/google.png"
                  alt="Sponsor logo"
                  width={200}
                  height={200}
                  className="object-cover flex-none"
                />
              </div> 
            </TabPanel>
          </div>
        </Tabs>
      </section>
      <section id="edge" className="flex flex-col items-center gap-md">
        <h1>Empowerment and Development for Girls in Engineering (EDGE)</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <p>Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields. We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.</p>
          <Image
            src="/images/members/placeholder_image.png"
            alt="EDGE picture"
            width={500}
            height={500}
            className="object-cover flex-none"
          />
        </div>
      </section>
      <section id="mentor-mentee" className="bg-primary-medium text-gray-light flex flex-col items-center gap-md">
        <h1 className="text-primary-light">Mentor-Mentee</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <Image
            src="/images/members/placeholder_image.png"
            alt="EDGE picture"
            width={500}
            height={500}
            className="object-cover flex-none"
          />
          <p>Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields. We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.</p>
        </div>
      </section>
      <section id="project-teams" className="flex flex-col items-center gap-md">
        <h1>Project Teams</h1>
        <p>Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields. We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.</p>
        <h2>Selected Past Projects</h2>
        <ProjectsGallery projects={projects}/>
      </section>
    </main>
  );
};