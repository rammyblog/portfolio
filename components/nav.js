import Link from 'next/link';
import { useState } from 'react';
import * as Scroll from 'react-scroll';
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap text-white p-6">
        <div className="flex items-center flex-shrink-0 flex-grow text-white mr-6">
          <a href="#">
            <span className="font-semibold text-white  font-header text-xl tracking-tight">
              Tunde Onasanya
            </span>
          </a>
        </div>
        <div className="block lg:hidden" onClick={() => setOpen(!open)}>
          <button className="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-black hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto lg:pr-8`}
        >
          <div className="text-sm">
            <Link href="https://blog.tundeonasanya.dev">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer">
                Blog
              </span>
            </Link>
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer"
              >
                About
              </span>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span
                href="#projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer"
              >
                Projects
              </span>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span
                href="#testimonials"
                className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 cursor-pointer"
              >
                Testimonials
              </span>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <span
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 mb-4 cursor-pointer"
              >
                Contact
              </span>
            </ScrollLink>
          </div>
        </div>
      </nav>
    </>
  );
}
