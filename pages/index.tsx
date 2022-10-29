import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const { push } = useRouter();
  const redirectToMain = () => {
    push("/survey/question/1")
  }
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", width: "40vw", background: "rgb(153, 191, 235)", borderRadius: "5%" }}>
        <button onClick={redirectToMain} style={{ color: "#ffffff", backgroundColor: "blue", border: "none", borderRadius: "7px", height: "50px", width: "150px" }}>
          Take Survey
        </button>
      </div>
    </div>

  )
}

export default Home
