import { useOutsideclick } from "../../hooks/useOutsideClick";
import styles from "./Wrapper.module.css";

//Serves as a container over the custom select component
const Wrapper = ({ children, onClick, id, onClose }) => {
    useOutsideclick(`.wrapper-${id}`, onClose);

    return <div className={`${styles.wrapper} wrapper-${id}`} onClick={onClick}>{children}</div>;
};

export default Wrapper;
