import { AnimatePresence, motion } from "framer-motion";

import NavigationMenu from "../header/navigation.menu";
import Link from "next/link";
import { navigation, socials } from "../../constants/constants";
import { SocialIcon } from "react-social-icons";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  selectNavigation,
  toggleNavigation,
} from "../../redux/slices/navigationSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(selectNavigation);

  return (
    <div className="fixed w-[calc(100vw-16px)] z-10 h-32 bg-dark">
      <motion.div className="flex container h-full items-center justify-between">
        <motion.div
          initial={{ x: -175, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -175, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/">
            <h1 className="font-logo text-xl cursor-pointer">MAIKY\PERLEE</h1>
          </Link>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ y: -175, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -175, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <nav>
            <ul className="flex gap-x-16">
              {navigation.map((item, index) => (
                <li className="font-medium text-sm uppercase" key={index}>
                  {item.href.startsWith("#") ? (
                    <a href={item.href}>{item.name}</a>
                  ) : (
                    <Link href={item.href}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <motion.div
          className="relative lg:hidden"
          initial={{ x: 175, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 175, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            onClick={() => dispatch(toggleNavigation())}
            animate={visible ? "active" : "inactive"}
            variants={{
              active: {
                rotate: 180,
              },
              inactive: {
                rotate: 0,
              },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </motion.button>

          <AnimatePresence>{visible && <NavigationMenu />}</AnimatePresence>
        </motion.div>

        <SocialIcons />
      </motion.div>
    </div>
  );
}

export function SocialIcons() {
  return (
    <div className="hidden lg:flex items-center gap-x-2">
      {socials.map((link, index) => (
        <motion.figure
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 + index / 4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          key={index}
        >
          <SocialIcon
            fgColor="#888"
            bgColor="transparent"
            url={link}
            target="_blank"
          />
        </motion.figure>
      ))}
    </div>
  );
}
