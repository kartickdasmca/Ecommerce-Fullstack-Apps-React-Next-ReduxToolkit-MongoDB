import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Signin.module.scss'
import {BiLeftArrowAlt} from 'react-icons/bi'
import Link from 'next/link'
const signin = () => {
  return (
    <>
    <Header />
      <div className={styles.login}>
         <div className={styles.login__container}>
             <div className={styles.login__header}>
                <div className={styles.back__svg}>
                    <BiLeftArrowAlt/>
                </div>
                <span>W'd be happy to join us ! <Link href='/'>Go Store</Link></span>
             </div>
         </div>
      </div>
    <Footer country='kolkata'/>
    </>
    
  )
}

export default signin