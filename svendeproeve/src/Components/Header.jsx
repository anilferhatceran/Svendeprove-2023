import React from "react";
import { FaHouseUser } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="font-DMsans">
      <div className="flex flex-wrap items-center mt-10 mr-14 ml-14 justify-between">
        <a className="flex items-center basis-1/6">
          <h1 className="hr-6 mr-3 text-sky-500 text-4xl">
            <FaHouseUser />
          </h1>
          <span className="text-black font-semibold text-4xl">SvendePrøve</span>
        </a>
        <div className="basis-2/4">
          <a className="py-2 pl-10 pr-10 text-lg text-blue-600 underline underline-offset-8 decoration-blue-500">
            Search
          </a>
          <a className="py-2 pl-10 pr-10 text-lg">About</a>
          <a className="py-2 pl-10 pr-10 text-lg">Help</a>
          <a className="py-2 pl-10 pr-10 text-lg">Real Estate Agents</a>
          <a className="py-2 pl-10 pr-10 text-lg">Blog</a>
        </div>
        <div className=" h-10 w-10 rounded-full bg-blue-500"></div>
      </div>
    </nav>
  );
}
