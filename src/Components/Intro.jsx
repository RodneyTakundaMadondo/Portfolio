export function Intro() {
    return (
        <section className="">
            <div className="flex flex-col px-4 space-y-8 md:w-[min(calc(100%-4rem),60rem)] md:mx-auto md:px-16 ">

                <div className="text-start space-y-2 md:space-y-8 ">
                    <span className="special-text block  md:text-xl">Hi, my name is</span>
                    <span className="text-white block font-bold text-3xl sm:text-4xl md:text-5xl">Rodney Madondo.</span>
                    <span className="text-[var(--text-secondary)] font-bold text-2xl md:text-4xl">I make real stuff for the web. Apps, interfaces, and everything in between.</span>

                </div>

                <div className="md:max-w-[35rem]">
                    <p className="text-[var(--text-secondary)] md:text-[1.1rem]">
                        I’m a junior Software Developer focused on leveling up,
                        supporting my team, and building
                        software that solves real problems.
                        Right now I’m working at <a className="text-[#1f94e2]" href="https://www.finfind.co.za/home" target="_blank">Finfind</a> , sharpening my backend and frontend
                        skills one project at a time.
                    </p>
                </div>

            </div>

        </section>
    )
}