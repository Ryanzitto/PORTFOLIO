"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStoreApp } from "../store";
import { IoIosArrowDown } from "react-icons/io";

import "../../node_modules/flag-icons/css/flag-icons.min.css";

export const Menu = () => {
  const { language, setLanguage } = useStoreApp();

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const handleClickHome = () => {
    router.push("/");
    setMenuOpened(false);
  };

  const handleClickAbout = () => {
    router.push("/About");
    setMenuOpened(false);
  };

  const handleClickContact = () => {
    router.push("/Contact");
    setMenuOpened(false);
  };

  const handleClickLanguage = (lang: string) => {
    setLanguage(lang);
    setOpen(false);

    const timeOut = setTimeout(() => {
      setMenuOpened(false);
    }, 500);

    return () => clearTimeout(timeOut);
  };

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="bg-none z-50 fixed top-8 right-10 lg:right-14 w-8 h-10 rounded-md"
      >
        <div
          className={`bg-zinc-800 h-0.5 rounded-md w-2/3 md:w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-zinc-800 h-0.5 rounded-md w-2/3 md:w-full my-2 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-zinc-800 h-0.5 rounded-md w-2/3 md:w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {menuOpened ? (
          <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -200,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              delay: 0.2,
            }}
            className={`w-full z-20 fixed top-0 right-0 bottom-0 bg-white overflow-hidden flex flex-col
      `}
          >
            <div className="flex w-full h-screen items-center justify-between flex-col p-8">
              <div className="w-full h-[95%] flex flex-col justify-center items-center gap-6">
                <span className="tracking-[3px] text-zinc-400 font-light">
                  MENU
                </span>
                <button
                  onClick={handleClickHome}
                  className="text-3xl font-extrabold text-zinc-800/80 cursor-pointer duration-[500ms] hover:opacity-80 transition-all"
                >
                  {language === "english" ? "HOME" : "INICIO"}
                </button>
                <button
                  onClick={handleClickAbout}
                  className="text-3xl font-extrabold text-zinc-800/80 cursor-pointer duration-[500ms] hover:opacity-80 transition-all"
                >
                  {language === "english" ? "ABOUT" : "SOBRE"}
                </button>
                <button
                  onClick={handleClickContact}
                  className="text-3xl font-extrabold text-zinc-800/80 cursor-pointer duration-[500ms] hover:opacity-80 transition-all"
                >
                  {language === "english" ? "CONTACT" : "CONTATO"}
                </button>
                <div className="flex w-full justify-center items-center flex-col gap-2">
                  <span className="tracking-[3px] text-zinc-400 font-light text-xs">
                    {language === "english" ? "LANGUAGE" : "IDIOMA"}
                  </span>
                  <div className="flex w-full h-fit justify-center items-center">
                    <div
                      onClick={() => setOpen(!open)}
                      className="cursor-pointer p-2 px-4 py-2 border border-zinc-300 font-semibold text-zinc-800 flex items-center justify-between w-[150px] h-10 mt-2"
                    >
                      <div className="flex gap-2">
                        {language === "english" && <span>{"EN-US"}</span>}
                        {language === "portuguese" && "PT-BR"}
                        {language === "english" ? (
                          <span className="fi fi-us" />
                        ) : (
                          <span className="fi fi-br" />
                        )}
                      </div>

                      <IoIosArrowDown
                        className={`${
                          open ? "rotate-180" : null
                        } transition-all duration-[300ms] text-lg`}
                      />
                    </div>
                    <AnimatePresence>
                      {open ? (
                        <motion.div
                          initial={{
                            y: -20,
                            opacity: 0,
                          }}
                          animate={{
                            y: 0,
                            opacity: 1,
                          }}
                          exit={{
                            y: -20,
                            opacity: 0,
                          }}
                          className="absolute mt-[125px] h-fit w-[150px] flex flex-col border border-zinc-300 border-t-transparent"
                        >
                          <div
                            onClick={() => handleClickLanguage("english")}
                            className="transition-all duration-[1000ms] cursor-pointer flex pl-2 gap-2 w-full h-fit p-2 bg-white hover:bg-zinc-200 border-t border-zinc-300"
                          >
                            <span className="text-sm">
                              {language === "english" ? "English" : "Inglês"}
                            </span>
                            <span className="fi fi-us" />
                          </div>
                          <div
                            onClick={() => handleClickLanguage("portuguese")}
                            className="cursor-pointer flex pl-2 gap-2 w-full h-fit p-2 bg-white transition-all duration-[1000ms] hover:bg-zinc-200"
                          >
                            <span className="text-sm">
                              {language === "english"
                                ? "Portuguese"
                                : "Português"}
                            </span>
                            <span className="fi fi-br" />
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="w-full h-[5%] flex flex-col gap-4 justify-end items-center">
                <span className="text-zinc-500 text-xs sm:text-xs">
                  {language === "english"
                    ? "Made with ❤️ by Ryan Henrique"
                    : "Feito com ❤️ por Ryan Henrique"}
                </span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
