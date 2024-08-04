import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
    const loggedIn = useSelector(state => state.login.loggedIn)
  return (
    <>
      <header className="shadow-lg flex justify-center py-6 w-full z-[999] bg-white sticky top-0 left-0">
        <div className="container w-[90%] flex justify-between items-center">
          <h1 className="text-[21px] font-bold">WavesOfWords</h1>
          <nav>
            <ul className="flex gap-6 font-semibold">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/author"}>Authors</Link>
              </li>
              {
                loggedIn? <li>
                <Link to={"/logout"}>Logout</Link>
              </li>: <li>
                <Link to={"/login"}>Login</Link>
              </li>
              }
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}
