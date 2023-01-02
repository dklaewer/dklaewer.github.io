import React from 'react';
import talkdata from '../data/talks.json';

export default function TalksPage() {
  return (
    <div className="flex flex-wrap p-4">
      <TalksTimeline />
    </div>
  );
};

const TalksTimeline = ({ talks }) => {
  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      {talkdata.sort(
        function (a, b) {
          return new Date(b.date) - new Date(a.date)
        }
      ).map((talk) => (
        <li class="ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{talk.date}</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{talk.title}</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">{talk.event} — {getLocation(talk)}</p>
          {
            Object.entries(talk.links).map(
              ([key, value]) => {
                return <a className="mr-2" href={value}>{key}</a>
              }
            )
          }
        </li>
      ))}
    </ol>
  );
};


const TalkDetails = ({ date, type, title, event, location, city, country, links }) => {
  return (
    <></>
  );
};

const getLocation = (talk) => {
  let loc = talk.location + (talk.city ? ", " + talk.city : "") + (talk.country ? ", " + talk.country : "")
  if (talk.type === "talk (online)") {
    if (talk.location == "online") {
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