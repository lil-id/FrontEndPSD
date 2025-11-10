(function (w) {
  const A = w.PSDApp || (w.PSDApp = {});
  A.fmtRupiah = (n) => {
    try {
      return (n || 0).toLocaleString("id-ID");
    } catch {
      return String(n || 0);
    }
  };
  A.loadJSON = async (path) => {
    const r = await fetch(path, { cache: "no-cache" });
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  };
  A.sendVolume = (vol, container = "tumbler") => {
    if (A.wsSend) A.wsSend({ type: "set_volume", value: vol, container });
  };

  // tombol header
  A.ads = () => (location.href = "pages/ads-page.html");
  A.home = () => {
    A.Router.loadPage("pages/home-page.html", "STATE_RESET");
    A.loadServices();
  };

  // helper kecil
  A.qs = (sel, root = document) => root.querySelector(sel);
})(window);
