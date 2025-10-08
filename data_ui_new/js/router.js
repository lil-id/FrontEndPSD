(function (w) {
  const A = w.PSDApp || (w.PSDApp = {});
  const $ = A.qs;

  A.Router = {
    restoreLayout() {
      const layout = `
        <div class="header">
          <div class="logo">
            <img class="logo-psd" src="assets/img-psd.png" onclick="PSDApp.Router.home()" />
            <img class="logo-unm" src="assets/img-unm.png" onclick="PSDApp.Router.home()" />
          </div>
          <div class="title">
            <div class="title-top"><p><b>“Siapkan <i>Tumbler</i> mu,</b></p><b>Kurangi Sampah Plastik!”</b></div>
            <div class="title-bottom">
              <div class="header-web"><img class="header-web-image" src="assets/img-web.svg" /><p class="header-web-link">www.psd.diginus.id</p></div>
              <div class="header-ig"><img class="header-ig-image" src="assets/img-ig.svg" /><p class="header-ig-link">psd.diginus.id</p></div>
            </div>
          </div>
        </div>
        <div class="main" id="main-content"></div>
        <div class="footer"><div class="footer-web"><img class="footer-web-image" src="assets/img-web.svg" /><p class="footer-web-link">www.psd.diginus.id</p></div></div>`;
      $("#root").innerHTML = layout;
    },

    home() {
      this.loadPage("pages/home-page.html", "STATE_RESET");
      A.loadServices();
    },

    loadPage(pageFile, state = null) {
      if (!$("#main-content")) this.restoreLayout();
      $("#main-content").innerHTML =
        '<div style="padding:16px">Loading...</div>';
      fetch(pageFile)
        .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
        .then((html) => {
          $("#main-content").innerHTML = html;
          document.body.setAttribute("data-page", pageFile);
          if (state) A.wsSend({ type: "page_state", state });
          if (pageFile.endsWith("buy-page.html")) A.Buy.init();
          if (pageFile.endsWith("share-page.html")) A.Share.init();
          if (pageFile.endsWith("wakaf-page.html")) A.Wakaf.init();
        })
        .catch(
          () =>
            ($("#main-content").innerHTML = "<p>Halaman tidak ditemukan.</p>")
        );
    },

    loadFullPage(pageFile, state = null) {
      fetch(pageFile)
        .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
        .then((html) => {
          $("#root").innerHTML = html;
          if (state) A.wsSend({ type: "page_state", state });
        })
        .catch(
          () => ($("#root").innerHTML = "<p>Halaman tidak ditemukan.</p>")
        );
    },

    updateOrderInfo(data) {
      if (data.volume) {
        const unit = data.container === "tumbler" ? " ML" : " L";
        $(".title-order") &&
          ($(".title-order").textContent =
            "Pembelian Air Ukuran " + A.fmtRupiah(data.volume) + unit);
        $(".price-order") &&
          ($(".price-order").textContent = "Rp. " + A.fmtRupiah(data.price));
      }
      if (data.saldo && $(".total-amount"))
        $(".total-amount").textContent = "Rp. " + A.fmtRupiah(data.saldo);
      if (data.qr && $(".qr-code"))
        $(".qr-code").src =
          "https://api.qrserver.com/v1/create-qr-code/?size=336x336&data=" +
          encodeURIComponent(data.qr);
      if (data.countdown) {
        window.countdownTime = data.countdown;
        this.startCountdown();
      }
    },

    startCountdown() {
      const el = $(".countdown");
      if (!el) return;
      const tEnd = Date.now() + (window.countdownTime || 0) * 1000;
      clearInterval(this._cd);
      this._cd = setInterval(() => {
        const d = Math.max(0, tEnd - Date.now());
        const m = String(Math.floor(d / 60000)).padStart(2, "0");
        const s = String(Math.floor((d % 60000) / 1000)).padStart(2, "0");
        el.textContent = `${m}:${s}`;
        if (!d) {
          clearInterval(this._cd);
          el.textContent = "00:00";
        }
      }, 100);
    },

    // dialog konsumsi air gratis (dipindah dari index)
    consumeDialog() {
      Swal.fire({
        title: "<strong>Ambil Air Gratis?</strong>",
        html: `<div class="free-water-content"><div class="water-icon">💧</div>
               <p class="water-amount">Kamu akan mendapatkan <b>200 ml</b> air gratis</p>
               <div class="tumbler-reminder"><div class="reminder-icon">🥤</div><p>Pastikan tumbler sudah siap ya!</p></div></div>`,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "<b>✅ Ya, Ambil Sekarang</b>",
        cancelButtonText: "❌ Batal",
        reverseButtons: true,
        background: "#f5f5f5",
        color: "#333",
        confirmButtonColor: "#814092",
        cancelButtonColor: "#999",
        allowOutsideClick: false,
      }).then((r) => {
        if (r.isConfirmed) {
          Swal.fire({
            title: "Memproses...",
            text: "Menyiapkan air gratis",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          }).then(() =>
            this.loadPage("pages/consume-page.html", "STATE_CHECK_AIR_GRATIS")
          );
        }
      });
    },

    // halaman hasil/status
    expired() {
      this.loadPage("pages/expired-page.html", "");
    },
    successBuy() {
      this.loadPage("pages/buy-success.html", "");
    },
    successSedekah() {
      this.loadPage("pages/share-success.html", "");
    },
    successWakaf() {
      this.loadPage("pages/wakaf-success.html", "");
    },
    available() {
      this.loadPage("pages/available-page.html", "");
    },
    empty() {
      this.loadPage("pages/empty-page.html", "");
    },
    stop() {
      this.loadPage("pages/filling-done.html", "STATE_FILLING_DONE");
    },
  };
})(window);
