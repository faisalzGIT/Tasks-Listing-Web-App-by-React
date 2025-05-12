import React from "react";
import NAVBAR from "./navbar";

const Home = () => {
    return (
        <>
        <NAVBAR />
        <div className="font-sans p-5">
            <h1 className="text-center text-4xl text-green-500 font-bold mb-6">
                Welcome to My To-Do App
            </h1>
            <p className="text-lg leading-relaxed mb-6">
                This is a simple and efficient To-Do application designed to help you manage your tasks
                effectively. The app is built with modern web technologies to ensure a seamless user
                experience.
            </p>
            <h2 className="text-2xl text-blue-500 font-semibold mb-4">Technologies Used:</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
                <li><strong>React.js:</strong> For building the user interface.</li>
                <li><strong>JavaScript (ES6+):</strong> For implementing the app's logic.</li>
                <li><strong>CSS:</strong> For styling the components and layout.</li>
                <li><strong>HTML:</strong> For structuring the web pages.</li>
            </ul>
            <h2 className="text-2xl text-blue-500 font-semibold mb-4">About the Developer:</h2>
            <p className="text-lg leading-relaxed mb-6">
                This app was created by a passionate web developer who loves building intuitive and
                user-friendly applications. The goal of this project is to demonstrate the power of
                modern web development tools and frameworks.
            </p>
            <p className="text-lg leading-relaxed">
                Feel free to explore the app and manage your tasks efficiently. Happy tasking!
            </p>
        </div>
    </>);
};

export default Home;