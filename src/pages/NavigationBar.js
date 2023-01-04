import React, { useState } from 'react';

export default function NavigationBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClick(page) {
    props.onPageChange(page);
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="sticky top-0 z-50 border-b border-neutral-700">
      <nav className="flex items-center justify-between flex-wrap bg-neutral-900 p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-neutral-100 text-xl tracking-tight">Daniel Kläwer</span>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center px-3 py-2 border rounded text-neutral-200 border-neutral-400 hover:text-blue-900 hover:border-blue-900">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`w-full block flex-grow md:flex md:items-center md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm md:flex-grow">
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
    <button onClick={props.onClick} className="block mt-4 md:inline-block md:mt-0 text-neutral-200 hover:text-blue-900 mr-4">
      {props.text}
    </button>
  );
};
