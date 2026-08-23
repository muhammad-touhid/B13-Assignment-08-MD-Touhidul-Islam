"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <div className="w-full bg-primary-custom mx-auto">
      <div className="navbar container px-4 mx-auto text-primary-custom shadow-sm">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer p-3 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-custom"
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
              className="menu menu-sm dropdown-content bg-secondary-custom text-secondary-custom rounded-box z-1 mt-3 w-52 p-2 shadow"
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
          <Link href={"/"}>
            <div className="text-primary-custom text-xl font-bold">
              BorrowBook
            </div>
          </Link>
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
          {!user ? (
            <Link href={"/sign-in"}>
              <button className="btn bg-secondary-custom rounded-full">
                Sign In
              </button>
            </Link>
          ) : (
            <div className="flex gap-4 items-center">
              <p>{user?.name}</p>
              <button
                onClick={handleSignOut}
                className="btn bg-secondary-custom rounded-full"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
