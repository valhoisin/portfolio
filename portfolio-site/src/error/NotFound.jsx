import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";
const NotFound = () => {
  return (
    <>
      <Background />;
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center p-8 bg-black/50">
        <h1 className="text-6xl p-4 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600 drop-shadow-lg">
          Ooops! <br />
          Page not found!
        </h1>
        <Link
          className="text-xl p-4 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600 drop-shadow-lg"
          to="/"
        >
          Go back home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
