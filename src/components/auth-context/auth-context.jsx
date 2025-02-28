import { useCallback, useState } from "react"
import { AuthContext } from "."

const guestNameId = "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54"

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false })

  const toggleAuth = useCallback(() => {
    setAuth((currentAuth) => {
      if (currentAuth.isAuth) {
        return { isAuth: false }
      } else {
        return { isAuth: true, userId: guestNameId }
      }
    })
  }, [])

  return (
    <AuthContext value={{ auth, toggleAuth }}>
      {children}
    </AuthContext>
  )
}