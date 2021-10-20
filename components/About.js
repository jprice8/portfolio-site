import React from "react"

const About = () => {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="pb-12 tracking-widest text-2xl font-bold uppercase">About</h1>

      <div className="font-light text-lg space-y-6 text-gray-700">
        <p className="py-2">
          I'm a software developer with experience both building cloud native
          software as well as managing software oriented projects within an
          enterprise. I've worked in project management roles as well as
          business strategy and development roles. Most recently I worked as a
          business system's analyst for Tenet healthcare. However, I am now
          looking to move into a software engineering role. Some of the tools
          I've worked with in the past include{" "}
          <span className="font-bold">
            Python / Django, Javascript, React, Redux, GraphQL, Node.js,
            PostgreSQL, AWS, GCP, Docker, Kubernetes, Git, HTML, TailwindCSS,
            and CSS.
          </span>
        </p>

        <p className="py-2">
          I was introduced to programming in undergrad and have been fascinated
          with the intersection of business and technology ever since. I find
          myself most interested in distributed systems, databases, networks,
          and system design. I enjoy solving hard problems and seeing how a
          thousand tiny pieces can make up a large scale system.
        </p>

        <p className="py-2">
          In my free time I enjoy travelling, playing golf, jogging, building
          computers and radios, and spending time with my family.
        </p>

        <p className="py-2">
          Thanks for visiting my page, and I look forward to connecting with
          you!
        </p>
        <p className="py-2 font-semibold">-Jackson</p>
      </div>
    </section>
  )
}

export default About
