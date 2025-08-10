import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="homepage" className="relative bg-black/50 z-20 ">
      <div className="mx-auto max-w-screen px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block w-full">
              <div className="flex justify-between w-full">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    aria-current="page"
                    className="rounded-md cursor-pointer  px-3 py-2 hover:bg-white/5 text-sm font-medium text-white"
                  >
                    Home
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
