export function OtherBuilds() {
    const noteWorthyProjects = [
        {


            title: "Bookmark Landing Page",
            desc: `A responsive landing page with tabbed feature sections, smooth navigation, and a modern, minimal design.`,
            stack: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
            livelink: "https://rodneytakundamadondo.github.io/bookmark-landing-page/",
            github: "https://github.com/RodneyTakundaMadondo/bookmark-landing-page.git"
        },
        {


            title: "E-commerce Product Page",
            desc: `A sleek and responsive product page showcasing product details, image gallery with zoom, and interactive add-to-cart functionality. Designed for a smooth shopping experience on both desktop and mobile.`,
            stack: ["HTML", "CSS", "JavaScript", "SCSS"],
            livelink: "https://rodneytakundamadondo.github.io/E-commerce-product-page/",
            github: "https://github.com/RodneyTakundaMadondo/E-commerce-product-page.git"
        },
        {


            title: "Multi-step Form",
            desc: `A user-friendly multi-step form with smooth transitions and real-time validation. Designed to guide users through complex input processes in a clear, organized way`,
            stack: ["HTML", "CSS", "JavaScript", "SCSS"],
            livelink: "https://rodneytakundamadondo.github.io/Multi-step-form-main/",
            github: "https://github.com/RodneyTakundaMadondo/Multi-step-form-main.git"
        },
        {


            title: "Manage Landing Page",
            desc: `A modern, responsive landing page featuring clear calls-to-action, smooth scrolling, and a minimalist design focused on user engagement and conversion.`,
            stack: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJS"],
            livelink: "https://rodneytakundamadondo.github.io/Manage-Landing-Page-Master/",
            github: "https://github.com/RodneyTakundaMadondo/Manage-Landing-Page-Master.git"
        },
        {


            title: "Calculator App",
            desc: `A fully functional, responsive calculator app featuring clean UI and smooth interactions. Designed for quick, accurate calculations with intuitive button layouts and error handling.`,
            stack: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
            livelink: "https://calculatorfrontendmentorsolution.netlify.app/",
            github: "https://github.com/RodneyTakundaMadondo/CalculatorApp.git"
        },
    ]
    const handleCardClick = (projectLink) => {
        window.open(projectLink, "_blank");
    };

    const handleInnerClick = (e) => {
        e.stopPropagation(); // stop outer click from firing
    };
    return (
        <section className="space-y-8">
            <div className="text-center">
                <h3 className="  text-[var(--text-secondary)] font-bold text-2xl">
                    Other Noteworthy Projects
                </h3>
                <a className="special-text font-bold text-lg hover:underline" >view the achive</a>
            </div>
            {/* w-[min(calc(100%-3rem),60rem)] */}
            <div className="projects px-4 max-w-[70rem] md:px-16 xl:px-0  lg w-auto  md:mx-auto   grid grid-cols-1 gap-4 sm:grid-cols-2 justify-items-center lg:grid-cols-3 ">

                {
                    noteWorthyProjects.map((project, index) => (
                        <div
                            key={index}

                            onClick={() => { handleCardClick(project.livelink) }}
                            target="_blank"
                            className="p-8 bg-[#282046] flex flex-col justify-between hover:cursor-pointer">
 
                            <div className="space-y-4">
                                <div className="text-white flex justify-between ">
                                    <i className="fa-solid fa-folder text-3xl"></i>
                                    <div className="flex items-center gap-4">
                                        <a
                                            onClick={handleInnerClick}
                                            href={project.livelink}
                                            target="_blank"
                                            className="hover:text-[var(--text-primary)]"
                                        >
                                            <i className="fa-solid fa-arrow-up-right-from-square text-2xl"></i></a>
                                        <a
                                            onClick={handleInnerClick}
                                            href={project.github}
                                            target="_blank"
                                            className="hover:text-[var(--text-primary)]"
                                        >
                                            <i className="fa-brands fa-github text-2xl"></i></a>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-white font-bold text-xl">{project.title}</h4>
                                    <p className="text-[var(--text-secondary)]">
                                        {
                                            project.desc
                                        }
                                    </p>
                                </div>
                            </div>

                            <ul className="text-[var(--text-secondary)] flex flex-wrap gap-2  font-medium text-sm mt-4 ">
                                {
                                    project.stack.map((lang, sIndex) => (
                                        <li key={sIndex} >{lang}</li>
                                    ))
                                }
                            </ul>
                        </div>

                    ))
                }
            </div>
        </section>
    )
}