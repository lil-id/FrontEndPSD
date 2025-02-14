"use client";

import Image from "next/image";
import styles from "../style.module.css";
import { useRouter } from "next/navigation";

export default function Buy() {
    const router = useRouter();

    return (
        <>
            <div class="content">
                <div class="header">
                    <div class="logo">
                        <Image
                            className="logo-psd"
                            width={500}
                            height={500}
                            src="/img-psd.png"
                            alt="logo psd"
                        />
                        <Image
                            className="logo-unm"
                            width={500}
                            height={500}
                            src="https://firebasestorage.googleapis.com/v0/b/psd-display.appspot.com/o/img-unm.svg?alt=media&token=e881e559-bdb2-4aa5-8b32-61db6c037304"
                            alt="logo unm"
                        />
                    </div>

                    <div class="title">
                        <div class="title-top">
                            <p>
                                <b>
                                    &quot;Siapkan <i>Tumbler</i> mu,
                                </b>
                            </p>
                            <b>Kurangi Sampah Plastik!&quot;</b>
                        </div>

                        <div class="title-bottom">
                            <div class="header-web">
                                <Image
                                    width={500}
                                    height={500}
                                    className="header-web-image"
                                    src="/img-web.svg"
                                    alt="web logo"
                                />
                                <p class="header-web-link">
                                    www.psd.diginus.id
                                </p>
                            </div>
                            <div class="header-ig">
                                <Image
                                    width={500}
                                    height={500}
                                    className="header-ig-image"
                                    src="/img-ig.svg"
                                    alt="ig logo"
                                />
                                <p class="header-ig-link">psd.diginus.id</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main">
                    <div class="main-left">
                        <p class="main-left-title">Pilih Jumlah Air</p>
                        <div class="size">
                            <div></div>
                            <div>
                                <div class="size-1">
                                    <p class="size-title">Ukuran 200 ML</p>
                                    <Image
                                        class="size-image"
                                        src="/img-200ml.png"
																				width={500}
																				height={500}
																				alt="200ml"
                                    />
                                    <p class="size-price">Rp. 200</p>
                                    <button class="size-button-1">
                                        Beli Air
                                    </button>
                                </div>

                                <div class="size-2">
                                    <p class="size-title">Ukuran 600 ML</p>
                                    <img
                                        class="size-image"
                                        src="img-600ml.png"
                                    />
                                    <p class="size-price">Rp. 600</p>
                                    <button class="size-button-2">
                                        Beli Air
                                    </button>
                                </div>

                                <div class="size-3">
                                    <p class="size-title">Ukuran 1.500 ML</p>
                                    <img
                                        class="size-image"
                                        src="img-1500ml.png"
                                    />
                                    <p class="size-price">Rp. 1.500</p>
                                    <button class="size-button-3">
                                        Beli Air
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <div class="main-right">
                        <p class="main-right-title">
                            Masukkan Jumlah air yang diinginkan
                        </p>
                        <div class="info-size-price">
                            <p class="title-info-size">UKURAN:</p>
                            <p class="info-size">-</p>
                            <div class="dash-black"></div>
                            <p class="title-info-price">HARGA:</p>
                            <p class="info-price">-</p>
                            <div class="dash-black"></div>
                        </div>
                        <div class="custom">
                            <p class="custom-title">
                                <b>Custom</b>
                            </p>
                            <div class="keypad">
                                <div class="keypad-1">
                                    <p class="keypad-angka">1</p>
                                </div>
                                <div class="keypad-2">
                                    <p class="keypad-angka">2</p>
                                </div>
                                <div class="keypad-3">
                                    <p class="keypad-angka">3</p>
                                </div>
                                <div class="keypad-4">
                                    <p class="keypad-angka">4</p>
                                </div>
                                <div class="keypad-5">
                                    <p class="keypad-angka">5</p>
                                </div>
                                <div class="keypad-6">
                                    <p class="keypad-angka">6</p>
                                </div>
                                <div class="keypad-7">
                                    <p class="keypad-angka">7</p>
                                </div>
                                <div class="keypad-8">
                                    <p class="keypad-angka">8</p>
                                </div>
                                <div class="keypad-9">
                                    <div class="keypad-angka">9</div>
                                </div>
                                <div class="keypad-backspace">
                                    <img
                                        class="backspace"
                                        src="img-delete.svg"
                                    />
                                </div>
                                <div class="keypad-0">
                                    <p class="keypad-angka">0</p>
                                </div>
                                <div class="keypad-ok">
                                    <p class="ok" onclick="confirm()">
                                        OK
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="button">
                            <button class="confirm" onclick="home()">
                                Dashboard
                            </button>
                            <button class="confirm" onclick="confirm()">
                                Konfirmasi
                            </button>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="footer-web">
                        <img class="footer-web-image" src="img-web.svg" />
                        <p class="footer-web-link">www.psd.diginus.id</p>
                    </div>
                </div>
            </div>
        </>
    );
}
