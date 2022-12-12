const portfolioDetails = [
  {
    id: 1,
    projectName: 'E-commerce Microservice',
    shortDesc:
      'This project is an Ecommerce web application with its backend architecture implemented in a microservice pattern with a monolithic frontend. ',
    web: 'https://github.com/rammyblog/ecommerce-microservice',
    github: 'https://github.com/rammyblog/ecommerce-microservice',
    longDesc:
      'This project is an Ecommerce web application with its backend architecture implemented in a microservice pattern with a monolithic frontend. ',
    skills: [
      'Node',
      'GraphQL',
      'Docker',
      'Kafka',
      'Zookeeper',
      'React',
      'NextJs',
    ],
    engagementPeriod: 'June - Nov 2022',
    image:
      'https://res.cloudinary.com/rammy/image/upload/v1670870535/portfolio/ecommerce-ms.png',
  },
  {
    id: 1,
    projectName: 'CodeClan Nigeria',
    shortDesc:
      'I led the frontend team that built an open-source web app where new developers can learn different stacks and get assigned a mentor to guide them through the program.',
    web: 'https://www.codeclannigeria.dev',
    github: 'https://github.com/codeclannigeria/codeclannigeria-frontend',
    longDesc:
      'I led the frontend team that built an open-source web app where new developers can learn different stacks and get assigned a mentor to guide them through the program.',
    skills: ['ReactJs', 'Styled Components', 'Bootstrap', 'AntD'],
    engagementPeriod: 'May - August 2020',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108159/portfolio/codeclan_community.png',
  },
  {
    id: 2,
    projectName: 'MERN DASH',
    shortDesc:
      'An admin dashboard built using Node, Express, MongoDB and Reactfor managing users easily. ',
    web: 'https://github.com/rammyblog/MERN-Admin-Dashboard',
    github: 'https://github.com/rammyblog/MERN-Admin-Dashboard',
    longDesc:
      'An admin dashboard built using Node, Express, Node and React to for managing users easily. Coming from a django background, there is a free admin panel all models, So I decided to build one with MERN so I could easily manage the user data easily.',
    skills: [
      'HTML5',
      'CSS',
      'Node',
      'Express',
      'MongoDB',
      'ReactJs',
      'Styled Components',
      'AntD',
    ],
    engagementPeriod: 'August 2020',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108161/portfolio/merndash.png',
  },

  {
    id: 2,
    projectName: 'Foodo!',
    shortDesc:
      'A simple ordering system that uses paystack as payment gateway. ',
    web: 'https://github.com/rammyblog/food-order',
    github: 'https://github.com/rammyblog/food-order',
    longDesc: '',
    skills: [
      'HTML5',
      'CSS',
      'Node',
      'Express',
      'MongoDB',
      'ReactJs',
      'chakra UI',
    ],
    engagementPeriod: 'June 2021',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1623424460/portfolio/Screenshot_2021-06-11_at_16-05-37_Foodo.png',
  },

  {
    id: 2,
    projectName: 'Book rental API',
    shortDesc:
      'Book rental API is an API that allow the users to read books and genre information data from database. ',
    web: 'https://github.com/rammyblog/book-rental-api',
    github: 'https://github.com/rammyblog/book-rental-api',
    longDesc: '',
    skills: ['Node', 'Express', 'Typescript', 'Mongoose', 'Zod'],
    engagementPeriod: 'June 2021',
    image:
      'https://res.cloudinary.com/rammy/image/upload/v1670871427/Screenshot_2022-12-12_at_19-56-52_Book_Rental_App.png',
  },

  {
    id: 3,
    projectName: 'pTracker',
    shortDesc:
      'pTracker is an application that tracks prices of products on E-commerce websites(i.e. Jumia and Konga),All you need to do is add the product on your dashboard. Then you will receive an email alert once the product sells at your desired price or lower.',
    web: 'https://github.com/rammyblog/PriceTracker',
    github: 'https://github.com/rammyblog/PriceTracker',
    longDesc:
      'pTracker is an application that tracks prices of products on E-commerce websites(i.e. Jumia and Konga),All you need to do is add the product on your dashboard. Then you will receive an email alert once the product sells at your desired price or lower.',
    skills: [
      'HTML5',
      'CSS',
      'Django',
      'Django Rest Framework',
      'Celery',
      'ReactJs',
      'Next.js',
      'AntD',
    ],
    engagementPeriod: 'July 2020',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108161/portfolio/pTracker.png',
  },

  {
    id: 4,
    projectName: 'BaseMailer',
    shortDesc:
      'An email marketing platform aimed at ensuring users send emails with great ease.',
    web: 'https://basemailer.com/',
    github: 'https://github.com/rammyblog/',
    longDesc:
      'An email marketing platform aimed at ensuring users send emails with great ease.',
    skills: [
      'Python',
      'Django',
      'Django Rest Framework',
      'Celery',
      'Redis',
      'PostgreSQL',
    ],
    engagementPeriod: 'May 2020',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108158/portfolio/basemailer.png',
  },

  {
    id: 5,
    projectName: 'Devconnector',
    shortDesc:
      'Create Developer profile/portfolio, share posts and get help from other developers',
    web: 'https://github.com/rammyblog/dev-connect',
    github: 'https://github.com/rammyblog/dev-connect',
    longDesc:
      ' It is a small social network app that includes authentication, profiles and forum posts.',
    skills: [
      'HTML5',
      'CSS',
      'SASS',
      ' Django',
      'Django Rest Framework',
      'ReactJs',
      'Next.js',
    ],
    engagementPeriod: 'May 2020',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108158/portfolio/devconnectz-netlify-app.png',
  },
  {
    id: 8,
    projectName: 'FnF',
    shortDesc: 'I built a music sharing platform for a music artist',
    web: 'https://freestyles-n-features.vercel.app/',
    github: '#',
    longDesc: '',
    skills: ['React', 'NextJs', 'HTML5', 'CSS'],
    engagementPeriod: 'January 2021',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108160/portfolio/macro.png',
  },
  {
    id: 9,
    projectName: 'Covid 19 News',
    shortDesc:
      'Development of a new scraper, web app and mobile application to share news about the Covid-19 pandemic in Nigeria',
    web: 'https://github.com/rammyblog/COVID-19-NEWS',
    github: 'https://github.com/rammyblog/COVID-19-NEWS',
    longDesc: ` This project was developed to help Nigeria get authentic news from her top media outlets.

      The media outlet that data will be scraped from include
      
      The Punch
      Vanguard
      Premium Times
      Nation Online
      Daily Post
      
      `,
    skills: [
      'HTML5',
      'CSS',
      'Python',
      ' Django',
      'Django Rest Framework',
      'ReactJs',
      'Beautiful Soup',
    ],
    engagementPeriod: 'April 2020',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108159/portfolio/covidnewsng-netlify-app.png',
  },
  {
    id: 10,
    projectName: 'Docufix',
    shortDesc:
      'This is an app that compares document content and find out the differences contained in each of the files',
    web: 'https://docufix.com.ng/',
    github: 'https://github.com/rammyblog/docufix',
    longDesc: `Docufix.io is one of the most innovative technology of our age. Built with the latest technical tools for files and data management, Docufix.io serves it's users with the ability to compare, check, and maintain their files and documents faster and easily.
    With the help of our finest refined data management algorithm, we help you sort, arrange, compare and extract information from different file formats. We give you the super power to compare two totally different documents in different file formats.
    
    With Docufix.io, you have the potential to know exactly the difference and similarities between two files, extract texts from the files and also download the files in file formats
    
    This magnificient tool was built by the most intellectual young programmers from the HNGi6 2019 Internship.
    `,
    skills: [
      'HTML5',
      'CSS',
      'Python',
      'Javascript',
      ' Django',
      'Django Rest Framework',
      'Jquery',
      'Beautiful Soup',
    ],
    engagementPeriod: 'November 2019',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108160/portfolio/docufix.png',
  },
  // {
  //   id: 11,
  //   projectName: "Afrivent",
  //   shortDesc: "Event Ticketing Web App",
  //   web: "https://afrivent.herokuapp.com/",
  //   github: "https://github.com/rammyblog/Afrivent",
  //   longDesc: `Easily sell tickets to your next event
  //   Secure, reliable and easy to use. Mauvera provides a seamless ticketing experience for you and your attendees

  //   `,
  //   skills: [
  //     "HTML5",
  //     "CSS",
  //     "Python",
  //     "Javascript",
  //     "Django",
  //     "Jquery",
  //     "Celery",
  //     "PyQRCode",
  //     "Redis",
  //   ],
  //   engagementPeriod: "December 2019",
  //   image:
  //     "https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108160/portfolio/afrivent.png",
  // },

  {
    id: 12,
    projectName: 'Currency Exchanger',
    shortDesc: 'An exchange rates website',
    web: 'https://rates-exchanger.now.sh/',
    github: 'https://github.com/rammyblog/currency-exchange-nextjs',
    skills: ['HTML5', 'CSS', 'Javascript', 'Tailwind Css', 'ReactJS', 'NextJs'],
    engagementPeriod: 'May 2020',
    image:
      'https://res.cloudinary.com/rammy/image/upload/f_auto,q_auto/v1614108160/portfolio/rates-exchanger-now-sh.png',
  },
];

export default portfolioDetails;
