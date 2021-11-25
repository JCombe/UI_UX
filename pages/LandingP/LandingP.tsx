import React from "react";
import CategoryComp from "./CategoryComp/CategoryComp";
import { LandingCategories, subComps } from "../../Data/Data";
import { tags } from "../../Data/Data";
import SubComp from "./SubscriptionComp/SubComp";

const LandingP = () => {
  const playBtnIcon = (
    <svg
      className="w-24 h-24"
      fill="none"
      stroke="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );

  const starIcon = (
    <svg
      className="w-16 h-16"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      ></path>
    </svg>
  );

  return (
    <div className="flex flex-col w-full items-center">
      <div className="p-2 min-w-min mb-20">
        <h3 className="uppercase opacity-40 font-bold mb-6 text-xl">
          Premium webflow products
        </h3>
        <h1 className="text-8xl font-bold mb-6">
          Build{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Better,
          </span>
        </h1>
        <div className="flex">
          <div className="w-min h-24 mr-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:shadow-xl">
            {playBtnIcon}
          </div>
          <div className="">
            <h1 className="text-8xl font-bold mb-6">
              Build{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Faster.
              </span>
            </h1>
            <p className="opacity-40 max-w-lg text-xl mb-6">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s. is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex max-w-lg items-center justify-start">
              <button className="flex mr-6 p-4 px-6 min-w-max border-none bg-gradient-to-r from-black to-blue-700 rounded-full text-white hover:shadow-xl transition-all">
                <p className="mr-2">Get Started</p>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <button className="flex items-center rounded-full border-none p-4 px-6 min-w-max hover:shadow-xl transition-all">
                <div className="rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 mr-2">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                Browse Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col text-center max-w-6xl items-center bg-blue-50 rounded-xl rounded-b-5xl p-4 mb-20 pt-20">
        {/**Popular Categories Comp */}
        <div className="flex absolute top-0 transform -translate-y-1/2 w-5/6 bg-white rounded-xl p-2 py-4">
          {tags.map((tag: any, idx: any) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-b-xl mx-2 p-2 hover:shadow-xl cursor-pointer"
            >
              {tag.title}
            </div>
          ))}
        </div>
        <span className="uppercase text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
          Find What Your're After
        </span>
        <span className="text-4xl font-bold mb-10">
          Browse Popular Categories
        </span>
        <div className="flex flex-wrap w-full justify-center">
          {LandingCategories.map((category: any, idx: any) => {
            category.id = idx;
            return <CategoryComp key={idx} category={category} />;
          })}
        </div>
      </div>
      <div className="flex bg-bokeh-blue bg-top bg-cover flex-col max-w-6xl rounded-b-xl rounded-t-5xl text-center text-white items-center p-4 mb-20">
        {/**Subsription Comp */}
        <div className="w-16 h-16 mb-4">{starIcon}</div>
        <h1 className="mb-4 text-3xl">
          The Unlimited{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
            webflow
          </span>{" "}
          <br /> Component Subscription
        </h1>
        <p className="mb-4 text-xl max-w-xl">
          Instantly <span className="text-blue-400">copy</span> from our huge
          library of webflow components and{" "}
          <span className="text-blue-400">paste</span> them directly in to your
          next project. Premium production quality components that help you
          solve problems faster.
        </p>
        <button className="border-none bg-white rounded-full text-blue-900 p-2 px-4 mb-6">
          Join The Club for $39/Montly
        </button>

        <h2 className="mb-4 text-2xl font-bold">So... whats it all about?</h2>
        <div className="flex">
          {/**SubCardComp */}
          {subComps.map((subComp: any, idx: any) => {
            subComp.idx = idx;
            return <SubComp subComp={subComp} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingP;
