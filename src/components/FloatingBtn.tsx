"use client";

import { useState } from "react";

const FloatingBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`${
        isClicked
          ? "fixed -bottom-28 size-[550px] -right-36 bg-green-700/80 rounded-full transition-all duration-150"
          : ""
      }`}
    >
      <div
        className={`${
          isClicked ? "block" : "hidden"
        } text-white fixed p-10 bottom-20 transition-all duration-150`}
      >
        <h1 className="text-2xl font-semibold text-white">
          Try out html2Canvas
        </h1>
        <p className="text-xs max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
          voluptatibus.
        </p>
        <button className="border-2 my-3 p-1 text-xs">Click me</button>
      </div>
      <div
        className={`${
          isClicked ? "bg-white" : ""
        } p-4 rounded-full fixed bottom-20 right-0 flex items-center justify-center transition-all duration-150`}
      >
        <button
          onClick={() => setIsClicked(!isClicked)}
          className={`${
            isClicked ? "bg-green-500" : "bg-gray-200"
          } p-3 border rounded-full transition-all duration-150`}
        >
          {/* camera */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7H6L7.5 4H16.5L18 7H20C21.1 7 22 7.9 22 9V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V9C2 7.9 2.9 7 4 7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="14"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* take screnshot button */}
      <button
        title="Take screenshot"
        className={`${isClicked ? "block" : "hidden"} fixed bottom-44 right-5`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.5 8.5L16 15m0-6.5L9.5 15M4 4.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm0 15a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
          />
        </svg>
      </button>
      {/* view button */}
      <button
        className={`${isClicked ? "block" : "hidden"} fixed bottom-28 right-28`}
        title="View"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* share screenshot */}
      <button title="share" className={`${isClicked ? "block" : "hidden"} fixed bottom-10 right-5`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            d="M15 5l7 7-7 7"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12H9a7 7 0 00-7 7v0"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default FloatingBtn;
