import styles from "../styles/CardWater.module.css";
import { useRouter } from "next/navigation";

const FooterButton = () => {
    const router = useRouter();

    return (
        <>
            <button className={styles.confirm} onClick={() => router.push("/")}>
                Dashboard
            </button>
            <button
                className={styles.confirm}
                onClick={() => router.push("/confirm")}
            >
                Konfirmasi
            </button>
        </>
    );
};

export default FooterButton;
