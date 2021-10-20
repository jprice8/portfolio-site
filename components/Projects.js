import React from "react"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    id: 1,
    title: "Par Level Reset",
    description:
      "A web app to identify and reduce non-moving and excess inventory.",
    tools: "Python, Django, PostgreSQL, ReactJS, Docker, Kubernetes, GCP.",
    image: "/placeholder.jpeg",
    link: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "Code Review",
    description:
      "A static React app to help visualize common data structures and algorithms.",
    tools: "ReactJS, Gatsby, Vercel.",
    image: "/placeholder.jpeg",
    link: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A project that implements all of my system design study along with Backend Engineer topics.",
    tools: "Kafka, Airflow, Spark, AWS, Either GoLang or Java.",
    image: "/placeholder.jpeg",
    link: "#",
    repo: "#",
  },
]

const Projects = () => {
  return (
    <section className="py-12">
      <h1 className="pb-12 tracking-widest text-2xl font-bold uppercase">
        Projects
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
