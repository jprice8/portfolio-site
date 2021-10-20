import React from 'react'

const Welcome = () => {
  return (
    <section className="text-lg font-light text-gray-800">
      <p>
        See what I&apos;ve been working on below. Or find my
        <a className="hover:text-red-300 border-b-2 font-bold transition duration-300" href="#">
          {" "}Resume{" "}
        </a>
        and{" "}
        <a className="hover:text-red-300 border-b-2 font-bold transition duration-300" href="#">
          Email.
        </a>
      </p>
      
    </section>
  )
}

export default Welcome
