import { useState } from "react"
import axios from "axios"

function ContactForm() {
  const [details, setDetails] = useState({
    name: null,
    email: null,
    message: null,
  })
  const [emailSent, setemailSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const { name, email, message } = details
    const subject = `${name} sent you an email from your portfolio website`
    const body = `From ${email}  <br/> ${message}`
    const sent_date = new Date().toISOString()

    try {
      const res = await axios.post(
        process.env.BASE_URL,
        {
          subject: subject,
          body: body,
          mailing_list: 89,
          sent_date: sent_date,
        },
        {
          headers: {
            Authorization: `Token ${process.env.TOKEN}`,
          },
        }
      )
      console.log(res)

      setemailSent(true)
    } catch (error) {
      console.log(error)
      setError(true)
    }
    setLoading(false)
  }
  return (
    <div className="px-8">
      <h2 className="text-xl lg:text-2xl inline-block px-0 custom-box-shadow mb-8">
        Send me a message
      </h2>
      {emailSent ? (
        <div className="bg-green-500 text-base text-white font-bold p-4">
          Email Sent Successfully
        </div>
      ) : null}

      {error ? (
        <div className="bg-red-500 text-base text-white font-bold p-4">
          There was an error sending the mail.
          <p>
            Kindly send the email to this address{" "}
            <a href="mailto:onasanyatunde67@gmail.com">
              onasanyatunde67@gmail.com
            </a>
          </p>
        </div>
      ) : null}
      <form class="w-full max-w-lg " onSubmit={handleSubmit}>
        <div class="flex flex-wrap mb-6">
          <div class="w-full md:w-1/2 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray border border-gray-200-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
      focus:bg-white"
              required
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="name"
              onChange={handleChange}
              value={details.name}
            />
          </div>
          <div class="w-full md:w-1/2 p-0 lg:px-4 ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700
       border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              required
              placeholder="Doe@gmail.com"
              name="email"
              onChange={handleChange}
              value={details.email}
            />
          </div>
        </div>
        <div class=" mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full p-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            cols="30"
            required
            row="20"
            onChange={handleChange}
            value={details.message}
            name="message"
          />
          {/* <input
            class=""
            id="message"
            type="text"
            placeholder="message"
          /> */}
        </div>
        <input
          disabled={loading}
          type="submit"
          className="font-normal bg-white transition duration-500 
                        ease-in-out  hover:text-white hover:bg-blue-500 transform hover:-translate-y-1 
                         shadow-outline text-blue-500 rounded border-blue-500 px-8 py-2 my-8"
        />
      </form>
    </div>
  )
}

export default ContactForm
