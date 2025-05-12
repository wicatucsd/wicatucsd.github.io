import Image from "next/image";

export default function Resources() {
  return (
    <div>
      <section className="flex flex-col items-center gap-md">
        <h1>Resources</h1>
        <h2>Conferences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div className="flex flex-col items-start gap-sm">
            <h3>Grace Hopper Celebration</h3>
            <p>Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields. We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.</p>
            <Image
              src="/images/members/placeholder_image.png"
              alt="Grace Hopper Celebration"
              width={400}
              height={400}
              className="object-cover flex-none"
            />  
          </div>
          <div className="flex flex-col items-start gap-sm">
            <h3>ACM Richard Tapia Conference</h3>
            <p>Women in Computing (WIC) at UC San Diego is dedicated to fostering an inclusive and supportive environment for women in technology. Our mission is to cultivate the next generation of women in tech, promote a love for STEM, and improve the retention of women in computing-related fields. We welcome all individuals—regardless of identity, major, or experience level—who are passionate about technology and diversity in computing.</p>
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
              <li>dsd UC San Diego is dedicated to fostering an inclusive</li>
              <li>dsd UC San Diego is dedicated to fostering an inclusive</li>
              <li>dsd UC San Diego is dedicated to fostering an inclusive</li>
              <li>dsd UC San Diego is dedicated to fostering an inclusive</li>
            </ul>
          </div>
        </div>
        <h2 className="text-center">More Organizations to get Involved with</h2>
        <div className="w-full">
          <ul className="list-disc pl-5">
            <li>dsd</li>
            <li>dsd</li>
            <li>dsd</li>
            <li>dsd</li>
          </ul>
        </div>
        <h2 className="text-center">Must-Reads</h2>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md w-full">
            <div className="flex flex-col items-start gap-sm">
              <h3>Books</h3>
              <ul className="list-disc pl-5">
                <li>dsd</li>
                <li>dsd</li>
                <li>dsd</li>
                <li>dsd</li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-sm">
              <h3>Articles</h3>
              <ul className="list-disc pl-5">
                <li>dsd</li>
                <li>dsd</li>
                <li>dsd</li>
                <li>dsd</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}