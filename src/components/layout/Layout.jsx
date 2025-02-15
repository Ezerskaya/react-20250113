import { use } from 'react'

import { Header } from './header/Header.jsx'
import { Footer } from './footer/Footer.jsx'
import { ProgressBar } from '../progress-bar/ProgressBar.jsx'
import { Container } from './container/Container.jsx'
import { ThemeContext } from '../theme-context/index.js'
import { CartContainer } from '../cart/cart-container.jsx'
import { Outlet } from 'react-router'

import styles from './layout.module.css'

export const Layout = () => {
  const { theme } = use(ThemeContext)

  return (
    <div className={theme === 'dark' ? styles.darkTheme : null}>
      <ProgressBar/>
      <Header/>
      <Container size={'xl'}>
        <Outlet/>
        <CartContainer/>
      </Container>
      <Footer/>
    </div>
  )
}