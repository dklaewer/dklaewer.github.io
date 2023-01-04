import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default function HomePage() {
  return (
    <div className="p-2 flex flex-wrap items-center justify-center">
      <div className="w-full flex justify-center m-4">
        <StaticImage src="../images/me.jpg" alt="" className="w-1/3 aspect-square rounded-full"/>
      </div>
      <p>Hi! I am a theoretical physicist with a passion for working with data. Please take a look around to learn more about my work!</p>
    </div>
  );
}
