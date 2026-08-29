"use client";
import { useState } from "react";
import MemberGallery from "@/components/MemberGallery";
import PreviousMemberGallery from "@/components/PreviousMemberGallery";
import useCsvData from "@/utils/useCsvData";
import { Member, PreviousMember } from '@/types/index';

export default function Team() {
  const boardMembers = useCsvData<Member>("/data/board_members.csv");
  const previousMembers = useCsvData<PreviousMember>("/data/previous_members.csv");

  // Group previous members by year where keys are years and the values are arrays 
  // of previous members for that year. Assumes that previous_members.csv should be ordered by year.
  const previousMembersByYear = previousMembers.reduce((acc, member) => {
    acc[member.year] = acc[member.year] || [];
    acc[member.year].push(member);
    return acc;
  }, {} as Record<string, PreviousMember[]>);

  const sortedYears = Object.keys(previousMembersByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  const [selectedGroup, setSelectedGroup] = useState<string>("current");

  return (
    <section className="flex flex-col items-center gap-md">
      <h1>Meet the Team</h1>

      {/* Dropdown Menu */}
      <div className="mb-md flex flex-col sm:flex-row items-center sm:gap-sm">
        <label htmlFor="member-group" className="font-bold text-primary-medium text-center">
          Select Year:
        </label>
        <select
          id="member-group"
          className="mt-sm sm:mt-0 sm:ml-sm p-sm border-b border-gray-dark focus:outline-none"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="current">2026-2027 (Current)</option>
          {sortedYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-md">
        {selectedGroup === "current" && (
          <div className="flex flex-col items-center gap-md">
            <MemberGallery members={boardMembers} />
          </div>
        )}
        {selectedGroup !== "current" && (
          <div className="flex flex-col items-center gap-md">
            <h3 className="text-primary-medium font-bold">{selectedGroup}</h3>
            <PreviousMemberGallery 
              previousMembers={previousMembersByYear[selectedGroup] || []}
            />
          </div>
        )}
      </div>
    </section>
  );
}