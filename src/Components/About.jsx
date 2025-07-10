export function About() {
    return (
        <>
            <section className="text-[var(--text-secondary)] ">
                <div className="w-[min(calc(100%-2rem),60rem)] md:w-[min(calc(100%-4rem),60rem)] mx-auto space-y-8 md:px-16 ">

                    <h2 className="before:content-['01.'] before:text-xl text-xl before:absolute before:left-0 before:bg-[image:var(--lingrad)] before:inline-block before:text-transparent before:bg-clip-text relative pl-8 capitalize ">About me</h2>

                    <div className="flex flex-col space-y-12 md:flex-row md:gap-4">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <p>
                                    My obsession with tech started back in high school — I was that guy who always wanted to know how things worked. In uni, that curiosity locked onto web development. I got hooked on turning concepts into clean, functional interfaces and systems that feel good to use.
                                </p>

                                <p>
                                    Today I’m an intern at  <a className="text-[#1f94e2] hover:underline" href="https://www.finfind.co.za/home" target="_blank">Finfind</a>, pushing real code, fixing bugs, and picking up full-stack experience one commit at a time. I’m not just here to write code — I’m here to build things that make sense, solve problems, and actually matter
                                </p>
                            </div>
                            <div className="space-y-4 max-w-[500px]">
                                <p>Here are a few technologies I’ve been working with recently:</p>
                                <ul className="stack relative grid grid-cols-1 min-[400px]:grid-cols-2 grid-rows-3 text-[0.7rem]">
                                    <li>CSS3 / TailwindCSS / SCSS</li>
                                    <li>JavaScript (ES6+) / JQuery</li>
                                    <li>ReactJS</li>
                                    <li>C# / ASP.NET Core MVC</li>
                                    <li>SQL</li>
                                    <li>Git & GitHub</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center relative z-10">
                            <div className="image-wrapper  w-[15rem] h-[15rem]">
                                <img src="suit.jpeg" alt="Rodney Madondo" />
                            </div>
                            <div className="box absolute h-[15rem] w-[15rem] top-4 left-[50%] -translate-x-[45%]  -z-10 "></div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}