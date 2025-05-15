"use client";
import Image from "next/image";
import Button from "@/components/Button";
import useCsvData from "@/utils/useCsvData";
import { Sponsor } from "@/types";

export default function Home() {
  const sponsors = useCsvData<Sponsor>("/data/sponsors.csv");

  return (
    <main>
      <section className="flex flex-col sm:flex-row justify-between items-center bg-gray-light text-gray-dark gap-md">
        <div className="flex flex-col items-start gap-sm">
          <h1 className="text-start">Women who code write the future.</h1>
          <p>We&apos;re <b>Women in Computing at UC San Diego</b> - coders and engineers, of all genders, who support the female presence in computing.</p>
          <p>NOTE: THIS  WEBSITE IS A WORK-IN-PROGRESS (and probably not mobile friendly).</p>
          <Button
            text="Join Us"
            href="https://linktr.ee/wicucsd"
          />
        </div>
        <div>
          <Image
            src="/images/plant_computer.png"
            alt="WIC computer with plants around it"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="flex flex-col items-center bg-primary-medium text-gray-light gap-lg">
        <h1 className="text-primary-light">What&apos;s WIC all about?</h1>
        <div className="flex flex-wrap gap-lg justify-center">
          <div className="flex flex-col items-start w-[300px] gap-2">
            <Image
              src="/images/homepage_events.png"
              alt="image"
              width={300}
              height={300}
              className="object-cover flex-none"
            />  
            <h2 className="text-primary-light break-words">Events</h2>
            <p className="break-words">WIC hosts a variety of events. From tech talks that offer an opportunity to network with companies, to fun interactive socials, to workshops helping refine technical skills, there&apos;s something for everyone!</p>
            <Button
              text="See Events"
              href="/events"
              color="light"
            />  
            </div>
            <div className="flex flex-col items-start w-[300px] gap-2">
            <Image
              src="/images/members/placeholder_image.png"
              alt="image"
              width={300}
              height={300}
              className="object-cover flex-none"
            />  
            <h2 className="text-primary-light break-words">Project Teams</h2>
            <p className="break-words">WIC Project Teams is designed to give students an opportunity to gain project experience. Join or get placed into a team and build a project (website application) over the quarter that you can showcase to potential employers.</p>
            <Button
              text="Learn More"
              href="/programs#project-teams"
              color="light"
            />  
            </div>
            <div className="flex flex-col items-start w-[300px] gap-2">
            <Image
              src="/images/homepage_edge.png"
              alt="image"
              width={300}
              height={300}
              className="object-cover flex-none"
            />  
            <h2 className="text-primary-light break-words">Outreach (EDGE)</h2>
            <p className="break-words">WIC partners with Society of Women Engineers to offer EDGE, a program for high school students. Participants are paired with an undergraduate mentor and attend various engineering workshops!</p>
            <Button
              text="Learn More"
              href="/programs#edge"
              color="light"
            />  
            </div>
            <div className="flex flex-col items-start w-[300px] gap-2">
            <Image
              src="/images/homepage_bpc.png"
              alt="image"
              width={300}
              height={300}
              className="object-cover flex-none"
            />  
            <h2 className="text-primary-light break-words">Beginner&apos;s Programming Competition</h2>
            <p className="break-words">Beginner&apos;s Programming Competition is an algorithmic problem solving competition open only to students who have yet to take upper division classes. Held every quarter, BPC is a fun way to prepare for coding interviews and competitive programming contests.</p>
            <Button
              text="Learn More"
              href="/programs#bpc"
              color="light"
            />  
            </div>
            <div className="flex flex-col items-start w-[300px] gap-2">
            <Image
              src="/images/members/placeholder_image.png"
              alt="image"
              width={300}
              height={300}
              className="object-cover flex-none"
            />  
            <h2 className="text-primary-light break-words">Mentor-Mentee</h2>
            <p className="break-words">Our mentorship program is meant to offer a support system for junior women in computing. It is a great way to find inspiration, network with other women in CS, and find your niche in WIC’s community.</p>
            <Button
              text="Learn More"
              href="/programs#mentor-mentee"
              color="light"
            />  
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-gray-light gap-md">
        <h1>Sponsors</h1>
        <div className="flex flex-col items-center gap-lg">
          <div className="flex flex-wrap gap-lg justify-center">
            {sponsors.map((sponsor) => (
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                key={sponsor.name}
                width={200}
                height={200}
                className="object-contain flex-none p-sm"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-md justify-center">
            <Button
              text="Learn More"
              href="https://drive.google.com/file/d/1dHTXJWoNeEYoXo7ohLOukdOaf47sIUku/view"
              color="dark"
            />
            <Button
              text="Sponsor Us"
              href="https://forms.gle/g37ZtPymLZXbPyHC8"
              color="dark"
            />
          </div>
        </div>
      </section>
    </main>
  );
}