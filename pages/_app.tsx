import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Nav from "../components/NavBar/Nav";

import React from "react";
import { useRouter } from "next/router";
import CustomLoadingScreen from "../components/Utilities/CustomLoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </head>

      {pageLoading ? (
        <CustomLoadingScreen/>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
