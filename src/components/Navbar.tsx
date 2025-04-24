import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex">
      {/* TODO: Change size of image */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/images/wic_logo.png"
            alt="WIC Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <ul className="flex space-x-6">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/team">Meet the Team</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/programs">Get Involved</Link></li>
      </ul>
    </nav>
  );
}