import React from 'react'
import styles from './SubHeader.module.css'
function SubHeaderComponent() {
    return (
        <ul className={styles.hide_nav_card}>
            <li>
                My Inventory
            </li>
            <li>
                company profile
            </li>
            <li>
                All Users
            </li>
            <li className={styles.my_active_account}>
                My Account
            </li>
        </ul>
    )
}

export default SubHeaderComponent