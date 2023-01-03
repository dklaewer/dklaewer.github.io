import React from 'react';
import professionalExperienceData from '../data/professionalexperience.json';
import educationData from '../data/education.json';
import awardData from '../data/awards.json';
import Timeline from './Timeline';


export default function CVPage() {
  return (
    <div className="flex flex-wrap p-2">
      {cvSections}
    </div>
  );
}


const CVSection = ( {title, content} ) => {
  return(
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-2">
        <h1 className="font-bold text-xl mb-2">
          {title}
        </h1>
        {content}
      </div>
    </div>
  )
}


const getEndDate = (cvItem) => cvItem.endDate;


const getDate = (cvItem) => cvItem.date;


const dateRange = (cvItem) => cvItem.startDate+"–"+cvItem.endDate


const formatProfessionalExperience = (item) => {
  return(
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">{item.company} — {item.city}, {item.country}</p>
  )
}

const formatEducationExperience = (item) => {
  return(
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">{item.school} — {item.city}, {item.country}</p>
  )
}

const formatAward = (item) => {
  return(
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">{item.institution} — {item.city}, {item.country}</p>
  )
}


const AwardItem = ( {year, name, description, institution, city, country} ) => {
  return(
    <div className="flex flex-wrap">
      <div className="w-40">
        {year}
      </div>
      <div className="mb-2">
        <div className="text font-semibold">{name}</div>
        <div className="text">{description}</div>
        <div className="text">{institution}</div>
        <div className="text">{city}, {country}</div>
      </div>
    </div>
  )
}


const SkillItem = ( {skill, level} ) => {
  return(
    <div className="flex flex-wrap">
      <div className="w-40">{skill}</div>
      <div className="text">{level}</div>
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
