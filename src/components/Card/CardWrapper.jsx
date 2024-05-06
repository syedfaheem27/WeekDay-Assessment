import styles from './CardWrapper.module.css';

const CardWrapper = ({
    children
}) => {
    return (
        <section className={styles.wrapper}>
            {
                children
            }
        </section>
    )
}

export default CardWrapper
