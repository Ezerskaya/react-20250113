import { useCallback, useState } from 'react'
import { AuthContext } from '.'

const guestName = 'Andrew';

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState('')

  const toggleAuth = useCallback(() => {
    setAuth((currentAuth) => {
      if (currentAuth === '') {
        return guestName
      } else {
        return ''
      }
    })
  }, [])

  return (
    <AuthContext value={{ auth, toggleAuth, guestName }}>
      {children}
    </AuthContext>
  )
}