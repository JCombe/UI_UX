import React from "react";
import Image from "next/image";

const NavBar = () => {
  const navBarItemsLeft = [
    {
      title: "Club Acces",
      style:
        "bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-3xl cursor-pointer p-2 px-4",
      link: "/club_access",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Product",
      style: "rounded-2xl cursor-pointer p-2",
      link: "/products",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ),
    },
    {
      title: "Pricing",
      style: "rounded-2xl cursor-pointer p-2x-6",
      link: "/pricing",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ),
    },
    {
      title: "Learn",
      style: "rounded-2xl cursor-pointer p-2 ",
      link: "/learn",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ),
    },
    {
      title: "Company",
      style: "rounded-2xl cursor-pointer p-2 ",
      link: "/company",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ),
    },
  ];

  const navBarItemsRight = [
    {
      title: "Login",
      style: "rounded-2xl cursor-pointer p-2 ",
      link: "/login",
      icon: "",
    },
    {
      title: "Sign Up",
      style:
        "bg-gradient-to-r from-black to-blue-700 text-white rounded-3xl cursor-pointer p-2 px-4",
      link: "/register",
      icon: "",
    },
  ];

  return (
    <div className="flex w-full p-3 border-b-2 mb-10">
      {/*Navbar*/}
      <div className="relative flex items-center h-20 w-20 cursor-pointer hover:opacity-40 transition-all mr-2">
        <Image
          src="https://images.unsplash.com/photo-1543954616-be267def7835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
        />
      </div>

      <div className="flex w-2/3 justify-evenly items-center">
        {/**NavBtns */}
        {navBarItemsLeft.map((obj: any, id: any) => (
          <div
            key={id}
            className={`${obj.style} ${
              id === 0 ? "flex flex-row-reverse" : "flex"
            } items-center`}
          >
            <p>{obj.title}</p>
            <div className={id === 0 ? "pr-2" : "pl-2"}>{obj.icon}</div>
          </div>
        ))}
      </div>
      <div className="flex w-1/3 items-center justify-evenly">
        {/**NavRegLog */}
        {navBarItemsRight.map((obj: any, id: any) => (
          <div className={obj.style}>{obj.title}</div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
