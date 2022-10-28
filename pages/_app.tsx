import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <AnimateSharedLayout>
        {getLayout(<Component {...pageProps} />)}
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
