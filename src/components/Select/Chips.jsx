import styles from './Chips.module.css'
import DeleteIcon from '../../assets/cross.svg'

const Chips = ({ selectedFilters, onClick }) => {
    const handleDelete = (val) => {
        return () => onClick(val)
    }
    return (
        <div className={styles["chips-container"]}>
            {selectedFilters.map((filter, index) => {
                return (
                    <div key={filter + index} className={styles.chip}>
                        <span>{filter}</span>
                        <button onClick={handleDelete(filter)}>
                            <img src={DeleteIcon} alt="Delete icon" />
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default Chips
