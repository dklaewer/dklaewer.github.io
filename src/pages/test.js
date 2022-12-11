import React from 'react'
import '../styles/global.css' // Import Tailwind styles

const PortfolioPage = () => {
    return (
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <div className="flex flex-wrap">
          <ProjectCard
            name="Project 1"
            description="This is a description of project 1"
            image="https://picsum.photos/id/237/600/400"
            refpage="https://www.google.com"
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

const ProjectCard = ({ name, description, image, refpage }) => {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={name} className="w-full" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={refpage} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              View project
            </a>
          </div>
        </div>
      </div>
    )
  }

export default PortfolioPage
