import { useOutsideclick } from "../../hooks/useOutsideClick";
import styles from "./Wrapper.module.css";

//Serves as a container over the custom select component
const Wrapper = ({ children, onClick, filterKey, onClose }) => {
    useOutsideclick(`.wrapper-${filterKey}`, onClose);

    return <div className={`${styles.wrapper} wrapper-${filterKey}`} onClick={onClick}>{children}</div>;
};

export default Wrapper;
