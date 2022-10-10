import {motion} from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="container snap-start relative h-[calc(100vh)]">
            <div className="flex h-full items-center justify-between">
                <motion.div
                    initial={{ x: -175, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="text-2xl leading-loose lg:text-4xl lg:leading-loose">
                        <h2>Hi, I&apos;m Maiky</h2>
                        <h2>
                            I am a <span className="font-mono bg-dark-400 mx-1 px-2 rounded-md">back-end</span> developer
                        </h2>
                    </div>

                    <div className="flex gap-x-5">
                        <motion.a
                            href="#contact"
                            whileTap={{ scale: 1.1 }}
                            className="bg-primary text-primary-900 text-lg px-5 py-3 flex items-center gap-x-2 rounded-md"
                        >
                            let&apos;s get in touch
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                        </motion.a>

                        <motion.a
                            href="#projects"
                            whileTap={{ scale: 1.1 }}
                            className="text-lg px-5 py-3 flex items-center gap-x-2 rounded-md"
                        >
                            my work
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="hidden lg:block"
                    initial={{ x: 175, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src="/developer.svg" alt="Illustration of a developer" height={500} width={500} />
                </motion.div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
                <Image
                    src="/scroll-down.gif"
                    alt="Scroll down"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    )
}