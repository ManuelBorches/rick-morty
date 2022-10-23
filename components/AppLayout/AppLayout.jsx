import React from "react";
import Head from "next/head";
import styles from "@styles/Home.module.css";
import NavBar from "./NavBar";

const AppLayout = ({ children, title = "Rick and Morty" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="rick and morty app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </>
  );
};

export default AppLayout;
