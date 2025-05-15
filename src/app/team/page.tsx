"use client";
import MemberGallery from "@/components/MemberGallery";
import useCsvData from "@/utils/useCsvData";
import { Member } from '@/types/index';

export default function Team() {
  const boardMembers = useCsvData<Member>("/data/board_members.csv");

  return (
    <section className="flex flex-col items-center gap-md">
      <h1>Meet the Team</h1>
      <div className="flex flex-col gap-md">
        <div className="flex flex-col items-center gap-md">
          <MemberGallery members={boardMembers} />
        </div>
      </div>
    </section>
  );
}