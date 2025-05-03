import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import {copyright} from './data'
const Copyright = () => {
  return (
    <div className={styles.footer__copyright}>
      <section>©2025 MyShop All Rights Resereved.</section>
      <section>
        <ul>
          {copyright.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> India
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Copyright