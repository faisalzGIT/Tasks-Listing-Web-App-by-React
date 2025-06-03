import { useState } from "react";
import { useMyContext } from "../context/MyContext";

function Developer() {
    const [activeLink, setActiveLink] = useState(null);
    const { boool } = useMyContext();  
  
  const developerInfo = {
    name: "Mohammad Faisal",
    title: "Full-Stack Web Developer",
    description: `Hi! I'm Mohammad Faisal, a passionate web developer focused on building clean and efficient web applications. Currently I work with modern JavaScript, React, REST APIs, Tailwind CSS and other stuff to become a Better Frontend Developer.`,
    links: [
      {
        label: "My Portfolio",
        url: "https://faisalzportfolio.netlify.app/",
        icon: "📂",
      },
      {
        label: "GitHub",
        url: "https://github.com/faisalzGIT",
        icon: "💻",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/faisalz1",
        icon: "🖇️",
      },
    ],
  };

  return (
    <div className="mt-0 md:mt-5 max-w-3xl h-[92vh] md:h-auto mx-auto bg-white p-4 md:p-8 md:rounded-2xl shadow-xl ">
      {/* Header Section */}
      <div className="mb-[2vh] md:mb-8 text-center">
        <div className="inline-block relative mb-2">
          <h1 className="text-xl md:text-5xl monoton-regular font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 tracking-widest">Meet the Developer</h1>
          <div className="absolute h-[2px] md:h-[3px] mt-1 md:mt-0  w-full bg-gradient-to-r from-purple-700 to-purple-900 bottom-[-1] rounded-full"></div>
        </div>
      </div>

      {/* About Section */}
      <div className=" bg-gradient-to-r from-purple-50 to-purple-100  p-4 md:p-5 rounded-xl shadow-md border border-purple-100 mb-[2vh] md:mb-8 ">

        <p className="text-purple-800 text-sm font-medium leading-relaxed">
          {developerInfo.description}
        </p>
      </div>

      {/* Links Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-md border border-purple-100  ">
        <h2 className="text-xl md:text-3xl font-semibold text-purple-900 mb-4 border-l-4 border-purple-900 pl-3 ">
          Connect With Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {developerInfo.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white hover:bg-purple-200 transition-all duration-300 p-4 rounded-lg flex  gap-3 items-center justify-center text-center border-2 border-purple-200 hover:border-purple-400 ${!boool && 'flex-col gap-0'}`}
              onMouseEnter={() => setActiveLink(index)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <span className="font-semibold text-purple-900">
                {link.label}
              </span>
              <div className={`h-1 md:block hidden bg-purple-600 rounded-full mt-2 duration-300 ${activeLink === index ? 'w-16' : 'w-0'}`}></div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Mohammad Faisal | Made with passion
      </div>
    </div>
  );
}

export default Developer;