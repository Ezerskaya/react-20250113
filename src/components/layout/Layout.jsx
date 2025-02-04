import { use } from 'react'

import { Header } from './header/Header.jsx'
import { Footer } from './footer/Footer.jsx'
import { ProgressBar } from '../progress-bar/ProgressBar.jsx'
import { Container } from './container/Container.jsx'
import { ThemeContext } from '../theme-context/index.js'

import styles from './layout.module.css'

export const Layout = ({ children }) => {
  const { theme } = use(ThemeContext)

  return (
    <div className={theme === 'dark' ? styles.darkTheme : null}>
      <ProgressBar/>
      <Header/>
      <Container size={'xl'}>
        {children}
      </Container>
      <Footer/>
    </div>
  )
}