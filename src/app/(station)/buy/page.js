"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

export default function Buy() {
    const router = useRouter();

    return (
        <>
            <div className={styles.content}>
                <div className="header">
                    <div className="logo">
                        <Image
                            className="logo-psd"
                            src="/img-psd.png"
                            width={500}
                            height={500}
                            alt="logo psd"
                        />
                        <Image
                            className="logo-unm"
                            src="https://firebasestorage.googleapis.com/v0/b/psd-display.appspot.com/o/img-unm.svg?alt=media&token=e881e559-bdb2-4aa5-8b32-61db6c037304"
                            width={500}
                            height={500}
                            alt="logo unm"
                        />
                    </div>

                    <div className="title">
                        <div className="title-top">
                            <p>
                                <b>
                                    &quot;Siapkan <i>Tumbler</i> mu,
                                </b>
                            </p>
                            <b>Kurangi Sampah Plastik!&quot;</b>
                        </div>

                        <div className="title-bottom">
                            <div className="header-web">
                                <Image
                                    className="header-web-image"
                                    src="/img-web.svg"
                                    width={500}
                                    height={500}
                                    alt="web logo"
                                />
                                <p className="header-web-link">
                                    www.psd.diginus.id
                                </p>
                            </div>
                            <div className="header-ig">
                                <Image
                                    className="header-ig-image"
                                    src="/img-ig.svg"
                                    width={500}
                                    height={500}
                                    alt="ig logo"
                                />
                                <p className="header-ig-link">psd.diginus.id</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles["main-left"]}>
                        <p className={styles["main-left-title"]}>Pilih Jumlah Air</p>
                        <div className={styles.size}>
                            <div></div>
                            <div>
                                <div className={styles["size-1"]}>
                                    <p className={styles["size-title"]}>Ukuran 200 ML</p>
                                    <Image
                                        className={styles["size-image"]}
                                        src="/img-200ml.png"
                                        width={500}
                                        height={500}
                                        alt="200ml"
                                    />
                                    <p className={styles["size-price"]}>Rp. 200</p>
                                    <button className={styles["size-button-1"]}>
                                        Beli Air
                                    </button>
                                </div>

                                <div className={styles["size-2"]}>
                                    <p className={styles["size-title"]}>Ukuran 600 ML</p>
                                    <Image
                                        className={styles["size-image"]}
                                        src="/img-600ml.png"
                                        width={500}
                                        height={500}
                                        alt="600ml"
                                    />
                                    <p className={styles["size-price"]}>Rp. 600</p>
                                    <button className={styles["size-button-2"]}>
                                        Beli Air
                                    </button>
                                </div>

                                <div className={styles["size-3"]}>
                                    <p className={styles["size-title"]}>Ukuran 1.500 ML</p>
                                    <Image
                                        className={styles["size-image"]}
                                        src="/img-1500ml.png"
                                        width={500}
                                        height={500}
                                        alt="1500ml"
                                    />
                                    <p className={styles["size-price"]}>Rp. 1.500</p>
                                    <button className={styles["size-button-3"]}>
                                        Beli Air
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <div className={styles["main-right"]}>
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
                        <div className={styles.custom}>
                            <p className={styles["custom-title"]}>
                                <b>Custom</b>
                            </p>
                            <div className={styles.keypad}>
                                <div className={styles["keypad-1"]}>
                                    <p className={styles["keypad-angka"]}>1</p>
                                </div>
                                <div className={styles["keypad-2"]}>
                                    <p className={styles["keypad-angka"]}>2</p>
                                </div>
                                <div className={styles["keypad-3"]}>
                                    <p className={styles["keypad-angka"]}>3</p>
                                </div>
                                <div className={styles["keypad-4"]}>
                                    <p className={styles["keypad-angka"]}>4</p>
                                </div>
                                <div className={styles["keypad-5"]}>
                                    <p className={styles["keypad-angka"]}>5</p>
                                </div>
                                <div className={styles["keypad-6"]}>
                                    <p className={styles["keypad-angka"]}>6</p>
                                </div>
                                <div className={styles["keypad-7"]}>
                                    <p className={styles["keypad-angka"]}>7</p>
                                </div>
                                <div className={styles["keypad-8"]}>
                                    <p className={styles["keypad-angka"]}>8</p>
                                </div>
                                <div className={styles["keypad-9"]}>
                                    <p className={styles["keypad-angka"]}>9</p>
                                </div>
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
                                    <p className={styles.ok} onClick={() => router.push('/confirm')}>
                                        OK
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button className={styles.confirm} onClick={() => router.push('/')}>
                                Dashboard
                            </button>
                            <button className={styles.confirm} onClick={() => router.push('/confirm')}>
                                Konfirmasi
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles["footer-web"]}>
                        <Image
                            className={styles["footer-web-image"]}
                            width={500}
                            height={500}
                            src="/img-web.svg"
                            alt="footer image"
                        />
                        <p className={styles["footer-web-link"]}>www.psd.diginus.id</p>
                    </div>
                </div>
            </div>
        </>
    );
}