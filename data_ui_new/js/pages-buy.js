(function (w) {
  const A = w.PSDApp || (w.PSDApp = {});
  const $ = A.qs;

  function formatRupiahStr(n) {
    return "Rp. " + A.fmtRupiah(n);
  }

  A.Buy = {
    init() {
      let t = 0; // nilai input dari keypad
      const page = document.body.getAttribute("data-page"); // "pages/buy-page.html" utk gallon
      const isGallon = page === "pages/buy-page.html";

      const updateDisplay = (vol) => {
        if (isGallon) {
          $(".info-size") &&
            ($(".info-size").textContent = A.fmtRupiah(vol) + " L");
          let price = vol > 10 ? Math.round(vol * 157.894737) : vol * 200;
          $(".info-price") &&
            ($(".info-price").textContent = formatRupiahStr(price));
        } else {
          $(".info-size") &&
            ($(".info-size").textContent = A.fmtRupiah(vol) + " ML");
          $(".info-price") &&
            ($(".info-price").textContent = formatRupiahStr(vol));
        }
        const ok = $(".keypad-ok"),
          cf = $("#confirm-ok");
        if (ok) {
          ok.style.pointerEvents = "auto";
          ok.style.opacity = "1";
        }
        if (cf) {
          cf.disabled = false;
          cf.style.pointerEvents = "auto";
          cf.style.opacity = "1";
        }
      };

      const send = (val) => {
        A.sendVolume(val, isGallon ? "gallon" : "tumbler");
        updateDisplay(val);
      };

      // keypad angka
      document.querySelectorAll("[class^='keypad-angka']").forEach((el) => {
        el.addEventListener("click", () => {
          const angka = parseInt(el.textContent);
          if (!isNaN(angka)) {
            t = 10 * t + angka;
            if (isGallon) t = Math.min(t, 19); // batas gallon
            send(t);
          }
        });
      });
      $(".keypad-backspace")?.addEventListener("click", () => {
        t = Math.floor(t / 10);
        send(t);
      });
      // preset tombol
      $(".size-button-1")?.addEventListener("click", () =>
        send((t = isGallon ? 5 : 200))
      );
      $(".size-button-2")?.addEventListener("click", () =>
        send((t = isGallon ? 10 : 600))
      );
      $(".size-button-3")?.addEventListener("click", () =>
        send((t = isGallon ? 19 : 1500))
      );

      // OK / Konfirmasi -> pilih pembayaran
      $(".keypad-ok")?.addEventListener("click", () => A.Payments.choose());
      $("#confirm-ok")?.addEventListener("click", () => A.Payments.choose());
    },
  };
})(window);
