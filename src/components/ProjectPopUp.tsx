"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Project } from '@/types/index';

type ProjectPopUpProps = {
  project: Project;
}

export default function ProjectPopUp({ project }: ProjectPopUpProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const iconSize = 30; // Size of the icon in pixels

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };
  return (
    <div>
      <div>
        {/* Add padding to ensure the component's layout accounts for the size of the shadow outline */}
        <div className="pr-[10px] pb-[10px]">
          {/* Outline shadow effect */}
          <div className="
              relative inline-block
              after:content-[''] after:absolute
              after:top-[10px] after:left-[10px]
              after:w-full after:h-full
              after:-z-1
              after:border-2 after:border-primary-medium
            ">
            {/* Box */}
            <div className="
              p-sm flex flex-col gap-sm
              cursor-pointer bg-primary-light w-[350px]
              transition-transform duration-350
              hover:translate-x-[10px] hover:translate-y-[10px]
              "
              onClick={togglePopUp}
            >
              <div>
              <p>{project.year}</p>
                <h3 className="font-bold">{project.name}</h3>
              </div>

              <div className="h-[150px] w-[250px] overflow-hidden mx-auto flex items-center justify-center">
                <Image
                  src={project.image || "/images/wic_logo.png"}
                  alt="Project Photo"
                  width={250}
                  height={150}
                  className="object-cover flex-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-Up */}
      {isPopUpOpen && (
        <div className="fixed inset-0 z-2 flex items-center justify-center bg-primary-medium/70">
          <div
            className="
              bg-gray-light p-md pt-sm
              w-full md:w-2/3 
              h-125
              mx-sm
              overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                className="text-gray-dark font-bold p-2 text-xl cursor-pointer transition-transform duration-200 hover:scale-120"
                onClick={togglePopUp}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col-reverse items-center md:flex-row md:items-start gap-sm">
              <div>
              </div>
                <div className="flex flex-col gap-sm">
                <div className="flex flex-col-reverse items-center md:flex-row md:items-start gap-sm">
                  <div className="flex-shrink-0">
                  <Image
                    src={project.image || "/images/wic_logo.png"}
                    alt="Project Photo"
                    width={250}
                    height={200}
                    className="object-cover"
                  />
                  </div>
                  <div className="flex flex-col gap-sm">
                  <div>
                    <h2 className="text-primary-dark">{project.name}</h2>
                    <p className="font-bold">{project.year}</p>
                  </div>
                  <div className="flex flex-col gap-sm">
                    <p><b className="text-primary-medium">By:</b> {project.team}</p>
                    {project.mentors && (
                    <p><b className="text-primary-medium">Mentors:</b> {project.mentors}</p>
                    )}
                    {project.description && (
                    <p>{project.description}</p>
                    )}
                    <div className="flex gap-md items-center">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/icons/website.png"
                        alt="Project Link"
                        width={iconSize}
                        height={iconSize}
                        className="transition-transform duration-200 hover:scale-120"
                      />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/icons/github.png"
                        alt="Project Link"
                        width={iconSize}
                        height={iconSize}
                        className="transition-transform duration-200 hover:scale-120"
                      />
                      </a>
                    )}
                    </div>
                  </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};