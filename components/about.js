import React from "react"

function About() {
  const softwareSkills = [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5",
      color: "bg-red-500",
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt",
      color: "bg-blue-500",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress",
    },
    {
      skillName: "JQuery",
      fontAwesomeClassname: "devicon-jquery-plain",
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "devicon-heroku-original",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "devicon-django-plain",
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain",
    },
  ]

  return (
    <>
      <div className="flex flex-row pt-10 ">
        <p>
          I'm a motivated full stack Developer and Computer Engineering
          undergraduate with great passion for building excellent softwares.
          <span
            class="iconify"
            data-icon="logos-nextjs"
            data-inline="false"
          ></span>
          <span
            class="iconify"
            data-icon="logos-tailwindcss-icon"
            data-inline="false"
          ></span>
        </p>
        <div>
          {softwareSkills.map((skill, idx) => (
            <i key={idx} className={skill.fontAwesomeClassname} />
          ))}
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
