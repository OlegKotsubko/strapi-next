import Head from 'next/head'
import React, {ReactElement, useEffect, useState} from 'react'
import Link from "next/link";

const { publicRuntimeConfig } = getConfig()

import Pizzas from '@/components/Pizzas/Pizzas'
import Logout from "@/components/Logout";

import useUser from "hooks/useUser";

import styles from '../styles/Home.module.scss'
import getConfig from "next/config";
import nookies from "nookies";

export default function Index({pizzas, feedback}: any): ReactElement {
  const { isLoggedIn } = useUser()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{feedback.user}</h1>
        <p>{feedback.text}</p>
        <div>
          <Link href={'/voting'}>Lets vote link!!!</Link>
          <div style={{display: isLoggedIn ? 'none' : 'inline-block'}}>
            <Link href={'/auth'}>Please login</Link>
          </div>

          <div style={{display: !isLoggedIn ? 'none' : 'inline-block'}}>
            <Logout />
          </div>
        </div>
        <Pizzas pizzas={pizzas} />
      </main>
    </div>
  )
}

export async function getServerSideProps(ctx:any) {
  const cookies = nookies.get(ctx);
  const feedbackResponse = await fetch(`${publicRuntimeConfig.API_URL}/feedback`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
  })
  const feedback = await feedbackResponse.json()

  if(cookies.hasOwnProperty('jwt')) {
    const response = await fetch(`${publicRuntimeConfig.API_URL}/pizzas`, {
      headers: {
        Authorization: `Bearer ${cookies.jwt}`
      }
    })
    const pizzas = await response.json()

    return {
      props: {
        pizzas: pizzas,
        feedback,
      }
    }
  }

  return {
    props: {
      pizzas: [],
      feedback,
    }
  }
}


