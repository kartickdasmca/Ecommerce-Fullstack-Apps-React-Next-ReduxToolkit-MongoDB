import React from 'react'
import styles from "./styles.module.scss";
import Image from 'next/image';
const Payment = () => {
  return (
    <div className={styles.footer__payment}>
    <h3>WE ACCPET</h3>
    <div className={styles.footer__flexwrap}>
      <Image src="/images/payment/visa.webp" height={40} width={140} alt="logo" />
      <Image src="/images/payment/mastercard.webp" height={40} width={140} alt="logo" />
      <Image src="/images/payment/paypal.webp" height={40} width={140} alt="logo" />
   
    </div>
  </div>
  )
}

export default Payment