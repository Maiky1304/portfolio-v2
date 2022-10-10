import Link from "next/link";
import {SocialIcons} from "../index/header";
import {motion} from "framer-motion";

export default function Header() {
    return (
        <div className="container snap-start py-5 h-32">
            <div className="flex h-full items-center justify-between">
                <motion.div initial={{ x: -175, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                    <Link href="/">
                        <h1 className="font-logo text-xl cursor-pointer">MAIKY\PERLEE</h1>
                    </Link>

                    <Link href="/">
                        <button className="flex items-center gap-x-3 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            Go back to website
                        </button>
                    </Link>
                </motion.div>

                <SocialIcons />
            </div>
        </div>
    )
}