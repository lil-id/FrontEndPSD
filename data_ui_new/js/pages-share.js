(function (w) {
  const A = w.PSDApp || (w.PSDApp = {});
  const $ = A.qs;
  function rup(n) {
    return "Rp. " + A.fmtRupiah(n);
  }

  A.Share = {
    init() {
      let t = 0;
      const send = (v) => {
        A.sendVolume(v, "tumbler");
        $(".info-size").textContent = A.fmtRupiah(v) + " ML";
        $(".info-price").textContent = rup(v);
        enable();
      };
      const enable = () => {
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

      document.querySelectorAll("[class^='keypad-angka']").forEach((el) => {
        el.addEventListener("click", () => {
          const a = parseInt(el.textContent);
          if (!isNaN(a)) {
            t = 10 * t + a;
            send(t);
          }
        });
      });
      $(".keypad-backspace")?.addEventListener("click", () => {
        t = Math.floor(t / 10);
        send(t);
      });
      $(".size-button-1")?.addEventListener("click", () => send((t = 200)));
      $(".size-button-2")?.addEventListener("click", () => send((t = 600)));
      $(".size-button-3")?.addEventListener("click", () => send((t = 1500)));

      $(".keypad-ok")?.addEventListener("click", () => A.Payments.choose());
      $("#confirm-ok")?.addEventListener("click", () => A.Payments.choose());
    },
  };
})(window);
