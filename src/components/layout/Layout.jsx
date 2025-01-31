import { Header } from './header/Header.jsx'
import { Footer } from './footer/Footer.jsx'
import { ProgressBar } from '../progress-bar/ProgressBar.jsx'
import { Container } from './container/Container.jsx'

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar/>
      <Header/>
      <Container size={'xl'}>
        {children}
      </Container>
      <Footer/>
    </>
  )
}