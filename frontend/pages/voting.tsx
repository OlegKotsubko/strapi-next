import {ReactElement, ChangeEvent, useState} from 'react'
import getConfig from "next/config";
import {useRouter} from "next/router";

const { publicRuntimeConfig } = getConfig()

export default function Voting(): ReactElement {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const route = useRouter()

  const submitHandler = async (e: any) => {
    e.preventDefault();
    await fetch(`${publicRuntimeConfig.API_URL}/votings`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        text: text,
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        route.push('/')
      })
      .catch(error => console.log(error))
  }
  return (
    <div>
      <h1>Voting</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="login"
            value={name}
            onInput={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            onInput={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            placeholder="Text"
            value={text}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
