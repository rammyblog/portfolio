import React from "react"
import ContactForm from "./ContactForm"

function Footer() {
  return (
    <>
      <div>
        <h2 className="text-3xl lg:text-5xl custom-box-shadow inline-block my-4">
          Reach Out to me!
        </h2>
        <p className="text-3xl">
          Interested in working together? Wherever you are with your idea or
          your project, I'll be happy to help. Ready to make a difference?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row w-full justify-between text-gray-800">
        <div className="text-xl custom-libre-font leading-loose py-2">
          <a>onasanyatunde67@gmail.com</a>
          <a className="block">+2349051053101</a>

          <p>
            <i class="fas fa-map-marker-alt"></i> Lagos , Nigeria{" "}
          </p>
          <p>Open for opportunities: Yes</p>
          <a href="https://twitter.com/simply_rammy">
            <i class="fab fa-twitter p-3 fa-2x transition duration-500 ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"></i>
          </a>

          <a href="https://github.com/rammyblog">
            <i class="fab fa-github p-3 fa-2x transition duration-500 ease-in-out  hover:text-white hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110"></i>
          </a>
          <a href="https://www.linkedin.com/in/onasanya-tunde/">
            <i class="fab fa-linkedin-in p-3 fa-2x transition duration-500 ease-in-out  hover:text-white hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110 "></i>
          </a>

          <a href="mailto:onasanyatunde67@gmail.com">
            <i class="fas fa-envelope p-3 fa-2x transition duration-500 ease-in-out  hover:text-white hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 "></i>
          </a>
        </div>
        <ContactForm />
      </div>
    </>
  )
}

export default Footer