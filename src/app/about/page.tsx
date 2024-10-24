'use client'
import { motion } from "framer-motion"
import Link from "next/link"

function About(): React.ReactElement {
    return(
        <div className="flex items-start  w-full h-24">
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link href="/">
                    <motion.p
                        key="name"
                        layoutId="name"
                    >
                        Mateus Guedes
                    </motion.p>
                </Link>
            </div>
        </div>
    )
}


export default About
