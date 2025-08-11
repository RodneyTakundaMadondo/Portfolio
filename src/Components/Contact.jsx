export function Contact() {
    const user = 'madondotakundaoriginal';
    const domain = "gmail.com";
    const email = `${user}@${domain}`;
    return (
        <section className="space-y-4" id="contact">
            <div className="flex flex-col items-center gap-3 justify-center">
                <h2 className="before:content-['04.'] before:text-xl  text-xl before:absolute before:left-0 before:bg-[image:var(--lingrad)] before:inline-block before:text-transparent before:bg-clip-text relative pl-8 capitalize special-text ">
                    What's Next?
                </h2>
                <span className=" block text-3xl font-bold text-[var(--text-secondary)]">Get in touch</span>
            </div>
            <div className="space-y-8 w-[min(calc(100%-2rem),40rem)] mx-auto">
                <p className="text-[var(--text-secondary)] text-center">
                    I’m not actively exploring anything new at the moment, but my inbox is always open. Whether you have a question, some feedback, or just want to connect , feel free to reach out, I’ll do my best to respond!
                </p>
                <a
                    href={`mailto:${email}`}
                    className="resume-btn border-solid rounded-[5px] border-2 border-[#8864d5] text-[#8864d5] z-10  w-[7.5rem] h-[2.5rem] mx-auto flex justify-center items-center md:w-[5.5rem]">
                    Say Hello
                </a>
            </div>
        </section>
    )
}