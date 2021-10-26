import React, { Fragment, useState } from "react"
import Image from "next/image"

const ProjectCard = ({ project }) => {
  const [hoverProject, setHoverProject] = useState(false)

  return (
    <article className="max-w-xl">
      <div
        className="px-6 pt-6 pb-4 rounded-xl transform hover:scale-110 hover:shadow-xl transition duration-500"
        onMouseEnter={() => setHoverProject(true)}
        onMouseLeave={() => setHoverProject(false)}
      >
        <a href={project.link}>
          <div className="">
            <img
              className="w-full rounded-xl"
              src={project.image}
              alt="Project background image"
            />
          </div>
          <h1 className="mt-4 text-3xl text-gray-600">{project.title}</h1>
          <div
            className={`mt-8 font-light text-gray-500 opacity-0 ${
              hoverProject && "opacity-100"
            }`}
          >
            <p className="mb-8">{project.description}</p>
            <a
              className="hover:text-red-300 border-b-2 transition duration-300"
              href={project.link}
            >
              Demo
            </a>
            {project.repo && (
              <Fragment>
                <span> | </span>
                <a
                  className="hover:text-red-300 border-b-2 transition duration-300"
                  href={project.repo}
                >
                  Code
                </a>
              </Fragment>
            )}
          </div>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
