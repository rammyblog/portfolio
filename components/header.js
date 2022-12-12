import Typed from 'react-typed';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import Button from './Button';

function Header() {
  const handleScroll = () => {
    scroll.scrollMore(700);
  };
  const headingButtonDetails = [
    {
      text: 'Download my Resume',
      link: 'https://docs.google.com/document/d/1v8eCsG_eLnftjjCVV5AZCtbNPYAnWBz_g0cT3bibA-8/edit',
    },
    { text: 'Contact Me', link: '#contact' },
  ];
  return (
    <>
      <div className="flex justify-center items-center flex-col  text-white text-center h-84-screen mb-0 lg:mb-10 ">
        <div className="rounded-full flex items-center justify-center w-40">
          <img
            src="./onasanya_tunde.jpg"
            className="rounded-full h-40 w-40  flex items-center justify-center"
          />
        </div>
        <h1 className="font-extrabold text-xl md:text-5xl lg:text-6xl">
          Hi! <span className="text-md font-medium">👋</span>, I'm{' '}
          <span className="text-blue-500 shadow-md custom-box-shadow">
           Babatunde Onasanya.
          </span>
          <span className="block text-lg pt-4  md:text-4xl lg:text-4xl font-normal text-center">
            <Typed
              strings={[
                "I'm a full-stack web developer.",
                'Motivated, Passionate, Talented',
              ]}
              loop={true}
              typeSpeed={50}
              backSpeed={20}
              backDelay={3000}
              smartBackspace={false}
              cursorChar={'_'}
            />
          </span>
        </h1>
        <div className="text-3xl py-2">
          <a href="https://twitter.com/simply_rammy">
            <i className="fab fa-twitter p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"></i>
          </a>

          <a href="https://github.com/rammyblog">
            <i className="fab fa-github p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-gray-900 transform hover:-translate-y-1 hover:scale-110"></i>
          </a>
          <a href="https://www.linkedin.com/in/onasanya-tunde/">
            <i className="fab fa-linkedin-in p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110 "></i>
          </a>

          <a href="mailto:onasanyatunde67@gmail.com">
            <i className="fas fa-envelope p-3 transition duration-500 ease-in-out  hover:text-white hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 "></i>
          </a>
        </div>

        <div className="flex ">
          {headingButtonDetails.map((detail, idx) => (
            <Button text={detail.text} link={detail.link} key={idx} />
          ))}
        </div>
        {/* <img
          className="w-full lg:w-2/4 max-w-full h-auto"
          src="./developer_activity.png"
        /> */}
        <div onClick={handleScroll} className="mt-4">
          <i className="fa fa-angle-down fa-3x animate__animated animate__infinite  animate__animated animate__bounce animate__infinite animate__slow	 text-blue-500 mx-auto"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
