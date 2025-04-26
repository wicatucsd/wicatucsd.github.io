"use client";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import MemberGallery from "@/components/MemberGallery";
import { Member } from '@/types/index';

export default function Team() {
  const [boardMembers, setBoardMembers] = useState<Member[]>([]);
  const [deiMembers, setDeiMembers] = useState<Member[]>([]);

  // Fetch and parse CSV data
  useEffect(() => {
    fetch("/data/members.csv")
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true, // Use the first row as the header
          complete: (result) => {
            const parsedMembers = result.data as Member[];
            setBoardMembers(parsedMembers.filter((member) => member.type === "board"));
            setDeiMembers(parsedMembers.filter((member) => member.type === "dei"));
          },
        });
      });
  }, []);

  return (
    <section className="flex flex-col items-center gap-md">
      <h1 className="text-purple-medium">Meet the Team</h1>
      <div className="flex flex-col gap-md">
        <div className="flex flex-col items-center gap-md">
          <h2 className="text-purple-medium">Board Members</h2>
          <MemberGallery members={boardMembers} />
        </div>
        <div className="flex flex-col items-center gap-md">
          <h2 className="text-purple-medium mb-sm">DEI Committee</h2>
          <MemberGallery members={deiMembers} />
        </div>
      </div>
    </section>
  );
}