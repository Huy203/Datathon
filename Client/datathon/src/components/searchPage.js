import React, { useEffect, useRef } from "react";
import "../styles/styles.css";
import NavBar from "./navBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const inputRef = useRef(null);

  // let navigate = useNavigate();
  // let [error, setError] = useState(null);

  // async function handleClick(event) {
  //   event.preventDefault();
  //   // let result = await submitForm(event.target);
  //   navigate("success", { replace: true });
  // }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        console.log("Enter key pressed");
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <div className="w-screen h-fit flex flex-col items-center justify-start pt-[192px]">
        <div className="Seach-page-logo">
          <img
            src="https://via.placeholder.com/272x92?text=Blank+Image"
            alt="Logo"
          />
        </div>
        <h2 className="font-bold text-[50px]">Welcome to Fitting Room</h2>
        <p className="">Let me know what you want to clothe.</p>

        <div className="flex flex-row items-stretch mt-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-[10px] mr-2"
            onClick={{}}
          >
            Get Started
          </button>
          <form className="flex flex-row items-center justify-center border border-black rounded-[10px] border-l-rose-500 border-r-rose-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              className="ml-2"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
            <input
              type="text"
              ref={inputRef}
              className="w-[300px] rounded-sm text-white font-bold mx-2 border-none"
              placeholder="Type something you want to try on"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
