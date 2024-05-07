import styles from "./Card.module.css";
import BoltIcon from "../../assets/bolt.svg";
import Modal from "../Modal/ModalProvider";
import About from "../About/About";

//Data structure to be recieved
/*
const Dummy = {
    jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 61,
    minJdSalary: null,
    salaryCurrencyCode: "USD",
    location: "delhi ncr",
    minExp: 3,
    maxExp: 6,
    jobRole: "frontend",
    companyName: "Dropbox",
    logoUrl: "https://logo.clearbit.com/dropbox.com",
};
*/
const Card = ({ data }) => {
    let minExp = data.minExp ?? 0;

    return (
        <Modal>
            <section className={styles.card}>
                <div className={styles.title}>
                    <div className={styles["img-container"]}>
                        <img src={data.logoUrl} alt={`${data.companyName}-logo`} />
                    </div>

                    <div className={styles.info}>
                        <h3>{data.companyName}</h3>
                        <p>{data.jobRole}</p>
                        <p>{data.location}</p>
                    </div>
                </div>

                <div className={styles.salary}>
                    <h2>
                        Estimated Salary:{" "}
                        {`${data.minJdSalary ?? 0} - ${data.maxJdSalary ?? 10} LPA ✅ `}
                    </h2>
                </div>

                <h3>About Company: </h3>

                <div className={styles.about}>
                    <h4>About us</h4>
                    <p>{data.jobDetailsFromCompany}</p>
                    <Modal.Action>
                        <button>View Job</button>
                    </Modal.Action>
                </div>

                <div className={styles.exp}>
                    <h4>Minimum Experience</h4>
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

            <Modal.Window>
                <About data={data} />
            </Modal.Window>
        </Modal>
    );
};

export default Card;
