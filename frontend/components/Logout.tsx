import {ReactElement} from 'react'
import {destroyCookie} from 'nookies'
import {useRouter} from "next/router";

export default function Logout(): ReactElement {
  const route = useRouter()
  const submitHandler = (e: any) => {
    e.preventDefault();
    destroyCookie(null, 'jwt')
    route.reload()
  }
  return (
    <a href="/" onClick={submitHandler}>Log out</a>
  )
}
