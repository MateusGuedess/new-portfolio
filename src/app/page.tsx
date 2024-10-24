'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
    const [complete, setComplete] = useState(false)
  return (
    <div className="flex items-center relative w-full h-24">
        <div className="absolute left-1/2 transform -translate-x-1/2">
            <AnimatePresence>
                {complete && <motion.p
                    key="name"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: -10, opacity: 1 }}
                    exit={{ y:-100, opacity: 0 }}
                    transition={{ type: "spring", delay: 0.5, dumping: 100}}
                >
                    Mateus Guedes
                </motion.p>}
            </AnimatePresence>
            <h1>
                <ReactTyped
                    strings={["I'm Frontend Engineer", "or maybe Software Engineer", "Fullstack?", "crazy in love about programming :)"]}
                    typeSpeed={40}
                    backSpeed={20}
                    cursorChar="_"
                    onComplete={() => setComplete(true)}
                />
            </h1>
        </div>
        <div className="ml-auto flex flex-col items-start gap-5">
            <motion.button
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}
                exit={{ y:-100, opacity: 0 }}
                transition={{ type: "spring", delay: 1, dumping: 100}}
                whileHover={{
                    x: -10,
                }}
            >About</motion.button>
            <motion.button
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}
                exit={{ y:-100, opacity: 0 }}
                transition={{ type: "spring", delay: 0.75, dumping: 100}}
                whileHover={{
                    x: -10,
                }}
            >Stack & Skills</motion.button>
            <motion.button
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}
                exit={{ y:-100, opacity: 0 }}
                transition={{ type: "spring", delay: 0.5, dumping: 100}}
                whileHover={{
                    x: -10,
                }}
            >Experience</motion.button>
            <motion.button
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: -10, opacity: 1 }}
                exit={{ y:-100, opacity: 0 }}
                transition={{ type: "spring", delay: 0.25, dumping: 100}}
                whileHover={{
                    x: -10,
                }}
            >Curriculum Vitae</motion.button>

        </div>
    </div>
  );
}
