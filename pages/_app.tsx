import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimateSharedLayout} from "framer-motion";
import {DefaultLayout} from "../components/layouts/default";
import {NavigationMenuProvider} from "../hooks/navigation.menu";

function MyApp({ Component, pageProps }: AppProps) {
    //@ts-ignore
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <AnimateSharedLayout>
            <NavigationMenuProvider defaultValue={false}>
                {getLayout(<Component {...pageProps} />)}
            </NavigationMenuProvider>
        </AnimateSharedLayout>
    )
}

export default MyApp
