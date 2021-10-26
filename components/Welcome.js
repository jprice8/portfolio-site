import React from 'react'

const Welcome = () => {
  return (
    <section className="text-2xl font-light text-gray-600">
      <p>
        See what I&apos;ve been working on below. Or find my
        <a className="hover:text-red-300 border-b-2 font-bold transition duration-300" href="https://jacksonprice-site-files.s3.us-east-2.amazonaws.com/website/resume_sep_2021.docx">
          {" "}Resume{" "}
        </a>
        and{" "}
        <a className="hover:text-red-300 border-b-2 font-bold transition duration-300" href="mailto:jacksonprice321@gmail.com">
          Email.
        </a>
      </p>
      
    </section>
  )
}

export default Welcome
