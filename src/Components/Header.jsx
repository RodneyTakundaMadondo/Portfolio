import { useState, useEffect, useRef } from "react";
import { EmailLink } from "./EmailLink";
export function Header() {
    const [isSideOut, setIsSideOut] = useState(false);
    const menuRef = useRef();

    function HandleClick() {
        setIsSideOut(prev => !prev)
        animateMenu()
    }
    function animateMenu() {
        let menuBtn = menuRef.current;
        if (!menuBtn) return;
        menuBtn.classList.remove("rotate");
        void menuBtn.offsetWidth;
        menuBtn.classList.add("rotate");
    }

    useEffect(() => {

        if (!isSideOut) return;

        const sidePanel = document.querySelector(".side-panel");
        const toggleButton = document.querySelector(".sidepanel-toggle");

        const handleClickOutside = (e) => {
            if (sidePanel && !sidePanel.contains(e.target) && toggleButton && !toggleButton.contains(e.target)) {
                setIsSideOut(false);
                animateMenu()
            }
        };


        window.addEventListener("click", handleClickOutside);


        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [isSideOut]);
    // md:w-[min(calc(100%-2rem),60rem)]
    return (
        <>
            <nav className='md:flex md:justify-between md:items-center md:w-full md:px-[2.5rem]  md:mx-auto md:pt-10 '>

                <div className='flex justify-between items-center z-[-10] md:z-auto px-4 pt-4 md:px-0 md:pt-0 md:block  md:min-w-auto '>
                    <div className='min-w-[2rem] md:min-w-auto logo-container  '>
                        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M90.8018 26.4434V73.5557L50 97.1123L9.19922 73.5566V26.4424L50 2.88672L90.8018 26.4434Z" stroke="#8864D5" strokeWidth="5" />
                            <path d="M15.0739 61V37.7273H24.6875C26.4299 37.7273 27.9337 38.0417 29.1989 38.6705C30.4716 39.2917 31.4527 40.1856 32.142 41.3523C32.8314 42.5114 33.1761 43.8864 33.1761 45.4773C33.1761 47.0909 32.8239 48.4621 32.1193 49.5909C31.4148 50.7121 30.4148 51.5682 29.1193 52.1591C27.8239 52.7424 26.2898 53.0341 24.517 53.0341H18.4375V48.6023H23.4716C24.3201 48.6023 25.0284 48.4924 25.5966 48.2727C26.1723 48.0455 26.608 47.7045 26.9034 47.25C27.1989 46.7879 27.3466 46.197 27.3466 45.4773C27.3466 44.7576 27.1989 44.1629 26.9034 43.6932C26.608 43.2159 26.1723 42.8598 25.5966 42.625C25.0208 42.3826 24.3125 42.2614 23.4716 42.2614H20.6989V61H15.0739ZM28.1761 50.3636L33.9716 61H27.8352L22.1534 50.3636H28.1761ZM35.5 42.2955V37.7273H55.1705V42.2955H48.1136V61H42.5682V42.2955H35.5ZM57.9176 37.7273H64.8835L70.7926 52.1364H71.0653L76.9744 37.7273H83.9403V61H78.4631V46.7045H78.2699L72.679 60.8523H69.179L63.5881 46.625H63.3949V61H57.9176V37.7273Z" fill="#8864D5" />
                        </svg>
                    </div>
                    <button
                        ref={menuRef}
                        className="text-[#8864d5] text-[2rem]  sidepanel-toggle z-[105] md:hidden"
                        onClick={HandleClick}
                    >
                        {isSideOut ? < i className='bx  bx-x '></i> : <i className='bx bx-menu-right'></i>}
                    </button>
                </div>

                <div className={`   side-panel transition-transform duration-300 ease-in-out fixed top-0  bg-[#162035] z-[100] w-[70%] sm:w-[60%] md:w-[80%] right-0 ${isSideOut ? "translate-x-0" : "translate-x-full"} md:static   min-h-full  md:bg-inherit md:translate-x-0 md:min-h-auto md:shadow-none  min-[900px]:!w-[45rem]`}>

                    <ol className="mt-[6rem] flex flex-col items-center text-center side-ordered-list md:flex-row md:mt-0 md:text-start md:justify-between  ">
                        <li className="">
                            <span className="">01.</span>
                            About
                        </li>
                        <li className="">
                            <span className="">02.</span>
                            Experience
                        </li>
                        <li className="">
                            <span className="">03.</span>
                            Work
                        </li>
                        <li className="">
                            <span className="">04.</span>
                            Contact
                        </li>
                        <li className="">
                            <a
                                href="/cvlatest.pdf"
                                className="resume-btn border-solid rounded-[5px] border-2 border-[#8864d5] text-[#8864d5] z-10  w-[7.5rem] h-[2.5rem] flex justify-center items-center md:w-[5.5rem]">
                                Resume
                            </a>
                        </li>
                    </ol>
                </div>
                <div className=" hidden md:block fixed left-0 bottom-0 px-[2.5rem] h-[400px]  ">
                    <ul className="social-icons flex flex-col gap-[2rem] items-center  min-h-[60%] text-[var(--text-secondary)] ">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/madondotakundaoriginal"><i
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
                </div>
                <div className=" hidden email-container  fixed bottom-0 min-h-[50%] h-[400px] md:flex right-0 px-[2.5rem] w-[7rem]  ">
                    <EmailLink />
                </div>
            </nav>
        </>
    )
}