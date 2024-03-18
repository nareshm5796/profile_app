import React from 'react'
import styles from './Sidebar.module.css'
import { HP, DASHBOARD,JOBS_OUTLINE,PROFILES, FOLLOWERS,ENTERPRISE,COLLABORATION, CONVERSATION} from '../../../utils/images'
const SidebarComponent = ()=> {
  return (
    <div className={styles.sidebar_container}>
      <div>
        <div className={styles.hp_container}>
        <img src={HP} alt='hp' className={styles.hp_img}/>
        <span>Hello,</span>
        </div>
        <p className={styles.Hawlet_Container}>Hewlett Packard E...<span className={styles.grater_than}>&gt;</span></p>
      </div>
      <ul className={styles.items_container}>
        <li>
          <img src={DASHBOARD} alt='dashboard'/>
          <span>Dashboard</span>
        </li>
        <li>
          <img src={JOBS_OUTLINE} alt='JOBS_OUTLINE'/>
          <span>Jobs</span>
        </li>
        <li>
          <img src={PROFILES} alt='profiles'/>
          <span>Applications</span>
        </li>
        <li>
          <img src={FOLLOWERS} alt='Followers'/>
          <span>Followers</span>
        </li>
        <li>
        <img src={FOLLOWERS} alt='My Inventory'/>
          <span>My Inventory</span>
        </li>
        <li>
          <img src={ENTERPRISE} alt='enterprise'/>
          <span>Company Profile</span>
        </li>
        <li>
          <img src={COLLABORATION} alt='All Users'/>
          <span>All Users</span>
        </li>
        <li className={styles.active_my_account}>
          <img src={CONVERSATION} alt="my account"/>
          <span>My Account</span>
        </li>
      </ul>
      <div className={styles.contact_container}>
        Contact Us:
        <p>Email: admin@jobsforher.com</p>
      </div>
    </div>
  )
}

export default SidebarComponent