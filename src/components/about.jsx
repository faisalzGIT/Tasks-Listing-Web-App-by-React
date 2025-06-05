import { useMyContext } from "../context/MyContext";


const ABOUT = () => {
    const { boool } = useMyContext();  

return (
    <>
        <div className="bg-purple-100 min-h-[92vh] flex justify-center items-center w-full">
            <div className="bg-white rounded-xl shadow-lg p-10 pt-7 pb-3 w-[1200px] max-w-full text-center">
                 <h1 className={`mb-0 flex justify-center gap-2 md:gap-4  font-bold text-center text-purple-900`}>
                    <span className="monoton-regular text-lg md:text-4xl font-bold mb-0 md:mb-1 text-purple-900 md:tracking-wider">How</span>
                    <span className="monoton-regular text-lg md:text-4xl font-bold mb-0 md:mb-1 text-purple-900 md:tracking-wider">This</span>
                    <span className="monoton-regular text-lg md:text-4xl font-bold mb-0 md:mb-1 text-purple-900 md:tracking-wider">Website</span>
                    <span className="monoton-regular text-lg md:text-4xl font-bold mb-0 md:mb-1 text-purple-900 md:tracking-wider">Was</span>
                    <span className="monoton-regular text-lg md:text-4xl font-bold mb-0 md:mb-1 text-purple-900 md:tracking-wider">Made</span>
                </h1>
                <div className="mb-4 md:w-[700px] h-[2px] md:h-[4px] bg-purple-900 m-auto rounded-4xl"></div>
                <p className="text-[16px] text-purple-900 font-semibold mb-6 w-full">
                    <strong>iTasks</strong> is a modern, Responsive, and user-friendly Todo Listing Web
                    App designed to help you organize your day and achieve your goals
                    efficiently. With a clean interface and intuitive features, you can
                    easily add, edit, complete, and delete your daily tasks.
                </p>
                <div className="mb-4 px-0 md:px-4">
                 

                    <div className="grid md:grid-cols-4 gap-6 text-purple-800">
                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">
                            <h3 className="font-bold text-lg mb-2">Frontend</h3>
                            <p>
                                Built with <span className="font-semibold">React.js</span> for
                                a fast and interactive user experience.
                            </p>
                        </div>

                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">
                            <h3 className="font-bold text-lg mb-2">Routing</h3>
                            <p>
                                Managed using{" "}
                                <span className="font-semibold">React Router</span> for
                                seamless navigation between pages.
                            </p>
                        </div>                        
                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">                            
                            <h3 className="font-bold text-lg mb-2">Layout & Styling</h3>
                            <p>
                                Built with <span className="font-semibold">HTML5</span> for semantic layout and{" "}
                                <span className="font-semibold">Tailwind CSS</span> for modern, responsive design.
                            </p>
                        </div>

                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">
                            <h3 className="font-bold text-lg mb-2">State Management</h3>
                            <p>
                                Utilizes <span className="font-semibold">useState</span> and{" "}
                                <span className="font-semibold">useEffect</span> hooks with
                                data saved in{" "}
                                <span className="font-semibold">Local Storage</span>. 
                            </p>
                        </div>

                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">
                            <h3 className="font-bold text-lg mb-2">Context API</h3>
                            <p>
                                Uses <span className="font-semibold">Context API</span> to share state across components.
                            </p>
                        </div>

                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">
                            <h3 className="font-bold text-lg mb-2">JavaScript</h3>
                            <p>
                                Built with <span className="font-semibold">JavaScript (ES6+)</span> for app logic and interactivity.
                            </p>
                        </div>


                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">
                            <h3 className="font-bold text-lg mb-2">Node.js</h3>
                            <p>
                                <span className="font-semibold">Node.js</span> powers the development tools and build process.
                            </p>
                        </div>

                        <div className="bg-purple-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 md:w-fit w-[80vw]">
                            <h3 className="font-bold text-lg mb-2">Build Tool</h3>
                            <p>
                                Developed and bundled using{" "}
                                <span className="font-semibold">Vite</span> for lightning-fast
                                development and builds.
                            </p>
                        </div>
                    </div>

                </div>

                    <p className="mt-5 font-semibold text-center text-purple-800 text-base">
                        All data is stored locally in your browser for privacy and speed.
                    </p>
                
                <div className="text-sm text-gray-400 pt-2">
                    &copy; {new Date().getFullYear()} iTasks. All rights reserved.
                </div>
            </div>
        </div>
    </>
);
};

export default ABOUT;
