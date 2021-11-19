import React from "react"
import Follow from "./Follow"
import Form from "./Form"

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:gap-4 md:gap-32">
        <article className="col-span-2">
          <h1 className="uppercase tracking-widest font-bold text-xl">
            Get in Touch
          </h1>
          <div className="mt-4">
            <Form />
          </div>
        </article>


        <article className="sm:justify-center sm:justify-items-center sm:justify-self-center">
          <h1 className="uppercase tracking-widest font-bold text-xl pl-2">
            Follow
          </h1>
          <div className=" md:mt-2">
            <Follow />
          </div>
        </article>
      </div>
    </footer>
  )
}

export default Footer
