import Link from "next/link"
import styles from "./styles.module.scss"
import {MdSecurity} from 'react-icons/md'
import {BsSuitHeart} from 'react-icons/bs'
import {RiAccountPinCircleLine,RiArrowDropDownFill} from 'react-icons/ri'
const Top = () => {
  return (
    <div className={styles.top}>
        <div className={styles.top__container}> 
            <div>Logo</div>
            <ul className={styles.top__list}>
                <li>
                    <img src=""/>
                    <span>Morosko | usd</span>
                </li>
                <li>
                    <MdSecurity/>
                    <span>Buyer Protection</span>
                </li>
                <li><span>Customer Service</span></li>
                <li><span>Help</span></li>
                <li>
                    <BsSuitHeart/>
                    <span>Wishlist</span>
                </li>
                <li>
                    <div className={styles.flex}>
                    <RiAccountPinCircleLine/>
                      <span>Account</span>
                      <RiArrowDropDownFill/>
                    </div>
                    
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Top