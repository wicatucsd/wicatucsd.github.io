import Image from "next/image";
import Typewriter from "@/components/Typewriter";

export default function About() {
  return (
    <main>
      <section className="flex flex-col items-center gap-lg">
        <Typewriter text={`{Ladies} by day, {hackers} by night`} className="text-left"/>
        <Image
          src="/images/big_group_picture.jpg"
          alt="people"
          width={1000}
          height={1000}
          className="object-cover flex-none"
        />
         <div className="flex flex-col sm:flex-row gap-md">
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2>What is WIC?</h2>
            <p>
              Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields.
              We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.
            </p>
            <Image
              src="/images/about_painting.JPG"
              alt="What is WIC"
              width={500}
              height={500}
              className="object-cover flex-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2>Why join?</h2>
            <p>We know that everyone has different reasons for joining WIC. Here’s how we can support you based on your goals:</p>
            <ul className="list-disc pl-5">
              <li><strong>Career Opportunities:</strong> Attend company networking events, gain resume exposure to top companies, and participate in the Mentor/Mentee program.</li>
              <li><strong>Building Technical Skills:</strong> Join Tech Dev workshops, participate in BPCs, and contribute to Tech Dev Project Teams.</li>
              <li><strong>Finding Community:</strong> Engage in socials, GBMs, and Community Hours to connect with like-minded individuals.</li>
              <li><strong>Developing Leadership Skills:</strong> Take an active role in committees, lead DEI events, or apply for a board position.</li>
              <li><strong>Giving Back:</strong> Join the EDGE program or volunteer for outreach initiatives to inspire future women in tech.</li>
            </ul>
            <Image
              src="/images/about_event.JPG"
              alt="Why Join"
              width={500}
              height={500}
              className="object-cover flex-none"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary-medium text-gray-light flex flex-col items-center gap-md">
        <h1 className="text-primary-light">Membership</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2 className="text-primary-light">Active Membership</h2>
            <p>To maintain <strong>Active Membership</strong>, you must meet one of the following each quarter:</p>
            <ul className="list-disc pl-5">
              <li>Attend <strong>4 WIC events</strong>, including at least <strong>1 GBM</strong> and 3 additional events of your choice.</li>
              <li>Attend 1 GBM and actively participate in one of: <strong>Mentor-Mentee Program</strong> (as a mentor or mentee), <strong>EDGE Program</strong> (as a mentor), or <strong>DEI Committee.</strong></li>
            </ul>
            <Image
              src="/images/about_climbing.png"
              alt="Active Membership"
              width={500}
              height={500}
              className="object-cover flex-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2 className="text-primary-light">Active Member Perks</h2>
            <ul className="list-disc pl-5">
              <li><strong>Priority for scholarships</strong> to conferences like Grace Hopper, Tapia, and more!</li>
              <li><strong>Eligibility to apply & vote</strong> for WIC Board positions.</li>
              <li><strong>Exclusive WIC stickers & merch!</strong></li>
              <li><strong>Resume listing in the WIC database</strong>, accessible by top companies like Roblox, Intuit, and ServiceNow.</li>
            </ul>
            <Image
              src="/images/about_dog.JPG"
              alt="Benefits of active membership"
              width={500}
              height={500}
              className="object-cover flex-none"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-md">
        <h1>WIC Board</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2>Join WIC Board</h2>
            <p>
              Be part of a passionate team dedicated to empowering women and underrepresented groups in tech! As a board member, you’ll gain leadership experience, plan impactful events, grow your network, and help foster an inclusive community in computing. Whether you’re interested in outreach, event planning, tech, or advocacy, there’s a place for you.
              
            </p>
            <p>
            Board applications open at the end of winter quarter and voting takes place at the beginning of spring quarter. You must be have been an active member for either fall or winter quarter of the current school year to apply.
            </p>
            <Image
              src="/images/about_picnic.png"
              alt="Board"
              width={500}
              height={500}
              className="object-cover flex-none"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2>Join a WIC Committee</h2>
            <p>
              Committees support board members with planning events, organizing initiatives, and keeping things running smoothly. It’s a great way to contribute, build skills, meet new people, and get a behind-the-scenes look at how WIC operates. No prior experience necessary!
              We are recruiting for the following committees:
            </p>
            <ul className="list-disc pl-5">
              <li>DEI Committee</li>
              <li>BPC Committee</li>
              <li>EDGE Committee</li>
            </ul>
            <Image
              src="/images/about_boba.jpg"
              alt="Event"
              width={500}
              height={500}
              className="object-cover flex-none"
            />
          </div>
        </div>
      </section>
    </main>
  );
}