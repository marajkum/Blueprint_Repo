function Navbar(){
    return(
        <nav className = "flex justify-between items-center px-8 py-6 border-b border-slate-800">
            <h1 className = "text-x; font-bold">
                Austin Eng
            </h1>

            <div className = " flex gap-6">
                <a href="#about" className = "text-gray-400 hover:text-indigo-400 transition duration-300">About</a>
                <a href="#interests" className = "text-gray-400 hover:text-indigo-400 transition duration-300">Interests</a>
                <a href="#skills" className = "text-gray-400 hover:text-indigo-400 transition duration-300">Skills</a>
                <a href="projects" className = "text-gray-400 hover:text-indigo-400 transition duration-300">Projects</a>

            </div>
        </nav>
    )
}
export default Navbar;