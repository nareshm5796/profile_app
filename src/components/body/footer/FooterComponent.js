import React from 'react'
import styles from './FooterComponent.module.css'
function FooterComponent() {
  return (
    <div className={styles.footer_container}>
        <div>
        2019 @ Jobsforher
        </div>
        <ul className={styles.list_items}>
            <li>About Us</li>
            <li>Pricing</li>
            <li>FAQ's</li>
        </ul>
    </div>
  )
}

export default FooterComponent