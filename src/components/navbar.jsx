import {Link} from "react-router-dom";

function NAVBAR() {
  return (
    <nav className="bg-purple-950 h-[50px] flex justify-between items-center px-8" >
      <div className="text-lg font-bold text-white z-1"><Link to="/" className="text-purple-100 font-bold text-xl">iTasks</Link></div>
      <div className="text-white ">

        <Link to="/" className="ml-5 font-semibold text-purple-100">Home</Link>
        <Link to="/mytasks" className="ml-5 font-semibold text-purple-100">My-Tasks</Link>
        <Link to="/developer" className="ml-5 font-semibold text-purple-100">Developer</Link>
        <Link to="/about" className="ml-5 font-semibold text-purple-100">About</Link>
      </div>
    </nav>
  );
}
export default NAVBAR;