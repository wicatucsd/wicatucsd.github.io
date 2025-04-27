import ProjectPopUp from '@/components/ProjectPopUp';
import { Project } from '@/types/index';
import { Key } from "react";

type ProjectsGalleryProps = {
  projects: Project[];
};

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-md
        place-items-center items-start
      "
    >
      {projects.map((project, index: Key | null | undefined) => (
        <div className="" key={index}>
          <ProjectPopUp key={index} project={project} />
        </div>
      ))}
    </div>
  );
}