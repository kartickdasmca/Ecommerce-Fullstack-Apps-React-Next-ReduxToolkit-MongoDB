import React from 'react'
import styles from './styles.module.scss'
import Links from './Links'
import Socials from './Socials'
import NewsLetter from './NewsLetter'
import Payment from './Payment'
import Copyright from './Copyright'
const index = ({country}) => {
  return (
    <footer className={styles.footer}>
       <div className={styles.footer__container}>
          <Links/>
          <Socials/>
          <NewsLetter/>
          <Payment/>
          <Copyright country={country}/>
       </div>
    </footer>
  )
}

export default index