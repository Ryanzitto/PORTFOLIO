"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "./components/Footer";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaNodeJs, FaArrowRight } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";

import { useStoreApp } from "./store";

import {
  SiTestinglibrary,
  SiRedux,
  SiAxios,
  SiExpress,
  SiFramer,
} from "react-icons/si";

interface CardProps {
  projectName: string;
  link: string;
  desc: string;
  year: string;
  bg: string;
}

const projectsEnglish = [
  {
    name: "R&M Website",
    desc: "Rick and Morty themed website, made for fans, This project allows the user to search for information about the series such as characters, dimensions and locations shown in the series and also information about the episodes.",
    link: "https://rickandmorty-five-pi.vercel.app/",
    year: "2023",
    bg: "bg-RM",
  },
  {
    name: "IDK GAME",
    desc: "IDK GAME is a game made from 3D models, the game mechanics are simple, just survive on the platform and collect as much gold as possible while avoiding some events that will try to knock you down!",
    link: "https://ryanzitto.github.io/THREE-IDK/",
    year: "2023",
    bg: "bg-IDK",
  },
  {
    name: "POSTAGRAM",
    desc: "Website where it is possible to create interactive posts by adding a title, subtitle and an image, it is possible to interact with posts from other users with actions such as commenting and liking.",
    link: "https://postagram-frontend.vercel.app/",
    year: "2023 - 2024",
    bg: "bg-Post",
  },
];

const projectsPortuguese = [
  {
    name: "R&M Website",
    desc: "Site temático de Rick e Morty, feito para fãs, esse projeto permite ao usuário buscar informações sobre a série como personagens, dimensões e locações mostradas na série e também informações sobre os episódios.",
    link: "https://rickandmorty-five-pi.vercel.app/",
    year: "2023",
    bg: "bg-RM",
  },
  {
    name: "IDK GAME",
    desc: "IDK GAME é um jogo feito a partir de modelos 3D, a mecânica do jogo é simples, basta sobreviver na plataforma e coletar o máximo de ouro possível evitando alguns eventos que tentarão te derrubar!",
    year: "2023",
    link: "https://ryanzitto.github.io/THREE-IDK/",
    bg: "bg-IDK",
  },
  {
    name: "POSTAGRAM",
    desc: "Site onde é possível criar posts interativos adicionando título, subtítulo e uma imagem, é possível interagir com posts de outros usuários com ações como comentar e curtir.",
    link: "https://postagram-frontend.vercel.app/",
    year: "2023 - 2024",
    bg: "bg-Post",
  },
];

const Section = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <motion.section
      className="h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const FirstSection = () => {
  const router = useRouter();
  const { language } = useStoreApp();

  const handleClickProjects = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleClickAbout = () => {
    router.push("/About");
  };

  const handleClickContact = () => {
    router.push("/Contact");
  };

  return (
    <Section>
      <div className="flex w-screen h-screen overflow-x-hidden justify-start items-start lg:items-center lg:justify-center bg-white relative">
        <main className="h-full w-full flex flex-col lg:flex-row justify-center items-center relative">
          <div className="z-10 flex justify-center sm:justify-start items-center h-full w-full sm:pl-16">
            <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
              <span className="tracking-[4px] text-zinc-500 font-light font-nunito w-fit text-md">
                RYAN HENRIQUE
              </span>
              <div className="flex flex-col gap-2 pt-4 justify-center sm:items-start items-center">
                <span className="text-7xl sm:text-8xl text-zinc-800 font-nunito font-black">
                  Full Stack
                </span>
                <div className="flex h-fit items-end">
                  <span className="text-7xl sm:text-8xl background-animate bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-nunito font-black">
                    Developer
                  </span>
                </div>
                <p className="text-center sm:text-start font-nunito font-medium text-zinc-400 w-[350px] sm:w-[380px] md:w-[600px] text-lg pt-4">
                  {language === "english"
                    ? "Over the last two years I have dedicated myself to learning programming and developing my skills as a FullStack developer with a focus on frontend."
                    : "Nos últimos dois anos tenho me dedicado a aprender programação e desenvolver minhas habilidades como desenvolvedor FullStack com foco em frontend."}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row h-fit w-full items-center gap-4 pt-10 md:pt-8">
                <span
                  onClick={handleClickProjects}
                  className="cursor-pointer text-xl md:text-xl text-zinc-600 font-nunito font-bold  duration-[1500ms] hover:underline hover:opacity-50"
                >
                  {language === "english" ? "Projects" : "Projetos"}
                </span>
                <div className="hidden sm:flex h-1 w-1 rounded-full bg-zinc-600"></div>
                <span
                  onClick={handleClickAbout}
                  className="cursor-pointer text-xl md:text-xl text-zinc-600 font-nunito font-bold  duration-[1500ms] hover:underline hover:opacity-50"
                >
                  {language === "english" ? "About Me" : "Sobre mim"}
                </span>
                <div className="hidden sm:flex h-1 w-1 rounded-full bg-zinc-600"></div>
                <span
                  onClick={handleClickContact}
                  className="cursor-pointer text-xl md:text-xl text-zinc-600 font-nunito font-bold  duration-[1500ms] hover:underline hover:opacity-50"
                >
                  {language === "english" ? "Contact" : "Contato"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center h-full w-full pl-16 absolute">
            <div className="w-full h-full flex justify-end items-center pr-16">
              <AnimatePresence>
                <motion.img
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="w-[500px] hidden lg:flex"
                  src="images/image_example.png"
                />
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </Section>
  );
};

