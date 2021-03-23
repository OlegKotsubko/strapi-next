import Head from 'next/head'
import { ReactElement } from 'react'
import styles from '../styles/Home.module.scss'
import Header from '@/components/Header/Header'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function Index(): ReactElement {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Header />
        </main>
      </div>
    </Provider>
  )
}
