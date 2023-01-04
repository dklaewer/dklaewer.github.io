import React from 'react';

const Timeline = ({ data, getDate, formatDate, getBodyFromItem }) => {
  const sortFunction = (a, b) => {
    return new Date(getDate(b)) - new Date(getDate(a))
  }
  return (
    <ol class="relative border-l border-neutral-200 mb-2">
      {data.sort(sortFunction).map((item) => (
        <TimelineItem time={formatDate(item)} caption={item.title} body={getBodyFromItem(item)} />
      ))}
    </ol>
  );
};


const TimelineItem = ({ time, caption, body }) => {
  return (
    <li class="ml-4">
      <div class="absolute w-2 h-2 bg-neutral-200 rounded-full mt-2 -left-1 border border-white"></div>
      <time class="mb-1 text-sm font-normal leading-none text-neutral-300">{time}</time>
      <h3 class="text-lg font-semibold text-neutral-50">{caption}</h3>
      {body}
    </li>
  );
};

export default Timeline