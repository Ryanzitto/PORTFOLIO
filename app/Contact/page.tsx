"use client";

import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEmailSchema } from "../zodSchema/EmailSchema";
import { Footer } from "../components/Footer";
import MapChart from "../components/map";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

import { useStoreApp } from "../store";

type FormData = z.infer<typeof createEmailSchema>;

const ContactSection = () => {
  const { language } = useStoreApp();
  const [nameHovered, setNameHovered] = useState<boolean>(false);
  const [emailHovered, setEmailHovered] = useState<boolean>(false);
  const [messageHovered, setMessageHovered] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(
    language === "english"
      ? "Want to hire me full-time"
      : "Me contratar em tempo integral"
  );
  const [showToast, setShowToast] = useState<boolean>(false);

  const [mapIsHovered, setMapIsHovered] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const handleClickSelectOption = (value: string) => {
    setOpen(false);
    setValue(value);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(createEmailSchema),
  });

  async function onSubmit() {
    emailjs
      .sendForm(
        "portfolio-email",
        "template_ysh4p6x",
        form.current ?? document.createElement("form"),
        "vpHpPBSGZPR_BgpGK"
      )
      .then(
        (result) => {
          console.log("funcionou");
          //@ts-ignore
          form?.current?.reset();
          setShowToast(true);
          const timeOut = setTimeout(() => {
            setShowToast(false);
          }, 5000);
          return () => clearTimeout(timeOut);
        },
        (error) => {
          console.log("deu ruim");
          alert(error.text);
        }
      );
  }

  return (
    <div className="w-screen h-fit justify-start items-start flex flex-col relative">
      <div className="flex w-full h-screen justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0,
            },
          }}
          className=" hidden md:flex w-1/2 h-full justify-start relative"
        >
          <div
            onMouseEnter={() => setMapIsHovered(true)}
            onMouseLeave={() => setMapIsHovered(false)}
            className={`${
              mapIsHovered ? "bg-none" : "bg-white/60 backdrop-blur-sm"
            } w-full h-full flex absolute transition-all duration-[700ms]`}
          ></div>
          <MapChart />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0,
              type: "spring",
              damping: 10,
              stiffness: 100,
            },
          }}
          className="flex flex-col gap-6 w-full md:w-1/2 h-full justify-center items-center"
        >
          <span className="font-medium font-nunito text-7xl sm:text-9xl md:text-8xl  lg:text-9xl text-zinc-800 tracking-[6px]">
            L E T S
          </span>
          <span className="font-medium font-nunito text-7xl sm:text-9xl md:text-8xl lg:text-9xl text-white font-outline-2 tracking-[3px]">
            W O R K
          </span>
          <span className="font-medium font-nunito text-7xl sm:text-9xl md:text-8xl lg:text-9xl text-zinc-800 tracking-[6px]">
            T O G E
          </span>
          <span className="font-medium font-nunito text-7xl sm:text-9xl md:text-8xl lg:text-9xl text-zinc-800 tracking-[6px]">
            T H E R
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
        className="flex h-screen w-full justify-center items-center mt-10 mb-10"
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0,
              type: "spring",
              damping: 10,
              stiffness: 100,
            },
          }}
          className="hidden w-[40%] h-full lg:flex flex-col gap-2 justify-start items-start pt-16 pl-10"
        >
          {language === "english" ? (
            <span className="font-nunito font-bold text-7xl text-zinc-800">
              Get in touch. let’s work together
              <br /> and build something great!
            </span>
          ) : (
            <span className="font-nunito font-bold text-7xl text-zinc-800">
              Entre em contato. vamos trabalhar juntos
              <br /> e construir algo incrível!
            </span>
          )}
        </motion.div>
        <div className="w-[90%] lg:w-[60%] h-fit flex flex-col pt-20 justify-start items-start p-4">
          <span className="font-nunito text-xl text-zinc-400 w-[90%]">
            {language === "english"
              ? "Got a project? Drop me a line if you want to work together on something exciting."
              : "Tem um projeto? Escreva-me se quiserem trabalhar juntos em algo interessante."}
          </span>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full px-8 justify-center items-center h-fit py-8 flex flex-col gap-10 pb-40 sm:pb-0"
          >
            <div className="flex flex-col md:flex-row gap-12 md:gap-4 w-full items-start md:justify-center md:items-center pt-8">
              <div
                onMouseEnter={() => setNameHovered(true)}
                onMouseLeave={() => setNameHovered(false)}
                className="flex w-full md:w-1/2 flex-col gap-2"
              >
                <label className="text-xs font-normal text-zinc-500 font-nunito">
                  {language === "english" ? "Your name:" : "Seu nome"}
                </label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  name="name"
                  placeholder={
                    language === "english"
                      ? "What's your name?"
                      : "Qual seu nome?"
                  }
                  autoComplete="off"
                  type="text"
                  className="placeholder-gray-800 overflow-hidden border border-transparent focus:outline-none text-zinc-800 font-medium"
                ></input>
                <div className="w-full h-[1px] bg-zinc-300 justify-start items-start">
                  <div
                    className={`${
                      nameHovered ? "w-full" : "w-0"
                    }  h-full bg-zinc-800 transition-all duration-[500ms]`}
                  ></div>
                </div>
                {errors?.name && (
                  <p className="text-red-600 text-xs">
                    {errors?.name?.message}
                  </p>
                )}
              </div>
              <div
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
                className="flex w-full md:w-1/2 flex-col gap-2"
              >
                <label className="text-xs font-normal text-zinc-500 font-nunito">
                  {language === "english" ? "Your email:" : "Seu email"}
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email"
                  name="email"
                  placeholder={
                    language === "english"
                      ? "What's your email?"
                      : "Qual seu email?"
                  }
                  autoComplete="off"
                  type="text"
                  className="placeholder-gray-800 overflow-hidden border border-transparent focus:outline-none text-zinc-800 font-medium"
                ></input>
                <div className="w-full h-[1px] bg-zinc-300 justify-start items-start">
                  <div
                    className={`${
                      emailHovered ? "w-full" : "w-0"
                    }  h-full bg-zinc-800 transition-all duration-[500ms]`}
                  ></div>
                </div>
                {errors?.email && (
                  <p className="text-red-600 text-xs">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-4 w-full justify-start items-center pt-8">
              <div className="flex w-fit md:w-1/2 flex-col relative">
                <label className="text-xs font-normal text-zinc-500 font-nunito">
                  {language === "english" ? "Service:" : "Serviço"}
                </label>
                <input
                  {...register("service", { required: true })}
                  id="message"
                  name="message"
                  autoComplete="off"
                  type="text"
                  value={value}
                  className="hidden"
                />

                <div
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer gap-4 p-6 border border-zinc-300 font-semibold text-zinc-800 flex items-center justify-between w-full h-10 mt-2"
                >
                  <span>{value}</span>
                  <IoIosArrowDown
                    className={`${
                      open ? "rotate-180" : null
                    } transition-all duration-[300ms]`}
                  />
                </div>
                <AnimatePresence>
                  {open ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -50,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0,
                        },
                      }}
                      className="absolute mt-[72px] h-fit w-full flex flex-col border border-zinc-300 border-t-transparent"
                    >
                      <div
                        onClick={() =>
                          handleClickSelectOption(
                            language === "english"
                              ? "Want to hire me full-time"
                              : "Me contratar em tempo integral"
                          )
                        }
                        className="pl-6 w-full h-fit p-2 bg-white hover:bg-zinc-200 border-t border-zinc-300"
                      >
                        <span>
                          {language === "english"
                            ? "Want to hire me full-time"
                            : "Me contratar em tempo integral"}
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          handleClickSelectOption(
                            language === "english"
                              ? "Want a freelancer dev"
                              : "Deseja encontrar um Dev freelancer"
                          )
                        }
                        className="pl-6 w-full h-fit p-2 bg-white hover:bg-zinc-200"
                      >
                        <span>
                          {language === "english"
                            ? "Want a freelancer dev"
                            : "Deseja encontrar um Dev freelancer"}
                        </span>
                      </div>
                      <div
                        onClick={() =>
                          handleClickSelectOption(
                            language === "english"
                              ? "Just say hi!"
                              : "Apenas dizer Olá!"
                          )
                        }
                        className="pl-6 w-full h-fit p-2 bg-white hover:bg-zinc-200"
                      >
                        <span>
                          {language === "english"
                            ? "Just say hi!"
                            : "Apenas dizer Olá!"}
                        </span>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex gap-4 w-full justify-center items-center pt-8">
              <div
                onMouseEnter={() => setMessageHovered(true)}
                onMouseLeave={() => setMessageHovered(false)}
                className="flex w-full flex-col gap-2"
              >
                <label className="text-xs font-normal text-zinc-500 font-nunito">
                  {language === "english" ? "Your Message:" : "Sua mensagem"}
                </label>
                <input
                  {...register("message", { required: true })}
                  id="message"
                  name="message"
                  placeholder={
                    language === "english"
                      ? "What's your message?"
                      : "Qual sua mensagem?"
                  }
                  autoComplete="off"
                  type="text"
                  className="placeholder-gray-800 overflow-hidden border border-transparent focus:outline-none text-zinc-800 font-medium"
                ></input>
                <div className="w-full h-[1px] bg-zinc-300 justify-start items-start">
                  <div
                    className={`${
                      messageHovered ? "w-full" : "w-0"
                    }  h-full bg-zinc-800 transition-all duration-[500ms]`}
                  ></div>
                </div>
                {errors?.message && (
                  <p className="text-red-600 text-xs">
                    {errors?.message?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full h-fit">
              <button
                type="submit"
                className="font-nunito text-xl font-bold text-zinc-800 flex gap-2 justify-center items-center transition-all duration-[1000ms] hover:opacity-80"
              >
                <MdOutlineMailOutline />
                <span>
                  {language === "english" ? "Send message" : "Enviar mensagem"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            exit={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              },
            }}
            className="z-40 w-full h-screen fixed flex justify-end items-end pr-6 pb-4"
          >
            <div className="w-60 h-fit p-2 border border-zinc-300 bg-zinc-100 rounded-md flex gap-2 items-center">
              <IoCheckmarkCircle className="text-green-500 text-xl" />
              <span className="font-nunito text-sm text-zinc-500/80">
                {language === "english" ? "Email sent!" : "Email enviado!"}
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default function ContactComponent() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-hidden bg-white">
      <ContactSection />
      <Footer />
    </div>
  );
}