const SecondSection = () => {
  const { language } = useStoreApp();
  return (
    <div className="overflow-x-hidden w-screen h-screen-2xl justify-start items-start flex flex-col bg-white">
      <div className="w-full h-full p-10 flex flex-col items-center md:items-start justify-center">
        <span className="tracking-[3px] text-zinc-400 font-light font-nunito w-fit">
          {language === "english" ? "PROJECTS" : "PROJETOS"}
        </span>
        <span className="font-nunito text-zinc-800 font-black text-2xl md:text-6xl w-fit mt-4">
          {language === "english" ? "Personal Projects" : "Projetos pessoais"}
        </span>
        {language === "english" ? (
          <div className="w-full h-fit p-10 flex justify-center items-center gap-10 flex-wrap mt-8">
            {projectsEnglish.map((item) => {
              return (
                <Card
                  key={item.name}
                  projectName={item.name}
                  desc={item.desc}
                  link={item.link}
                  year={item.year}
                  bg={item.bg}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full h-fit p-10 flex justify-center items-center gap-10 flex-wrap mt-8">
            {projectsPortuguese.map((item) => {
              return (
                <Card
                  key={item.name}
                  projectName={item.name}
                  desc={item.desc}
                  link={item.link}
                  year={item.year}
                  bg={item.bg}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="w-full h-full p-10 flex flex-col items-center md:items-start justify-center">
        <span className="font-nunito text-zinc-800 font-black text-2xl md:text-6xl w-fit mt-4">
          {language === "english"
            ? "Freelancer Projects"
            : "Projetos Freelancer"}
        </span>
        <div className="w-full h-fit p-10 flex justify-center items-center gap-10 flex-wrap mt-8">
          <div className="w-full h-[500px] flex justify-center items-center">
            <span className="text-zinc-800/80 text-5xl">
              {language === "english" ? "Comming soon" : "Em breve"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const router = useRouter();

  const { language } = useStoreApp();
  const handleClickLetsWork = () => {
    router.push("Contact");
  };
  return (
    <div className="overflow-x-hidden w-screen h-screen-2xl justify-start items-start flex bg-white">
      <div className="w-full h-full p-10 flex flex-col items-center justify-center">
        <span className="tracking-[3px] text-zinc-400 font-light font-nunito w-fit">
          {language === "english"
            ? "NEED A WEB DEVELOPER?"
            : "PRECISA DE UM DESENVOLVEDOR?"}
        </span>
        <div className="flex w-fit h-20 justify-center items-center gap-4 duration-[1000ms] transition-all hover:opacity-80 bg-pink">
          <div
            onClick={handleClickLetsWork}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col gap-4 justify-center items-center"
          >
            <div className="flex gap-4 justify-center items-center ">
              <span className="text-zinc-800 font-nunito font-black text-2xl md:text-5xl w-fit cursor-pointer">
                {language === "english" ? "Let's" : "vamos"}
              </span>
              <span className="-mt-2 font-outline-2 text-white font-nunito font-black text-2xl md:text-5xl w-fit cursor-pointer">
                {language === "english" ? "work" : "trabalhar"}
              </span>
              <span className="font-nunito text-zinc-800 font-black text-2xl md:text-5xl w-fit cursor-pointer">
                {language === "english" ? "togheter" : "juntos"}
              </span>
              <FaArrowRight className="text-zinc-800 text-4xl h-fit" />
            </div>
            <div className="w-[320px] md:w-[550px] h-[5px] bg-transparent justify-start items-start">
              <div
                className={`${
                  hovered ? "w-full" : "w-0"
                }  h-full bg-zinc-800/80 transition-all duration-[500ms]`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = (props: CardProps) => {
  const { projectName, link, desc, year, bg } = props;
  const [cardIsHovered, setCardIsHovered] = useState<boolean>(false);
  const { language } = useStoreApp();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      }}
      className={`${bg} w-fit flex flex-col gap-2 justify-center items-center relative`}
    >
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
          radius: 50,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
            type: "spring",
            damping: 10,
            duration: 0.2,
            stiffness: 100,
          },
        }}
        onMouseEnter={() => setCardIsHovered(true)}
        onMouseLeave={() => setCardIsHovered(false)}
        className={`${
          cardIsHovered ? "bg-zinc-800/90" : "bg-zinc-800/70"
        } backdrop-blur-sm w-[380px] h-[600px] md:w-[500px] md:h-[600px] flex items-center justify-center transition-all duration-[1500ms]`}
      >
        <AnimatePresence>
          {cardIsHovered ? null : (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.3,
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              className={`flex flex-col gap-2 justify-center items-center absolute`}
            >
              <span className="tracking-[3px] text-white font-light font-nunito">
                {year}
              </span>
              <span className="font-nunito text-4xl font-bold text-white">
                {projectName}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {cardIsHovered ? (
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              exit={{
                y: -200,
                opacity: 0,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              className="w-full h-full flex flex-col justify-start items-center"
            >
              <div className="w-full h-[20%] flex">
                <div className="pl-0 md:pl-12 w-full flex flex-col justify-end items-center md:items-start">
                  <span className="tracking-[3px] text-white font-light font-nunito">
                    {year}
                  </span>
                  <span className="font-nunito text-4xl font-bold text-white">
                    {projectName}
                  </span>
                </div>
              </div>
              <div className="w-full h-[70%] pl-0 md:pl-12 flex flex-col justify-between items-center md:items-start pt-4">
                <p className="font-nunito text-white font-medium pt-4 text-md md:text-lg w-[80%] md:w-[75%] text-center md:text-start">
                  {desc}
                </p>
                <div className="w-full flex flex-col mt-6 gap-2 md:justify-start justify-center md:items-start items-center">
                  <span className="font-nunito text-white tracking-[4px] font-light">
                    TECHS
                  </span>
                  {projectName === "R&M Website" && (
                    <div className="w-full h-10 flex gap-2 text-white justify-center md:justify-start items-start">
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <FaReact className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <TbBrandNextjs className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <BiLogoTypescript className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiTestinglibrary className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiTailwindcss className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiRedux className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiAxios className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                    </div>
                  )}
                  {projectName === "IDK GAME" && (
                    <div className="w-full h-10 flex gap-2 text-white justify-center md:justify-start items-start">
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <FaReact className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <TbBrandThreejs className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <BiLogoTypescript className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiTailwindcss className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiFramer className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                    </div>
                  )}
                  {projectName === "POSTAGRAM" && (
                    <div className="w-full h-10 flex gap-2 text-white justify-center md:justify-start items-start">
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <FaReact className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <BiLogoTypescript className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiFramer className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiTailwindcss className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiAxios className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <FaNodeJs className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <SiExpress className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                      <motion.div
                        whileHover={{
                          y: -5,
                        }}
                      >
                        <BiLogoMongodb className="text-2xl transition-all duration-[1000ms] hover:opacity-60" />
                      </motion.div>
                    </div>
                  )}
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="w-fit items-center justify-center flex gap-4 transition-all duration-[1500ms] hover:opacity-50">
                    <a
                      href={link}
                      target="blank"
                      className="w-fit pt-4 cursor-pointer text-white font-nunito font-bold text-4xl mb-8 cursor-pointer"
                    >
                      {language === "english" ? "View Project" : "Ver Projeto"}
                    </a>
                    <img src="images/seta.png" className="w-8 h-fit mb-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default function HomeComponent() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-white">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}
