import React from 'react';
import talkdata from '../data/talks.json';
import Timeline  from './Timeline';


export default function TalksPage() {
  return (
    <div className="flex flex-wrap p-4">
      <Timeline data={talkdata} getDate={getDate} formatDate={getDate} getBodyFromItem={formatBody}/>
    </div>
  );
};


const getDate = (talk) => talk.date;


const getLocation = (talk) => {
  let loc = talk.location + (talk.city ? ", " + talk.city : "") + (talk.country ? ", " + talk.country : "")
  if (talk.type === "talk (online)") {
    if (talk.location === "online") {
      return "online"
    }
    else {
      return loc + " (online)"
    }
  }
  else {
    return (
      loc
    )
  }
}


const formatBody = (talk) => {
  return(
    <>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">{talk.event} — {getLocation(talk)}</p>
      {Object.entries(talk.links).map(
        ([key, value]) => {
          return <a className="mr-2" href={value}>{key}</a>;
        }
      )}
    </>
  )
}
