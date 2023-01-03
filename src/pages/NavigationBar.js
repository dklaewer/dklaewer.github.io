import React, { useState } from 'react';

export default function NavigationBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClick(page) {
    props.onPageChange(page);
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Daniel Kläwer</span>
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <NavigationBarItem text="Home" onClick={() => handleClick('home')} />
            <NavigationBarItem text="CV" onClick={() => handleClick('cv')} />
            <NavigationBarItem text="Publications" onClick={() => handleClick('publications')} />
            <NavigationBarItem text="Talks" onClick={() => handleClick('talks')} />
          </div>
        </div>
      </nav>
    </div>
  );
}
const NavigationBarItem = (props) => {
  return (
    <a href="#" onClick={props.onClick} className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
      {props.text}
    </a>
  );
};
