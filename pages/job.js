import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { NextSeo } from "next-seo";

export default function Job({ stars }) {

  const [description, setDescription] = useState("")
  useEffect(() => {
    // setDescription("lol")
    console.log(stars);
  }, []);
  return (
    <div className={styles.container}>
      <NextSeo
        title="CVJOBS - INICIO"
        description={`${stars}`}
      />
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content=`asdsad`
        />
      </Head> */}

      <p>hello job</p>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

Job.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};
