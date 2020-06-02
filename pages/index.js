import Nav from "../components/nav"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Testimonials from "../components/Testimonials"

export default function IndexPage() {
  return (
    <div>
      <div className="container mx-auto">
        <Nav />
        <Header />
        <About />
        <Projects />
        <Testimonials />
      </div>
    </div>
  )
}
