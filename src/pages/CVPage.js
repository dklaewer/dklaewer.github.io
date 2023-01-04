import React from 'react';
import professionalExperienceData from '../data/professionalexperience.json';
import educationData from '../data/education.json';
import awardData from '../data/awards.json';
import Timeline from './Timeline';


export default function CVPage() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 md:mt-4">
      {cvSections}
    </div>
  );
}


const CVSection = ( {title, content} ) => {
  return(
      <div className="rounded border-b md:border border-neutral-700 shadow-lg overflow-hidden px-4 py-2 md:px-4 md:mb-4">
        <h1 className="font-bold text-white text-xl text-center pb-2">
          {title}
        </h1>
        {content}
      </div>
  )
}


const getEndDate = (cvItem) => cvItem.endDate;


const getDate = (cvItem) => cvItem.date;


const dateRange = (cvItem) => cvItem.startDate+"–"+cvItem.endDate


const formatProfessionalExperience = (item) => {
  return(
    <div>
      <p class="text-base font-normal text-neutral-400 hidden lg:block">{item.company} — {item.city}, {item.country}</p>
      <p class="text-base font-normal text-neutral-400 lg:hidden">{item.company}</p>
      <p class="text-base font-normal text-neutral-400 lg:hidden">{item.city}, {item.country}</p>
    </div>
  )
}

const formatEducationExperience = (item) => {
  return(
    <div>
      <p class="text-base font-normal text-neutral-400 hidden lg:block">{item.school} — {item.city}, {item.country}</p>
      <p class="text-base font-normal text-neutral-400 lg:hidden">{item.school}</p>
      <p class="text-base font-normal text-neutral-400 lg:hidden">{item.city}, {item.country}</p>
    </div>
  )
}

const formatAward = (item) => {
  return(
    <div>
      <p class="text-base font-normal text-neutral-400 hidden lg:block">{item.institution} — {item.city}, {item.country}</p>
      <p class="text-base font-normal text-neutral-400 lg:hidden">{item.institution}</p>
      <p class="text-base font-normal text-neutral-400 lg:hidden">{item.city}, {item.country}</p>
    </div>
  )
}


const SkillItem = ( {skill, level} ) => {
  return(
    <div className="flex flex-wrap">
      <div className="w-40 text-neutral-100">{skill}</div>
      <div className="text text-neutral-400">{level}</div>
    </div>
  )
}


var listLanguages = [
  <SkillItem skill="German" level="native"/>,
  <SkillItem skill="English" level="CEFR C2"/>,
  <SkillItem skill="Chinese" level="CEFR B1"/>,
  <SkillItem skill="French" level="CEFR B1"/>
]


var cvSections = [
  <CVSection title="Professional Experience" content={
    <Timeline data={professionalExperienceData} getDate={getEndDate} formatDate={dateRange} getBodyFromItem={formatProfessionalExperience} />
  }/>,
  <CVSection title="Education" content={
    <Timeline data={educationData} getDate={getDate} formatDate={getDate} getBodyFromItem={formatEducationExperience}/>
  }/>,
  <CVSection title="Awards" content={
    <Timeline data={awardData} getDate={getDate} formatDate={getDate} getBodyFromItem={formatAward} />
  }/>,
  <CVSection title="Languages" content={listLanguages}/>,
];

// for skills, a word cloud would be nice!!
