"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Project() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const imageSize = 175; // Size of the image in pixels

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
              cursor-pointer bg-primary-light h-[250px] w-[300px]
              transition-transform duration-350
              hover:translate-x-[10px] hover:translate-y-[10px]
              "
              onClick={togglePopUp}
            >
              <p className="font-bold">Project Title</p>
              <p>Fall 2024</p>
              <div className="h-[125px] w-[200px] overflow-hidden">
                <Image
                  src="/images/members/placeholder_image.png"
                  alt="Project Photo"
                  width={250}
                  height={200}
                  className="object-cover w-full h-full flex-none"
                />
              </div>
              <p>This is a project. This is a project. This is a project. This is a project. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-Up */}
      {isPopUpOpen && (
        <div className="fixed inset-0 z-2 flex items-center justify-center bg-primary-medium/70">
          <div
            className="
              bg-primary-light p-md pt-sm
              w-full md:w-2/3 
              h-100
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
                  <div>
                    <Image
                      src="/images/members/placeholder_image.png"
                      alt="Member Photo"
                      width={300}
                      height={200}
                      className="object-cover flex-none"
                    />
                  </div>
                  <div className="flex flex-col gap-sm">
                    <div>
                      <h2 className="text-primary-dark">Project Title</h2>
                      <p>Fall 2023</p>
                    </div>
                    <div className="flex flex-col gap-sm">
                      <p><b className="text-primary-medium">Favorite language:</b> g</p>
                      
                      <div className="flex gap-md items-center">
                        
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