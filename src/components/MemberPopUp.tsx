"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Member } from '@/types/index';

type MemberPopUpProps = {
  member: Member;
}

export default function MemberPopUp({ member }: MemberPopUpProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const imageSize = 175; // Size of the image in pixels
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
            {/* Image */}
            <div
              className="cursor-pointer"
              onClick={togglePopUp}
            >
              <Image
                src={member.image}
                alt="Member Photo"
                width={imageSize}
                height={imageSize}
                className={`
                w-full max-w-[${imageSize}px]
                aspect-square object-cover
                transition-transform duration-350
                hover:translate-x-[10px] hover:translate-y-[10px]`}
              />
            </div>
          </div>
        </div>
        <p lang="en" className={`font-bold max-w-[${imageSize}px] break-words hyphens-auto whitespace-normal`}>
          {member.name}
        </p>
        <p lang="en" className={`max-w-[${imageSize}px] break-words hyphens-auto whitespace-normal`}>
          {member.position}
        </p>
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
                <Image
                  src={member.image}
                  alt="Member Photo"
                  width={350}
                  height={350}
                  className="aspect-square object-cover flex-none"
                />
              </div>
              <div className="flex flex-col gap-sm">
                <div>
                  <h2 className="text-primary-dark">{member.name}</h2>
                  <h3 className="text-primary-medium">{member.position}</h3>
                  <p>{member.year}</p>
                </div>
                <div className="flex flex-col gap-sm">
                  <p><b className="text-primary-medium">Favorite language:</b> {member.language}</p>
                  <p><b className="text-primary-medium">Favorite spot:</b> {member.spot}</p>
                  <p><b className="text-primary-medium">Best part of WIC:</b> {member.wiclove}</p>
                  <p><b className="text-primary-medium">Fun fact:</b> {member.bio}</p>
                  <div className="flex gap-md items-center">
                    {member.email && (
                      <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/icons/email.png"
                          alt="Email"
                          width={iconSize}
                          height={iconSize}
                          className="transition-transform duration-200 hover:scale-120"
                        />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/icons/instagram.png"
                          alt="Instagram"
                          width={iconSize}
                          height={iconSize}
                          className="transition-transform duration-200 hover:scale-120"
                        />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/icons/linkedin.png"
                          alt="LinkedIn"
                          width={iconSize}
                          height={iconSize}
                          className="transition-transform duration-200 hover:scale-120"
                        />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/icons/github.png"
                          alt="GitHub"
                          width={iconSize}
                          height={iconSize}
                          className="transition-transform duration-200 hover:scale-120"
                        />
                      </a>
                    )}
                    {member.website && (
                      <a href={member.website} target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/icons/website.png"
                          alt="Website"
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
      )}
    </div>
  );
}