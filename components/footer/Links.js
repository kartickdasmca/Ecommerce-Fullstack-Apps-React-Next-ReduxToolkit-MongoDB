import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import {links} from './data'
const Links = () => {
  return (
    <div className={styles.footer__links}>
       {links.map((link,i)=>(
             <ul>
              {i === 0 ?  <img src="../../../logo.png" alt='logo'/> : <b>{link?.heading}</b>}
             
             {
               link?.links.map((link)=>(
                <li>
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