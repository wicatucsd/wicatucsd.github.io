import Image from "next/image";
import CustomLink from "@/components/CustomLink";

export default function Resources() {
  return (
    <div>
      <section className="flex flex-col items-center gap-md">
        <h1>Resources</h1>
        <h2>Conferences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div className="flex flex-col items-start gap-sm">
            <h3>Grace Hopper Celebration</h3>
            <p>The <CustomLink href="https://ghc.anitab.org/" text="Grace Hopper Conference (GHC)"/> is the world's largest women in tech event. GHC celebrates the achievements of women in technology and aims to inspire women in the tech industry. GHC takes place in the fall and WIC offers scholarships for members to attend the conference. Be on the look-out for scholarship applications!</p>
            <Image
              src="/images/members/placeholder_image.png"
              alt="Grace Hopper Celebration"
              width={400}
              height={400}
              className="object-cover flex-none"
            />  
          </div>
          <div className="flex flex-col items-start gap-sm">
            <h3>Richard Tapia Conference</h3>
            <p>The <CustomLink href="https://tapiaconference.cmd-it.org/" text="Tapia Conference"/> focuses on bringing together students, faculty, researchers, and professionals in computing to celebrate the diversity in computing and connect with others. Taking place in the fall, WIC offers scholarships for members to attend. Be on the look-out for scholarship applications!</p>
            <Image
              src="/images/members/placeholder_image.png"
              alt="Grace Hopper Celebration"
              width={400}
              height={400}
              className="object-cover flex-none"
            />  
          </div>
          <div className="sm:col-span-2 flex flex-col items-start gap-sm">
            <h3>Other Conferences</h3>
            <ul className="list-disc pl-5">
              <li><CustomLink href="https://mediakit.swe.org/events/" text="Society of Women Engineers WE Conference"/></li>
              <li><CustomLink href="https://convention.nsbe.org/" text="National Society of Black Engineers Convention"/></li>
              <li><CustomLink href="https://conference.saseconnect.org/" text="Society of Asian Scientists and Engineers Connect Convention"/></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-primary-medium text-gray-light flex flex-col items-center gap-md">
        <h2 className="text-center text-primary-light">More UCSD Organizations to get Involved with</h2>
        <div className="w-full">
          <ul className="list-disc pl-5">
            <li>National Society of Black Engineers (NSBE)</li>
            <li>Out in STEM (oSTEM)</li>
            <li>Society of Asian Scientists and Engineers (SASE)</li>
            <li>Society of Hispanic Professional Engineers (SHPE)</li>
            <li>Society of Women Engineers (SWE)</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center gap-md">
        <h2 className="text-center">Must-Reads</h2>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md w-full">
            <div className="flex flex-col items-start gap-sm">
              <h3>Books</h3>
              <ul className="list-disc pl-5">
                <li><CustomLink href="https://www.amazon.com/Algorithms-Oppression-Search-Engines-Reinforce/dp/1479837245" text="Algorithms of Oppression: How Search Engines Reinforce Racism"/></li>
                <li><CustomLink href="https://www.amazon.com/Ask-Women-Power-Negotiation-Really/dp/0553384554" text="Ask For It"/></li>
                <li><CustomLink href="https://www.amazon.com/Cracking-Coding-Interview-Gayle-McDowell/dp/0984782850/" text="Cracking the Coding Interview"/></li>
                <li><CustomLink href="https://www.amazon.com/Cracking-Data-Science-Interview-Questions/dp/171068013X" text="Cracking the Data Science Interview"/></li>
                <li><CustomLink href="https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818" text="Cracking the PM Interview"/></li>
                <li><CustomLink href="https://www.amazon.com/Technically-Wrong-Sexist-Algorithms-Threats/dp/1681688611" text="Technically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech"/></li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-sm">
              <h3>Articles</h3>
              <ul className="list-disc pl-5">
                <li><CustomLink href="https://medium.com/women-in-computing-ucsd/all-about-landing-a-software-engineering-internship-18298f246ab0" text="All About Landing a Software Engineering Internship"/></li>
                <li><CustomLink href="https://medium.com/women-in-computing-ucsd/recap-women-in-computings-summer-dev-program-87b25a3a511f" text="Recap: Women In Computing’s Summer Dev Program"/></li>
                <li><CustomLink href="https://www.afrikanblackcoalition.org/news/the-adversity-in-diversity" text="UCSD: The Adversity in “Diversity”"/></li>
                <li><CustomLink href="https://medium.com/women-in-computing-ucsd/women-in-computing-ucsds-website-redesign-489196c4226c" text="Women in Computing @ UCSD’s Website Redesign (2020)"/></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}