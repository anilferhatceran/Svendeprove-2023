import { FaHouseUser, FaUserAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleOnRegister,
  toggleOnLogin,
  toggleOff,
} from "../features/modal/ModalSlice";
import { logout, reset } from "../features/auth/authSlice";
import React, {useState, useEffect} from "react";

import {Link, NavLink} from "react-router-dom";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function Header() {
  const { toggleModal, renderRegister } = useSelector((state) => state.modal);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [userMenu, setUserMenu] = useState(false);

  const onClickRegister = () => {
    dispatch(toggleOnRegister());
  };
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(toggleOff());
  };
  const onClickLogin = () => {
    dispatch(toggleOnLogin());
  };

  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.scrollY > 200));
    }
  }, []);

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        east: "easeOut",
        duration: 0.3,
      },
    },
    hide: {
      y: -20,
      opacity: 0,
    },
  };

  let activeClassName =
    "py-2 pl-10 pr-10 text-lg text-sky-500 underline underline-offset-8 decoration-blue-500";
  let stickyHeader = "font-DMsans p-5 bg-slate-50 top-0 sticky absolute z-50";
  return (
    <motion.nav
      className={
        small ? stickyHeader : "font-DMsans p-5  absolute w-full text-white"
      }
      key={small}
      variants={variants}
      animate={"show"}
      initial={"hide"}
    >
      <div className="flex flex-wrap items-center  justify-between">
        <Link to="/" className="flex items-center basis-1/6">
          <h1
            className={classNames("pr-2 text-4xl", {
              "pr-2  text-sky-500 text-4xl": small,
            })}
          >
            <FaHouseUser />
          </h1>
          <span
            className={classNames(" font-semibold text-4xl", {
              "text-black font-semibold text-4xl": small,
            })}
          >
            SvendePrøve
          </span>
          {/* text-black font-semibold text-4xl */}
        </Link>
        <div className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/About"
            className={({isActive}) =>
            isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"  
          }
            >About</NavLink>
        <NavLink
          to="/test" 
          className={({isActive}) =>
             isActive ? activeClassName : "py-2 pl-10 pr-10 text-lg"
        }>
        Help
        </NavLink>
        <NavLink
          to="/myCases"
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
        {/* <button>
          <img src="https://thispersondoesnotexist.com/image" className=" h-10 w-10 rounded-full bg-blue-500 "></img>
        </button> */}
        <div>
          {user ? (
            <>
              <button
                onClick={() => setUserMenu(!userMenu)}
                className="block h-9 w-9 rounded-full overflow-hidden border-2 border-gray-100 focus:outline-none hover:border-gray-500"
              >
                <FaUserAlt className="h-full w-full" />
              </button>
              {userMenu ? (
                <ul className="bg-gray-100 rounded-lg mt-1 z-50 absolute text-right float-right right-3 ">
                  <li>
                    <Link
                      className="block py-1.5 p-3 hover:bg-gray-200 w-full rounded-md mb-1"
                      to="/agentpanel"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={onLogout}
                      className="block py-1.5 p-3 hover:bg-gray-200 rounded-md mb-1"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              ) : null}
            </>
          ) : (
            <>
              <div className="flex">
                <Link
                  onClick={onClickRegister}
                  className="py-1.5 p-3 hover:bg-gray-200 rounded-md mb-1"
                >
                  Sign Up
                </Link>
                <Link
                  onClick={onClickLogin}
                  className="py-1.5 p-3 hover:bg-gray-200 rounded-md mb-1"
                >
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
        {toggleModal ? <Modal /> : null}
      </div>
    </motion.nav>
  );
}
