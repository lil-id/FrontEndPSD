import styles from "../styles/Menu.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Menu = () => {
    const router = useRouter();

    const menuItems = [
        {
            title: "Membeli Air",
            img: "/img-layanan.png",
            button: "Beli",
            description:
                "Gunakan wadah minimal ukuran 200 ml Gunakan airmulai 200,-",
            route: () => router.push("/buy"),
        },
        {
            title: "Sedekah Air",
            img: "/img-layanan.png",
            button: "Sedekah",
            description:
                "Ayo berbagi kebaikan dengan air tanpa minimum nominal.",
            route: () => router.push("/share"),
        },
        {
            title: "Wakaf Air",
            img: "/img-layanan.png",
            button: "Wakaf",
            description:
                "Ayo berbagi kebaikan dengan air tanpa minimum nominal.",
            route: () => router.push("/wakaf"),
        },
        {
            title: "Air Gratis",
            img: "/img-layanan.png",
            button: "Ambil",
            description:
                "200 ml setiap transaksi untuk kamu yang butuh penghilang dahaga.",
            route: () => router.push("/freewater"),
        },
    ];

    return (
        <>
            <div className={styles.dash_ungu_short}></div>
            {menuItems.map((item, index) => (
                <div key={index} className={styles.service}>
                    <Image
                        width={500}
                        height={500}
                        className={styles.img_service}
                        src={item.img}
                        alt="layanan image"
                    />
                    <div className={styles.text_service}>
                        <p className={styles.title_service}>{item.title}</p>
                        <p className={styles.desc_service}>
                            {item.description}
                        </p>
                    </div>
                    <button
                        type="button"
                        className={styles.btn_service}
                        onClick={item.route}
                    >
                        {item.button}
                    </button>
                </div>
            ))}
            <button
                type="button"
                className={styles.btn_panduan}
                onClick={() => router.push("/guide")}
            >
                Panduan Penggunaan
            </button>
        </>
    );
};

export default Menu;
