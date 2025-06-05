"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-gray-light">
      <div className="flex justify-between items-center p-sm">
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

        {/* Hamburger Icon */}
        <button
          className="relative w-6 h-6 md:hidden focus:outline-none z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`absolute top-1/2 left-0 w-full h-0.5 bg-primary-medium transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          ></span>
          <span
            className={`absolute top-1/2 left-0 w-full h-0.5 bg-primary-medium transition-opacity duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`absolute top-1/2 left-0 w-full h-0.5 bg-primary-medium transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-md pr-sm">
          <li>
            <Link
              href="/about"
              className="font-bold text-primary-medium hover:text-gray-dark text-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="font-bold text-primary-medium hover:text-gray-dark text-lg"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="font-bold text-primary-medium hover:text-gray-dark text-lg"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className="font-bold text-primary-medium hover:text-gray-dark text-lg"
            >
              Get Involved
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="font-bold text-primary-medium hover:text-gray-dark text-lg"
            >
              Resources
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } border-b-2 border-primary-medium`}
      >
        <ul className="mt-sm space-y-sm px-sm pb-sm">
          <li>
            <Link
              href="/about"
              className="block text-primary-medium hover:text-gray-dark text-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="block text-primary-medium hover:text-gray-dark text-lg"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="block text-primary-medium hover:text-gray-dark text-lg"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className="block text-primary-medium hover:text-gray-dark text-lg"
            >
              Get Involved
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="block text-primary-medium hover:text-gray-dark text-lg"
            >
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}