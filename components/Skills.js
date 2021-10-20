import React from 'react'

import {
  DiPython,
  DiDjango,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiPostgresql,
  DiDocker,
  DiAws,
  DiHtml5,
  DiCss3,
  DiLinux
} from 'react-icons/di'

const Skills = () => {
  return (
    <section className="py-12">
      <h1 className="pb-12 tracking-widest text-2xl font-bold uppercase">Skills</h1>

      <div className="flex justify-between">
        <div>
          <DiPython style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">Python</p>
        </div>

        <div>
          <DiDjango style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">Django</p>
        </div>

        <div>
          <DiJavascript1 style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">JavaScript</p>
        </div>

        <div>
          <DiNodejs style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">Node</p>
        </div>

        <div>
          <DiReact style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">React</p>
        </div>

        <div>
          <DiPostgresql style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">PostgreSQL</p>
        </div>

        <div>
          <DiDocker style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">Docker</p>
        </div>

        <div>
          <DiAws style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">AWS</p>
        </div>

        <div>
          <DiLinux style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">Linux</p>
        </div>

        <div>
          <DiHtml5 style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">HTML</p>
        </div>

        <div>
          <DiCss3 style={{color: 'gray', fontSize: '75px' }} />
          <p className="text-gray-500 text-center">CSS</p>
        </div>

      </div>
    </section>
  )
}

export default Skills
