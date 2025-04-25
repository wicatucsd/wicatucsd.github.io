
import MemberPopUp from "@/components/MemberPopUp";
import { Member } from '@/types/index';
import { Key } from "react";

type MemberGalleryProps = {
  members: Member[];
};

export default function MemberGallery({ members }: MemberGalleryProps) {
  return (
   <div className="grid grid-cols-4 gap-md">
      {members.map((member: { imageSrc: string; name: string; }, index: Key | null | undefined) => (
        <MemberPopUp key={index} imageSrc={member.imageSrc} name={member.name} />
      ))}
   </div>
  );
}