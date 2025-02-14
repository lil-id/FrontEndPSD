import Image from "next/image";
import styles from "../styles/CardWater.module.css";

const Keypad = () => {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return (
        <>
            <div className="custom">
                <p className={[styles["custom-title"]]}>
                    <b>Custom</b>
                </p>
                <div className={styles.keypad}>
                    {keys.map((key, index) => (
                        <div className={"keypad-"+index} key={index}>
                            <p className={styles["keypad-angka"]}>{key}</p>
                        </div>
                    ))}
                    <div className={styles["keypad-backspace"]}>
                        <Image
                            className={styles.backspace}
                            src="/img-delete.svg"
                            width={500}
                            height={500}
                            alt="delete"
                        />
                    </div>
                    <div className={styles["keypad-0"]}>
                        <p className={styles["keypad-angka"]}>0</p>
                    </div>
                    <div className={styles["keypad-ok"]}>
                        <p
                            className={styles.ok}
                            onClick={() => router.push("/confirm")}
                        >
                            OK
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Keypad;
