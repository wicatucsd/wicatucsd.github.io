import { PreviousMember } from '@/types/index';
import Image from 'next/image';
import { Key } from "react";

type PreviousMemberGalleryProps = {
  previousMembers: PreviousMember[];
};

export default function PreviousMemberGallery({ previousMembers }: PreviousMemberGalleryProps) {

  return (
   <div className="
      grid
      grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-md
      place-items-center items-start
      "
    >
      {previousMembers.map((member, index: Key | null | undefined) => (
        <div className="" key={index}>
          <Image
            src={member.image}
            alt={member.name}
            width={175}
            height={175}
            className="aspect-square object-cover"
          />
           <p className='font-bold max-w-[175px] break-words hyphens-auto whitespace-normal'>{member.name}</p>
           <p className='max-w-[175px] break-words hyphens-auto whitespace-normal'>{member.position}</p>
        </div>
      ))}
   </div>
  );
}