import React from "react"

const Form = () => {
  // Use formsubmit.co?
  return (
    <form
      action="https://formsubmit.co/99d7bea60778dcbe4a3328b66410bf3c"
      method="POST"
      className="space-y-6 mt-4"
    >
      <div className="grid grid-cols-2 gap-4 w-full">
        <input 
          type="text" 
          name="name" 
          id="name"
          placeholder="Name"
          required
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
        />

        <input 
          type="email" 
          name="email" 
          id="email"
          placeholder="Email"
          required
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
        />
      </div>

      <div className="mt-2">
        <textarea 
          name="message"
          id="message"
          rows="3" 
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
          placeholder="Message"
          required
          defaultValue={''}
        />
      </div>

      <div className="mt-2">
        <button
          type="submit"
          className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default Form
