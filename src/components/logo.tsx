import React from 'react'
import downloadIcon from "../assets/download-btn-icon.svg";

const Logo = () => {
  return (
    <div>

<img
        src={downloadIcon}
        alt="Davamen Logo"
        className="fixed -translate-x-1/2 top-0 left-0 m-4 w-30 h-16"
      />

    </div>
  )
}

export default Logo;