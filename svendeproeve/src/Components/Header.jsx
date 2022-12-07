import React from "react";
import { FaHouseUser } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <nav className="font-DMsans m-5">
      <div className="flex flex-wrap items-center  justify-between">
        <Link to="/" className="flex items-center basis-1/6">
          <h1 className="hr-6  text-sky-500 text-4xl">
            <FaHouseUser />
          </h1>
          <span className="text-black font-semibold text-4xl ">SvendePrøve</span>
        </Link>
        <div className="">
          <a className="py-2 pl-10 pr-10 text-lg text-blue-600 underline underline-offset-8 decoration-blue-500">
            Search
          </a>
          <Link to="/About" className="py-2 pl-10 pr-10 text-lg">About</Link>
          <Link to="test" className="py-2 pl-10 pr-10 text-lg">Help</Link>
          <Link to="/case" className="py-2 pl-10 pr-10 text-lg">Real Estate Agents</Link>
          <a className="py-2 pl-10 pr-10 text-lg">Blog</a>
        </div>
        <button>
          <img src="https://thispersondoesnotexist.com/image" className=" h-10 w-10 rounded-full bg-blue-500 "></img>
        </button>
      </div>
    </nav>
  );
}
