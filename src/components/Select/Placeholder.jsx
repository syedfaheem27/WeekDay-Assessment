import styles from './Placeholder.module.css';


/* isOutside is going to hold a boolean which defines 
whether the placeholder will be outside the select(which is 
the case when we make selections) or inside(when there are no 
selections)
*/
const Placeholder = ({ isOutside, label }) => {
    return (
        <span
            className={`${styles.label} ${isOutside ? styles.outside : styles.inside}`}
        >
            {label}
        </span>
    )
}

export default Placeholder
