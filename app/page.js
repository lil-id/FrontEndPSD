'use client';

import styles from './style.module.css';
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  function buy() {
    window.location.href = "/buy";
  }
  
  function sedekah() {
    window.location.href = "/splash-share";
  }
  
  function waqaf() {
    window.location.href = "/splash-wakaf";
  }
  
  function consume() {
    window.location.href = "/air-gratis";
  }
  
  function panduan() {
    window.location.href = "/panduan";
  }

  // let check = true;

  // function checkAds() {
  //   var xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       if (this.responseText == "ADS") {
  //         window.location.href = "/ads";
  //       }
  //     }
  //   };
  //   xhttp.open("GET", "/dashboard", true);
  //   xhttp.send();
  // }

  // $(document).ready(function () {
  //   var intervalId = setInterval(function () {
  //     var now = new Date();
  //     var hours = now.getHours();

  //     if (hours >= 8 && hours < 19) {
  //       if (check) {
  //         checkAds();
  //       }
  //     } else {
  //       clearInterval(intervalId);
  //     }
  //   }, 60000);
  // });

  // document.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  return (
    <>
      <title>Public Smart Dispenser</title>
      <div className={styles.content}>
        <div className="header">
          <div className="logo">
            <img
              className="logo-psd"
              onClick={() => window.location.href = "/"}
              src="https://firebasestorage.googleapis.com/v0/b/psd-display.appspot.com/o/img-psd.png?alt=media&token=8be1db1e-f385-4a44-bcab-134df4eddc1b"
            />
            <img
              className="logo-unm"
              onClick={() => window.location.href = "/"}
              src="https://firebasestorage.googleapis.com/v0/b/psd-display.appspot.com/o/img-unm.svg?alt=media&token=e881e559-bdb2-4aa5-8b32-61db6c037304"
            />
          </div>

          <div className="title">
            <div className="title-top">
              <p>
                <b>“Siapkan <i>Tumbler</i> mu,</b>
              </p>
              <b>Kurangi Sampah Plastik!”</b>
            </div>

            <div className="title-bottom">
              <div className="header-web">
                <img className="header-web-image" src="/img-web.svg" />
                <p className="header-web-link">www.psd.diginus.id</p>
              </div>
              <div className="header-ig">
                <img className="header-ig-image" src="/img-ig.svg" />
                <p className="header-ig-link">psd.diginus.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.dash_ungu_short}></div>
          <div className={styles.service}>
            <img className={styles.img_service} src="/img-layanan.png" />
            <div className={styles.text_service}>
              <p className={styles.title_service}>Membeli Air</p>
              <p className={styles.desc_service}>
                Gunakan wadah minimal ukuran 200 ml Gunakan air mulai 200,-
              </p>
            </div>
            <button type="button" className={styles.btn_service} onClick={() => router.push('/buy')}>Beli</button>
          </div>

          <div className={styles.service}>
            <img className={styles.img_service} src="/img-layanan.png" />
            <div className={styles.text_service}>
              <p className={styles.title_service}>Sedekah Air</p>
              <p className={styles.desc_service}>
                Ayo berbagi kebaikan dengan air tanpa minimum nominal.
              </p>
            </div>
            <button type="button" className={styles.btn_service} onClick={() => router.push('/share')}>Sedekah</button>
          </div>

          <div className={styles.service}>
            <img className={styles.img_service} src="/img-layanan.png" />
            <div className={styles.text_service}>
              <p className={styles.title_service}>Wakaf Air</p>
              <p className={styles.desc_service}>
                Ayo berbagi kebaikan dengan air tanpa minimum nominal.
              </p>
            </div>
            <button type="button" className={styles.btn_service} onClick={() => router.push('/wakaf')}>Wakaf</button>
          </div>

          <div className={styles.service}>
            <img className={styles.img_service} src="/img-layanan.png" />
            <div className={styles.text_service}>
              <p className={styles.title_service}>Air Gratis</p>
              <p className={styles.desc_service}>
                200 ml setiap transaksi untuk kamu yang butuh penghilang dahaga.
              </p>
            </div>
            <button type="button" className={styles.btn_service} onClick={() => router.push('/freewater')}>Ambil</button>
          </div>

          <button type="button" className={styles.btn_panduan} onClick={() => router.push('/guide')}>
            Panduan Penggunaan
          </button>
        </div>

        <div className="footer">
          <div className="footer-web">
            <img className="footer-web-image" src="/img-web.svg" />
            <p className="footer-web-link">www.psd.diginus.id</p>
          </div>
        </div>
      </div>
    </>
  );
}