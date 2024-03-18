import React from 'react'
import SidebarComponent from './sidebar/SidebarComponent'
// import Sidebar from './sidebar/Sidebar'
import ProfileComponent from './profile/ProfileComponent'
import FooterComponent from './footer/FooterComponent'
import styles from './BodyComponent.module.css'
import SubHeaderComponent from '../Header/SubHeaderComponent'
function BodyComponent() {
  return (
    <div className={styles.body_container}>
        <SubHeaderComponent />
        <div className={styles.body}>
        <SidebarComponent />
        <ProfileComponent />
        </div>
        <div className={styles.footer}>
        <FooterComponent />
        </div>
    </div>
  )
}

export default BodyComponent