import React from "react"

function ContactForm() {
  return (
    <>
      <form class="w-full max-w-lg p-8 ">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
      focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700
       border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="Doe@gmail.com"
            />
          </div>
        </div>
        <div class="mb-4 -mx-3 mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full p-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            cols="30"
            row="20"
          />
          {/* <input
            class=""
            id="message"
            type="text"
            placeholder="message"
          /> */}
        </div>
      </form>
    </>
  )
}

export default ContactForm
