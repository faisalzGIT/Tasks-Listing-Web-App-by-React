import {Link} from "react-router-dom";

function NAVBAR() {
  return (
    <nav className="bg-purple-950 h-[50px] flex justify-between items-center px-4 md:px-8 w-full" >
      <div className="text-lg font-bold text-white z-1">
        <Link to="/" className="text-purple-100 font-bold text-xl">iTasks</Link></div>
      <div className="text-white md:text-lg text-[14px]">

        <Link to="/" className="ml-4 md:ml-5 font-semibold text-purple-100">Home</Link>
        <Link to="/mytasks" className="ml-4 md:ml-5 font-semibold text-purple-100">Tasks</Link>
        <Link to="/developer" className="ml-4 md:ml-5 font-semibold text-purple-100">Developer</Link>
        <Link to="/about" className="ml-4 md:ml-5 font-semibold text-purple-100">About</Link>
      </div>
    </nav>
  );
}
export default NAVBAR;