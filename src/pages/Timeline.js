import React from 'react';

const Timeline = ({ data, getDate, formatDate, getBodyFromItem }) => {
  const sortFunction = (a, b) => {
    return new Date(getDate(b)) - new Date(getDate(a))
  }
  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      {data.sort(sortFunction).map((item) => (
        <TimelineItem time={formatDate(item)} caption={item.title} body={getBodyFromItem(item)} />
      ))}
    </ol>
  );
};


const TimelineItem = ({ time, caption, body }) => {
  return (
    <li class="ml-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{caption}</h3>
      {body}
    </li>
  );
};

export default Timeline