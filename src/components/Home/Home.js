import React from "react";
import pepebg from "../Images/no-bg-pepe.png";
import './Home.css'
import pepecircle from "../Images/bglogo.png";
import pepe2 from "../Images/pepe-2.png";
import Pie from "../Images/Pie.png";
import cg from "../Images/cg.webp";
import pinksale from "../Images/pinksale.png";
import cmc from "../Images/cmc.png";
import unity from "../Images/unity.png";
import Button from '@mui/material/Button';
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Label } from 'semantic-ui-react'
import { ImCross } from "react-icons/im";
import { FcCheckmark, FcServices, FcSynchronize } from "react-icons/fc";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Home = () => {

    return (
        <div className="z-0">
            <div className="  w-full h-full   overflow-y-auto ">

                <section id="Home">
                    <div className="z-0">
                        <div className="grid md:grid-cols-2  bg-gradient-to-b from-light-flesh z-10 fade">
                            <div className=" z-10 ">
                                <img src={pepebg} alt="bg" className="sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2lx:h-full" />
                            </div>
                            <div className=" z-0 absolute overflow-hidden">
                                <div className=" z-20 animate-spin ">
                                    <img src={pepecircle} alt="bg-circle" className=" sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px]  2xl:h-full my-24" />
                                </div>
                            </div>
                        </div>
                        <div className="z-20 ">
                            <div className="absolute text-center z-0   sm: top-28 md:right-20 md:top-44 lg:right-[180px]  2xl:right-[250px] xl:right-48 lg:top-48 sm:right-0">
                                <Bounce left>
                                    <div className="md:py-2">
                                        <span className="lg:text-9xl md:text-7xl sm:text-5xl  font-color border-b-2 border-cyan-600  font-Lucky text-dark-green  mr-24">
                                            CAIN
                                        </span>
                                    </div>
                                </Bounce>
                                <br></br>
                                <Bounce right>
                                    <div className=" h-[200px] md:py-10" >
                                        <span className="lg:text-9xl md:text-7xl sm:text-5xl font-fam-the font-color-the  font-Lucky   text-light-green  md:pl-24 md:mr-1 ">
                                            P
                                        </span>
                                        <span className="lg:text-9xl md:text-7xl sm:text-5xl font-fam-the font-color-the  font-Lucky animate-bounce absolute  text-light-green  ">
                                            E
                                        </span>
                                        <span className="lg:text-9xl md:text-7xl sm:text-5xl font-fam-the font-color-the  font-Lucky  text-light-green md:ml-16 sm:ml-6   ">
                                            P
                                        </span>
                                        <span className="lg:text-9xl md:text-7xl sm:text-5xl font-fam-the font-color-the  font-Lucky animate-bounce absolute  text-light-green    ">
                                            E
                                        </span>
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="About">
                    <div className="my-10 mx-2 ">
                        <Fade left>
                            <div className="my-5">
                                <span className=" text-6xl text-dark-green font-Lucky border-b-4 border-blue-800 ">
                                    Abo
                                </span>
                                <span className="text-6xl text-dark-green font-Lucky">ut</span>
                            </div>
                        </Fade>

                        <div className="grid grid-cols-2  bg-green-med rounded-3xl    text-dark-green sm:h-[700px] md:h-[650px] lg:h-[550px] xl:h-[450px] 2xl:h-[390px] ">
                            <Fade bottom>
                                <div className="w-full   z-10 my-auto">
                                    <div className="md:w-max-[400px] lg:w-max-[500px] sm:text-left md:text-left mx-5 md:tracking-wider md:indent-5 font-Gugi space-y-6 sm:text-dark-green md:text-light-flesh">
                                        <p className=" lg:text-7xl md:text-5xl sm:text-3xl text-center mx-2 my-2">CAIN PEPE</p>
                                        <span className="  md:text-2xl sm:text-xl ">Welcome to the world of Cain-PEPE Coin, the latest addition to the meme coin universe, backed by the reliability and efficiency of the Binance Smart Chain. Our coin harnesses the playful energy and undeniable appeal of meme culture, while offering real-world utility and strong value to its holders. This is a two stage project, the other project after this will be HUGE, you will be enjoying the trill of P2E and Casino and other FEATURES on one project. I promise that all of the holders of this token will be rewarded on our stage 2 project!</span>
                                    </div>
                                </div>
                            </Fade>
                            <div>
                                <img className="sm:h-[500px] md:h-[500px] sm:right-7   absolute  top-[655px] md:top-[755px] lg:top-[755px] xl:top-[755px] 2xl:top-[695px] z-0" src={pepe2} alt="pepe2" />
                            </div>
                        </div>

                        <div className=" my-10">
                            <div className="text-black my-10">
                                <Label>
                                    <span className=" text-black text-base">CA</span>
                                    <Label.Detail className=" text-base text-dark-green" >0xd01a8A289E215a5f964C72701Ca79103De7a0480</Label.Detail>

                                </Label>
                            </div>
                            <div className="flex space-x-5 justify-center">
                                <div>
                                    <Button variant="contained" endIcon={<FaTelegramPlane />}>
                                        Buy CPP
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="contained" endIcon={<FaTwitter />}>
                                        Twitter
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="contained" endIcon={<FaTelegramPlane />}>
                                        Telegram
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="Tokenomics">
                    <div className="py-10">
                        <span className=" text-6xl font-Lucky">TOKENOMICS</span>
                    </div>

                    <div className=" bg-gradient-to-t from-dark-green mx-auto flex justify-center">
                        <Fade>
                            <Slide bottom>
                                <div className="py-10 ">
                                    <img src={Pie} alt="Pie" />
                                </div>
                            </Slide>
                        </Fade>
                    </div>
                </section>

                <section id="Roadmap">
                    <div className="my-5 w-full relative tracking-wider">
                        <div>
                            <span className="text-6xl font-Lucky">ROADMAP</span>
                        </div>

                        <div
                            className="grid pt-[50px]  w-full  sm:grid-cols-1 sm:gap-y-10 lg:grid-cols-2 mx-auto  ">
                            <Slide left>
                                <div
                                    className="flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow  duration-300 2xl:ml-[240px] xl:mr-[100px]   sm:place-self-center sm:h-96 md:h-[300px] lg:h-[350px]  border-2 bg-opacity-30 text-left">
                                    <div className="hover:text-lime-500 flex flex-col items-center about-text mb-5">
                                        <FcServices size={50} />
                                        <h1 className=" font-Gugi my-5 ">PHASE 1</h1>
                                    </div>
                                    <div className=" font-Gugi space-y-2">
                                        <div className="flex space-x-2">
                                            <FcCheckmark size={30} className="animate-pulse" />
                                            <span class=" text-xl mt-1">Building our Website</span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <FcCheckmark size={30} className="animate-pulse" />
                                            <span class=" text-xl mt-1"> Smart Contract Creation</span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <FcCheckmark size={30} className="animate-pulse" />
                                            <span class=" text-xl mt-1">Community Building TG/Discord</span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <FcCheckmark size={30} className="animate-pulse" />
                                            <span class=" text-xl mt-1"> Pink Sale Listing for Presale</span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <ImCross size={30} className="animate-pulse text-red-600" />
                                            <span class=" text-xl mt-1"> Casual Marketing</span>

                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide right>
                                <div
                                    className="flex flex-col items-center p-7 rounded-lg hover:shadow-xl transition-shadow 2xl:mr-[200px] xl:mr-[20px] duration-300  sm:place-self-center sm:h-96 md:h-[300px] lg:h-[350px]  border-2 bg-opacity-30 text-left">
                                    <div className="hover:text-lime-500 flex flex-col items-center about-text mb-5">
                                        <FcSynchronize size={50} className=" animate-spin" />
                                        <h1 className="font-Gugi my-2">PHASE 2</h1>
                                    </div>
                                    <div className=" font-Gugi space-y-2">
                                        <div className="flex space-x-2 ">
                                            <ImCross size={30} className="animate-pulse text-red-600" />
                                            <span class=" text-xl mt-1 ">CG/CMC Listing</span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <ImCross size={30} className="animate-pulse text-red-600" />
                                            <span class=" text-xl mt-1">AIRDROP for HOLDERS</span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <ImCross size={30} className="animate-pulse text-red-600" />
                                            <span class=" text-xl mt-1">Polishing our STAGE2 PROJECT </span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <ImCross size={30} className="animate-pulse text-red-600" />
                                            <span class=" text-xl mt-1">Whitelisting all the HOLDERS</span>

                                        </div>
                                        <div className="flex space-x-2">
                                            <ImCross size={30} className="animate-pulse  text-red-600" />
                                            <span class=" text-xl mt-1">We Continue on next STAGE!</span>

                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>

                    </div>

                </section>
                <section id="Partners">
                    <div className="mt-10 pt-5 bg-black  rounded-t-lg">
                        <span className="text-6xl font-Lucky text-white  " >PARTNERS</span>
                        <div>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                                <div className=" rounded-lg w-[200px] sm:ml-32  my-auto  mx-auto">
                                    <img src={pinksale} alt="pinksale" />
                                </div>
                                <div className=" rounded-lg w-[200px] lg:mb-8 lg:mr-16 sm:ml-[140px]   mx-auto my-auto sm:mb-5">
                                    <img src={cg} alt="cg" />
                                </div>
                                <div className=" rounded-lg w-[300px] lg:mb-9 lg:mr-16 lg:ml-[140px] md:ml-[158px] sm:ml-[140px]  mx-auto my-auto sm:mb-5">
                                    <img src={cmc} alt="cmc" />
                                </div>
                                <div className=" rounded-lg w-[150px] lg:mb-7  sm:ml-[140px]  my-auto mx-auto sm:mb-5">
                                    <img src={unity} alt="unity" />
                                </div>
                            </div>
                            <div className="mt-10 pt-5 bg-black  rounded-b-lg" >
                                <div className=" mx-auto text-white  text-center font-Lucky tracking-wider">
                                    <div>
                                        <span className=" text-red-700">WARNING! : </span>
                                        <span>CAIN-PEPE is a MEME COIN with 2 STAGED-PROJECT, if you don't believe on the TEAM this is not for you!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;