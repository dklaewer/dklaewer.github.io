import React from 'react';
import pubdata from '../data/publications.json';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

export default function PublicationsPage() {
  return (
    <MathJaxContext>
      <div className="flex flex-wrap">
        {PublicationCards}
      </div>
    </MathJaxContext>
  );
}

const ProjectCard = ({ name, description, image, arxiv, doi, journal }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} className="w-full" />
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
  );
};

const PublicationCards = pubdata.map((item) => {
  return (
    <ProjectCard
      name={item.title}
      description={item.abstract}
      image={item.image}
      arxiv={item.arxiv}
      doi={item.doi}
      journal={item.journal} />
  );
});
