"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { MdOutlineMailOutline } from "react-icons/md";

export const ContactButton = () => {
  const [buttonIsHovered, setButtonisHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setButtonisHovered(true)}
      onMouseLeave={() => setButtonisHovered(false)}
      className={`${
        buttonIsHovered ? "w-32 bg-zinc-800 " : "w-12 bg-zinc-800/30"
      } z-50 top-[480px] left-16 fixed cursor-pointer justify-center h-12 flex gap-4 items-center rounded-full mt-10 duration-[500ms] transition-all`}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <MdOutlineMailOutline className="text-white text-xl" />
      </motion.div>
      {buttonIsHovered ? (
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          exit={{
            opacity: 0,
          }}
          className="text-white text-sm"
        >
          Contact
        </motion.span>
      ) : null}
    </div>
  );
};
