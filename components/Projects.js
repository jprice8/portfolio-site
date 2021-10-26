import React from "react"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    id: 1,
    title: "Par Level Reset",
    description:
      "A web based system to identify and reduce non-moving and excess inventory.",
    tools: "Python, Django, PostgreSQL, ReactJS, Docker, Kubernetes, GCP.",
    image: "/plr_demo.png",
    link: "https://par-level-reset-demo.vercel.app/",
    repo: null,
  },
  {
    id: 2,
    title: "Code Review",
    description:
      "A static NextJS app to help visualize common data structures and algorithms.",
    tools: "ReactJS, Gatsby, Vercel.",
    image: "/code_review.png",
    link: "https://code-review-rho.vercel.app/",
    repo: "https://github.com/jprice8/code-review",
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
