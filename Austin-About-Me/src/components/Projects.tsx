
function Projects() {
    return (
        <section
            id="projects"
            className="max-w-6xl mx-auto px-8 py-16 border-t border-slate-800"
        >
            <h2 className="text-3xl font-bold mb-8">
                My Projects
            </h2>

            <div className="flex flex-col gap-8">

                <div>
                    <h3 className="text-xl font-bold">
                        Physics Simulator
                    </h3>
                    <p className="text-indigo-400">
                        Python
                    </p>
                    <p className="text-gray-400 mb-2">
                        Developed a physics simulator to model
                        vehicle movement and evaluate driving scenarios.
                    </p>
                    <a
                        href="https://github.com/Austin-ctrl/Nov1-Deliverable"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-white transition"
                    >
                        View on GitHub →
                    </a>
                </div>

                <div>
                    <h3 className="text-xl font-bold">
                        Capture-the-Flag Pacman AI
                    </h3>
                    <p className="text-indigo-400">
                        Python, Pacai Framework
                    </p>
                    <p className="text-gray-400">
                        Developed an offensive AI agent using minimax
                        search and heuristic evaluation functions.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold">
                        Pong Game
                    </h3>
                    <p className="text-indigo-400">
                        HTML, CSS, JavaScript
                    </p>
                    <p className="text-gray-400 mb-2">
                        Created a two-player browser game with
                        keyboard controls, score tracking,
                        and pause functionality.
                    </p>
                    <a
                        href="https://github.com/Austin-ctrl/Pong-Game"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-white transition"
                    >
                        View on GitHub →
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
