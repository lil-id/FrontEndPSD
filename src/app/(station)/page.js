"use client";

import styles from "./style.module.css";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <>
            <div className={styles.content}>
                <Header />
                <div className={styles.main}>
                    <Menu />
                </div>
                <Footer/>
            </div>
        </>
    );
}
