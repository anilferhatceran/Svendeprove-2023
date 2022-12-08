import React from "react";
import { FaHouseUser } from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
  let activeClassName=(
    "py-2 pl-10 pr-10 text-lg text-blue-600 underline underline-offset-8 decoration-blue-500"
  )
  return (
    <nav className="font-DMsans p-5 bg-slate-50">
      <div className="flex flex-wrap items-center  justify-between">
        <Link to="/" className="flex items-center basis-1/6">
          <h1 className="hr-6  text-sky-500 text-4xl">
            <FaHouseUser />
          </h1>
          <span className="text-black font-semibold text-4xl ">SvendePrøve</span>
        </Link>
        <div className="">
        <NavLink
          to="/" 
          className={({isActive}) =>
             isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"
        }>
        Search
        </NavLink>
          <NavLink
            to="/About"
            className={({isActive}) =>
            isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"  
          }
            >About</NavLink>
        <NavLink
          to="test" 
          className={({isActive}) =>
             isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"
        }>
        Help
        </NavLink>
        <NavLink
          to="/case"
          className={({ isActive }) =>
            isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"
          }
        >
     Real Estate Agents
  </NavLink>
  <NavLink
          to="/blog" 
          className={({isActive}) =>
             isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"
        }>
        Blog
        </NavLink>
        </div>
        <button>
          <img src="https://thispersondoesnotexist.com/image" className=" h-10 w-10 rounded-full bg-blue-500 "></img>
        </button>
      </div>
    </nav>
  );
}
