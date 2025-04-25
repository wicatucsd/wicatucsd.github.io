
import MemberPopUp from "@/components/MemberPopUp";
import { Member } from '@/types/index';
import { Key } from "react";

type MemberGalleryProps = {
  members: Member[];
};

export default function MemberGallery({ members }: MemberGalleryProps) {
  return (

   <div className="
      grid
      grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-md
      px-md
      md:px-lg
      lg:px-xl
      place-items-center items-start
      "
    >
      {members.map((member: { imageSrc: string; name: string; }, index: Key | null | undefined) => (
        <div className="" key={index}>
           <MemberPopUp key={index} imageSrc={member.imageSrc} name={member.name} />
        </div>
      ))}
   </div>
  );
}