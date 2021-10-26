import React from "react"

const About = () => {
  return (
    <section className="max-w-3xl">
      <h1 className="pb-12 tracking-widest text-2xl font-bold uppercase">
        About
      </h1>

      <div className="font-light text-lg space-y-6 text-gray-700">
        <p className="py-2">
          I&apos;m a software developer with experience both building cloud
          native software as well as managing software oriented projects within
          an enterprise. Ive worked in project management roles as well as
          business strategy and development roles. At the time of writing this,
          I am working for a large healthcare company with a focus on supply
          chain analytics. Some of the tools I&apos;ve worked with in the past
          include{" "}
          <span className="font-bold">
            Python, Django, Javascript, React, Redux, GraphQL, Node.js,
            PostgreSQL, AWS, GCP, Docker, Kubernetes, Git, HTML, TailwindCSS,
            and CSS.
          </span>
        </p>

        <p className="py-2">
          I find myself most interested in distributed systems, databases,
          networks, and system design. I enjoy solving hard problems and seeing
          how a thousand tiny pieces can make up a large scale system.
        </p>

        <p className="py-2">
          In my free time I enjoy travelling, playing golf, running, and
          spending time with my family.
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
