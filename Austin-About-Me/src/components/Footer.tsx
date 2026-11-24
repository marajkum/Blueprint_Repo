function Footer() {
    return (
        <footer className="border-t border-slate-800 py-6 text-center">

            <div className="flex justify-center gap-6 mb-4">

                <a
                    href="https://www.linkedin.com/in/austin-eng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/Austin-ctrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition"
                >
                    GitHub
                </a>

                <a
                    href="https://www.instagram.com/asudeneng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition"
                >
                    Instagram
                </a>

            </div>

            <p className="text-sm text-gray-500">
                © 2026 Austin Eng
            </p>

        </footer>
    );
}

export default Footer;