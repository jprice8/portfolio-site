import React from 'react'

import DevIcon from 'devicon-react-svg'

const iconStyle = {
  fill: "gray",
  width: "32px"
}

const Header = () => {
  return (
    <header>
      <div>
        <a className="flex">
          <span>
            <DevIcon icon="ruby" style={iconStyle} />
          </span>
          <span className="ml-2 text-2xl font-bold text-gray-700 tracking-wider">
            Jackson Price
          </span>
        </a>
      </div>
      
    </header>
  )
}

export default Header
