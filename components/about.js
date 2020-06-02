import React from "react"

function About() {
  const softwareSkills = [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5",
      color: "bg-red-600",
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt",
      color: "bg-blue-500",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      color: "bg-yellow-300",
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
      color: "bg-blue-500",
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "devicon-django-plain",
      color: "bg-green-800",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
      color: "bg-blue-300",
    },

    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
      color: "bg-red-600",
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress",
      color: "bg-gray-700",
    },
    {
      skillName: "JQuery",
      fontAwesomeClassname: "devicon-jquery-plain",
      color: "bg-blue-600",
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
      color: "bg-indigo-700",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
      color: "bg-gray-900",
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github",
      color: "bg-gray-900",
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "devicon-heroku-original",
      color: "bg-blue-700",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      color: "bg-red-600",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      color: "bg-blue-500",
    },

    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain",
      color: "bg-blue-500",
    },
  ]

  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row pt-0 md:pt-10 lg:pt-10 ">
        <div className="w-full order-first md:order-last lg:order-last pt-20 px-4">
          <h2 className="text-3xl lg:text-5xl custom-box-shadow inline-block">
            About me & What I do
          </h2>
          <p className=" text-sm pt-4 text-gray-700 text-justify custom-libre-font">
            I'm a motivated full stack Developer and Computer Engineering
            undergraduate with great passion for building excellent softwares. I
            build fun stuffs using mostly Python and JavaScript. I offer 2 years
            of development experience, a strong aptitude for learning new
            technologies, and a proven track record of meeting aggressive goals.
            My most notable skills include:
          </p>
          <div className="grid grid-cols-3 ">
            {softwareSkills.map((skill, idx) => (
              <div key={idx} className="tooltip inline">
                <i
                  className={`text-gray-500 text-4xl  p-5 mx-5 transition duration-500
                 ease-in-out  hover:text-white hover:${skill.color} transform hover:-translate-y-1 hover:scale-110 ${skill.fontAwesomeClassname} `}
                />
                <span
                  className={`tooltip-text border rounded text-white mt-0 -m-16 ${skill.color} `}
                >
                  {skill.skillName}
                </span>
              </div>
            ))}
            <div className="flex tooltip">
              <div>
                <span
                  className="iconify text-gray-500 text-4xl  m-8 transition duration-500
                ease-in-out  hover:text-white transform hover:-translate-y-1 hover:scale-110"
                  data-icon="logos:nextjs"
                  data-inline="false"
                ></span>
                <span
                  className={`tooltip-text border rounded text-black mt-0  `}
                >
                  Next.js
                </span>
              </div>

              <div className="tooltip">
                <span
                  className="iconify text-gray-500 text-4xl  m-8 transition duration-500
              ease-in-out  hover:text-white transform hover:-translate-y-1 hover:scale-110"
                  data-icon="logos-tailwindcss-icon"
                  data-inline="false"
                ></span>
                <span
                  className={`tooltip-text border rounded text-blue-300 mt-0 ml-32  `}
                >
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="./about_me.png" />
        </div>
      </div>
    </>
  )
}

export default About

// I'm basically a really creative, fun and talented guy. I'm also an expert front-end web developer who's really good in React,
// Next, Gatsby and Vanilla JS as well. I've been coding for 4 years now.

// I’m very passionate about building excellent software that improves the lives of those around me.
//  So I create powerful software for clients ranging from your friendly neighbour all the way to large corporations.

// When I'm not smacking a keyboard, you can bet I'm either playing a piano or a video game, eating or spending time with my family.
