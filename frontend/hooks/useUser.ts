import { parseCookies } from "nookies";

const useUser = () => {
  const cookies = parseCookies()
  const isLoggedIn = !!cookies.jwt
  return {
    isLoggedIn
  }
}

export default useUser;
