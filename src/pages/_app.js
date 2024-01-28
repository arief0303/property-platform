import React, { useEffect } from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
