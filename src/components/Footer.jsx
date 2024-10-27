import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-cyanCustom via-cyanCustom1 to-cyanCustom text-white py-1">
      <div className="max-w-screen-xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center">

        <p className="text-center md:text-left text-base mb-2 md:mb-0">
          <span className="text-cyan-900">© {new Date().getFullYear()} </span>
          <div className="flex logo font-bold text-gray-900">
            <span className="text-cyan-700">&lt;</span>
            Pass
            <span className="text-cyan-700">Protector/&gt; </span>
            <p className="text-cyan-900"> | Built by @ Shreyash Lokare</p>
          </div>
        </p>
        <div className="flex text-black space-x-4">
          <a
            href="https://github.com/shreyash5204"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="text-white bg-cyan-900 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-2">
              <img className="invert w-10 p-1" src="./GitHub.png" alt="github logo" />
              <span className="px-2">GitHub</span>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/shreyash-lokare-686009253/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="text-white bg-cyan-900 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-2">
              <img className="invert w-10 p-1" src="./linkedin.png" alt="github logo" />
              <span className="px-2">LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
