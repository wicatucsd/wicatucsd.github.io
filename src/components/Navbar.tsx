import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-1 flex justify-between items-center px-md py-sm bg-gray-light">
      {/* TODO: Change size of image */}
      <div>
        <Link href="/">
          <Image
            src="/images/wic_logo.png"
            alt="WIC Logo"
            width={96}
            height={50}
          />
        </Link>
      </div>

      <ul className="flex space-x-md">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/programs">Get Involved</Link></li>
      </ul>
    </nav>
  );
}