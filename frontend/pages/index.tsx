import Head from 'next/head'
import React, {ReactElement} from 'react'
import Link from "next/link";

import Pizzas from '@/components/Pizzas/Pizzas'
import Logout from "@/components/Logout";

import useUser from "hooks/useUser";

import styles from '../styles/Home.module.scss'

export default function Index(): ReactElement {
  const { isLoggedIn } = useUser()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <div style={{display: isLoggedIn ? 'none' : 'inline-block'}}>
            <Link href={'/auth'}>Please login</Link>
          </div>

          <div style={{display: !isLoggedIn ? 'none' : 'inline-block'}}>
            <Logout />
          </div>
        </div>
        <Pizzas />
      </main>
    </div>
  )
}
