// Note: This is a demonstration of the UI design.
// In a real implementation, you would import React and react-router-dom

import { Link } from "react-router-dom";

function HOME() {
  return (
    <div className="h-[92vh] w-full bg-gradient-to-br from-purple-50 via-purple-100 to-white  mb-0">
      {/* Hero Section */}
      <div className="h-[92vh] w-full px-0 pb-0 mb-0">
        <div className=" w-[100vw] bg-white h-[92vh] shadow-xl overflow-x-hidden overflow-y-scroll md:overflow-y-hidden ">
          {/* Card Header with Decorative Elements */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full -translate-x-16 -translate-y-16 opacity-80"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-300 rounded-full translate-x-12 -translate-y-12 opacity-80"></div>
            <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-100 rounded-full -translate-x-20 translate-y-20 opacity-80"></div>

            {/* Content Container */}
            <div className="relative p-8 md:p-14 text-center z-10">
              {/* Logo/Brand Element */}
              {/* <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">iT</span>
              </div>
               */}
              {/* Title with Gradient */}
              <h1 className="text-lg md:text-5xl w-fit m-auto font-extrabold mb-0 md:mb-2 tracking-wider ">
                <span className="monoton-regular flex justify-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900">
                  <span>Welcome</span> 
                  <span>to</span>
                  <span>iTasks</span>
                </span>
              </h1>
              
              {/* Tagline */}
              <p className="text-[14px] md:text-lg text-purple-700 font-medium">
                Organize your day, achieve your goals
              </p>
              
              {/* Divider */}
              <div className="flex items-center justify-center my-4 md:my-10">
                <div className="h-px w-16 bg-purple-200"></div>
                <div className="mx-4">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="h-px w-16 bg-purple-200"></div>
              </div>
              
              {/* Features Section */}
              <div className="mb-8">
                <p className="text-gray-600 font-sm md:font-medium mb-6">
                  Simple and effective task management
                </p>
                
                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-purple-50 rounded-xl p-3 px-5 md:p-6  shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-0 items-center justify-center md:block">
                    <div className=" hidden w-12 h-12 md:mx-auto  my-3 md:mb-4 bg-purple-200 rounded-full md:flex items-center justify-center">
                      <svg className=" w-6 h-6 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <p className="w-[45vw] md:w-[20vw] m-auto text-purple-800 font-medium">Create & manage tasks</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-3 md:p-6  shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-0 items-center justify-center md:block">
                    <div className=" hidden w-12 h-12 md:mx-auto  my-3 md:mb-4 bg-purple-200 rounded-full md:flex items-center justify-center">
                      <svg className=" w-6 h-6 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <p className="w-[45vw] md:w-[20vw] m-auto text-purple-800 font-medium">Track your progress</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-3 md:p-6  shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-0 items-center justify-center md:block">
                    <div className=" hidden w-12 h-12 md:mx-auto  my-3 md:mb-4 bg-purple-200 rounded-full md:flex items-center justify-center">
                      <svg className=" w-6 h-6 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                      </svg>
                    </div>
                    <p className="w-[45vw] md:w-[20vw] m-auto text-purple-800 font-medium">Stay organized</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}

              <Link to="/mytasks" className="inline-block md:my-5 bg-gradient-to-r from-purple-700 to-purple-900 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started
              </Link>

              {/* Subtitle */}
              <p className="text-purple-500 text-sm mt-8 h-fit ">
                Join thousands of productive people today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME;    