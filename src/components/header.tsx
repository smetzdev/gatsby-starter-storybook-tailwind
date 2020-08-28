import React from "react"

type headerProps = {
  title: string
}

const Header = ({ title }: headerProps) => {
  return (
    <header className="bg-indigo-500 py-8">
      <div className="container">
        <h1 className="text-white md:text-3xl font-semibold">{title}</h1>
      </div>
    </header>
  )
}

export default Header
