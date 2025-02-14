import styles from "../styles/CardWater.module.css";

const FormAmount = () => {
    return (
        <>
            <p className={styles["main-right-title"]}>
                Masukkan Jumlah air yang diinginkan
            </p>
            <div className={styles["info-size-price"]}>
                <p className={styles["title-info-size"]}>UKURAN:</p>
                <p className={styles["info-size"]}>-</p>
                <div className={styles["dash-black"]}></div>
                <p className={styles["title-info-price"]}>HARGA:</p>
                <p className={styles["info-price"]}>-</p>
                <div className={styles["dash-black"]}></div>
            </div>
        </>
    );
};

export default FormAmount;
