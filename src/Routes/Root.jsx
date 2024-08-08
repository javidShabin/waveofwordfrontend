import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { changeLoginStatust } from "../features/login/loginSlice";

export default function Root() {
  const logged = useSelector((state) => state.login.loggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/verify", { withCredentials: true })
      .then((response) => {
        dispatch(changeLoginStatust(true));
      })
      .catch((error) => console.log("Not logged in"));
  }, []);

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
              {logged ? (
                <li>
                  <Link to={"/logout"}>Logout</Link>
                </li>
              ) : (
                <li>
                  <Link to={"/author"}>Authors</Link>
                </li>
              )}
            </ul>
          </nav>
          {logged && (
            <div className="w-10 h-10 aspect-auto-square bg-gray-200 flex flex-col items-center justify-center rounded-full">
              <span className="">j</span>
            </div>
          )}
        </div>
      </header>
      <Outlet />
      <footer className="w-full flex justify-center items-center">
        <div className="container w-[90%]">
          <h1 className="text-[21px] font-bold">WavesOfWords</h1>
        </div>
      </footer>
    </>
  );
}
