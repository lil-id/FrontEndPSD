(function (w) {
  const A = w.PSDApp || (w.PSDApp = {});

  A.Payments = {
    async choose() {
      try {
        const cfg = await A.loadJSON("config.json");
        const methods = (cfg.paymentMethods || []).filter((m) => m.enabled);
        if (!methods.length)
          return Swal.fire("Info", "Tidak ada metode pembayaran aktif", "info");

        const grid = methods
          .map(
            (m) => `
          <div class="payment-item" data-method="${m.id}"
               style="background:linear-gradient(135deg,${m.colorStart},${m.colorEnd});border:1px solid ${m.border}">
            <div class="payment-icon">${m.icon}</div>
            <div class="payment-name">${m.name}</div>
          </div>`
          )
          .join("");

        const css = `<style>
          .payment-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:15px;margin:20px 0;}
          .payment-item{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px 10px;border-radius:16px;cursor:pointer;transition:all .3s;height:160px}
          .payment-item:hover{transform:translateY(-8px);box-shadow:0 8px 16px rgba(0,0,0,.2);}
          .payment-icon{font-size:2.8rem;margin-bottom:12px}
          .payment-name{font-weight:700;font-size:18px}
        </style>`;

        Swal.fire({
          title: "<strong>Pilih Metode Pembayaran</strong>",
          html: `<div class="payment-grid">${grid}</div>${css}`,
          icon: "info",
          showCancelButton: true,
          cancelButtonText: "❌ Batal",
          reverseButtons: true,
          background: "#f5f5f5",
          color: "#333",
          cancelButtonColor: "#999",
          allowOutsideClick: false,
          didOpen: () => {
            document.querySelectorAll(".payment-item").forEach((el) => {
              el.addEventListener("click", () => {
                const method = el.dataset.method;
                Swal.close();
                this.onChosen(method);
              });
            });
          },
        });
      } catch (e) {
        console.error(e);
        Swal.fire("Error", "Gagal memuat metode pembayaran", "error");
      }
    },

    onChosen(method) {
      const map = {
        qris: () =>
          A.Router.loadPage("pages/qris-page.html", "STATE_CREATE_QR"),
        cash: () =>
          A.Router.loadPage("pages/cash-page.html", "STATE_CREATE_CASH"),
        card: () =>
          A.Router.loadPage("pages/card-page.html", "STATE_CREATE_CARD"),
      };
      (
        map[method] || (() => Swal.fire("Info", "Metode tidak dikenal", "info"))
      )();
    },
  };
})(window);
