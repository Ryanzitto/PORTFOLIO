"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { useStoreApp } from "../store";

import { IoCheckmarkCircle } from "react-icons/io5";
export const Menu = () => {
  const { language, setLanguage } = useStoreApp();
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const router = useRouter();

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
    setMenuOpened(false);
    setLanguage(lang);
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
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className={`w-full z-20 fixed top-0 right-0 bottom-0 bg-white overflow-hidden flex flex-col
      `}
          >
            <div className="flex w-full h-screen items-center justify-between flex-col p-8">
              <div className="w-full h-[80%] flex flex-col justify-center items-center gap-6">
                <span className="tracking-[3px] text-zinc-400 font-light">
                  MENU
                </span>
                <button
                  onClick={handleClickHome}
                  className="text-2xl font-bold text-zinc-800 cursor-pointer duration-[1500ms] hover:opacity-50 transition-all"
                >
                  {language === "english" ? "HOME" : "INICIO"}
                </button>
                <button
                  onClick={handleClickAbout}
                  className="text-2xl font-bold text-zinc-800 cursor-pointer duration-[1500ms] hover:opacity-50 transition-all"
                >
                  {language === "english" ? "ABOUT" : "SOBRE"}
                </button>
                <button
                  onClick={handleClickContact}
                  className="text-2xl font-bold text-zinc-800 cursor-pointer duration-[1500ms] hover:opacity-50 transition-all"
                >
                  {language === "english" ? "CONTACT" : "CONTATO"}
                </button>
                <div className="flex w-full justify-center items-center flex-col gap-4">
                  <span className="tracking-[3px] text-zinc-400 font-light text-sm">
                    {language === "english" ? "LANGUAGE" : "IDIOMA"}
                  </span>
                  <div className="w-fit flex flex-col">
                    <div className="flex w-60 justify-center items-center border border-zinc-300">
                      <div
                        onClick={() => handleClickLanguage("portuguese")}
                        className={`${
                          language === "portuguese"
                            ? "bg-zinc-800/80"
                            : "bg-white"
                        } cursor-pointer flex w-1/2 justify-center items-center p-2 transition-all duration-[1000ms]`}
                      >
                        <span
                          className={`${
                            language === "portuguese"
                              ? "text-white"
                              : "text-zinc-500"
                          } text-md transition-all duration-[1000ms] flex justify-center items-center gap-2`}
                        >
                          PT-BR
                          {language === "portuguese" && (
                            <IoCheckmarkCircle className="text-green-500 text-lg" />
                          )}
                        </span>
                      </div>
                      <div
                        onClick={() => handleClickLanguage("english")}
                        className={` ${
                          language === "english" ? "bg-zinc-800/80" : "bg-white"
                        } cursor-pointer flex w-1/2 justify-center items-center p-2 ransition-all duration-[1000ms]`}
                      >
                        <span
                          className={`${
                            language === "english"
                              ? "text-white"
                              : "text-zinc-500"
                          } text-md transition-all duration-[1000ms] flex justify-center items-center gap-2`}
                        >
                          EN-US
                          {language === "english" && (
                            <IoCheckmarkCircle className="text-green-500 text-lg" />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[20%] flex flex-col gap-4 justify-center items-center">
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
