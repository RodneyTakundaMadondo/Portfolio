export function Footer() {
    return (
        <footer className="md:hidden flex flex-col items-center gap-4">
            <ul className="text-[var(--text-secondary)] flex gap-8">
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/madondotakundaoriginal">
                        <i
                            className=" hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300 ease-in-out text-2xl fa-brands fa-linkedin fc"></i></a></li>
                <li>
                    <a target="_blank" href="https://github.com/RodneyTakundaMadondo"><i
                        className=" hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300 ease-in-out text-2xl fa-brands fa-github fc"></i></a></li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/i_am_rodney_22/"><i
                        className=" hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300 ease-in-out text-2xl fa-brands fa-instagram fc"></i></a></li>
                <li>
                    <a href="#"><i className="hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-300 ease-in-out text-2xl fa-brands fa-facebook-f"></i></a>
                </li>
            </ul>
            <a href="https://github.com/RodneyTakundaMadondo" className="text-[var(--text-secondary)] transition-colors hover:!text-[var(--text-primary)]">Built by Rodney Takunda Madondo</a>
        </footer>
    )
}