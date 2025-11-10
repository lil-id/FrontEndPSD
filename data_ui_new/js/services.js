(function (w) {
  const A = w.PSDApp || (w.PSDApp = {});
  // mapping action -> fungsi yang memuat halaman
  A.ActionHandlers = {
    buy: () => A.Router.loadPage("pages/buy-page.html", "STATE_BUY"),
    sedekah: () => A.Router.loadPage("pages/share-page.html", "STATE_SHARE"),
    wakaf: () => A.Router.loadPage("pages/wakaf-page.html", "STATE_WAKAF"),
    consume: () => A.Router.consumeDialog(),
  };

  A.renderServiceCard = (svc) => {
    const wrap = document.createElement("div");
    wrap.className = "service";
    const img = document.createElement("img");
    img.className = "img-service";
    img.src = svc.icon || "assets/img-layanan.png";
    img.alt = svc.title || "";
    const text = document.createElement("div");
    text.className = "text-service";
    const t = document.createElement("p");
    t.className = "title-service";
    t.innerHTML = (svc.title || "").replace(/\n/g, "<br/>");
    const d = document.createElement("p");
    d.className = "desc-service";
    d.textContent = svc.desc || "";
    const btn = document.createElement("button");
    btn.className = "btn-service";
    btn.textContent = svc.button || "Pilih";
    const fn = A.ActionHandlers[svc.action];
    if (typeof fn === "function") btn.addEventListener("click", () => fn(svc));
    else {
      btn.disabled = true;
      btn.title = "Action not available";
    }
    text.appendChild(t);
    text.appendChild(d);
    wrap.appendChild(img);
    wrap.appendChild(text);
    wrap.appendChild(btn);
    return wrap;
  };

  A.loadServices = async () => {
    try {
      const cfg = await A.loadJSON("config.json");
      const list = Array.isArray(cfg.services) ? cfg.services : [];
      const container = document.getElementById("services");
      if (!container) return;
      container.innerHTML = "";
      list
        .filter((s) => s.enabled !== false)
        .forEach((svc) => container.appendChild(A.renderServiceCard(svc)));
    } catch (e) {
      console.error("loadServices failed:", e);
      const container = document.getElementById("services");
      if (container)
        container.innerHTML = '<p style="color:#c00">Gagal memuat layanan.</p>';
    }
  };
})(window);
