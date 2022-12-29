import React, { useState } from 'react'
import '../styles/global.css' // Import Tailwind styles
import pubdata from '../data/publications.json'
import { MathJaxContext, MathJax } from 'better-react-mathjax'


const MainPage = () => {
    return (
      <MathJaxContext>
        <div className="container mx-auto">
          <NavigationBar></NavigationBar>
          <div className="flex flex-wrap">
            {PublicationCards}
          </div>
        </div>
      </MathJaxContext>
    )
  }

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Daniel Kläwer</span>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="text-sm lg:flex-grow">
              <NavigationBarItem href="https://www.google.com" title="CV"/>
              <NavigationBarItem href="https://www.google.com" title="Publications"/>
              <NavigationBarItem href="https://www.google.com" title="Talks"/>
              <NavigationBarItem href="https://www.google.com" title="About"/>
            </div>
          </div>
        </nav>
      </div>
    )
}

const NavigationBarItem = ({ href, title }) => {
    return (
      <a href={href} className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
        {title}
      </a>
    )
}

const ProjectCard = ({ name, description, image, arxiv, doi, journal }) => {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={name} className="w-full" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{name}</h3>
            <p className="text-gray-600 text-justify mb-4">
              <MathJax>{description}</MathJax>
            </p>
            <a href={arxiv} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              ArXiv
            </a>
            <a href={doi} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              {journal}
            </a>
          </div>
        </div>
      </div>
    )
  }

const PublicationCards = pubdata.map((item) => {
  return (
    <ProjectCard
      name={item.title}
      description={item.abstract}
      image="https://picsum.photos/id/237/600/400"
      arxiv={item.arxiv}
      doi={item.doi}
      journal={item.journal}
    />
  )
})

export default MainPage
