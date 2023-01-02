import React from 'react';

export default function CVPage() {
  return (
    <div className="flex flex-wrap p-2">
      {cvSections}
    </div>
  );
}


const CVSection = ( {title, listCVItems} ) => {
  return(
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-2">
        <h1 className="font-bold text-xl mb-2 ">
          {title}
        </h1>
        {listCVItems}
      </div>
    </div>
  )
}
// width needs to be optimized

const ProfessionalExperienceItem = ( {startDate, endDate, title, description, company, city, country} ) => {
  return(
    <div className="flex flex-wrap">
      <div className="w-40">
        {startDate} – {endDate}
      </div>
      <div className="mb-2">
        <div className="text font-semibold">{title}</div>
        <div className="text">{description}</div>
        <div className="text">{company}</div>
        <div className="text">{city}, {country}</div>
      </div>
    </div>
  )
}

const EducationExperienceItem = ( {year, degree, grade, description, school, city, country} ) => {
  return(
    <div className="flex flex-wrap">
      <div className="w-40">
        {year}
      </div>
      <div className="mb-2">
        <div className="text font-semibold">{degree}</div>
        <div className="text">Grade: {grade}</div>
        <div className="text">{description}</div>
        <div className="text">{school}</div>
        <div className="text">{city}, {country}</div>
      </div>
    </div>
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

var listProfessionalExperiences = [
  <ProfessionalExperienceItem startDate="10/2022" endDate="current" title="Big Data Scientist" company="Airbus Defence and Space" city="Manching" country="Germany"></ProfessionalExperienceItem>,
  <ProfessionalExperienceItem startDate="10/2021" endDate="09/2022" title="Postdoctoral Researcher" company="Hamburg University" city="Hamburg" country="Germany"></ProfessionalExperienceItem>,
  <ProfessionalExperienceItem startDate="10/2019" endDate="09/2021" title="Postdoctoral Researcher" company="Johannes Gutenberg University" city="Mainz" country="Germany"></ProfessionalExperienceItem>,
  <ProfessionalExperienceItem startDate="10/2019" endDate="09/2020" title="Visiting Scientist" company="CERN" city="Geneva" country="Switzerland"></ProfessionalExperienceItem>,
  <ProfessionalExperienceItem startDate="03/2017" endDate="09/2019" title="Doctoral Researcher" company="Max Planck Institute for Physics" city="Munich" country="Germany"></ProfessionalExperienceItem>,
  <ProfessionalExperienceItem startDate="10/2017" endDate="09/2019" title="Teaching Assistant" company="Ludwig Maximilian University" city="Munich" country="Germany"></ProfessionalExperienceItem>,
  <ProfessionalExperienceItem startDate="03/2015" endDate="09/2016" title="Teaching Assistant" company="Heidelberg University" city="Heidelberg" country="Germany"></ProfessionalExperienceItem>
];

var listEducationExperiences = [
  <EducationExperienceItem year="2019" degree="PhD in Physics" grade="summa cum laude" description="Arnold Sommerfeld PhD Prize" school="Ludwig Maximilian University" city="Munich" country="Germany"></EducationExperienceItem>,
  <EducationExperienceItem year="2017" degree="M. Sc. Physics" grade="1.1" school="Heidelberg University" city="Heidelberg" country="Germany"></EducationExperienceItem>,
  <EducationExperienceItem year="2014" degree="B. Sc. Physics" grade="1.3" school="Heidelberg University" city="Heidelberg" country="Germany"></EducationExperienceItem>
];

var listAwards = [
  <AwardItem year="2022" name="Undergraduate Teaching Award 1st Prize" institution="Hamburg University" city="Hamburg" country="Germany"></AwardItem>,
  <AwardItem year="2019" name="Arnold Sommerfeld PhD Prize" institution="Ludwig Maximilian University" city="Munich" country="Germany"></AwardItem>
]

var listLanguages = [
  <SkillItem skill="German" level="native"/>,
  <SkillItem skill="English" level="CEFR C2"/>,
  <SkillItem skill="Chinese" level="CEFR B1"/>,
  <SkillItem skill="French" level="CEFR B1"/>
]

var cvSections = [
  <CVSection title="Professional Experience" listCVItems={listProfessionalExperiences}/>,
  <CVSection title="Education" listCVItems={listEducationExperiences}/>,
  <CVSection title="Awards" listCVItems={listAwards}/>,
  <CVSection title="Languages" listCVItems={listLanguages}/>
];

// for skills, a word cloud would be nice!!
