import styles from "./DropDown.module.css";


//Filters will come down as a prop
//which makes it reusable
const DropDown = ({ filters, onSelect }) => {
    // function currying to make it more presentable and beautiful
    const handleSelect = (val) => () => onSelect(val)
    return (
        <div className={styles["drop-down"]}>
            {filters.map((filter, index) => {
                return <span onClick={handleSelect(filter)} key={filter + index}>{filter}</span>;
            })}
        </div>
    );
};

export default DropDown;
