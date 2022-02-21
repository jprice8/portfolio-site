import React from "react"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    id: 1,
    title: "Par Level Reset",
    description:
      "A full stack application to calculate and recommend weekly inventory changes to reduce excess inventory.",
    tools: "Python, Django, Celery, RabbitMQ, PostgreSQL, ReactJS, AWS.",
    image: "/plr_demo.png",
    link: "https://par-level-reset-demo.vercel.app/",
    repo: null,
  },
  {
    id: 2,
    title: "Reduction Toolkit",
    description: "A full stack application to help supply chain directors identify non-moving inventory and manage the reduction process.",
    tools: "ReactJS, Gatsby, Vercel.",
    image: "/toolkit_thumbnail.png",
    link: "https://reduction-toolkit-demo.vercel.app/",
    repo: null,
  },
]

const Projects = () => {
  return (
    <section className="">
      <h1 className="pb-12 tracking-widest text-2xl font-bold uppercase">
        Projects
      </h1>
      <div className="flex justify-between">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
