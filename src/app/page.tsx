"use client"; // remove this when you remove the placeholder button
import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <section className="flex justify-between items-center bg-gray-light text-gray-dark">
        <div>
          <h1>Women who code write the future.</h1>
          <p>We're <b>Women in Computing at UC San Diego</b> - coders and engineers, of all genders, who support the female presence in computing.</p>
          <Button
            text="Join Us"
            onClick={() => alert("Join Us button clicked!")}
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
      <section className="flex flex-col items-center bg-primary-medium text-gray-light">
        <h1 className="text-primary-light">What's WIC all about?</h1>
        <h2 className="text-primary-light">Header 2</h2>
        <p>This is a paragraph</p>
        <Button
            text="Button"
            href="https://discord.com/"
            color="light"
          />
      </section>
      <section className="flex flex-col items-center bg-gray-light">
        <h1>Sponsors</h1>
        <h2>Header 2</h2>
        <p>This is a paragraph</p>
      </section>
    </main>
  );
}