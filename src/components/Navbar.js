import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-primary-custom mx-auto">
      <div className="navbar container px-4 mx-auto text-primary-custom shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/all-books"}>All Books</Link>
              </li>

              <li>
                <Link href={"/profile"}>My Profile</Link>
              </li>
            </ul>
          </div>
          <a className="text-primary-custom text-xl font-bold">BorrowBook</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-books"}>All Books</Link>
            </li>

            <li>
              <Link href={"/profile"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-secondary-custom">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
