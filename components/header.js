import Typed from "react-typed"

function Header() {
  return (
    <>
      <div className="flex p-0 md:py-20 lg:py-20 justify-center items-center flex-col  text-gray-800 text-center h-screen mb-10 ">
        <h1 className="font-extrabold text-xl md:text-5xl lg:text-6xl">
          Hi! <span className="text-md font-medium">👋</span>, I'm{" "}
          <span className="text-blue-500 shadow-md custom-box-shadow">
            Onasanya Babatunde.
          </span>
          <span className="block text-lg pt-4  md:text-4xl lg:text-4xl font-normal text-center">
            <Typed
              strings={[
                "I'm a full-stack web developer.",
                "Computer Engineering Student",
                "Motivated, Passionate, Talented",
              ]}
              loop={true}
              typeSpeed={40}
            />
          </span>
        </h1>
        <div className="text-3xl py-2">
          <a href="https://twitter.com/simply_rammy">
            <i class="fab fa-twitter p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"></i>
          </a>

          <a href="https://github.com/rammyblog">
            <i class="fab fa-github p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110"></i>
          </a>
          <a href="https://www.linkedin.com/in/onasanya-tunde/">
            <i class="fab fa-linkedin-in p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110 "></i>
          </a>

          <a href="mailto:onasanyatunde67@gmail.com">
            <i class="fas fa-envelope p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 "></i>
          </a>
        </div>
        <img
          className="w-full lg:w-2/4 max-w-full h-auto"
          src="./developer_activity.png"
        />
      </div>
    </>
  )
}

export default Header
