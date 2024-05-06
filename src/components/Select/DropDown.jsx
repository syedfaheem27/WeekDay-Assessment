import styles from "./DropDown.module.css";


//Filters will come down as a prop
//which makes it reusable
const DropDown = ({ filters, onSelect }) => {
    return (
        <div className={styles["drop-down"]}>
            {filters.map((filter, index) => {
                return <span onClick={() => onSelect(filter)} key={filter + index}>{filter}</span>;
            })}
        </div>
    );
};

export default DropDown;
