import Link from "next/link"
import { useState } from "react"
import * as Scroll from "react-scroll"
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap text-gray-700 p-6">
        <div className="flex items-center flex-shrink-0 flex-grow text-gray-700 mr-6">
          <span className="font-semibold text-gray-700  font-header text-xl tracking-tight">
            Onasanya Tunde
          </span>
        </div>
        <div className="block lg:hidden" onClick={() => setOpen(!open)}>
          <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-teal-400 hover:text-black hover:border-white">
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
            open ? "block" : "hidden"
          } w-full lg:block lg:flex lg:items-center lg:w-auto lg:pr-8`}
        >
          <div className="text-sm">
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              >
                About
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              >
                Projects
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#testimonials"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700  mr-4"
              >
                Testimonials
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700  mr-4 mb-4"
              >
                Contact
              </a>
            </ScrollLink>

            <a
              href="#"
              className="font-normal bg-white transition duration-500 
                        ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1 
                         shadow-outline text-blue-500 rounded border-blue-500 px-8 py-2 mt-8 lg:mt-0 mr-4"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
