import { motion } from "framer-motion";
import Link from "next/link";
import {navigation} from "../../constants/constants";
import {useNavigationMenu} from "../../hooks/navigation.menu";

export default function NavigationMenu() {
    const [navigationShown, setNavigationShown] = useNavigationMenu();

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ scale: 0 }}
            className="absolute z-20 right-0 bg-dark-400 shadow-md rounded-md px-0.5 py-2"
        >
            <nav>
                <ul>
                    {navigation.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <li onClick={() => setNavigationShown(false)} className="px-10 py-2 hover:bg-dark-300 hover:cursor-pointer rounded-sm">
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </motion.div>
    )
}