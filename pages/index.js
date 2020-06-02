import Nav from "../components/nav"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

export default function IndexPage() {
  return (
    <div>
      <div className="container mx-auto">
        <Nav />
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
