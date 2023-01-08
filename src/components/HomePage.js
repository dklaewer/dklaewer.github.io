import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

export default function HomePage() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="h-full flex relative">
        <StaticImage src="../images/me.jpg" alt="" placeholder="None" quality="100"/>
        <div className="absolute left-10 top-20 md:left-32 md:top-48 lg:left-32 lg:top-96 w-1/3">
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-neutral-50">I'm Daniel Kläwer.</h1>
          <p className="hidden lg:block text-neutral-200 text-xl mt-8">I am a data scientist with research experience in theoretical high energy physics. Please take a look around to learn more about my work!</p>
        </div>
      </div>
      <p className="lg:hidden text-neutral-200 text-xl m-8">I am a data scientist with research experience in theoretical high energy physics. Please take a look around to learn more about my work!</p>
    </div>
  );
}
