import {ReactElement, ChangeEvent, useState} from 'react'
import {setCookie} from 'nookies'
import getConfig from "next/config";
import {useRouter} from "next/router";
const { publicRuntimeConfig } = getConfig()

export default function Auth(): ReactElement {
  const [log, setLogin] = useState('test@gmail.com')
  const [pass, setPass] = useState('qwerty')
  const route = useRouter()
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        identifier: log,
        password: pass,
      })
    })
    const loginResponse = await login.json();
    if(!loginResponse.hasOwnProperty('error')){
      setCookie(null, 'jwt', loginResponse.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      await route.push('/');
    }
  }
  return (
    <div>
      <h1>Auth</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="login"
            value={log}
            onInput={(e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={pass}
            onInput={(e: ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
