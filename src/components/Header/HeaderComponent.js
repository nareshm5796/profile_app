import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { JOBS_FOR_HER, DATE } from '../../utils/images'
import styles from './Header.module.css'
const HeaderComponent = () => {
  return (
    <>
        <div className={styles.header_container}>
           <ul className={styles.navi_items_container}>
            <li>
                <img src={JOBS_FOR_HER} alt='Jobs for her'/>
            </li>
            <li className={styles.menu_icon}>
                <MenuIcon />
            </li>
            <li className={styles.hide_menu}>
                DASHBOARD
            </li>
            <li className={styles.hide_menu}>
                PACKAGES
            </li>
            <li className={styles.hide_menu}>
                EVENTS
            </li>
            <li className={styles.hide_menu}>
                BLOGS
            </li>
            </ul> 
            <div>
                <img src={DATE} alt='date' className={styles.date}/>
            </div>
        </div>
        </>
  )
}

export default HeaderComponent