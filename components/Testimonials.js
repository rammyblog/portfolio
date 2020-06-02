import React from "react"
import VerticalCard from "./VerticalCard"

const testimonials = [
  {
    testimonial:
      "I hired Tunde to help with our company's re-branding and growth effort, He was reliable, flexible, dedicated and fully responsive. I highly recommend him for any role that may require his skills and expertise.",
    name: "Victor Sunday",
    linkedin: "https://ng.linkedin.com/in/victor-sunday-59bb8178",
    jobTitle: "Sales Manager",
  },
  {
    testimonial:
      "He's a very good developer with passion to make a difference. He's built a lot of applications and I really would endorse him.",
    name: "Adewale Bukunmi",
    linkedin: "https://www.linkedin.com/in/oluwabukunmiadewale3/",
    jobTitle: "Fullstack Developer",
  },
]

function Testimonials() {
  return (
    <div className="p-8">
      <h2 className="text-3xl lg:text-5xl custom-box-shadow inline-block my-4">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, idx) => (
          <VerticalCard testimonial={testimonial} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
