
import MemberPopUp from "@/components/MemberPopUp";
import { Member } from '@/types/index';
import { Key } from "react";

type MemberGalleryProps = {
  members: Member[];
};

export default function MemberGallery({ members }: MemberGalleryProps) {
  return (

   <div className="
      flex flex-wrap
      items-start justify-center
      gap-md px-md md:px-lg lg:px-xl
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