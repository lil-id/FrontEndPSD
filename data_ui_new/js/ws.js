(function (w) {
  const A = w.PSDApp || (w.PSDApp = {});
  let ws;

  A.initWebSocket = function () {
    ws = new WebSocket(`ws://${location.hostname}/ws`);
    ws.onopen = () => console.log("WebSocket connected");
    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setTimeout(A.initWebSocket, 2000);
    };
    ws.onmessage = (ev) => {
      console.log("Dari ESP32:", ev.data);
      try {
        const data = JSON.parse(ev.data);

        if (data.command === "LOAD_PAGE") {
          const map = {
            home: () => {
              A.Router.loadPage("pages/home-page.html", "");
              A.loadServices();
            },
            ads: () => A.ads(),
            available: () => A.Router.loadPage("pages/available-page.html", ""),
            empty: () => A.Router.loadPage("pages/empty-page.html", ""),
            "filling-done": () =>
              A.Router.loadPage("pages/filling-done.html", ""),
          };
          map[data.page]?.();
        }

        if (data.type === "info_update") A.Router.updateOrderInfo(data);
        if (data.status === "SUCCEEDED") {
          (
            ({
              BUY: A.Router.successBuy,
              SHARE: A.Router.successSedekah,
              WAKAF: A.Router.successWakaf,
            })[data.fitur] || (() => {})
          )();
        } else if (data.status === "EXPIRED") {
          A.Router.expired();
        }
      } catch (e) {
        console.warn("Bukan JSON atau format salah", e);
      }
    };

    A.wsSend = (obj) => {
      if (ws && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(obj));
      else console.warn("WebSocket tidak siap:", obj);
    };
  };
})(window);
