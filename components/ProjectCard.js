import React from "react"
import Image from "next/image"

const ProjectCard = ({ project }) => {
  return (
    <article>
      <div className="rounded-lg transform hover:scale-110 hover:shadow-xl transition duration-500">
        <a href={project.link}>
          <figure className="mb-2">
            <Image width={384} height={284} src={project.image} className="h-64 ml-autor mr-auto w-full rounded-lg" alt="Project background image" />
            <div className="absolute bottom-2 left-5 text-white text-2xl">
              <p>{project.title}</p>
            </div>
          </figure>
        </a>
      </div>

      <div className="mt-8 font-light text-gray-500 ml-2">
        <a
          className="hover:text-red-300 border-b-2 transition duration-300"
          href={project.link}
        >Demo</a>
        <span>{" "}|{" "}</span>
        <a 
          className="hover:text-red-300 border-b-2 transition duration-300"
          href={project.repo}
        >Code</a>
      </div>
    </article>
  )
}

export default ProjectCard
