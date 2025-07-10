export function Built() {
    const featuredProjects = [
        {

            img: "Projects/space-tourism-website.png",
            title: "Space Tourism Website",
            desc: `A responsive, multi-page frontend build for a space tourism brand — focused on clean layouts, design fidelity, and mobile-first responsiveness.`,
            stack: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJS"],
            livelink: "https://rodneytakundamadondo.github.io/space-tourism-site/",
            github: "https://github.com/RodneyTakundaMadondo/space-tourism-site.git"
        },
        {

            img: "Projects/fullstacktodo.jpg",
            title: "Todo App",
            desc: `A fullstack To Do app built with ASP.NET Core MVC and SQL — focused on CRUD operations, clean architecture, and data persistence.`,
            stack: ["HTML", "CSS", "JavaScript", "SQL", "C#", "ASP.NET Core"],
            livelink: "https://fullstack-todoapp-g3xo.onrender.com",
            github: "https://github.com/RodneyTakundaMadondo/Fullstack-TodoApp.git"
        }
        // ["HTML", "CSS", "JavaScript", "SASS", "TailwindCSS", "ReactJS", "SQL", "C#", "ASP.NET Core"],
    ]
    return (

        <section className="text-[var(--text-secondary)] ">
            <div className="w-[min(calc(100%-2rem),60rem)] md:w-[min(calc(100%-4rem),60rem)] mx-auto space-y-8 md:px-16 ">

                <h2 className="before:content-['03.'] before:text-xl text-xl before:absolute before:left-0 before:bg-[image:var(--lingrad)] before:inline-block before:text-transparent before:bg-clip-text relative pl-8 capitalize ">
                    What I've Built
                </h2>
                <div className="text-white flex flex-col gap-6  rounded-md  ">
                    {
                        featuredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="h-[300px] sm:h-[15.5rem] bg-[#282046] md:bg-transparent flex items-center justify-center gap-4 
                                 flex-col relative  w-[min(calc(100-2rem),10rem)] px-2 md:px-0 group rounded-sm
                                 md:grid md:grid-cols-2 md:gap-0
                                 ">

                                <a
                                    // opacity-25
                                    href={project.livelink}
                                    target="_blank"
                                    className=" hover:cursor-pointer block w-full h-full absolute md:relative mr-auto left-0  bg-contain  bg-no-repeat bg-center  row-span-2 opacity-25 md:opacity-100
                                    "
                                    style={{ backgroundImage: `url(${project.img})` }}>
                                    <div className="overlay  absolute inset-0 bg-[rgba(40,_32,_70,_0.7)] transition-colors duration-300 ease-in-out  group-hover:bg-[rgba(40,_32,_70,_0)] pointer-events-none "></div>
                                </a>

                                <a
                                    href={project.livelink}
                                    target="_blank"
                                    className="proj-anchor block w-[80%] mx-auto md:w-auto md:mx-0 relative md:static z-10
                                    md:text-right pr-2   ">
                                    <span className="special-text">Featured Project</span>
                                    <span className="block font-bold group-hover:text-[var(--text-primary)]  transition-colors duration-500 ease-in-out proj-name">
                                        {project.title}
                                    </span>
                                </a>

                                <div className="relative space-y-4 z-10 w-[80%] text-[var(--text-secondary)]   md:space-y-2 md:w-full col-start-2 md:text-right">

                                    <p className=" font-medium md:bg-[#162035] md:px-4  ">
                                        {project.desc}
                                    </p>
                                    <ul className="flex md:justify-end flex-wrap gap-2  font-medium text-sm ">
                                        {
                                            project.stack.map((lang, index) => (
                                                <li
                                                    key={index}
                                                >
                                                    {lang}

                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>

    )
}
