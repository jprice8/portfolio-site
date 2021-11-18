import React from "react"

import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Follow = () => {
  return (
    <div className="">
      <div className="flex mt-4">
        <div className="pr-4">
          <a href="https://www.linkedin.com/in/jackson-price-883424b2/">
            <FaLinkedin style={{ color: "gray", fontSize: "45px" }} />
          </a>
        </div>
        <div className="">
          <a href="https://github.com/jprice8">
            <FaGithubSquare style={{ color: "gray", fontSize: "45px" }} />
          </a>
        </div>
      </div>

      <div className="font-semibold text-gray-700 space-y-2 mt-4">
        <h4>Jackson Price</h4>
        <h4>jacksonprice321@gmail.com</h4>
      </div>
    </div>
  )
}

export default Follow
