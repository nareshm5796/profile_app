import React from 'react'
import styles from './ProfileComponent.module.css'
import { GO_BACK_ARROW,EDIT, Profile_Img, About_Content} from '../../../utils/images'
function ProfileComponent() {
  return (
    <div className={styles.account_container}>
      <p className={styles.dashboard_container}><span className={styles.dashboard}>Dashboard | </span><span className={styles.my_account}>My Account</span></p>
      <div className={styles.account_card_container}>
        <div className={styles.my_account_header}>
          <img src={GO_BACK_ARROW} alt='go back arrow'/>
          <div>My Account</div>
        </div>
        <div className={styles.my_account_body}>
          <div className={styles.my_profile_card}>
            <div className={styles.my_profile_card_header}>
              <div>My Profile</div>
              <figure>
              <img src={EDIT} alt='edit'/>
              </figure>
            </div>
            <div className={styles.about_profile}>
              <div className={styles.person_image}>
                <img src={Profile_Img} alt='profile' className={styles.profile_img}/>
                <img src={EDIT} alt='edit' className={styles.profile_edit}/>
              </div>
              <div className={styles.personal_info}>
                <h3 className={styles.person_name}>Divya Chatterjee</h3>
                <div className={styles.person_designation}>
                  <p >Designation</p>
                  <div>Assistant Manager - HR</div>
                </div>
                <div className={styles.company_name}>
                  <p>
                  Company Name
                  </p>
                  <div>XXY Company Name</div>
                </div>
              </div>
            </div>
            <div className={styles.profle_description}>
              <div className={styles.about_me}>About Me</div>
              <div className={styles.about_content}>
                {About_Content}
              </div>
            </div>
          </div>
          <div className={styles.my_profile_settings_container}>
            <div className={styles.account_settings}>
              <div className={styles.account_settings_header}>
                <div>My Account Seetings</div>
                <figure>
                  <img src={EDIT} alt='account setting edit'/>
                </figure>
              </div>
              <div className={styles.account_info}>
                <div>
                <div className={styles.name}>
                  <p>Full Name*</p>
                  <div>Divya Chatterjee</div>
                </div>
                <div className={styles.phone}>
                  <p>Phone / Landline*</p>
                  <div>7012248563</div>
                </div>
                </div>
                <div>
                  <div className={styles.designation}>
                    <p>Designation</p>
                    <div>Assistant Manager - HR</div>
                  </div>
                  <div className={styles.change_password}>
                  Change Password
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.application_settings}>
              <div className={styles.application_settings_header}>
                <div>Application Settings</div>
                <figure>
                  <img src={EDIT} alt='application setting edit'/>
                </figure>
              </div>
              <div className={styles.application_info}>
                <p className={styles.receive_job}>Receive job applications via</p>
                <p className={styles.app_my_dashboard}><div></div>Only on my dashboard</p>
                <p className={styles.email}><div></div>Email and on my dashboard</p>
                <p className={styles.note}>*Please note, this setting will not impact your old job postings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent