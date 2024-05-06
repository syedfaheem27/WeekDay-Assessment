import styles from "./Wrapper.module.css";

//Serves as a container over the custom select component
const Wrapper = ({ children, onClick }) => {
    return <div className={styles.wrapper} onClick={onClick}>{children}</div>;
};

export default Wrapper;
