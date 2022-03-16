import React from "react"

import {
  DiPython,
  DiDjango,
  DiJavascript1,
  DiJava,
  DiNodejs,
  DiReact,
  DiPostgresql,
  DiDocker,
  DiAws,
  DiHtml5,
  DiCss3,
  DiLinux,
} from "react-icons/di"

import { SiApachekafka, SiApacheairflow, SiNextdotjs, SiRabbitmq, SiCelery, SiRedis, SiSpring } from 'react-icons/si'

const Skills = () => {
  return (
    <section>
      <h1 className="pb-12 tracking-widest text-2xl font-bold uppercase">
        Skills
      </h1>

      <div className="flex flex-wrap justify-evenly">
        <div>
          <DiPython style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">Python</p>
        </div>

        <div>
          <DiDjango style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">Django</p>
        </div>

        <div>
          <DiJavascript1 style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">JavaScript</p>
        </div>

        <div>
          <DiNodejs style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">Node</p>
        </div>

        <div>
          <DiReact style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">React</p>
        </div>

        <div>
          <DiJava style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">Java</p>
        </div>

        <div>
          <SiSpring style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">Spring</p>
        </div>

        <div>
          <DiPostgresql style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">PostgreSQL</p>
        </div>

        <div>
          <DiDocker style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">Docker</p>
        </div>

        <div>
          <DiAws style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">AWS</p>
        </div>

        <div>
          <DiLinux style={{ color: "gray", fontSize: "75px" }} />
          <p className="text-gray-500 text-center mt-2">Linux</p>
        </div>

      </div>

      <div className="flex justify-evenly mt-4 max-w-3xl mx-auto">
        <div>
          <SiRedis style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center mt-2">Redis</p>
        </div>

        <div>
          <SiCelery style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center mt-2">Celery</p>
        </div>

        <div>
          <SiNextdotjs style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center mt-2">Next.js</p>
        </div>

        <div>
          <DiHtml5 style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center mt-2">HTML</p>
        </div>

        <div>
          <DiCss3 style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center mt-2">CSS</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
