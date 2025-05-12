"use client";
import Image from "next/image";
import Button from "@/components/Button";
import useCsvData from "@/utils/useCsvData";

type Sponsor = {
  name: string;
  image: string;
};

export default function Home() {
  const sponsors = useCsvData<Sponsor>("/data/sponsors.csv");

  return (
    <main>
      <section className="flex flex-col sm:flex-row justify-between items-center bg-gray-light text-gray-dark gap-md">
        <div className="flex flex-col items-start gap-sm">
          <h1 className="text-start">Women who code write the future.</h1>
          <p>We're <b>Women in Computing at UC San Diego</b> - coders and engineers, of all genders, who support the female presence in computing.</p>
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
        <h1 className="text-primary-light">What's WIC all about?</h1>
        <div className="flex flex-wrap gap-lg justify-center">
          <div className="flex flex-col items-start w-[300px] gap-2">
            <Image
              src="/images/members/placeholder_image.png"
              alt="image"
              width={300}
              height={300}
              className="object-cover flex-none"
            />  
            <h2 className="text-primary-light break-words">Events</h2>
            <p className="break-words">This is a paragraph</p>
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
            <p className="break-words">This is a paragraph</p>
            <Button
              text="Learn More"
              href="/programs#project-teams"
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
            <h2 className="text-primary-light break-words">Outreach</h2>
            <p className="break-words">This is a paragraph</p>
            <Button
              text="Learn More"
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
            <h2 className="text-primary-light break-words">Beginner's Programming Competition</h2>
            <p className="break-words">This is a paragraph</p>
            <Button
              text="Learn More"
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
            <h2 className="text-primary-light break-words">Mentor-Mentee</h2>
            <p className="break-words">This is a paragraph</p>
            <Button
              text="Learn More"
              href="/events"
              color="light"
            />  
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-gray-light gap-md">
        <h1>Sponsors</h1>
        <div className="flex flex-col items-center gap-lg">
          <div className="flex flex-wrap gap-md justify-center">
            {sponsors.map((sponsor) => (
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                key={sponsor.name}
                width={250}
                height={250}
                className="object-cover flex-none"
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
              text="Resume Database"
              href="https://airtable.com/appXMPbHQjymYnKoj/shrfVnXweer0HRowp"
              color="dark"
            />
            <Button
              text="Sponsor Us"
              href="https://forms.gle/FfYAez2fsax2iGdH7"
              color="dark"
            />
          </div>
        </div>
      </section>
    </main>
  );
}