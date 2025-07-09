import { useState } from "react";
export function Work() {
    const workplaces = ["Finfind"];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <section className="text-[var(--text-secondary)] ">
            <div className="wrapper ">
                <div className="w-[min(calc(100%-2rem),60rem)] md:w-[min(calc(100%-4rem),60rem)] mx-auto space-y-8 md:px-16 ">

                    <h2 className="before:content-['02.'] before:text-xl text-xl before:absolute before:left-0 before:bg-[image:var(--lingrad)] before:inline-block before:text-transparent before:bg-clip-text relative pl-8 capitalize ">Where I've Worked</h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-[100px_1fr]">
                        <div className="work-places ">
                            <ul className={`border-solid  border-[var(--text-secondary)] border-b-[1px] custom-scroll flex justify-between overflow-x-scroll md:overflow-auto  md:flex-col md:border-b-0 md:border-l-[1px] `}>

                                {
                                    workplaces.map((company, index) => (
                                        <li
                                            className={`work-place hover:cursor-pointer active:scale-3d    pb-2 ${index === activeIndex ? "active" : ""}`}
                                            key={index}
                                            onClick={() => { handleClick(index) }}
                                        >
                                            {company}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="work-information space-y-4">

                            <h1 className="font-bold">
                                Intern Developer <span className="text-[#1f94e2]">@<a className="text-[#1f94e2] hover:underline" href="https://www.finfind.co.za/home" target="_blank">Finfind</a></span>
                            </h1>

                            <p>February 2022 - present</p>

                            <ul className="experience relative text-[0.9rem]">
                                <li className="">
                                    Conduct functional testing across multiple white-label platforms, identifying bugs and ensuring stability before deployment
                                </li>
                                <li>
                                    Assist with front-end updates and minor UI improvements using HTML, CSS, and JavaScript when requested by senior developers
                                </li>
                                <li>
                                    Perform SQL queries to extract and analyze data for business and technical teams, contributing to data-driven decisions
                                </li>
                                <li>
                                    Actively build personal full-stack projects outside of work using React, ASP.NET Core, and SQL to sharpen my development skills
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}