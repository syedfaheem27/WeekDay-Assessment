import styles from "./About.module.css";
import BoltIcon from "../../assets/bolt.svg";

const About = ({ data }) => {
    let minExp = data.minExp ?? 0;
    return (
        <section className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles["img-container"]}>
                    <img src={data.logoUrl} alt={`${data.companyName}-logo`} />
                </div>

                <div className={styles.info}>
                    <h1>{data.companyName}</h1>
                    <p>
                        Job Role : <span>{data.jobRole}</span>
                    </p>
                    <p>
                        Location : <span>{data.location}</span>
                    </p>
                    <p>
                        Estimated Salary:{" "}
                        <span>
                            {`${data.minJdSalary ?? 0} - ${data.maxJdSalary ?? 10} LPA ✅ `}
                        </span>
                    </p>
                </div>
            </div>

            <div className={styles.about}>
                <h3>About Company: </h3>
                <div>
                    <h4>About us</h4>
                    <p>{data.jobDetailsFromCompany}</p>
                </div>
            </div>

            <div className={styles.exp}>
                <h4>Minimum Experience: </h4>
                <p>{`${minExp === 0 ? 'none' : minExp + `${minExp === 1 ? ' year' : ' years'}`}`}</p>
            </div>

            <div className={styles.apply}>
                <button>
                    <span>
                        <img src={BoltIcon} alt="bolt" />
                    </span>
                    <span>Easy Apply</span>
                </button>
            </div>
        </section>
    );
};

export default About;
