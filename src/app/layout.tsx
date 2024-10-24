'use client'
import { AnimatePresence, motion } from "framer-motion";
import localFont from "next/font/local";
import Github from "./components/Github";
import Instagram from "./components/Instagram";
import Linkedin from "./components/Linkedin";
import Twitter from "./components/Twitter";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <main className=" w-full flex flex-col gap-2 row-start-2 items-center sm:items-start">
            {children}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <AnimatePresence>
                <motion.a
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    whileHover={{
                        y: -10,
                        transition: { duration: 1 },
                      }}
                    transition={{ type: "spring", delay: 0.2, dumping: 100}}
                    href="https://github.com/MateusGuedess" target="_blank">
                        <Github  />
                </motion.a>
                <motion.a
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    whileHover={{
                        y: -10,
                        transition: { duration: 1 },
                      }}
                    transition={{ type: "spring", delay: 0.4, dumping: 100}} href="https://www.linkedin.com/in/mateusguedess/" target="_blank">
                        <Linkedin />
                </motion.a>
                <motion.a
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    whileHover={{
                        y: -10,
                        transition: { duration: 1 },
                      }}
                    transition={{ type: "spring", delay: 0.6, dumping: 100}} href="https://x.com/mxteusg" target="_blank">
                        <Twitter />
                </motion.a>
                <motion.a
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    whileHover={{
                        y: -10,
                        transition: { duration: 1 },
                      }}
                    transition={{ type: "spring", delay: 0.8, dumping: 100}} href="https://www.instagram.com/mxteusg/" target="_blank">
                        <Instagram />
                </motion.a>
            </AnimatePresence>
        </footer>
      </body>
    </html>
  );
}
