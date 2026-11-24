function About(){
    return(
        <section id = "about" className = "flex items-center gap-12 px-8 py-24">
            <div className = "flex-1">
                <h2 className="text-xl text-indigo-400 font-semibold mb-4">
                    About Me
                </h2>   
                <h1 className = "text-5xl font-bold mb-4">
                    Hello, I'm Austin Eng
                </h1>
                <h3 className="text-2xl text-gray-300 mb-6">
                    Computer Science Student
                </h3>

                <p className="text-gray-400 leading-relaxed">
                    I'm a student at UC Santa Cruz interested
                    in software engineering, technology,
                    and meaningful applications.
                </p>
            </div>
            <img
                src="pictures\profilepic.jpg"
                alt="Austin Eng"
                className="w-64 h-64 rounded-full object-cover border-4 border-indigo-500"
            />
        </section>
        
    );
}
export default About;