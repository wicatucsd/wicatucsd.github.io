"use client";
import { useEffect, useState } from "react";
import MemberGallery from "@/components/MemberGallery";
import { Member } from '@/types/index';

export default function Team() {
  const [boardMembers, setBoardMembers] = useState<Member[]>([]);
  const [deiMembers, setDeiMembers] = useState<Member[]>([]);

  // Fetch CSV data and parse into board and DEI members
  useEffect(() => {
    fetch("/data/members.csv")
      .then((response) => response.text())
      .then((data) => {
        const parsedMembers = parseMemberCSV(data);
        setBoardMembers(parsedMembers.filter((member) => member.type === "board"));
        setDeiMembers(parsedMembers.filter((member) => member.type === "dei"));
      });
  }, []);

  // Parses CSV data into Member objects
  const parseMemberCSV = (csvData: string): Member[] => {
    const rows = csvData.split("\n").slice(1);
    return rows.map((row) => {
      const [type, name, imageSrc] = row.split(",");
      return {
        type: type.trim(),
        name: name.trim(),
        imageSrc: imageSrc.trim(),
      };
    });
  };

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