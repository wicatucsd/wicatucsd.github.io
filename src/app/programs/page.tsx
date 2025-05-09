"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Project } from "@/types/index";
import ProjectsGallery from "@/components/ProjectsGallery";
import useCsvData from "@/utils/useCsvData";

export default function Programs() {
  const projects = useCsvData<Project>("/data/projects.csv");

  return (
    <main>
      <section>
        <h1>Women in tech quote</h1>
      </section>
      <section id="bpc" className="bg-primary-medium text-gray-light">
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
              <h2>Content for the First Tab</h2>
              <p>This is the content shown when the first tab is active.</p>
            </TabPanel>
            <TabPanel>
              <h2>Content for the Second Tab</h2>
              <p>Here's some info for the second tab.</p>
            </TabPanel>
            <TabPanel>
              <h2>Content for the Third Tab</h2>
              <p>Third tab is here with its own content!</p>
            </TabPanel>
          </div>
        </Tabs>
      </section>
      <section id="edge">
        <h1>Empowerment and Development for Girls in Engineering (EDGE)</h1>
      </section>
      <section id="mentor-mentee" className="bg-primary-medium text-gray-light">
        <h1 className="text-primary-light">Mentor-Mentee</h1>
      </section>
      <section id="project-teams">
        <h1>Project Teams</h1>
        <ProjectsGallery projects={projects}/>
      </section>
    </main>
  );
};