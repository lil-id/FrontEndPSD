import styles from "../styles/CardWater.module.css";
import Image from "next/image";

const CardWater = ({title}) => {
    const waterOptions = [
        { size: "200 ML", img: "/img-200ml.png", price: 2000, alt: "200ml" },
        { size: "600 ML", img: "/img-600ml.png", price: 6000, alt: "600ml" },
        { size: "1500 ML", img: "/img-1500ml.png", price: 15000, alt: "1500ml" },
    ];

    return (
        <>
            <div className={styles["main-left"]}>
                <p className={styles["main-left-title"]}>{title}</p>
                <div className={styles.size}>
                    {waterOptions.map((option, index) => (
                        <div key={index} className={styles["size-1"]}>
                            <p className={styles["size-title"]}>
                                {option.size}
                            </p>
                            <Image
                                className={styles["size-image"]}
                                src={option.img}
                                width={500}
                                height={500}
                                alt={option.alt}
                            />
                            <p className={styles["size-price"]}>
                                Rp. {option.price}
                            </p>
                            <button className={styles["size-button-1"]}>
                                Beli Air
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardWater;
