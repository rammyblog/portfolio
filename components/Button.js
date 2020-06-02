import React from "react"

function Button({ text, link }) {
  return (
    <>
      <a
        href={link}
        className="font-normal bg-white transition duration-500 
                        ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1 
                         shadow-outline text-blue-500 rounded border-blue-500 px-8 py-2 mx-4"
      >
        {text}
      </a>
    </>
  )
}

export default Button
