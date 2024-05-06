import styles from "./About.module.css";
import BoltIcon from "../../assets/bolt.svg";

const About = ({ data }) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles["img-container"]}>
                    <img src={data.logoUrl} alt={`${data.companyName}-logo`} />
                </div>

                <div className={styles.info}>
                    <h3>{data.companyName}</h3>
                    <p>
                        Job Role : <span>{data.jobRole}</span>
                    </p>
                    <p>
                        Location :{" "}<span>{data.location}</span>
                    </p>
                </div>
            </div>

            {/* <div className={styles.salary}>
                <h2>
                    Estimated Salary:{" "}
                    {`${data.minJdSalary ?? 0} - ${data.maxJdSalary ?? 10} LPA ✅ `}
                </h2>
            </div>

            <h3>About Company: </h3>

            <div className={styles.about}>
                <h4>About us</h4>
                <p>{data.jobDetailsFromCompany}</p>
            </div>


            <div className={styles.exp}>
                <h4>Minimum Experience</h4>
                <p>{`${data.minExp ?? 0} years`}</p>
            </div>

            <div className={styles.apply}>
                <button>
                    <span>
                        <img src={BoltIcon} alt="bolt" />
                    </span>
                    <span>Easy Apply</span>
                </button>
            </div> */}
        </section>
    );
};

export default About;
