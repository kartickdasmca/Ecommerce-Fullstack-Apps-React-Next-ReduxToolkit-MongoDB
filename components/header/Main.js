import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { RiSearch2Line } from 'react-icons/ri'
import { FaOpencart } from 'react-icons/fa'
import {useSelector} from 'react-redux'

const Main = () => {
    const {cartItems,name} = useSelector((state)=>state);
  return (
    <div className={styles.main}>
        <div className={styles.main__container}>
            <Link href="/">
               <span className={styles.logo}>
                  <img src="../../../logo.png" alt='logo'/>
               </span>
            </Link>
            <div className={styles.search}>
                <input type="text" placeholder='Search......'/>
                <div className={styles.search__icon}>
                    <RiSearch2Line/>
                </div>
            </div>
            <Link href='/'>
                <div className={styles.cart}>
                    <FaOpencart/>
                    <span>50</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Main