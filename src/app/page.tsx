import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex justify-between bg-gray-light text-gray-dark">
        <div>
          <h1 className="text-purple-medium">Women who code write the future.</h1>
          <p>We're <b>Women in Computing at UC San Diego</b> - coders and engineers, of all genders, who support the female presence in computing.</p>
        </div>
        <div>
          <Image
            src="/images/wic_logo.png"
            alt="WIC Logo"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="bg-purple-medium text-gray-light">
        <h1 className="text-purple-light">What's WIC all about?</h1>
        <h2>Header 2</h2>
        <p>This is a paragraph</p>
      </section>
    </main>
  );
}