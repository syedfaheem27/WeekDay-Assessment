import { useState } from 'react';
import styles from './SideBar.module.css';
import logoOpen from '../../assets/weekday-logo-open.png'
import logoClosed from '../../assets/weekday-logo-closed.png'

import userLogo from '../../assets/user-icon.svg'
import searchLogo from '../../assets/search-icon.svg'
import salaryLogo from '../../assets/rupee-icon.svg'
import referralLogo from '../../assets/user-plus-icon.svg'

import likeIcon from '../../assets/like-icon.svg';
import docIcon from '../../assets/doc-icon.svg';
import shareIcon from '../../assets/share-icon.svg';

import leftIcon from '../../assets/left-arrow.svg'


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen(o => !o);
    }
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <button className={styles.toggle} onClick={handleToggleSidebar}>
                <img src={leftIcon} alt="Toggle sidebar icon" />
            </button>


            <div className={styles.logo}>
                <img src={isOpen ? logoOpen : logoClosed} alt="Weekday Logo" />
            </div>

            <div className={styles.divider}></div>

            <div className={styles.content}>
                {isOpen ? <h5>Looking for a job</h5> : <h6>Get Jobs</h6>}

                <div>
                    <img src={userLogo} alt="User Logo" />
                    {
                        isOpen && <p>My applied jobs</p>
                    }
                </div>

                <div>
                    <img src={searchLogo} alt="Search Logo" />
                    {
                        isOpen && <p>Search Jobs</p>
                    }
                </div>

                <div>
                    <img src={salaryLogo} alt="Rupee Logo" />
                    {
                        isOpen && <p>Search Salary</p>
                    }
                </div>

                <div>
                    <img src={referralLogo} alt="Referral Logo" />
                    {
                        isOpen && <p>Ask for a referral</p>
                    }
                </div>
            </div>


            <div className={styles.divider}></div>

            <div className={styles.content}>
                {isOpen ? <h5>Recommend and Earn</h5> : <h6>Refer</h6>}

                <div>
                    <img src={likeIcon} alt="Like Icon" />
                    {
                        isOpen && <p>Recommend from shortlist</p>
                    }
                </div>

                <div>
                    <img src={docIcon} alt="Document Icon" />
                    {
                        isOpen && <p>Recommend to specific company</p>
                    }
                </div>

                <div>
                    <img src={shareIcon} alt="Share Icon" />
                    {
                        isOpen && <p>Refer this extension</p>
                    }
                </div>

            </div>

        </div>
    )
}

export default SideBar
