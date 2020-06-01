import Nav from "../components/nav"
import Header from "../components/header"
import About from "../components/about"

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto">
        <Header />
        <About />
      </div>
    </div>
  )
}
