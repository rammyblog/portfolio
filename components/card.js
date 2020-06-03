function Card({ project }) {
  const {
    projectName,
    shortDesc,
    web,
    github,
    longDesc,
    skills,
    engagementPeriod,
    image,
  } = project

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg min-h-full transition duration-500
    ease-in-out transform hover:-translate-y-1 hover:scale-110 "
    >
      <img className="w-full" src={image} alt={projectName} />
      <div className="px-6 py-4">
        <a href={web} className="block text-blue-500 font-bold text-xl mb-2 ">
          {projectName}
        </a>
        <p className="text-gray-700 text-base">{shortDesc}</p>
      </div>
      <div className="px-6 py-4">
        {skills.map((skill, id) => (
          <span
            key={id}
            className="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2"
          >
            #{skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card
