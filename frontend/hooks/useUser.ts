import {useEffect, useState} from 'react'
import { parseCookies } from "nookies";

const useUser = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const cookies = parseCookies()
    setLoggedIn(!!cookies.jwt)
  }, [])
  return {
    isLoggedIn
  }
}

export default useUser;
