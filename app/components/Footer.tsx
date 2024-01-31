import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useStoreApp } from "../store";

export const Footer = () => {
  const { language } = useStoreApp();
  return (
    <div className="overflow-x-hidden w-screen h-screen-2xl justify-start items-start flex bg-white">
      <div className="w-full h-full p-0 sm:p-10 flex flex-col items-center justify-center">
        <div className="w-[90%] h-[1px] border-t border-zinc-300"></div>
        <div className="w-[90%] h-fit flex justify-center items-center md:justify-start items-start py-6">
          <div className="w-1/2 sm:w-fit h-[300px] flex flex-col p-2 justify-center">
            <span className="text-zinc-800 text-lg sm:text-2xl font-bold">
              {language === "english" ? "Contact info -" : "Info de contato"}
            </span>
            <p className="text-zinc-500/80 text-xs sm:text-md pt-4 w-[90%] md:w-[60%]">
              {language === "english"
                ? "Hope you enjoyed my Portfolio. Feel free to get in touch via email or my phone number"
                : "Espero que tenha gostado do meu Portfólio. Sinta-se à vontade para entrar em contato por e-mail ou meu número de telefone"}
            </p>
            <div className="flex gap-2 items-center pt-6">
              <span className="text-zinc-500 text-xs sm:text-md">
                ryanhenriquedev@gmail.com
              </span>
            </div>
            <div className="flex gap-2 items-center pt-2">
              <span className="text-zinc-500 text-xs sm:text-md">
                +55 031 9 0000-0000
              </span>
            </div>
            <div className="flex flex-col gap-2 pt-10">
              <span className="text-zinc-500 text-xs sm:text-xs">
                © 2022 - 2024
              </span>
              <span className="text-zinc-500 text-xs sm:text-xs">
                {language === "english"
                  ? "Made with ❤️ by Ryan Henrique"
                  : "Feito com ❤️ por Ryan Henrique"}
              </span>
            </div>
          </div>
          <div className="w-1/2 sm:w-fit h-[300px] flex flex-col p-2 justify-center">
            <span className="text-zinc-800 text-lg sm:text-2xl font-bold">
              {language === "english"
                ? "Current availability -"
                : "Disponibilidade atual -"}
            </span>
            <p className="text-zinc-500/80 text-xs sm:text-md pt-4 w-[90%] md:w-[60%]">
              {language === "english"
                ? "I am currently available to work full time or as a freelancer. let's work together!?"
                : "Atualmente estou disponível para trabalhar em tempo integral ou como freelancer. vamos trabalhar juntos!?"}
            </p>
            <span className="text-zinc-800 text-lg sm:text-2xl font-bold pt-10">
              {language === "english"
                ? "You can find me on -"
                : "Você pode me encontrar no -"}
            </span>
            <div className="flex flex-col gap-2 justify-center pt-4">
              <div className="flex gap-2 items-center">
                <FaLinkedin className="text-zinc-500/80 text-xl cursor-pointer  transition-all duration-[1000ms] hover:opacity-80" />
                <a
                  href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
                  target="_blank"
                  className="hover:underline text-zinc-500/80 text-xs sm:text-md cursor-pointer  transition-all duration-[1000ms] hover:opacity-80"
                >
                  Linkedin
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <FaGithub className="text-zinc-500/80 text-xl cursor-pointer  transition-all duration-[1000ms] hover:opacity-80" />
                <a
                  href="https://github.com/Ryanzitto"
                  target="_blank"
                  className="hover:underline text-zinc-500/80 text-xs sm:text-md cursor-pointer  transition-all duration-[1000ms] hover:opacity-80"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
