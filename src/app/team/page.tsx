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
    <div>
      <h1>Team Page</h1>
      <h2>Board Members</h2>
      <MemberGallery members={boardMembers} />
      <h2>DEI Committee</h2>
      <MemberGallery members={deiMembers} />
    </div>
  );
}