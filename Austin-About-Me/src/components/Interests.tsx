type Interest = {
    title:string;
    description:string;
    image:string;
    position:string;
}

const interests: Interest[] = [
    {
        title: "Fitness",
        description: "Started lifiting in College, and has since fell in love with challanging myself physically and mentally in the gym.",
        image: "pictures/lifting.jpeg",
        position:"object-[10%_35%]"
    },
    {
        title: "Baking",
        description: "I've been baking since 5th grade, and I have since loved putting together desserts. It could be a cake, cookies, or even a cake for a dog, but I've definitely enjoyed eating my creations.",
        image: "pictures/baking.jpeg",
        position:"object-[30%_65%]"
    },
    {
        title: "Photography",
        description: "This year, I am aiming to post more on social media and document my life more.",
        image: "pictures/yerb.jpeg",
        position:"object-[40%_65%]"
    }
];

function Interests(){
    return(
        <section
            id = "interests" 
            className = "max-w-6xl mx-auto px-8 py-16 border-t border-slate-800"

        >
            <h2 className = "text-3xl font-bold mb-4">
                My Interests
            </h2>
            <p className = "text-gray-400 mb-8">
                This is a little bit of what I like to do outside of computer science. 
            </p>
            <div className = "grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest) => (
                    <div
                        key={interest.title}
                        className="bg-slate-800 rounded-xl overflow-hidden"
                    >
                        <img
                            src={interest.image}
                            alt={interest.title}
                            className={`w-full h-48 object-cover ${interest.position}`}
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                                {interest.title}
                            </h3>

                            <p className="text-gray-400">
                                {interest.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Interests;