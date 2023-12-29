import { createContext, useState } from "react"

export const Context = createContext()

export function AuthProvider({ children }) {
  const [profileUrl, setProfileUrl] = useState()
  const [username, setUsername] = useState()
  const [token, setToken] = useState()
  const [address, setAddress] = useState(null)

  return (
    <Context.Provider
      value={{ profileUrl, setProfileUrl, username, setUsername, token, setToken, address, setAddress }}
    >
      {children}
    </Context.Provider>
  )
}
