"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Footer } from "../components/Footer";

import { useStoreApp } from "../store";

const AboutSection = () => {
  const { language } = useStoreApp();
  const [evolvingsHovered, setEvolvingIsHovered] = useState<boolean>(false);

  const [failingIsHovered, setFailingIsHovered] = useState<boolean>(false);

  const [catIsHovered, setCatIsHovered] = useState<boolean>(false);

  const [jokeIsHovered, setJokeIsHovered] = useState<boolean>(false);

  const [showGif, setShowGif] = useState<string>("");

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (evolvingsHovered) {
      setFailingIsHovered(false);
      setCatIsHovered(false);
      setJokeIsHovered(false);
      setShowGif("evolving");
      const timeOut = setTimeout(() => {
        setShowGif("");
        setEvolvingIsHovered(false);
      }, 1500);

      return () => clearTimeout(timeOut);
    }
    if (failingIsHovered) {
      setEvolvingIsHovered(false);
      setCatIsHovered(false);
      setJokeIsHovered(false);
      setShowGif("failing");
      const timeOut = setTimeout(() => {
        setShowGif("");
        setFailingIsHovered(false);
      }, 3000);

      return () => clearTimeout(timeOut);
    }
    if (catIsHovered) {
      setEvolvingIsHovered(false);
      setFailingIsHovered(false);
      setJokeIsHovered(false);
      setShowGif("cat");
      const timeOut = setTimeout(() => {
        setShowGif("");
        setCatIsHovered(false);
      }, 3000);

      return () => clearTimeout(timeOut);
    }
    if (jokeIsHovered) {
      setEvolvingIsHovered(false);
      setFailingIsHovered(false);
      setCatIsHovered(false);
      setShowGif("joke");
      const timeOut = setTimeout(() => {
        setShowGif("");
        setJokeIsHovered(false);
      }, 3000);

      return () => clearTimeout(timeOut);
    }
  }, [evolvingsHovered, failingIsHovered, catIsHovered, jokeIsHovered]);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      // Adiciona o evento de movimento do mouse
      requestAnimationFrame(() => updatePosition(e));
    };
    // Adiciona o evento de movimento do mouse
    document.addEventListener("mousemove", handleMouseMove);

    // Remove o evento quando o componente é desmontado
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen h-fit justify-center items-center flex bg-white flex-col ">
      <div className="flex flex-col w-full h-full justify-start items-center relative">
        <motion.span
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
          className="tracking-[3px] text-zinc-400 font-light font-nunito w-fit pt-20"
        >
          {language === "english" ? "SOME WORDS ABOUT ME" : "SOBRE MIM"}
        </motion.span>
        {language === "english" ? (
          <motion.span
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-800 w-[80%] text-center pt-10"
          >
            <strong className="font-nunito">I'm </strong>
            <strong className="text-white font-black font-outline-2">
              Ryan Henrique{" "}
            </strong>
            <strong className="font-nunito">, I'm a </strong>
            <strong className="text-white font-black font-outline-2">
              FullStack{" "}
            </strong>
            <strong className="font-nunito">
              developer focused on the Frontend and I use the{" "}
            </strong>
            <strong className="text-white font-black font-outline-2">
              MERN{" "}
            </strong>
            <strong className="font-nunito">
              stack to develop incredible, performant and responsive projects.
            </strong>
          </motion.span>
        ) : (
          <motion.span
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-800 w-[80%] text-center pt-10"
          >
            <strong className="font-nunito">Eu sou </strong>
            <strong className="text-white font-black font-outline-2">
              Ryan Henrique{" "}
            </strong>
            <strong className="font-nunito">, Sou </strong>
            <strong className="text-white font-black font-outline-2">
              FullStack{" "}
            </strong>
            <strong className="font-nunito">
              developer com foco no frontend e eu uso a{" "}
            </strong>
            <strong className="text-white font-black font-outline-2">
              MERN{" "}
            </strong>
            <strong className="font-nunito">
              stack para desenvolver projetos incríveis, performáticos e
              responsivos.
            </strong>
          </motion.span>
        )}
        {language === "english" ? (
          <motion.span
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            className="font-nunito text-lg sm:text-xl font-normal text-zinc-400 w-[65%] text-center pt-10 tracking-wider"
          >
            I have dedicated myself to studying web development for almost 2
            years, creating, experimenting,{" "}
            <strong
              onMouseEnter={() => setFailingIsHovered(true)}
              className="w-fit cursor-pointer"
            >
              failing
            </strong>{" "}
            but always{" "}
            <strong
              onMouseEnter={() => setEvolvingIsHovered(true)}
              className="w-fit cursor-pointer"
            >
              evolving
            </strong>{" "}
            as a developer.
            <br /> I work well in a team, I'm communicative and I'm always
            looking to improve my skills.
            <br />
            In my free time I like to watch some series, play sports, have fun
            playing online games, chat with my friends, listen to music and play
            with{" "}
            <strong
              onMouseEnter={() => setCatIsHovered(true)}
              className="w-fit cursor-pointer"
            >
              my cat.
            </strong>
          </motion.span>
        ) : (
          <motion.span
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            className="font-nunito text-lg sm:text-xl font-normal text-zinc-400 w-[65%] text-center pt-10 tracking-wider"
          >
            Dediquei-me a estudar desenvolvimento web por quase 2 anos, criando,
            experimentando,{" "}
            <strong
              onMouseEnter={() => setFailingIsHovered(true)}
              className="w-fit cursor-pointer"
            >
              falhando
            </strong>{" "}
            mas sempre{" "}
            <strong
              onMouseEnter={() => setEvolvingIsHovered(true)}
              className="w-fit cursor-pointer"
            >
              evoluindo
            </strong>{" "}
            como desenvoldor.
            <br /> Trabalho bem em equipe, sou comunicativo e estou sempre em
            busca para melhorar minhas habilidades.
            <br />
            No meu tempo livre gosto de assistir algumas séries, praticar
            esportes, me divertir jogar jogos online, conversar com meus amigos,
            ouvir música e jogar com{" "}
            <strong
              onMouseEnter={() => setCatIsHovered(true)}
              className="w-fit cursor-pointer"
            >
              meu gato.
            </strong>
          </motion.span>
        )}
        <div className="w-screen h-fit flex justify-center items-center p-10">
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
                delay: 1.2,
              },
            }}
            className="w-1/2 flex flex-col lg:flex-row h-fit mt-10"
          >
            <motion.div
              whileInView={"visible"}
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0,
                  },
                },
              }}
              className="w-full flex flex-col justify-start items-center py-10"
            >
              <span className="w-fit tracking-[3px] text-zinc-400 font-light font-nunito">
                {language === "english"
                  ? "HARD SKILLS"
                  : "HABILIDADES TÉCNICAS"}
              </span>
              <div className="mt-10 flex w-1/2 h-fit justify-center items-center gap-2 flex-wrap">
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  REACT
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  NEXTJS
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  THREEJS
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  REDUX
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  ZUSTAND
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  NODEJS
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  EXPRESS
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  MONGODB
                </span>
              </div>
            </motion.div>
          </motion.div>
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
                delay: 1.2,
              },
            }}
            className="w-1/2 flex flex-col lg:flex-row h-fit mt-10"
          >
            <motion.div
              whileInView={"visible"}
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0,
                  },
                },
              }}
              className="w-full flex flex-col justify-start items-center py-10"
            >
              <span className="w-fit tracking-[3px] text-zinc-400 font-light font-nunito">
                {language === "english" ? "SOFT SKILLS" : "HABILIDADES SOCIAIS"}
              </span>
              <div className="mt-10 flex w-1/2 h-fit justify-center items-center gap-2 flex-wrap">
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  {language === "english" ? "COMMUNICATION" : "COMUNICAÇÃO"}
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  {language === "english" ? "TEAMWORK" : "TRABALHO EM EQUIPE"}
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span className="font-nunito text-zinc-500 text-xl font-extrabold">
                  {language === "english" ? "COMMITMENT" : "COMPROMISSO"}
                </span>
                <span className="font-nunito text-zinc-300 text-xl font-extrabold">
                  /
                </span>
                <span
                  onMouseEnter={() => setJokeIsHovered(true)}
                  className="font-nunito text-zinc-500 text-xl font-extrabold underline"
                >
                  {language === "english" ? "GOOD JOKES" : "BOAS PIADAS"}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <AnimatePresence>
          {showGif === "evolving" ? (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
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
                opacity: 0,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              style={{
                left: `${position.x - 200}px`,
                top: `${position.y - 100}px`,
              }}
              className="w-fit h-fit absolute flex justify-center items-center transition-all"
            >
              <img className="w-[400px]" src="images/GIF-MICHAEL.gif" />
            </motion.div>
          ) : null}
          {showGif === "failing" ? (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
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
                opacity: 0,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              style={{
                left: `${position.x - 200}px`,
                top: `${position.y - 100}px`,
              }}
              className="w-fit h-fit absolute flex justify-center items-center"
            >
              <img className="w-[400px]" src="images/GIF-failing.gif" />
            </motion.div>
          ) : null}
          {showGif === "cat" ? (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
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
                opacity: 0,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              style={{
                left: `${position.x - 200}px`,
                top: `${position.y - 100}px`,
              }}
              className="w-fit h-fit absolute flex justify-center items-center"
            >
              <img className="w-[400px]" src="images/GIF-cat.gif" />
            </motion.div>
          ) : null}
          {showGif === "joke" ? (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
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
                opacity: 0,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  duration: 0.2,
                  stiffness: 100,
                },
              }}
              style={{
                left: `${position.x - 200}px`,
                top: `${position.y - 100}px`,
              }}
              className="w-fit h-fit absolute flex justify-center items-center"
            >
              <img className="w-[400px]" src="images/GIF-joke.gif" />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { src: "images/slide1.jpg", index: 0 },
    { src: "images/slide2.jpg", index: 1 },
    { src: "images/slide3.jpg", index: 2 },
    { src: "images/slide4.jpg", index: 3 },
  ];

  const showNextSlide = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const showPrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slides.length - 1);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.8,
        },
      }}
      className="overflow-hidden w-[80%] h-[560px] flex relative mt-24 justify-center items-center"
    >
      <div className="w-full h-fit absolute ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide.src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[90%] absolute z-10 flex justify-center items-center">
        <div className="w-[15%] h-full flex justify-center items-center">
          <button onClick={showPrevSlide}>
            <FaArrowLeft className="text-white/60 text-2xl transition-all duration-[1000ms] hover:text-white" />
          </button>
        </div>
        <div className="w-[70%] h-full flex justify-center items-end pb-16 gap-2">
          {slides.map((item) => {
            return (
              <div
                key={item.src}
                className={`${
                  slideIndex === item.index ? "bg-white" : "bg-white/60"
                } w-2 h-2 rounded-full `}
              ></div>
            );
          })}
        </div>
        <div className="w-[15%] h-full flex justify-center items-center">
          <button onClick={showNextSlide}>
            <FaArrowRight className="text-white/60 text-2xl transition-all duration-[1000ms] hover:text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ABoutComponent() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-hidden bg-white">
      <AboutSection />
      <Footer />
    </div>
  );
}
