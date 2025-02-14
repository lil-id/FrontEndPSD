"use client";

import styles from "../../components/styles/CardWater.module.css";
import CardWater from "@/app/components/cardwater/CardWater";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import Keypad from "@/app/components/keypad/Keypad";
import FormAmount from "@/app/components/form/FormAmount";
import FooterButton from "@/app/components/button/FooterButton";

export default function Buy() {

    return (
        <>
            <div className={styles.content}>
                <Header />
                <div className={styles.main}>
                    <CardWater title="Pilih Jumlah Air Wakaf"/>
                    <div className={styles["main-right"]}>
                        <FormAmount />
                        <Keypad />
                        <div className={styles.button}>
                            <FooterButton />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
