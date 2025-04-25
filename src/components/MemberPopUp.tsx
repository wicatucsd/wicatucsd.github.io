"use client"; 
import { useState } from "react";
import Image from "next/image";

type MemberPopUpProps = {
  imageSrc: string;
  name: string;
}

export default function MemberPopUp({ imageSrc, name }: MemberPopUpProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <div>
      <div>
        <div
          className="cursor-pointer"
          onClick={togglePopUp}
        >
          <Image
            src={imageSrc}
            alt="Member Photo"
            width={200}
            height={200}
            className="aspect-square object-cover"
          />
        </div>
        <h1 className="text-purple-medium text-2xl font-bold">{name}</h1>
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
            <h1 className="text-purple-medium text-2xl font-bold">{name}</h1>
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