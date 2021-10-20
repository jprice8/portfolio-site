import React from "react"
import Follow from "./Follow"
import Form from "./Form"

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-24">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-2 gap-32">

          <article>
            <h1 className="uppercase tracking-widest font-bold text-xl">
              Get in Touch
            </h1>
            <div className="mt-4">
              <Form />
            </div>
          </article>

          <article>
            <h1 className="uppercase tracking-widest font-bold text-xl">
              Follow
            </h1>
            <div className="mt-2">
              <Follow />
            </div>
          </article>

        </div>
      </div>
    </footer>
  )
}

export default Footer
