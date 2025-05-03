import React from 'react'
import styles from './styles.module.scss'
import Link from "next/link";
const UserMenu = ({islogin}) => {
  return (
    <div className={styles.menu}>
    <h4>Welcome to MyShop !</h4>
    {islogin ? (
      <div className={styles.flex}>
        <img  alt="" className={styles.menu__img} />
        <div className={styles.col}>
          <span>Welcome Back,</span>
          <h3>Kartick</h3>
          <span>Sign out</span>
        </div>
      </div>
    ) : (
      <div className={styles.flex}>
        <button className={styles.btn_primary}>Register</button>
        <button className={styles.btn_outlined} >
          Login
        </button>
      </div>
    )}
    <ul>
      <li>
        <Link href="/profile">Account</Link>
      </li>
      <li>
        <Link href="/profile/orders">My Orders</Link>
      </li>
      <li>
        <Link href="/profile/messages">Message Center</Link>
      </li>
      <li>
        <Link href="/profile/address">Address</Link>
      </li>
      <li>
        <Link href="/profile/whishlist">Whishlist</Link>
      </li>
    </ul>
  </div>
  )
}

export default UserMenu