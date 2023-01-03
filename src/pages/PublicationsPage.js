import React from 'react';
import pubdata from '../data/publications.json';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

export default function PublicationsPage() {
  return (
    <MathJaxContext>
      <div className="columns-1 md:columns-2 lg:columns-3">
        {PublicationCards}
      </div>
    </MathJaxContext>
  );
}

const PublicationCard = ({ name, description, image, arxiv, doi, journal }) => {
  return (
    <div className="m-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2">{name}</h2>
            <img src={image} alt="" className="w-full" />
          <p className="text-gray-600 text-justify mb-4">
            <MathJax>{description}</MathJax>
          </p>
          <a href={arxiv} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg mx-1">
            ArXiv
          </a>
          <a href={doi} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg mx-1">
            {journal}
          </a>
        </div>
      </div>
    </div>
  );
};

const PublicationCards = pubdata.map((item) => {
  return (
    <PublicationCard
      name={item.title}
      description={item.abstract}
      image={item.image}
      arxiv={item.arxiv}
      doi={item.doi}
      journal={item.journal} />
  );
});
