import ProjectPopUp from '@/components/ProjectPopUp';
import { Project } from '@/types/index';
import { Key } from "react";

type ProjectsGalleryProps = {
  projects: Project[];
};

function groupByYear(projects: Project[]): Record<string, Project[]> {
  return projects.reduce((groups, project) => {
    const key = String(project.year).trim();
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(project);
    return groups;
  }, {} as Record<string, Project[]>);
}

const QUARTER_ORDER: Record<string, number> = {
  winter: 0,
  spring: 1,
  fall: 2,
};

function quarterSortValue(label: string): number {
  const[quarter, yearStr] = label.trim().split(/\s+/);
  const year = parseInt(yearStr, 10) || 0;
  const quarterRank = QUARTER_ORDER[quarter?.toLowerCase()] ?? 0;
  return year * 10 + quarterRank;
}

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const grouped = groupByYear(projects);
  
  // Descending order (most recent quarter first)
  const quarterLabels = Object.keys(grouped).sort(
    (a, b) => quarterSortValue(b) - quarterSortValue(a)
  );

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-md
        place-items-center items-start
      "
    >
      {quarterLabels.map((label) => (
        <ProjectPopUp key={label} year={label} projects={grouped[label]} />
      ))}
    </div>
  );
}