import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="dropdown relative">
            <button
              className="rounded-full shadow-md hover:bg-gray-200 transition duration-150 ease-in-out flex
                        items-center justify-center border-2 border-black border-solid p-2 font-medium text-2xl"
              type="button"
            >
              <FaUserAlt />
            </button>
            <ul
              className="min-w-max absolute hidden bg-gray-200 z-50 float-right py-2 list-none text-right rounded-lg
            shadow-lg mt-1 m-0 bg-clip-padding border-none"
            >
              <li>
                <Link className="block w-full bg-transparent whitespace-nowrap">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
