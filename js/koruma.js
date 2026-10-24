/* Görsel koruması (firmanın isteği, 22 Eki 2026): fotoğraf ve videoların üzerinde sağ tık menüsü
   ("Resmi farklı kaydet") açılmaz, görseller sürüklenip masaüstüne bırakılamaz.
   Ekran görüntüsü almayı engellemez; amaç projelerin kolayca kopyalanmasını önlemek. */
(function () {
  function korumali(el) {
    return el && el.closest && el.closest("img, video, .media, .hero-bg, .pcover, .pnext");
  }
  document.addEventListener("contextmenu", function (e) { if (korumali(e.target)) e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { if (korumali(e.target)) e.preventDefault(); });
})();
