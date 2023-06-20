import React, { useState } from "react";

import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from '../Images/logohart.png';
import './Navbar.css';

const Navbar = () => {


    const [hideSidebar, setHideSideBar] = useState(true);
    const toggleChecked = () => setHideSideBar((value) => !value);

    // Function to close the sidebar once a link is clicked
    const closeSidebar = () => {
        if (!hideSidebar) {
            setHideSideBar(true);
        }
    }

    return (
        <div className="fixed z-50 w-full">
            <div className="font-header  text-dark-green  z-50">
                <div className="md:w-full md:flex  sm:hidden">
                    <div className=" my-auto pl-5 ">
                        <img className="h-20" src={logo} alt="icon" />
                    </div>
                    <div className="lg:ml-8 sm:ml-3 mt-5">
                        <span className="lg:text-6xl md:text-4xl font-Rampart">CAIN-PEPE</span>
                    </div>
                    <div className="relative mx-auto pt-3 lg:mr-56 md:mr-36 text-xl ">
                        <ul className=" flex space-x-10 my-5 cursor-pointer  ">
                            <li className="nav-li">
                                <Link
                                    activeClass="active"
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeSidebar}>About</Link>
                            </li>
                            <li className="nav-li">
                                <Link activeClass="active"
                                    to="Tokenomics"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeSidebar}>Tokenomics</Link>
                            </li>
                            <li className="nav-li">
                                <Link to="Roadmap"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeSidebar}>Roadmap</Link>
                            </li>
                            <li className="nav-li">
                                <Link to="Partners"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={closeSidebar}>PARTNERS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {hideSidebar ? (
                <div className="flex md:hidden">
                    <div className="  cursor-pointer hover:text-lime-400 sm:text-amber-500 sm:right-0 absolute sm:pt-10 sm:pr-4  ">
                        <GiHamburgerMenu size={30} onClick={toggleChecked} />
                    </div>

                </div>
            ) : (
                <div className="  md:hidden  w-full h-full cover absolute bg-black font-header ">
                    <div className="flex  ">
                        <div className="z-20">
                            <img src={logo} className="h-16 fixed pl-4 mt-7" alt="logo" />
                        </div>

                        <div className=" hover:text-lime-400  sm:text-amber-500 sm:right-0 absolute cursor-pointer md:hidden sm:pt-10 sm:pr-4 z-20  ">
                            <ImCross size={30} onClick={toggleChecked} />
                        </div>
                    </div>
                    <div className="  fixed h-full w-full text-right    ">
                        <ul className=" space-y-5  py-5 text-2xl w-full h-full backdrop-blur-sm z-0 pt-24 pr-5 bg-white/30  ">
                            <li className="cursor-pointer hover:text-lime-400 ">
                                <Link to="About" smooth={true} duration={500} onClick={closeSidebar}>About</Link>
                            </li>
                            <li className="cursor-pointer hover:text-lime-400">
                                <Link to="Tokenomics" smooth={true} duration={500} onClick={closeSidebar}>Tokenomics</Link>
                            </li>
                            <li className="cursor-pointer hover:text-lime-400">
                                <Link to="Roadmap" smooth={true} duration={500} onClick={closeSidebar}>Roadmap</Link>
                            </li>
                            <li className="cursor-pointer hover:text-lime-400">
                                <Link to="Partners" smooth={true} duration={500} onClick={closeSidebar}>PARTNERS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )
            }
        </div>
    )
};

export default Navbar;
