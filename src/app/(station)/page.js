'use client';

import Image from 'next/image'
import styles from './style.module.css';
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

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
      <div className={styles.content}>
        <div className="header">
          <div className="logo">
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

          <div className="title">
            <div className="title-top">
              <p>
                <b>&quot;Siapkan <i>Tumbler</i> mu,</b>
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
                  alt="web logo" />
                <p className="header-web-link">www.psd.diginus.id</p>
              </div>
              <div className="header-ig">
                <Image
                  width={500}
                  height={500}
                  className="header-ig-image"
                  src="/img-ig.svg"
                  alt="ig logo"/>
                <p className="header-ig-link">psd.diginus.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.dash_ungu_short}></div>
          <div className={styles.service}>
            <Image
              width={500}
              height={500}
              className={styles.img_service}
              src="/img-layanan.png"
              alt="layanan image"/>
            <div className={styles.text_service}>
              <p className={styles.title_service}>Membeli Air</p>
              <p className={styles.desc_service}>
                Gunakan wadah minimal ukuran 200 ml Gunakan air mulai 200,-
              </p>
            </div>
            <button type="button" className={styles.btn_service} onClick={() => router.push('/buy')}>Beli</button>
          </div>

          <div className={styles.service}>
            <Image
              width={500}
              height={500}
              className={styles.img_service}
              src="/img-layanan.png"
              alt="layanan image"/>
            <div className={styles.text_service}>
              <p className={styles.title_service}>Sedekah Air</p>
              <p className={styles.desc_service}>
                Ayo berbagi kebaikan dengan air tanpa minimum nominal.
              </p>
            </div>
            <button type="button" className={styles.btn_service} onClick={() => router.push('/share')}>Sedekah</button>
          </div>

          <div className={styles.service}>
            <Image
              width={500}
              height={500}
              className={styles.img_service}
              src="/img-layanan.png"
              alt="layanan image"/>
            <div className={styles.text_service}>
              <p className={styles.title_service}>Wakaf Air</p>
              <p className={styles.desc_service}>
                Ayo berbagi kebaikan dengan air tanpa minimum nominal.
              </p>
            </div>
            <button type="button" className={styles.btn_service} onClick={() => router.push('/wakaf')}>Wakaf</button>
          </div>

          <div className={styles.service}>
            <Image
              width={500}
              height={500}
              className={styles.img_service}
              src="/img-layanan.png"
              alt="layanan image"/>
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
            <Image
              width={500}
              height={500}
              className="footer-web-image"
              src="/img-web.svg"
              alt="footer image"/>
            <p className="footer-web-link">www.psd.diginus.id</p>
          </div>
        </div>
      </div>
    </>
  );
}