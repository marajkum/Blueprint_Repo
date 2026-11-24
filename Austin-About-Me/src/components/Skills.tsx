
type SkillCategory = {
    title: string;
    skills: string[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            "Python", "C", "C++", "Java",
            "JavaScript", "Dart", "RISC-V Assembly"
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            "React", "Flutter", "PyTorch", "OpenCV",
            "MediaPipe", "NumPy", "pandas", "Gymnasium"
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            "Node.js", "Git", "GitHub", "Docker",
            "Kubernetes", "Firebase", "Linux"
        ]
    }
];
function Skills() {
    return (
        <section
            id="skills"
            className="max-w-6xl mx-auto px-8 py-16 border-t border-slate-800"
        >
            <h2 className="text-3xl font-bold mb-4">
                Technical Skills
            </h2>

            <p className="text-gray-400 mb-8">
                Programming languages, technologies,
                and tools I work with.
            </p>

            <div className="flex flex-col gap-6">

                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="bg-slate-800 rounded-xl p-6"
                    >
                        <h3 className="text-xl font-bold mb-4">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-indigo-900 text-indigo-200 px-4 py-2 rounded-lg"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Skills;
