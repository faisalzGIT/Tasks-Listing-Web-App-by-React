function Navbar() {
  return (
    <nav className="bg-purple-950 h-[50px] flex justify-between items-center px-8" >
      <div className="text-lg font-bold text-white">iTasks</div>
      <div className="text-white ">
        <a href="#" className="ml-5 font-semibold">Home</a>
        <a href="" className="ml-5 font-semibold">My-Tasks</a>
      </div>
    </nav>
  );
}
export default Navbar;