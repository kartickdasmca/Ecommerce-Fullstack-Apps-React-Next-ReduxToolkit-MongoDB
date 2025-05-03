import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";
export default function Top({ country }) {
  const [visible, setVisible] = useState(false);
  const [islogin, setIslogin] = useState(true)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country?.flag} alt="" />
            <span>{country?.name} / USD</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {islogin ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img alt="" />
                  <span>Kartick</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu islogin={islogin} />}
          </li>
        </ul>
      </div>
    </div>
  );
}