import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import {links} from './data'
import Image from 'next/image';
const Links = () => {
  return (
    <div className={styles.footer__links}>
       {links.map((link,i)=>(
             <ul key={i}>
             
              {i === 0 ?  <Image src="/logo.png" height={40} width={140} alt="logo" /> : <b>{link?.heading}</b>}
             
             {
               link?.links.map((link,i)=>(
                <li key={i}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
               )
 
               )
             }
           </ul>
       ))
       }
    </div>
  )
}

export default Links