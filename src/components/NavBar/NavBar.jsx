import styles from './NavBar.module.css'
import chatIcon from '../../assets/chat-icon.svg'


const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>👋 Hi User</li>
                <li>
                    <img src={chatIcon} alt="Chat Icon" />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
