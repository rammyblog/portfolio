import portfolioDetails from "./portfolio"
import Card from "./card"
import { Card } from "antd"

const { Meta } = Card

function Projects() {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="./portfolio_images/covidnewsng-netlify-app.png"
            sud
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  )
}

export default Projects
