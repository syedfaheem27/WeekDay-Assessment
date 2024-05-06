import styles from "./DropDown.module.css";


//Filters will come down as a prop
//which makes it reusable
const DropDown = ({ filters }) => {
    return (
        <div className={styles["drop-down"]}>
            {filters.map((criteria, index) => {
                return <span key={criteria + index}>{criteria}</span>;
            })}
        </div>
    );
};

export default DropDown;
