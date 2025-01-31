import styles from './progressBar.module.css'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      const percentScrolled = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)

      setProgress(percentScrolled)

    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <div className={classNames(styles.progressBar)} style={{ width: `${progress}%` }}/>
  )
}