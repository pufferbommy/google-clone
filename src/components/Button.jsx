import React from 'react'

const Button = ({ title }) => {
  return (
    <button className="bg-gray-100 rounded px-3 py-1 border border-transparent hover:border-current hover:border-gray-300 hover:shadow">
      {title}
    </button>
  )
}

export default Button
