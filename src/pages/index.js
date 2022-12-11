import React, { useState } from 'react'
import '../styles/global.css' // Import Tailwind styles
import membranelimits from '../images/membrane-limits.png'

const MainPage = () => {
    return (
      <div className="container mx-auto">
        <NavigationBar></NavigationBar>
        {/* <h1 className="text-4xl font-bold mb-4 mt-4">My Portfolio</h1> */}
        <div className="flex flex-wrap">
          <ProjectCard
                  name="Membrane Limits in Quantum Gravity"
                  description="It is expected that infinite distance limits in the moduli space of quantum gravity are accompanied by a tower of light states. In view of the Emergent String Conjecture, this tower must either induce a decompactification or correspond to the emergence of a tensionless critical string. We study the consistency conditions implied by this conjecture on the asymptotic behaviour of quantum gravity under dimensional reduction. If the emergent string descends from a (2+1)-dimensional membrane in a higher-dimensional theory, we find that such a membrane must parametrically decouple from the Kaluza-Klein scale. We verify this censorship against emergent membrane limits, where the membrane would sit at the Kaluza-Klein scale, in the hypermultiplet moduli space of Calabi-Yau threefold compactifications of string/M-theory. At the classical level, a putative membrane limit arises, up to duality, from an M5-brane wrapping the asymptotically shrinking special Lagrangian 3-cycle corresponding to the SYZ fibre of the Calabi-Yau. We show how quantum corrections in the moduli space obstruct such a limit and instead lead to a decompactification to eleven dimensions, where the role of the M5- and M2-branes are interchanged."
                  image={membranelimits}
                  refpage="https://arxiv.org/abs/2112.09136"
              />
          <ProjectCard
                  name="Project 2"
                  description="This is a description of project 2"
                  image="https://picsum.photos/id/237/600/400"
                  refpage="https://www.google.com"
              />
          <ProjectCard
                  name="Project 3"
                  description="This is a description of project 3"
                  image="https://picsum.photos/id/237/600/400"
                  refpage="https://www.google.com"
              />
          <ProjectCard
                  name="Project 4"
                  description="This is a description of project 4"
                  image="https://picsum.photos/id/237/600/400"
                  refpage="https://www.google.com"
              />
        </div>
      </div>
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

const ProjectCard = ({ name, description, image, refpage }) => {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={name} className="w-full" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{name}</h3>
            <p className="text-gray-600 text-justify mb-4">{description}</p>
            <a href={refpage} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              ArXiv
            </a>
          </div>
        </div>
      </div>
    )
  }

export default MainPage
