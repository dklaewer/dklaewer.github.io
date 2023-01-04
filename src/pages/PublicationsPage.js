import React from 'react';
import pubdata from '../data/publications.json';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

export default function PublicationsPage() {
  return (
    <MathJaxContext>
      <div className="columns-1 md:columns-2 lg:columns-3 md:mt-4">
        {PublicationCards}
      </div>
    </MathJaxContext>
  );
}

const PublicationCard = ({ name, description, image, arxiv, doi, journal }) => {
  return (
    <div className="rounded border-b md:border border-neutral-700 shadow-lg overflow-hidden px-8 py-4 md:px-4 md:mb-4">
      <h1 className="font-bold text-white text-xl text-center">{name}</h1>
      <div>
        <div className="flex flex-wrap justify-center items-center">
          <img src={image} alt="" className="w-full rounded-sm my-3" />
        </div>
        <div className="mb-2">
          <p className="text-neutral-100 text-justify mb-4">
            <MathJax>{description}</MathJax>
          </p>
          <a href={arxiv} className="inline-block border border-neutral-700 hover:border-white text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 px-2 rounded-lg mr-2">
            ArXiv
          </a>
          <a href={doi} className="inline-block border border-neutral-700 hover:border-white text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 px-2 rounded-lg mr-2">
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
