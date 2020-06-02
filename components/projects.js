import portfolioDetails from "./portfolio"
import Card from "./card"
import Button from "./Button"
import { Element } from "react-scroll"
// import { Card } from "antd"

// const { Meta } = Card

function Projects() {
  return (
    <Element name="projects" className="element">
      <div className="px-4 md:px-0 lg:px-0 mt-10">
        <h2 className="text-3xl lg:text-5xl custom-box-shadow inline-block mb-6">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
          {portfolioDetails.map((project, idx) => (
            <div key={idx} className="mt-4">
              <Card project={project} />
              {/* <Card
            className="bg-blue-200"
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="./portfolio_images/covidnewsng-netlify-app.png"
              />
            }
          >
            <Meta
              className="font-bold"
              title={project.projectName}
              description={project.shortDesc}
            />
          </Card> */}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            text={"See more Projects"}
            link="https://github.com/rammyblog"
          />
        </div>
      </div>
    </Element>
  )
}

export default Projects
