"use client";
import { useState } from "react";
import Image from "next/image";

type MemberPopUpProps = {
  imageSrc: string;
  name: string;
}

export default function MemberPopUp({ imageSrc, name }: MemberPopUpProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const imageSize = 175; // Size of the image in pixels

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <div>
      <div>
        {/* Add padding to ensure the component's layout accounts for the size of the shadow outline */}
        <div className="inline-block pr-[10px] pb-[10px]">
          {/* Outline shadow effect */}
          <div className="
            relative inline-block
            after:content-[''] after:absolute
            after:top-[10px] after:left-[10px]
            after:w-full after:h-full
            after:-z-1
            after:border-2"
          >
            {/* Image */}
            <div
              className="cursor-pointer"
              onClick={togglePopUp}
            >
              <Image
                src={imageSrc}
                alt="Member Photo"
                width={imageSize}
                height={imageSize}
                className="
                  aspect-square object-cover
                  transition-transform duration-350
                  hover:translate-x-[10px] hover:translate-y-[10px]"
              />
            </div>
          </div>
        </div>
        <p lang="en" className={`font-bold`}>
          {name}
        </p>
      </div>

      {/* Pop-Up */}
      {isPopUpOpen && (
        <div className="fixed inset-0 z-2 flex items-center justify-center bg-purple-medium/70">
          <div
            className="bg-white p-md w-2/3 max-w-screen-lg h-96 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt="Member Photo"
              width={250}
              height={250}
              className="aspect-square object-cover"
            />
            <h3>{name}</h3>
            <button
              className="mt-4 px-4 py-2 bg-purple-medium text-white rounded-md hover:bg-purple-dark"
              onClick={togglePopUp}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}