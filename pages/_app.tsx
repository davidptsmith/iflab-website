import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Nav from "../components/NavBar/Nav";
import Head from "next/head";

import React from "react";
import { useRouter } from "next/router";
import {useState, useEffect} from 'react';
import Router from 'next/router';

import CustomLoadingScreen from "../components/Utilities/CustomLoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>

      {loading ? (
        <CustomLoadingScreen/>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
