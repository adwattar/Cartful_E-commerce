import { IoIosMenu } from "react-icons/io";

export default function Navpar() {
  return (
    <div className="flex justify-center ">
      <div className="flex p-3 items-center justify-between backdrop-blur bg-blue-800/50 rounded-xl w-[90%] fixed mt-2 z-10   shadow-lg shadow-pink-500 ">
        <div>
          <a className=" font-bold hover:text-shadow-lg cursor-pointer text-xl">
            Cartf<span className="text-pink-400">u</span>l{" "}
          </a>
        </div>
        <div>
          <div className="dropdown dropdown-center cursor-pointer sm:hidden   ">
            <div tabIndex={0} role="button" className="text-3xl flex items-center ">
              <IoIosMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content shadow-pink-700 menu backdrop-blur bg-gray-700/50 rounded-box z-20 w-52 p-2 shadow-lg"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Products">Products</a>
              </li>
              
              <li>
                <a href="/Contact">Contact</a>
              </li>
              
              <li>
                <a href="/Feedback">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="   gap-10 text-lg font-semibold sm:flex  hidden">
          <a
            className=" hover:text-pink-400 transition-all underline-offset-5"
            href="/"
          >
            {" "}
            Home
          </a>
          <a
            className=" hover:text-pink-400 transition-all underline-offset-5"
            href="/products"
          >
            {" "}
            Products{" "}
          </a>
          <a
            className=" hover:text-pink-400 transition-all underline-offset-5"
            href="/Contact"
          >
            {" "}
            Contact{" "}
          </a>
          <a
            className=" hover:text-pink-400 transition-all underline-offset-5 "
            href="/Feedback"
          >
            {" "}
            Feedback{" "}
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
