import React from "react"

function VerticalCard({ testimonial }) {
  const { testimonial: desc, name, linkedin, jobTitle } = testimonial
  return (
    <div className="rounded shadow-lg p-6 custom-libre-font text-gray-700">
      <p>
        <i class="fas fa-quote-left fa-2x px-4"></i>
        {desc}
      </p>
      <span className="float-right pt-4">
        <a className="text-blue-500 font-semibold" href={linkedin}>
          {name}
        </a>
        , {jobTitle}
      </span>
    </div>
  )
}

export default VerticalCard
