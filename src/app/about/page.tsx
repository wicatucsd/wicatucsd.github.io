import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="flex flex-col items-center gap-lg">
        <h1 className="text-start">{`{Women} by day, {hackers} by night`}</h1>
        <Image
          src="/images/group_placeholder.png"
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
          </div>
        </div>
      </section>
      <section className="bg-primary-medium text-gray-light flex flex-col items-center gap-md">
        <h1 className="text-primary-light">Membership</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2 className="text-primary-light">Active Membership</h2>
            <p>
              Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields.
              We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2 className="text-primary-light">Benefits of Active Membership</h2>
            <ul className="list-disc pl-5">
              <li><strong>Career Opportunities:</strong> Attend company networking events, gain resume exposure to top companies, and participate in the Mentor/Mentee program.</li>
              <li><strong>Building Technical Skills:</strong> Join Tech Dev workshops, participate in BPCs, and contribute to Tech Dev Project Teams.</li>
              <li><strong>Finding Community:</strong> Engage in socials, GBMs, and Community Hours to connect with like-minded individuals.</li>
              <li><strong>Developing Leadership Skills:</strong> Take an active role in committees, lead DEI events, or apply for a board position.</li>
              <li><strong>Giving Back:</strong> Join the EDGE program or volunteer for outreach initiatives to inspire future women in tech.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-md">
        <h1>WIC Board</h1>
        <div className="flex flex-col sm:flex-row gap-md">
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2>Join WIC Board</h2>
            <p>
              Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields.
              We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start gap-sm">
            <h2>Join a WIC Committee</h2>
            <p>
              Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields.
              We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}