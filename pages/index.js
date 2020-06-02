import Nav from "../components/nav"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <Header />
        <About />
        <Projects />
      </div>
    </div>
  )
}
