/* =====================================================================
   SİTE İÇERİĞİ — BU DOSYA SİTENİN TEK İÇERİK KAYNAĞIDIR
   =====================================================================
   Concept Mimarlık İnşaat (Serdivan / Sakarya) için hazırlanmıştır.

   KAYNAKLAR (13 Eki 2026, güncelleme 19 Eki 2026)
   - Proje adları, yerler, yıllar ve teknik bilgiler: firmanın kendi
     Instagram paylaşımları (@conceptmimarlik_, 494 gönderi) ve 19 Eki'de
     WhatsApp'tan proje proje gönderdiği adlar.
   - Fotoğraf ve videolar: aynı hesap + firmanın WhatsApp'tan gönderdiği
     dosyalar (13 Eki: 6 fotoğraf + 5 video; 19 Eki: 674 fotoğraf ve
     "Concept Mimarlık Foto" numarasından 48 video). Hangi görselin hangi
     projeye ait olduğu ve teyit listesi: notlar/ARASTIRMA.md.
   - "durum" alanı: tamamlanan / devam / boş (tasarım). Sekmeler buna göre.
   - Adres ve telefon: Instagram profili, Yandex Haritalar, Facebook sayfası.
   Paylaşımlarda yazmayan hiçbir ölçü, tarih ya da ad eklenmedi. Yayına
   almadan önce firma ile birlikte gözden geçirilmelidir (bkz. ARASTIRMA.md).

   NASIL KULLANILIR
   1) Metinler: tırnak içindeki yazıları değiştirin. Tırnakları (" ")
      ve satır sonlarındaki virgülleri silmeyin.
   2) Fotoğraflar: fotoğrafı "images" klasörüne koyun ve g("dosya-adi")
      yazın (uzantısız; dosya .jpg olmalı). Önerilen: geniş kenar
      1600–2400 px.
   3) Proje eklemek: "projects" listesindeki bir bloğu { ... }, kopyalayıp
      yapıştırın. "slug" adresi belirler (proje.html?id=slug): küçük harf,
      boşluksuz, Türkçe karaktersiz ve her projede farklı olmalı.
   4) Galeri düzeni: düz g("...") yazarsanız 1 geniş + 2 yan yana sırası
      uygulanır. Elle seçmek için:
          genis("ad")   tam genişlik (yatay fotoğraf)
          yatay("ad")   yarım genişlik, yatay
          dikey("ad")   yarım genişlik, dikey
          { video: "images/ad.mp4", poster: g("ad") }   video
   5) Altı çizili kelime: manifesto cümlesinde [köşeli parantez] içine
      aldığınız kelimelerin altı çizilir.
   6) Bir bölümü kaldırmak: listesini boş bırakın (ör. news: [],).
   ===================================================================== */

(function () {
  // images klasöründeki bir .jpg dosyasının yolunu üretir.
  function g(ad) { return "images/" + ad + ".jpg"; }
  function dikey(ad) { return { src: g(ad), wide: false }; }
  function yatay(ad) { return { src: g(ad), land: true }; }
  function genis(ad) { return { src: g(ad), wide: true }; }

  window.SITE = {

    /* ---------- MARKA ---------- */
    brand: {
      name: "CONCEPT",              // logonun kalın kısmı
      suffix: "Mimarlık İnşaat",    // logonun ince kısmı (kaydırınca gizlenir)
      description: "Concept Mimarlık İnşaat; Sakarya Serdivan merkezli, mimari projeyi, inşaatı ve iç mekân uygulamasını tek elden yürüten bir mimarlık ve inşaat firmasıdır."
    },

    /* ---------- ÜST MENÜ ---------- */
    nav: [
      { label: "Projeler",   href: "projeler.html" },
      { label: "Tamamlanan", href: "projeler.html?sekme=tamamlanan" },
      { label: "Devam Eden", href: "projeler.html?sekme=devam-eden" },
      { label: "Hakkımızda", href: "studyo.html" },
      { label: "İletişim",   href: "studyo.html#iletisim" }
    ],

    /* ---------- PROJELER SAYFASI SEKMELERİ ----------
       Firmanın isteği (19 Eki 2026): "Projeler / Tamamlanan projeler / Devam eden projeler" diye 3 sekme.
       Her projedeki "durum" alanı hangi sekmede görüneceğini belirler:
         durum: "tamamlanan" -> Tamamlanan Projeler     durum: "devam" -> Devam Eden Projeler
       "Projeler" sekmesinin durum'u boş olduğu için tüm projeleri gösterir (tasarımlar dahil).
    */
    projectTabs: [
      { id: "projeler",   label: "Projeler",            title: "Projeler" },
      { id: "tamamlanan", label: "Tamamlanan Projeler", title: "Tamamlanan", durum: "tamamlanan" },
      { id: "devam-eden", label: "Devam Eden Projeler", title: "Devam Eden", durum: "devam" }
    ],

    /* ---------- AÇILIŞ (HERO) ---------- */
    // Sırayla dönen başlıklar. Her başlık iki satırdır; satırları kısa tutun (en çok ~14 harf).
    headlines: [
      ["KALEM UCUNDA", "SANAT"],
      ["ÖNCE ÇİZERİZ",  "SONRA YAPARIZ"],
      ["PROJEDEN",     "ANAHTARA"],
      ["VİLLA, KONUT", "BUNGALOV"],
      ["SAKARYA'DA",   "YAŞAM KURARIZ"]
    ],
    // Video yolu (ör. "images/tanitim.mp4"). Boşsa aşağıdaki fotoğraf slaytı çalışır.
    heroVideo: "",
    heroVideoCaption: "",
    heroSlides: [
      { image: g("c12-bozaci-01"), caption: "ConcepT 12 Bozacı — tamamlandı" },
      { image: g("life12-01"), caption: "ConcepT Life 12 — yapımı sürüyor" },
      { image: g("concept-15-b-01"), caption: "ConcepT 15 — tamamlandı, Arifiye" },
      { image: g("yerleske-03"), caption: "ConcepT 15 — Arifbey, Arifiye" },
      { image: g("karaman-01"), caption: "Karaman Villa — tamamlandı" },
      { image: g("ks-villa-08"), caption: "K.S Villa" },
      { image: g("kirkpinar-04"), caption: "Kırkpınar Villa — Sapanca" },
      { image: g("ba-villa-01"), caption: "B.A Villa — tasarım" },
      { image: g("c12-bozaci-16"), caption: "ConcepT 12 Bozacı — tasarım görseli" },
      { image: g("kokumer-y-03"), caption: "Kökümer Villaları — Serdivan" },
      { image: g("mt-tanta-05"), caption: "M.T Tanta İş Merkezi — Sapanca" },
      { image: g("ns-villa-02"), caption: "N.S Villa — Esentepe, Serdivan" }
    ],

    /* ---------- MANİFESTO ---------- */
    // [Köşeli parantez] içindeki kelimelerin altı çizilir.
    manifesto: "Bir yapıyı önce [kalemin ucunda] kurarız. Sonra aynı ekiple [temelden çatıya] inşa eder, [anahtarı] teslim edene kadar şantiyeden ayrılmayız.",
    manifestoNote: "2017'den bu yana Sakarya, Sapanca ve Kocaeli'de villa, konut, bungalov ve ticari yapılarda mimari projeyi, inşaatı ve iç mekânı tek elden yürütüyoruz.",

    /* ---------- BÖLÜNMÜŞ SABİT BÖLÜM (fotoğraflar akar, metin sabit kalır) ---------- */
    split: [
      {
        label: "Tasarım",
        title: "Önce ekranda görürsünüz.",
        text: "Her işe mimari proje ve üç boyutlu görselle başlarız. Cepheyi, malzemeyi, bahçeyi ve havuzu inşaat başlamadan önce birlikte görür, kararı birlikte veririz.",
        linkLabel: "Projeleri inceleyin",
        linkHref: "projeler.html",
        images: [
          g("galium-01"),
          g("alacati-01"),
          g("ks-villa-01")
        ]
      },
      {
        label: "Uygulama",
        title: "Çizdiğimizi kendimiz yaparız.",
        text: "Temel demirinden cephe kaplamasına kadar şantiyeyi kendi ekibimiz yürütür. Hangi betonun döküldüğünü, hangi katın çıkıldığını adım adım paylaşırız; iş, yapı denetim ve laboratuvar kontrolleriyle ilerler.",
        linkLabel: "Bizi tanıyın",
        linkHref: "studyo.html",
        images: [
          g("kirkpinar-14"),
          g("ma-villa-y-03"),
          g("kirkpinar-02")
        ]
      }
    ],

    /* ---------- PROJELER ----------
       featured: true  -> ana sayfadaki "Öne Çıkan Projeler" listesinde görünür
       showcase: true  -> ana sayfadaki büyük kartlı vitrinde görünür
       area ya da client boş ("") bırakılırsa künyede o satır görünmez.
    */
    projects: [
      {
        slug: "k-halid-villa",
        title: "Kırkpınar Villa",
        tagline: "Sapanca Kırkpınar'da projesini çizip temelinden havuzuna kadar inşa ettiğimiz modern villa.",
        location: "Kırkpınar, Sapanca / Sakarya",
        year: 2024,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Özel",
        featured: true,
        showcase: true,
        cover: g("kirkpinar-01"),
        text: [
          "Sapanca Kırkpınar'daki bu villanın hem mimari projesini çizdik hem de inşaatını yaptık. Mimar: Muhammet Sefa Topçu.",
          "Antrasit ve beyaz yüzeyler, ahşap görünümlü dikey panellerle yumuşatıldı. Geniş doğramalar salonu doğrudan bahçeye ve havuza açıyor.",
          "Havuz, mermer görünümlü kenar taşları ve taşma kanalıyla aynı ekip tarafından uygulandı. Galeride temel ve havuz betonarmesinden yerden ısıtmaya, cepheden bitmiş bahçeye kadar yapım aşamaları da yer alıyor."
        ],
        gallery: [
          genis("kirkpinar-01"),
          dikey("kirkpinar-03"),
          dikey("kirkpinar-04"),
          dikey("kirkpinar-05"),
          dikey("kirkpinar-06"),
          dikey("kirkpinar-07"),
          dikey("kirkpinar-08"),
          dikey("kirkpinar-09"),
          dikey("kirkpinar-10"),
          dikey("kirkpinar-11"),
          dikey("kirkpinar-12"),
          dikey("kirkpinar-13"),
          dikey("kirkpinar-14"),
          yatay("kirkpinar-02"),
          yatay("kirkpinar-16")
        ]
      },
      {
        slug: "concept-15",
        title: "ConcepT 15",
        tagline: "Arifiye Arifbey'de, ortak bahçe çevresinde 2+1 ve 3+1 dairelerden oluşan konut projemiz.",
        location: "Arifbey, Arifiye / Sakarya",
        year: 2026,
        area: "3+1 (125 m²) · 2+1 (98 m²)",
        category: "Konut",
        status: "Tamamlandı · Satışta",
        durum: "tamamlanan",
        client: "Concept Mimarlık İnşaat",
        featured: true,
        showcase: true,
        cover: g("yerleske-01"),
        text: [
          "ConcepT 15, Arifiye'nin merkezinde, Arifbey'de tasarlayıp inşa ettiğimiz konut projemiz. Projede 3+1 (125 m²) ve 2+1 (98 m²) daireler bulunuyor.",
          "Bloklar ortak bir bahçe çevresinde sıralanıyor. Cepheler dokulu gri sıva ve beyaz yüzeylerle kaplandı; bina köşelerinde ahşap görünümlü kolon kaplamaları, balkonlarda beyaz sıva ve siyah korkuluklar kullanıldı. Bloklar arasında baskı beton bir yürüyüş yolu, iki yanında çim ve genç ağaçlar var.",
          "Dairelerde yerden ısıtma, LED spot aydınlatma ve 60x120 seramik zemin kaplaması bulunuyor. Fotoğraf ve videolar Ekim 2026'da çekildi. Daire seçenekleri için bizi arayabilir ya da WhatsApp'tan yazabilirsiniz.",
          "Galeriye 2026'da çekilen bitmiş blok, bahçe, giriş kapısı ve daire içi fotoğraflarıyla projenin üç boyutlu görselleri eklendi."
        ],
        gallery: [
          dikey("yerleske-02"),
          dikey("yerleske-03"),
          { video: "images/concept-15-v2.mp4", poster: g("concept-15-v2") },
          dikey("concept-15-k1"),
          dikey("concept-15-k2"),
          dikey("yerleske-04"),
          dikey("yerleske-05"),
          { video: "images/yerleske-tur.mp4", poster: g("yerleske-tur") },
          { video: "images/concept-15-v1.mp4", poster: g("concept-15-v1") },
          dikey("yerleske-01"),
          dikey("concept-15-b-01"),
          dikey("concept-15-b-02"),
          dikey("concept-15-b-03"),
          dikey("concept-15-b-04"),
          dikey("concept-15-b-05"),
          dikey("concept-15-b-06"),
          dikey("concept-15-b-07"),
          dikey("concept-15-b-08"),
          dikey("concept-15-b-09"),
          dikey("concept-15-b-10"),
          dikey("concept-15-b-11"),
          dikey("concept-15-b-12"),
          dikey("concept-15-b-13"),
          yatay("concept-15-b-14"),
          yatay("concept-15-b-15"),
          yatay("concept-15-b-16"),
          genis("concept-15-b-17")
        ]
      },
      {
        slug: "concept-12",
        title: "ConcepT 12 Bozacı",
        tagline: "Arifiye Fatih Mahallesi'nde tasarımını ve inşaatını üstlendiğimiz, 3+1 dairelerden oluşan 12 dairelik konut.",
        location: "Fatih Mah., Arifiye / Sakarya",
        year: 2025,
        area: "12 daire · 3+1 · 125 m²",
        category: "Konut",
        status: "Tamamlandı",
        client: "Concept Mimarlık İnşaat",
        durum: "tamamlanan",
        featured: true,
        showcase: true,
        cover: g("c12-bozaci-01"),
        text: [
          "ConcepT 12 Bozacı, Arifiye Fatih Mahallesi'nde tasarımını ve inşaatını kendimiz üstlendiğimiz 12 dairelik konut projemiz. Dairelerin tamamı 3+1 ve 125 m².",
          "Yapı radye temel üzerine C30 betonla inşa edildi. Dairelerde yerden ısıtma, 60x120 seramik zemin kaplaması, salon ve holde gizli ışıklı LED aydınlatma ve ebeveyn banyosu bulunuyor.",
          "Site içinde 450 m² yeşil alan ve baskı beton bir yürüyüş yolu var; açık alanlar çocukların rahatça oynayabileceği şekilde düzenlendi. Cami, okul ve marketler 5 dakikalık yürüme mesafesinde; Arifiye tren garı 7 dakika, büyükşehir terminali 2 km uzaklıkta.",
          "Galeride bitmiş bloklar, bahçe ve daire içleri ile projenin üç boyutlu tasarım görselleri yer alıyor; demir bağlama, kolon, parapet betonu ve baskı beton kareleri şantiyeden alındı."
        ],
        gallery: [
          genis("c12-bozaci-01"),
          yatay("c12-bozaci-02"),
          yatay("c12-bozaci-03"),
          genis("c12-bozaci-04"),
          yatay("c12-bozaci-05"),
          yatay("c12-bozaci-06"),
          genis("c12-bozaci-07"),
          yatay("c12-bozaci-08"),
          yatay("c12-bozaci-09"),
          genis("c12-bozaci-10"),
          yatay("c12-bozaci-11"),
          yatay("c12-bozaci-12"),
          genis("c12-bozaci-13"),
          yatay("c12-bozaci-14"),
          yatay("c12-bozaci-15"),
          genis("c12-bozaci-16"),
          genis("c12-bozaci-17"),
          dikey("concept-12-asama-03"),
          dikey("concept-12-asama-01"),
          dikey("concept-12-asama-02"),
          dikey("concept-12-teslim-01")
        ]
      },
      {
        slug: "sa-villa",
        title: "Karaman Villa",
        tagline: "Karaman'da temelinden havuzuna kadar tüm yapımını üstlendiğimiz villa.",
        location: "Karaman, Sakarya",
        year: 2025,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "Özel",
        durum: "tamamlanan",
        featured: true,
        showcase: true,
        cover: g("karaman-01"),
        text: [
          "Karaman Villa'nın mimari projesi de inşaatı da bize ait. Mimar: Muhammet Sefa Topçu.",
          "Temel C25/30 betonla atıldı; yapı denetim ve laboratuvar kontrolleri yapıldı. Kalıp, kolon, döşeme ve cephe aşamalarının her birini şantiyeden paylaştık.",
          "Gri sıva yüzeyler ahşap görünümlü kaplamayla birlikte kullanıldı. Bahçe duvarı ve havuz da aynı iş kapsamında tamamlandı.",
          "Galeride bitmiş villa ve havuzun yanı sıra cephe ve iç mekânlar için hazırladığımız üç boyutlu görseller de yer alıyor."
        ],
        gallery: [
          genis("karaman-01"),
          dikey("karaman-02"),
          dikey("karaman-03"),
          dikey("karaman-04"),
          dikey("karaman-05"),
          yatay("karaman-06"),
          yatay("karaman-07"),
          dikey("karaman-08"),
          dikey("karaman-09"),
          genis("karaman-10"),
          yatay("karaman-11"),
          yatay("karaman-12"),
          genis("karaman-13"),
          yatay("karaman-14"),
          yatay("karaman-15"),
          genis("karaman-16"),
          yatay("karaman-17"),
          yatay("karaman-18"),
          dikey("sa-villa-02"),
          dikey("sa-villa-03"),
          dikey("sa-villa-04"),
          dikey("sa-villa-05"),
          dikey("sa-villa-06"),
          dikey("sa-villa-01")
        ]
      },
      {
        slug: "goynuklu-omer-usta",
        title: "Göynüklü Ömer Usta",
        tagline: "Konak üslubunda cumbalı cephesi, saat kulesi ve bahçesiyle bir dondurma ve tatlı mekânı.",
        location: "",
        year: 2020,
        area: "",
        category: "Ticari",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Göynüklü Ömer Usta",
        featured: true,
        showcase: false,
        cover: g("goynuklu-01"),
        text: [
          "Göynüklü Ömer Usta için geleneksel konak üslubunda bir yapı ve iç mekân hayata geçirdik. Beyaz sıvalı cephede koyu ahşap çerçeveli pencereler, kemerli cumbalar ve kiremit saçaklar kullanıldı; taş kaplı subasman yapıyı zemine oturtuyor.",
          "Bahçe girişindeki kemerli kapı, desenli karo döşeli bir yürüyüş yolu ve küçük bir saat kulesi ziyaretçiyi karşılıyor. Bahçede oturma alanları ve pergolalar düzenlendi.",
          "İç mekânda cephedeki kemerli pencere motifi tavanda ve duvarlarda tekrar ediyor; vitrinler, turkuaz tezgâhlar, geometrik desenli paneller ve avizelerle bütünlüklü bir tatlıcı mekânı kuruldu."
        ],
        gallery: [
          genis("goynuklu-01"),
          dikey("goynuklu-02"),
          dikey("goynuklu-03"),
          dikey("goynuklu-05"),
          dikey("goynuklu-06"),
          dikey("goynuklu-07"),
          dikey("goynuklu-08"),
          dikey("goynuklu-09"),
          dikey("goynuklu-10"),
          yatay("goynuklu-04"),
          yatay("goynuklu-11"),
          genis("goynuklu-12"),
          yatay("goynuklu-13"),
          yatay("goynuklu-14")
        ]
      },
      {
        slug: "bungalovlar",
        title: "Bungalovlar",
        tagline: "Üçgen çatılı ahşap bungalovlar: havuzlu bahçeler, galeri katlı sıcak iç mekânlar.",
        location: "",
        year: "",
        area: "",
        category: "Bungalov",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Özel",
        featured: true,
        showcase: false,
        cover: g("bungalov-01"),
        text: [
          "Tasarlayıp uyguladığımız bungalovlardan seçmeler. Üçgen (A) çatılı ve kırma çatılı ahşap yapılar, havuzlu küçük bahçeler ve teraslarla birlikte ele alındı.",
          "İç mekânlarda ahşap tavanlar ve galeri katları, şömineler ve geniş camlarla doğaya açılan oturma alanları kuruldu. Galerideki karelerin çoğu bitmiş yapılardan fotoğraf, biri üç boyutlu tasarım görselidir."
        ],
        gallery: [
          genis("bungalov-01"),
          yatay("bungalov-02"),
          yatay("bungalov-04"),
          dikey("bungalov-03"),
          dikey("bungalov-05"),
          dikey("bungalov-06"),
          dikey("bungalov-07"),
          dikey("bungalov-08"),
          dikey("bungalov-09"),
          dikey("bungalov-10"),
          dikey("bungalov-11"),
          genis("bungalov-12"),
          yatay("bungalov-13"),
          yatay("bungalov-14")
        ]
      },
      {
        slug: "lapis-dagtepe",
        title: "Lapis by Dağtepe",
        tagline: "Akyazı'da Dağtepe Tekstil için cam cepheli mağaza ve merkez binası.",
        location: "Ömercikler, Akyazı / Sakarya",
        year: 2021,
        area: "",
        category: "Ticari",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Dağtepe Tekstil",
        featured: false,
        showcase: false,
        cover: g("lapis-y-01"),
        text: [
          "Akyazı Ömercikler Mahallesi'nde Dağtepe Tekstil için yürüttüğümüz Lapis projesi. Binanın dış cephesini ve iç mekânını birlikte ele aldık.",
          "Yola bakan yüzde boydan boya cam cephe, ahşap görünümlü kaplama ve koyu çerçevelerle birlikte kullanıldı; yan cepheler doğal taşla kaplandı.",
          "İç mekânda geniş açıklıklı katlar mermer görünümlü parlak zemin kaplamasıyla tamamlandı."
        ],
        gallery: [
          genis("lapis-y-01"),
          yatay("lapis-y-02"),
          yatay("lapis-y-03"),
          genis("lapis-y-04"),
          dikey("lapis-y-05"),
          dikey("lapis-y-07"),
          yatay("lapis-y-06"),
          yatay("lapis-y-08"),
          genis("lapis-y-09"),
          yatay("lapis-y-10"),
          yatay("lapis-y-12"),
          genis("lapis-y-13"),
          yatay("lapis-y-14"),
          yatay("lapis-03")
        ]
      },
      {
        slug: "sapanca-aqua-hotel",
        title: "Sapanca Aqua Hotel & Spa",
        tagline: "Odaların, banyoların, soyunma alanlarının ve endüstriyel mutfağın tasarımı ve uygulaması.",
        location: "Sapanca / Sakarya",
        year: 2019,
        area: "",
        category: "İç Mekân",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Sapanca Aqua Hotel & Spa",
        featured: false,
        showcase: false,
        cover: g("aqua-y-01"),
        text: [
          "Sapanca Aqua Hotel & Spa'da odaları ve ortak alanları tasarladık, uygulamasını yaptık.",
          "Odalarda gri ve ahşap tonlar gizli aydınlatmayla birlikte kullanıldı; banyolarda büyük ebatlı taş görünümlü seramikler, cam duş bölmeleri ve asma lavabolar var. Aqua Park soyunma alanlarında ahşap kapaklı dolaplar ve doğal taş kaplı duvarlar uygulandı.",
          "Endüstriyel mutfakta paslanmaz tezgâhlar, raf sistemleri ve seramik kaplama yerinde uygulandı."
        ],
        gallery: [
          genis("aqua-y-01"),
          yatay("aqua-y-02"),
          yatay("aqua-y-03"),
          genis("aqua-y-04"),
          yatay("aqua-y-05"),
          yatay("aqua-y-06"),
          genis("aqua-y-07"),
          yatay("aqua-y-08"),
          yatay("aqua-y-10"),
          genis("aqua-y-11"),
          yatay("aqua-y-12"),
          yatay("aqua-y-13"),
          genis("aqua-y-14"),
          genis("aqua-b-01"),
          yatay("aqua-b-02"),
          yatay("aqua-b-03"),
          genis("aqua-b-04"),
          yatay("aqua-b-05"),
          yatay("aqua-b-06"),
          genis("aqua-b-07"),
          yatay("aqua-b-08"),
          yatay("aqua-b-09"),
          genis("aqua-b-10"),
          genis("aqua-b-11")
        ]
      },
      {
        slug: "st-villa",
        title: "S.T Villa",
        tagline: "Sapanca'da havuzlu bahçesiyle beyaz ve antrasit modern villa; yapımı sürüyor.",
        location: "Sapanca / Sakarya",
        year: "",
        area: "",
        category: "Villa",
        status: "Yapım aşamasında",
        durum: "devam",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("st-villa-01"),
        text: [
          "Sapanca'da projesini çizdiğimiz ve inşaatını sürdürdüğümüz villa. Mimar: Muhammet Sefa Topçu.",
          "Beyaz ve antrasit kütleler, ahşap görünümlü kaplamalar ve geniş doğramalar yapıyı bahçeye ve havuza açıyor; tasarım üç boyutlu görsellerle farklı açılardan çalışıldı.",
          "Şantiyede kaba inşaat tamamlandı; cephe kaplaması ve ince işler devam ediyor."
        ],
        gallery: [
          genis("st-villa-01"),
          yatay("st-villa-02"),
          yatay("st-villa-03"),
          genis("st-villa-04"),
          yatay("st-villa-05"),
          yatay("st-villa-06"),
          genis("st-villa-07"),
          dikey("st-villa-08"),
          dikey("st-villa-09"),
          dikey("st-villa-10"),
          dikey("st-villa-11"),
          dikey("st-villa-12"),
          dikey("st-villa-13")
        ]
      },
      {
        slug: "concept-12-neviye",
        title: "ConcepT 12 Neviye",
        tagline: "Arifiye Neviye'de 2+1 ve 3+1 daireli, yapımı süren konut projesi.",
        location: "Neviye, Arifiye / Sakarya",
        year: 2026,
        area: "2+1 ve 3+1 daireler",
        category: "Konut",
        status: "Yapım aşamasında · Satışta",
        durum: "devam",
        client: "Concept Mimarlık İnşaat",
        featured: false,
        showcase: false,
        cover: g("neviye-y-01"),
        text: [
          "ConcepT 12 Neviye, Arifiye Neviye'de inşaatı devam eden konut projemiz. 2+1 ve 3+1 daireler lansman döneminden itibaren satışta.",
          "Üç katlı bloklarda açık ve koyu gri yüzeyler, geniş balkonlar ve kırma çatı bir arada kullanıldı. Ekim 2026 itibarıyla kaba inşaat tamamlandı, çatı kaplaması sürüyor.",
          "Galeride projenin üç boyutlu görselleri ile şantiyeden güncel fotoğraf ve videolar yer alıyor. Güncel durum ve daire seçenekleri için bize ulaşabilirsiniz."
        ],
        gallery: [
          genis("neviye-y-01"),
          yatay("neviye-y-02"),
          yatay("neviye-y-03"),
          genis("neviye-y-04"),
          yatay("neviye-y-05"),
          yatay("neviye-y-06"),
          genis("neviye-y-07"),
          { video: "images/neviye-v1.mp4", poster: g("neviye-v1") },
          dikey("neviye-k1"),
          dikey("neviye-k2"),
          dikey("neviye-03"),
          genis("neviye-y-08")
        ]
      },
      {
        slug: "concept-life-12",
        title: "ConcepT Life 12",
        tagline: "Tasarımını ve inşaatını üstlendiğimiz, yapımı süren iki bloklu konut projemiz.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Yapım aşamasında",
        durum: "devam",
        client: "Concept Mimarlık İnşaat",
        featured: true,
        showcase: false,
        cover: g("life12-01"),
        text: [
          "ConcepT Life 12, tasarımını ve inşaatını üstlendiğimiz, yapımı süren konut projemiz.",
          "Üç boyutlu görsellerde iki blok, beyaz bantlarla ayrılan koyu ve bej cepheler, kırma çatılar ve ortak bahçe görülüyor. Galeride iç mekân görselleri ve kaba inşaat aşamasından fotoğraflar da yer alıyor."
        ],
        gallery: [
          genis("life12-01"),
          yatay("life12-02"),
          yatay("life12-03"),
          genis("life12-04"),
          yatay("life12-05"),
          yatay("life12-06"),
          genis("life12-07"),
          yatay("life12-08"),
          yatay("life12-09"),
          genis("life12-10"),
          dikey("life12-11"),
          dikey("life12-12")
        ]
      },
      {
        slug: "sa-klasik-villa",
        title: "Ş.A Villa",
        tagline: "Sütunlu girişi ve kemerli pencereleriyle klasik çizgide villa; yapımı sürüyor.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Yapım aşamasında",
        durum: "devam",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("sahin-villa-01"),
        text: [
          "Projesini çizdiğimiz ve inşaatını sürdürdüğümüz klasik çizgide bir villa. Mimar: Muhammet Sefa Topçu.",
          "Sütunlu giriş, kemerli pencereler, kat silmeleri ve geniş saçaklarla zengin bir cephe kurgulandı; üç boyutlu görsellerde bahçe ve havuz düzeni de çalışıldı.",
          "Şantiyede kaba inşaat ve dış sıva aşamaları ilerliyor."
        ],
        gallery: [
          genis("sahin-villa-01"),
          yatay("sahin-villa-02"),
          yatay("sahin-villa-03"),
          genis("sahin-villa-04"),
          yatay("sahin-villa-05"),
          yatay("sahin-villa-06"),
          genis("sahin-villa-07"),
          yatay("sahin-villa-08"),
          yatay("sahin-villa-09"),
          dikey("sahin-villa-10"),
          dikey("sahin-villa-11")
        ]
      },
      {
        slug: "galium-sitesi",
        title: "Galium Sitesi",
        tagline: "Kavakoğlu Yapı için tasarladığımız; zemin katı ticari, üç katlı konut sitesi.",
        location: "Sakarya",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Kavakoğlu Yapı",
        featured: false,
        showcase: false,
        cover: g("galium-01"),
        text: [
          "Kavakoğlu Yapı için hazırladığımız Galium Sitesi tasarımı. Üç katlı bloklar sokak boyunca uzanıyor; zemin kat dükkânlara, üst katlar konutlara ayrıldı.",
          "Cephede sıcak gri sıva, koyu taş kaplama ve ahşap tonlu yüzeyler birlikte kullanıldı. Site girişi tabelalı bir kapı yapısıyla tanımlandı; bloklar arasında yeşil alanlar ve otopark düzenlendi.",
          "Görseller projenin üç boyutlu tasarım çalışmasıdır."
        ],
        gallery: [
          genis("galium-01"),
          yatay("galium-02"),
          yatay("galium-03"),
          genis("galium-04"),
          yatay("galium-05"),
          yatay("galium-06"),
          genis("galium-07"),
          yatay("galium-08"),
          yatay("galium-09"),
          genis("galium-10")
        ]
      },
      {
        slug: "ks-villa",
        title: "K.S Villa",
        tagline: "Beyaz cepheli, kemerli ve havuzlu klasik villa.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Özel",
        featured: true,
        showcase: false,
        cover: g("ks-villa-01"),
        text: [
          "Klasik çizgide tasarlayıp tamamladığımız bir villa. Beyaz cephe, kemerli pencereler, koyu kepenkler ve süslemeli kat silmeleri yapıya Akdeniz esintili bir görünüm veriyor.",
          "Bahçede kıvrımlı bir havuz, palmiyeler ve oturma alanları tasarlandı; üç boyutlu görsellerde gündüz ve akşam ışığı birlikte çalışıldı."
        ],
        gallery: [
          genis("ks-villa-01"),
          yatay("ks-villa-02"),
          yatay("ks-villa-03"),
          genis("ks-villa-05"),
          yatay("ks-villa-06"),
          yatay("ks-villa-07"),
          genis("ks-villa-08"),
          genis("ks-villa-09")
        ]
      },
      {
        slug: "alacati-gibi-sapanca",
        title: "Alaçatı Gibi Sapanca",
        tagline: "Rengârenk ahşap kepenkli, taş ve sıva cepheli, havuzlu evler.",
        location: "Sapanca / Sakarya",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "",
        featured: false,
        showcase: false,
        cover: g("alacati-01"),
        text: [
          "Sapanca için tasarladığımız, Alaçatı evlerinden ilham alan bir konut grubu. Her ev farklı renkte ahşap kepenkler ve cumbalarla öne çıkıyor; zemin katlarda taş, üst katlarda beyaz sıva kullanıldı.",
          "Kiremit çatılı evlerin her birinin kendi bahçesi ve havuzu var; kuşbakışı görsellerde yerleşim düzeni de çalışıldı."
        ],
        gallery: [
          genis("alacati-01"),
          yatay("alacati-02"),
          yatay("alacati-03"),
          genis("alacati-04"),
          yatay("alacati-05"),
          yatay("alacati-06"),
          genis("alacati-07"),
          yatay("alacati-08"),
          yatay("alacati-09"),
          genis("alacati-10"),
          genis("alacati-11")
        ]
      },
      {
        slug: "mt-tanta-is-merkezi",
        title: "M.T Tanta İş Merkezi",
        tagline: "Sapanca'da taş kaplamalı, yuvarlak pencereli, zemin katı ticari üç katlı yapı.",
        location: "Sapanca / Sakarya",
        year: 2021,
        area: "",
        category: "Ticari",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "",
        featured: true,
        showcase: false,
        cover: g("mt-tanta-01"),
        text: [
          "Sapanca'daki M.T Tanta İş Merkezi'nin mimarlığını ve yapımını üstlendik. Mimar: Muhammet Sefa Topçu.",
          "Cephede doğal taş kaplama, beyaz söveler, kemerli balkonlar ve yuvarlak pencereler kullanıldı; zemin kat yola açılan dükkânlara ayrıldı.",
          "Galeride üç boyutlu tasarım görselleri, iç mekân çalışmaları ve temelden cepheye yapım aşamaları birlikte yer alıyor."
        ],
        gallery: [
          genis("mt-tanta-01"),
          yatay("mt-tanta-02"),
          yatay("mt-tanta-03"),
          genis("mt-tanta-04"),
          yatay("mt-tanta-05"),
          yatay("mt-tanta-06"),
          genis("mt-tanta-07"),
          yatay("mt-tanta-08"),
          yatay("mt-tanta-09"),
          genis("mt-tanta-10"),
          yatay("mt-tanta-11"),
          yatay("mt-tanta-12"),
          genis("mt-tanta-13"),
          yatay("mt-tanta-14"),
          yatay("mt-tanta-15"),
          genis("ct-01")
        ]
      },
      {
        slug: "kokumer-villalari",
        title: "Kökümer Villaları",
        tagline: "Serdivan'da doğal taş kaplamalı, silindirik kuleli villalar.",
        location: "Serdivan / Sakarya",
        year: 2021,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Özel",
        featured: true,
        showcase: false,
        cover: g("kokumer-y-01"),
        text: [
          "Kökümer Villaları'nın inşaatını ve cephe uygulamasını yürüttük. Mimar: Muhammet Sefa Topçu.",
          "Cephede doğal taş kaplama, ahşap görünümlü paneller ve koyu saçak bir arada kullanıldı; köşedeki silindirik kule yapının imzası oldu. Cephe altyapısında şase, bordex ve betopan uygulandı.",
          "Galeride üç boyutlu tasarım görselleri ile şantiyeden ve bitmiş yapıdan fotoğraflar birlikte yer alıyor."
        ],
        gallery: [
          genis("kokumer-y-01"),
          dikey("kokumer-y-02"),
          dikey("kokumer-y-03"),
          yatay("kokumer-y-05"),
          yatay("kokumer-y-06"),
          genis("kokumer-y-07"),
          dikey("kokumer-y-04"),
          dikey("kokumer-y-08"),
          yatay("kokumer-y-10"),
          yatay("kokumer-y-11"),
          dikey("kokumer-y-09"),
          dikey("kokumer-03")
        ]
      },
      {
        slug: "ns-villa",
        title: "N.S Villa",
        tagline: "Esentepe'de taş ve sıva cepheli, kemerli pencereli, havuzlu villa.",
        location: "Esentepe, Serdivan / Sakarya",
        year: 2020,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Özel",
        featured: true,
        showcase: false,
        cover: g("ns-villa-02"),
        text: [
          "Serdivan Esentepe'de tasarladığımız ve inşa ettiğimiz villa. Mimar: Muhammet Sefa Topçu.",
          "Kemerli pencereler, taş ve sıva yüzeyler, koyu renkli çatı ve saçaklar klasik bir villa dili kuruyor; bahçede havuz ve yürüyüş yolları düzenlendi.",
          "Galeride üç boyutlu tasarım görselleri, ahşap çatı ve cephe aşamaları ile bitmiş yapıdan bir fotoğraf yer alıyor."
        ],
        gallery: [
          genis("ns-villa-01"),
          yatay("ns-villa-03"),
          yatay("ns-villa-04"),
          genis("ns-villa-05"),
          yatay("ns-villa-06"),
          yatay("ns-villa-07"),
          genis("ns-villa-08"),
          yatay("ns-villa-09"),
          yatay("ns-villa-10")
        ]
      },
      {
        slug: "yazlik-konutlari",
        title: "Yazlık Villa",
        tagline: "Serdivan Yazlık'ta taş kaplamalı cephesi ve özenli iç mekânlarıyla tamamladığımız villa.",
        location: "Yazlık, Serdivan / Sakarya",
        year: 2026,
        area: "",
        category: "Konut",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "",
        featured: false,
        showcase: false,
        cover: g("yazlik-k1"),
        text: [
          "Serdivan Yazlık'ta tamamladığımız villa. Zemin katta koyu renkli doğal taş kaplama, üst katlarda gri sıva ve koyu doğramalar kullanıldı.",
          "İç mekânlarda duvar çıtaları ve kristal avizelerle klasik bir hava kuruldu; banyolarda siyah mermer görünümlü kaplamalar altın rengi armatürlerle birlikte kullanıldı.",
          "Galeride projenin üç boyutlu görselleri, iskele ve sıva aşamaları ile bitmiş yapının fotoğraf ve videoları (Ekim 2026) yer alıyor."
        ],
        gallery: [
          genis("yazlik-villa-01"),
          yatay("yazlik-villa-02"),
          yatay("yazlik-villa-03"),
          genis("yazlik-villa-04"),
          yatay("yazlik-villa-05"),
          yatay("yazlik-villa-06"),
          genis("yazlik-villa-07"),
          dikey("yazlik-villa-08"),
          dikey("yazlik-villa-09"),
          dikey("yazlik-villa-10"),
          dikey("yazlik-villa-11"),
          dikey("yazlik-villa-12"),
          dikey("yazlik-villa-13"),
          { video: "images/yazlik-v1.mp4", poster: g("yazlik-v1") },
          dikey("yazlik-k1"),
          dikey("yazlik-k2"),
          dikey("yazlik-k6"),
          dikey("yazlik-k3"),
          dikey("yazlik-k5"),
          { video: "images/yazlik-v2.mp4", poster: g("yazlik-v2") },
          dikey("yazlik-k4")
        ]
      },
      {
        slug: "erenler-cesmesi",
        title: "Erenler Çeşmesi",
        tagline: "Erenler'de oyma sütun başlıkları ve kemerli mermer nişleriyle uyguladığımız çeşme.",
        location: "Erenler / Sakarya",
        year: "",
        area: "",
        category: "Çeşme",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "",
        featured: false,
        showcase: false,
        cover: g("erenler-cesme-01"),
        text: [
          "Erenler'de uyguladığımız çeşme. Koyu renkli oyma sütunlar ve başlıklar, kemerli mermer nişler ve musluklarla klasik bir çizgide tasarlandı.",
          "Saçak altında desenli koyu bir tavan, gizli şerit aydınlatma ve kubbeli bir çatı bulunuyor."
        ],
        gallery: [
          dikey("erenler-cesme-01"),
          dikey("erenler-cesme-02"),
          dikey("erenler-cesme-03"),
          dikey("erenler-cesme-04")
        ]
      },
      {
        slug: "kuzuluk-mustakil-villa",
        title: "Kuzuluk Müstakil Villa",
        tagline: "Akyazı Kuzuluk'ta havuzu, kemerli kameriyesi ve bahçe yapılarıyla müstakil villa.",
        location: "Kuzuluk, Akyazı / Sakarya",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım ve uygulama",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("kuzuluk-01"),
        text: [
          "Kuzuluk'ta müstakil bir villa ve bahçesi için hazırladığımız tasarım ve uygulama çalışması.",
          "Üç boyutlu görsellerde havuz, kameriye ve tuğla kaplı bahçe yapıları; fotoğraflarda havuzun, kilit taşı yolların ve çim bahçenin uygulaması yer alıyor."
        ],
        gallery: [
          genis("kuzuluk-01"),
          yatay("kuzuluk-02"),
          yatay("kuzuluk-03"),
          genis("kuzuluk-04"),
          yatay("kuzuluk-05"),
          yatay("kuzuluk-06"),
          genis("kuzuluk-07"),
          yatay("kuzuluk-08"),
          yatay("kuzuluk-09"),
          genis("kuzuluk-10"),
          dikey("kuzuluk-11"),
          dikey("kuzuluk-12"),
          dikey("kuzuluk-13"),
          dikey("kuzuluk-14")
        ]
      },
      {
        slug: "mahmudiye-koy-evi",
        title: "Mahmudiye Köy Evi",
        tagline: "Ahşap kirişli tavanları ve geniş camlarıyla iki katlı köy evi.",
        location: "Mahmudiye",
        year: "",
        area: "",
        category: "Konut",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("mahmudiye-01"),
        text: [
          "Mahmudiye'de yaptığımız köy evi. İki katlı yapının cephesi sade tutuldu; üst kattaki geniş cam yüzeyler ve saçak manzaraya açılıyor.",
          "İç mekânda tavanlar ahşap kirişlerle kaplandı; zeminlerde parlak gri seramik, banyolarda taş görünümlü kaplamalar kullanıldı."
        ],
        gallery: [
          dikey("mahmudiye-01"),
          dikey("mahmudiye-02"),
          dikey("mahmudiye-03"),
          dikey("mahmudiye-04"),
          dikey("mahmudiye-05"),
          dikey("mahmudiye-06"),
          dikey("mahmudiye-07"),
          dikey("mahmudiye-08"),
          dikey("mahmudiye-09"),
          dikey("mahmudiye-10")
        ]
      },
      {
        slug: "ma-villa",
        title: "M.A Villa",
        tagline: "Akyazı'da görselinden şantiyesine, taş kaplamasından bitmiş cephesine kadar yaptığımız villa.",
        location: "Akyazı / Sakarya",
        year: 2020,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("ma-villa-y-01"),
        text: [
          "M.A Villa'yı önce üç boyutlu görsellerle tasarladık, ardından Akyazı'daki şantiyesini yürüttük.",
          "Antrasit ve beyaz yüzeyler, köşelerde doğal taş kaplama ve geniş balkonlarla iki katlı bir villa kuruldu; uygulama tasarımla aynı çizgide ilerledi.",
          "Galeride temel demirinden kaba inşaata, taş kaplamadan bitmiş cepheye kadar yapım aşamaları yer alıyor."
        ],
        gallery: [
          genis("ma-villa-y-01"),
          yatay("ma-villa-y-02"),
          yatay("ma-villa-y-03"),
          genis("ma-villa-y-04"),
          yatay("ma-villa-y-05"),
          yatay("ma-villa-y-06"),
          genis("ma-villa-y-08"),
          yatay("ma-villa-y-09"),
          yatay("ma-villa-01"),
          genis("ma-villa-03")
        ]
      },
      {
        slug: "yazlik-ikiz-villalar",
        title: "Yazlık İkiz Villalar",
        tagline: "Ahşap ve antrasit dokulu, sıra hâlinde ikiz villalar tasarımı.",
        location: "Yazlık, Serdivan / Sakarya",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "",
        featured: false,
        showcase: false,
        cover: g("yazlik-ikiz-01"),
        text: [
          "Serdivan Yazlık'ta sıra hâlinde dizilen ikiz villalar için hazırladığımız tasarım. Beyaz ve antrasit kütleler, ahşap görünümlü kaplamalar ve geniş balkonlar bir arada kullanıldı.",
          "Vaziyet planında villaların sokak boyunca yerleşimi, bahçeleri ve otoparkları çalışıldı."
        ],
        gallery: [
          genis("yazlik-ikiz-01"),
          yatay("yazlik-ikiz-02"),
          yatay("yazlik-ikiz-03"),
          genis("yazlik-ikiz-04"),
          yatay("yazlik-ikiz-05"),
          yatay("yazlik-ikiz-06"),
          genis("yazlik-ikiz-07"),
          yatay("yazlik-ikiz-08"),
          yatay("yazlik-ikiz-09"),
          genis("yazlik-ikiz-10"),
          genis("yazlik-ikiz-11")
        ]
      },
      {
        slug: "yazlik-6-villa",
        title: "Yazlık 6 Villa",
        tagline: "Kiremit çatılı, havuzlu altı villadan oluşan site tasarımı.",
        location: "Yazlık, Serdivan / Sakarya",
        year: "",
        area: "6 villa",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "",
        featured: false,
        showcase: false,
        cover: g("yazlik-6-villa-01"),
        text: [
          "Serdivan Yazlık'ta altı villadan oluşan bir site için hazırladığımız tasarım. Kiremit kırma çatılı iki katlı villalar beyaz ve antrasit yüzeylerle tasarlandı.",
          "Her villanın kendi bahçesi ve havuzu var; vaziyet planında villaların parsele yerleşimi, otopark ve yeşil alanlar birlikte çalışıldı."
        ],
        gallery: [
          genis("yazlik-6-villa-01"),
          yatay("yazlik-6-villa-02"),
          yatay("yazlik-6-villa-03"),
          genis("yazlik-6-villa-04"),
          yatay("yazlik-6-villa-05"),
          yatay("yazlik-6-villa-06"),
          genis("yazlik-6-villa-07"),
          yatay("yazlik-6-villa-08"),
          yatay("yazlik-6-villa-09"),
          genis("yazlik-6-villa-10")
        ]
      },
      {
        slug: "neviye-villa",
        title: "Neviye Villa",
        tagline: "Havuzlu bahçesiyle beyaz ve antrasit modern villa tasarımı.",
        location: "Neviye, Arifiye / Sakarya",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("neviye-villa-01"),
        text: [
          "Arifiye Neviye'de bir villa için hazırladığımız tasarım. Beyaz ve antrasit yüzeyler, geniş teraslar ve cam korkuluklar yapıyı bahçeye ve havuza açıyor.",
          "Kuşbakışı görsellerde yapının arsaya yerleşimi, bahçe ve havuz düzeni de çalışıldı."
        ],
        gallery: [
          genis("neviye-villa-01"),
          yatay("neviye-villa-02"),
          yatay("neviye-villa-03"),
          genis("neviye-villa-04"),
          yatay("neviye-villa-05"),
          yatay("neviye-villa-06"),
          genis("neviye-villa-07"),
          genis("neviye-villa-08")
        ]
      },
      {
        slug: "hendek-villa",
        title: "Hendek Villa",
        tagline: "Koyu cepheli, beyaz söveli ve kemerli pencereli villa tasarımı.",
        location: "Hendek / Sakarya",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("hendek-villa-01"),
        text: [
          "Sakarya Hendek'te bir villa için hazırladığımız tasarım. Koyu renkli cephe, beyaz söveler ve kemerli büyük pencerelerle klasik ve modern çizgiler bir araya getirildi.",
          "Giriş merdiveni, peyzaj ve gece aydınlatması üç boyutlu görsellerle birlikte çalışıldı."
        ],
        gallery: [
          genis("hendek-villa-01"),
          yatay("hendek-villa-02"),
          yatay("hendek-villa-03"),
          genis("hendek-villa-04"),
          yatay("hendek-villa-05"),
          yatay("hendek-villa-06"),
          genis("hendek-villa-07"),
          genis("hendek-villa-08")
        ]
      },
      {
        slug: "esme-villa",
        title: "Eşme Villa",
        tagline: "Havuzlu bahçesiyle iki katlı modern villa tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("esme-villa-01"),
        text: [
          "Eşme Villa için hazırladığımız mimari proje ve üç boyutlu görseller. Antrasit ve taş yüzeyler, geniş balkonlar ve doğramalarla iki katlı modern bir villa kurgulandı.",
          "Kuşbakışı görsellerde yapının arsaya ve çevresindeki yollara göre yerleşimi de çalışıldı."
        ],
        gallery: [
          genis("esme-villa-01"),
          yatay("esme-villa-02"),
          yatay("esme-villa-03"),
          genis("esme-villa-04"),
          yatay("esme-villa-05"),
          yatay("esme-villa-06"),
          genis("esme-villa-07")
        ]
      },
      {
        slug: "akarca-villa",
        title: "Akarca Villa",
        tagline: "Taş kaplama ve geniş camlı cepheleriyle iki katlı modern villa tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("akarca-01"),
        text: [
          "Akarca Villa için hazırladığımız mimari proje ve üç boyutlu görseller. Taş kaplı dikey yüzeyler, geniş cam doğramalar ve yuvarlak bir pencere iki katlı yapının cephesini belirliyor."
        ],
        gallery: [
          genis("akarca-01"),
          genis("akarca-02")
        ]
      },
      {
        slug: "akif-is-yeri",
        title: "Akif M. İş Yeri",
        tagline: "Cam cepheli mağaza ve depo binasından oluşan iş yeri tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Ticari",
        status: "Tasarım",
        durum: "",
        client: "",
        featured: false,
        showcase: false,
        cover: g("akif-01"),
        text: [
          "Akif M. için tasarladığımız iş yeri. Köşe parselde cam cepheli, iki katlı bir mağaza binası ile koyu cepheli bir depo binası bir arada kurgulandı."
        ],
        gallery: [
          genis("akif-01"),
          yatay("akif-02"),
          yatay("akif-03")
        ]
      },
      {
        slug: "apart-serdivan",
        title: "Apart Serdivan",
        tagline: "Zemin katında kafe bulunan, taş ve ahşap cepheli apart yapı tasarımı.",
        location: "Serdivan / Sakarya",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("apart-serdivan-01"),
        text: [
          "Serdivan'da apart daireler için hazırladığımız tasarım. Üst katlarda taş ve ahşap kaplamalı cepheler ile geniş balkonlar, zemin katta şemsiyeli oturma alanı olan bir kafe yer alıyor."
        ],
        gallery: [
          genis("apart-serdivan-01"),
          yatay("apart-serdivan-02"),
          yatay("apart-serdivan-03")
        ]
      },
      {
        slug: "art-serdivan",
        title: "Art Serdivan",
        tagline: "Ortak avlu çevresinde bloklardan oluşan, A çerçeveli giriş köprüleriyle konut sitesi tasarımı.",
        location: "Serdivan / Sakarya",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("art-serdivan-01"),
        text: [
          "Serdivan'da çok bloklu bir konut sitesi için hazırladığımız tasarım.",
          "Beyaz, antrasit ve ahşap yüzeyli bloklar ortak bir avlu çevresinde sıralanıyor; girişler A biçimli çerçevelerle taşınan, üstü yeşil köprülerle vurgulandı. Kuşbakışı görsellerde blokların arsaya yerleşimi de çalışıldı."
        ],
        gallery: [
          genis("art-serdivan-01"),
          yatay("art-serdivan-02"),
          yatay("art-serdivan-03"),
          genis("art-serdivan-04"),
          yatay("art-serdivan-05"),
          yatay("art-serdivan-06"),
          genis("art-serdivan-07"),
          yatay("art-serdivan-08"),
          yatay("art-serdivan-09"),
          genis("art-serdivan-10"),
          genis("art-serdivan-11")
        ]
      },
      {
        slug: "bsahin-at-ciftligi",
        title: "B.Şahin At Çiftliği",
        tagline: "Ahşap konutlar, ahır ve binicilik alanından oluşan at çiftliği tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Çiftlik",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("bsahin-01"),
        text: [
          "B.Şahin At Çiftliği için hazırladığımız yerleşim ve yapı tasarımı. Ormanlık bir arazide ahşap ve tuğla yüzeyli konutlar, ahır ve yuvarlak bir binicilik alanı birlikte kurgulandı."
        ],
        gallery: [
          genis("bsahin-01"),
          yatay("bsahin-02"),
          yatay("bsahin-03"),
          genis("bsahin-04"),
          genis("bsahin-05")
        ]
      },
      {
        slug: "bahcecik-villa",
        title: "Bahçecik Villa",
        tagline: "Kocaeli Bahçecik'te villalardan oluşan site projesi: Villa Liva Bahçecik.",
        location: "Bahçecik, Kocaeli",
        year: 2020,
        area: "",
        category: "Villa",
        status: "Tasarım",
        client: "Özel",
        durum: "",
        featured: false,
        showcase: false,
        cover: g("bahcecik-b-01"),
        text: [
          "Kocaeli Bahçecik'te tasarladığımız villa. Proje 2018'de başladı; görseller 2020'de güncellendi.",
          "Tuğla yüzeyler, beyaz saçak ve koyu doğramalar bir arada kullanıldı. Tasarım, bahçe düzenlemesiyle birlikte farklı açılardan görselleştirildi.",
          "Sitenin tamamı için hazırlanan görsellerde giriş kapısı, havuzlu ortak bahçe, oyun alanı ve sıra villalar birlikte görülüyor."
        ],
        gallery: [
          genis("bahcecik-b-01"),
          yatay("bahcecik-b-02"),
          yatay("bahcecik-b-03"),
          genis("bahcecik-b-04"),
          yatay("bahcecik-b-05"),
          yatay("bahcecik-b-06"),
          genis("bahcecik-b-07"),
          yatay("bahcecik-b-08"),
          yatay("bahcecik-b-09"),
          genis("bahcecik-b-10"),
          yatay("bahcecik-b-11"),
          yatay("bahcecik-b-12"),
          genis("bahcecik-b-13"),
          yatay("bahcecik-b-14"),
          yatay("bahcecik-b-15"),
          genis("bahcecik-01"),
          yatay("bahcecik-02"),
          yatay("bahcecik-03"),
          genis("bahcecik-04")
        ]
      },
      {
        slug: "ba-villa",
        title: "B.A Villa",
        tagline: "Yamaca kademeli yerleşen üç yapıdan oluşan, beyaz cepheli klasik villa tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: true,
        showcase: false,
        cover: g("ba-villa-01"),
        text: [
          "B.A Villa için hazırladığımız mimari proje ve üç boyutlu görseller.",
          "Yamaca kademeli olarak yerleşen üç beyaz yapı, sütunlu cepheler ve korkuluklu teraslarla klasik bir çizgide tasarlandı. Gece görsellerinde cephe ve bahçe aydınlatması da çalışıldı."
        ],
        gallery: [
          genis("ba-villa-01"),
          yatay("ba-villa-02"),
          yatay("ba-villa-03"),
          genis("ba-villa-04"),
          yatay("ba-villa-05"),
          yatay("ba-villa-06"),
          genis("ba-villa-07"),
          yatay("ba-villa-08"),
          yatay("ba-villa-09"),
          genis("ba-villa-10"),
          yatay("ba-villa-11"),
          yatay("ba-villa-12"),
          genis("ba-villa-13")
        ]
      },
      {
        slug: "beskopru",
        title: "Beşköprü",
        tagline: "Havuzlu peyzajıyla çok katlı konut tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("beskopru-01"),
        text: [
          "Beşköprü için hazırladığımız konut tasarımı. Yapılar, kademeli bir havuz ve peyzaj düzenlemesiyle birlikte görselleştirildi."
        ],
        gallery: [
          genis("beskopru-01"),
          genis("beskopru-02")
        ]
      },
      {
        slug: "beyler-park",
        title: "Beyler Park",
        tagline: "Ortak avlu çevresinde kırma çatılı bloklardan oluşan konut projesi tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("beyler-park-01"),
        text: [
          "Beyler Park için hazırladığımız konut projesi. Gri ve ahşap tonlu cepheli bloklar, kırma çatılarla örtülü ve ortak bir avlu çevresinde konumlandı.",
          "Gece ışığında hazırlanan görsellerde bahçe yolları, otopark ve kuşbakışı yerleşim de çalışıldı."
        ],
        gallery: [
          genis("beyler-park-01"),
          yatay("beyler-park-02"),
          yatay("beyler-park-03"),
          genis("beyler-park-04"),
          yatay("beyler-park-05"),
          yatay("beyler-park-06"),
          genis("beyler-park-07"),
          yatay("beyler-park-08"),
          yatay("beyler-park-09"),
          genis("beyler-park-10"),
          yatay("beyler-park-11"),
          yatay("beyler-park-12"),
          genis("beyler-park-13")
        ]
      },
      {
        slug: "beyler-bey",
        title: "Beyler Bey",
        tagline: "Zemin katı dükkânlı, üç katlı konut bloğu tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("beyler-bey-01"),
        text: [
          "Beyler Bey için hazırladığımız konut tasarımı. Zemin katta cam cepheli dükkânlar, üst katlarda beyaz ve antrasit yüzeylerle balkonlu daireler yer alıyor."
        ],
        gallery: [
          genis("beyler-bey-01"),
          yatay("beyler-bey-02"),
          yatay("beyler-bey-03"),
          genis("beyler-bey-04"),
          yatay("beyler-bey-05"),
          yatay("beyler-bey-06"),
          genis("beyler-bey-07"),
          yatay("beyler-bey-08"),
          yatay("beyler-bey-09"),
          genis("beyler-bey-10"),
          yatay("beyler-bey-11"),
          yatay("beyler-bey-12")
        ]
      },
      {
        slug: "bn-villa",
        title: "BN Villa",
        tagline: "Taş ve ahşap kaplamalı, teraslı villa tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("bn-villa-01"),
        text: [
          "BN Villa için hazırladığımız tasarım. Taş kaplı alt kat, ahşap dikey çıtalar ve geniş teraslar eğimli bahçeyle birlikte kurgulandı."
        ],
        gallery: [
          genis("bn-villa-01")
        ]
      },
      {
        slug: "cs-villa",
        title: "C.S Villa",
        tagline: "Ahşap ve taş detaylı, iki katlı modern villa tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("cs-villa-01"),
        text: [
          "C.S Villa için hazırladığımız tasarım. Antrasit çatı ve doğramalar, ahşap ve taş yüzeyler ile geniş camlı bir zemin kat bir arada kullanıldı."
        ],
        gallery: [
          genis("cs-villa-01"),
          yatay("cs-villa-02"),
          yatay("cs-villa-03")
        ]
      },
      {
        slug: "corner",
        title: "Corner",
        tagline: "Kavisli köşeleri ve dikey çıtalı cepheleriyle konut sitesi tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("corner-01"),
        text: [
          "Corner için hazırladığımız konut sitesi tasarımı. Kavisli köşeler, beyaz dikey çıtalar ve ahşap balkon yüzeyleri blokların karakterini oluşturuyor; kuşbakışı görselde sitenin yerleşimi görülüyor."
        ],
        gallery: [
          genis("corner-01"),
          yatay("corner-02"),
          yatay("corner-03"),
          genis("corner-04"),
          yatay("corner-05"),
          yatay("corner-06"),
          genis("corner-07"),
          genis("corner-08")
        ]
      },
      {
        slug: "dizayn",
        title: "Dizayn",
        tagline: "Ahşap ve gri panelli cepheleriyle köşe parselde konut sitesi tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("dizayn-01"),
        text: [
          "Dizayn için hazırladığımız konut sitesi. Ahşap görünümlü ve gri panelli cepheler, cam korkuluklu balkonlar ve koyu saçaklar bir arada kullanıldı.",
          "Görsellerde gece ve gündüz ışığıyla sokak cepheleri, giriş ve kuşbakışı yerleşim çalışıldı."
        ],
        gallery: [
          genis("dizayn-01"),
          yatay("dizayn-02"),
          yatay("dizayn-03"),
          genis("dizayn-04"),
          yatay("dizayn-05"),
          yatay("dizayn-06"),
          genis("dizayn-07"),
          yatay("dizayn-08"),
          yatay("dizayn-09"),
          genis("dizayn-10"),
          yatay("dizayn-11"),
          yatay("dizayn-12"),
          genis("dizayn-13")
        ]
      },
      {
        slug: "dugun-salonu",
        title: "Düğün Salonu",
        tagline: "Salon, gelin odası ve mescidiyle düğün salonu iç mekân tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "İç Mekân",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("dugun-salonu-01"),
        text: [
          "Bir düğün salonu için hazırladığımız iç mekân tasarımı. Tuğla ve ahşap yüzeyler, dikey bahçe duvarları ve asma bitkilerle salon, gelin odası, giriş holü ve mescit birlikte tasarlandı."
        ],
        gallery: [
          genis("dugun-salonu-01"),
          yatay("dugun-salonu-02"),
          yatay("dugun-salonu-03"),
          genis("dugun-salonu-04"),
          yatay("dugun-salonu-05"),
          yatay("dugun-salonu-06"),
          genis("dugun-salonu-07"),
          genis("dugun-salonu-08")
        ]
      },
      {
        slug: "em-dagdibi",
        title: "E.M Dağdibi",
        tagline: "Kavisli balkonlu, üç katlı konut tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("em-dagdibi-01"),
        text: [
          "E.M Dağdibi için hazırladığımız konut tasarımı. Kavisli beyaz balkonlar, ahşap görünümlü paneller ve cam korkuluklar cepheyi belirliyor."
        ],
        gallery: [
          genis("em-dagdibi-01"),
          yatay("em-dagdibi-02"),
          yatay("em-dagdibi-03"),
          genis("em-dagdibi-04"),
          yatay("em-dagdibi-05"),
          yatay("em-dagdibi-06")
        ]
      },
      {
        slug: "ecolak-villa",
        title: "E.Çolak Villa",
        tagline: "Kemerli pencereli, tuğla ve gri yüzeyli iki katlı villa tasarımı ve iç mekânları.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("ecolak-01"),
        text: [
          "E.Çolak Villa için hazırladığımız mimari proje ve üç boyutlu görseller. Kemerli yüksek pencereler, tuğla ve gri yüzeyler ve koyu çatı saçağı bir arada kullanıldı.",
          "Galeride villanın salon, yemek alanı ve yatak odası için hazırlanan iç mekân görselleri de yer alıyor."
        ],
        gallery: [
          genis("ecolak-01"),
          yatay("ecolak-02"),
          yatay("ecolak-03"),
          genis("ecolak-04"),
          yatay("ecolak-05"),
          yatay("ecolak-06"),
          genis("ecolak-07"),
          yatay("ecolak-08"),
          yatay("ecolak-09")
        ]
      },
      {
        slug: "muti-villa",
        title: "Muti Villa",
        tagline: "Taş kaplamalı, mavi korkuluklu ve havuzlu villa tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("muti-01"),
        text: [
          "Muti Villa için hazırladığımız tasarım. Taş kaplı cepheler, mavi demir korkuluklar, ahşap pergolalar ve havuzlu bir bahçe bir arada kurgulandı."
        ],
        gallery: [
          genis("muti-01"),
          yatay("muti-02"),
          yatay("muti-03"),
          genis("muti-04")
        ]
      },
      {
        slug: "e12",
        title: "E.12",
        tagline: "Klasik söveli cepheleri ve desenli balkon korkuluklarıyla konut tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("e12-01"),
        text: [
          "E.12 için hazırladığımız konut tasarımı. Klasik söveler ve silmeler, desenli balkon korkulukları ve kırma çatıyla geleneksel bir cephe kurgulandı."
        ],
        gallery: [
          genis("e12-01"),
          yatay("e12-02"),
          yatay("e12-03"),
          genis("e12-04"),
          yatay("e12-05"),
          yatay("e12-06"),
          genis("e12-07"),
          yatay("e12-08"),
          yatay("e12-09")
        ]
      },
      {
        slug: "ein",
        title: "E.İN",
        tagline: "Zemin katı dükkânlı, bloklardan oluşan konut projesi tasarımı.",
        location: "",
        year: "",
        area: "",
        category: "Konut",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("ein-01"),
        text: [
          "E.İN için hazırladığımız konut projesi. Taş ve ahşap dokulu cepheler, zemin katta dükkânlar ve bloklar arasında bahçeler yer alıyor; kuşbakışı görsellerde yerleşim çalışıldı.",
          "Galeride dairelerin salon ve yatak odası için hazırlanan iç mekân görselleri de bulunuyor."
        ],
        gallery: [
          genis("ein-01"),
          yatay("ein-02"),
          yatay("ein-03"),
          genis("ein-04"),
          yatay("ein-05"),
          yatay("ein-06"),
          genis("ein-07"),
          yatay("ein-08"),
          yatay("ein-09"),
          genis("ein-10"),
          genis("ein-11")
        ]
      },
      {
        slug: "erenler-ofis",
        title: "Erenler Ofis",
        tagline: "Ahşap ve cam cepheli, dört katlı ofis binası tasarımı.",
        location: "Erenler / Sakarya",
        year: "",
        area: "",
        category: "Ticari",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("erenler-ofis-01"),
        text: [
          "Erenler'de bir ofis binası için hazırladığımız tasarım. Ahşap görünümlü yatay çıtalar, cam cepheler ve dikey bir kule elemanı yapının sokak cephesini oluşturuyor."
        ],
        gallery: [
          dikey("erenler-ofis-01"),
          yatay("erenler-ofis-02"),
          yatay("erenler-ofis-03"),
          yatay("erenler-ofis-04")
        ]
      },
      {
        slug: "esentepe-villa",
        title: "Esentepe Villa",
        tagline: "Eğimli arazide teraslı ve havuzlu modern villa tasarımı.",
        location: "Esentepe, Serdivan / Sakarya",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        durum: "",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("esentepe-01"),
        text: [
          "Esentepe'de bir villa için hazırladığımız tasarım. Eğimli araziye kademeli oturan kütleler, geniş teraslar ve havuz gece ve gündüz ışığıyla görselleştirildi."
        ],
        gallery: [
          genis("esentepe-01"),
          yatay("esentepe-02"),
          yatay("esentepe-03"),
          genis("esentepe-04"),
          yatay("esentepe-05"),
          yatay("esentepe-06"),
          genis("esentepe-07"),
          yatay("esentepe-08"),
          yatay("esentepe-09")
        ]
      },
      {
        slug: "world-of-bakery",
        title: "World of Bakery",
        tagline: "Serdivan'da klasik çizgili vitrini ve iç mekânıyla bir pastane.",
        location: "Serdivan / Sakarya",
        year: 2021,
        area: "",
        category: "Ticari",
        status: "Tamamlandı",
        client: "World of Bakery",
        durum: "tamamlanan",
        featured: false,
        showcase: false,
        cover: g("bakery-01"),
        text: [
          "Serdivan'daki World of Bakery'nin dış cephe ve iç mekân uygulaması. Beyaz, çıtalı vitrin mekâna klasik bir pastane kimliği veriyor.",
          "İç mekânda aydınlatma, tezgâh ve oturma alanı aynı çizgide tasarlandı ve yerinde uygulandı."
        ],
        gallery: [
          dikey("bakery-02"),
          dikey("bakery-03"),
          dikey("bakery-04"),
          dikey("bakery-01")
        ]
      },
      {
        slug: "akyazi-villa",
        title: "Akyazı Villa",
        tagline: "Akyazı Topağaç'ta antrasit cepheli, iki katlı müstakil ev.",
        location: "Topağaç, Akyazı / Sakarya",
        year: 2021,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "Özel",
        durum: "tamamlanan",
        featured: false,
        showcase: false,
        cover: g("akyazi-villa-02"),
        text: [
          "Akyazı Topağaç'taki bu villanın projesi ve yapımı firmamıza ait. Mimar: Muhammet Sefa Topçu.",
          "Antrasit sıva, beyaz söveler ve geniş balkonla sade bir cephe kuruldu."
        ],
        gallery: [
          dikey("akyazi-villa-01"),
          dikey("akyazi-villa-03")
        ]
      },
      {
        slug: "na-villa",
        title: "N.A Villa",
        tagline: "Esentepe'de geniş bir bahçenin içinde müstakil villa.",
        location: "Esentepe, Serdivan / Sakarya",
        year: 2021,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "Özel",
        durum: "tamamlanan",
        featured: false,
        showcase: false,
        cover: g("na-villa-02"),
        text: [
          "Serdivan Esentepe'de, geniş bir bahçenin içine yerleşen villa. Kalıp aşamasından cepheye kadar inşaat sürecini biz yürüttük.",
          "Yapı, bahçedeki yürüyüş yolları ve peyzajla birlikte ele alındı."
        ],
        gallery: [
          genis("na-villa-02"),
          genis("na-villa-03")
        ]
      },
      {
        slug: "zt-tekstil",
        title: "Z.T Tekstil",
        tagline: "Köşe başındaki mağazanın ahşap görünümlü cephe ve saçak kaplaması.",
        location: "",
        year: "",
        area: "",
        category: "Ticari",
        status: "Tamamlandı",
        durum: "tamamlanan",
        client: "Z.T Tekstil",
        featured: false,
        showcase: false,
        cover: g("zt-tekstil-01"),
        text: [
          "Z.T Tekstil mağazasının cephesini yeniledik. Zemin kattaki vitrinler ahşap görünümlü panellerle çerçevelendi; saçak altı da aynı malzemeyle kaplandı.",
          "Üst kattaki koyu renkli cephe ve geniş camlarla mağaza, bulunduğu köşede belirgin bir görünüm kazandı."
        ],
        gallery: [
          dikey("zt-tekstil-01"),
          dikey("zt-tekstil-02")
        ]
      },
      {
        slug: "dag-evi",
        title: "Dağ Evi",
        tagline: "Eğimli arazide, ahşap ve koyu metal yüzeylerle tasarlanan dağ evi.",
        location: "Sapanca / Sakarya",
        year: 2020,
        area: "",
        category: "Bungalov",
        status: "Tasarım",
        client: "Özel",
        durum: "",
        featured: false,
        showcase: false,
        cover: g("dag-evi-01"),
        text: [
          "Sapanca'da eğimli ve ağaçlık bir arazi için tasarladığımız dağ evi. Yapı yamaca oturur; ahşap ve koyu metal yüzeyler doğayla aynı tonda tutuldu.",
          "Geniş teras ve boydan boya camlar manzaraya açılıyor. Tasarım, üç boyutlu görsellerle farklı açılardan çalışıldı."
        ],
        gallery: [
          genis("dag-evi-02"),
          yatay("dag-evi-03"),
          yatay("dag-evi-04"),
          genis("dag-evi-01")
        ]
      },
      {
        slug: "kac-konutlari",
        title: "Kaç A.Ş Konutları",
        tagline: "İç avlu ve su öğesi çevresinde kurgulanan konut yerleşkesi tasarımı.",
        location: "Kocaeli",
        year: 2020,
        area: "",
        category: "Konut",
        status: "Tasarım",
        client: "Kaç A.Ş",
        durum: "",
        featured: false,
        showcase: false,
        cover: g("kac-01"),
        text: [
          "Kocaeli'de Kaç A.Ş için hazırladığımız konut yerleşkesi tasarımı. Bloklar, ortadaki avluyu ve su öğesini çevreleyecek şekilde yerleştirildi.",
          "Cephede beyaz, kıvrılan balkon bantları koyu yüzeylerle birlikte kullanıldı; her daireye geniş bir açık alan bırakıldı."
        ],
        gallery: [
          genis("kac-02"),
          yatay("kac-03"),
          yatay("kac-01")
        ]
      },
      {
        slug: "zk-bungalov",
        title: "Z.K Bungalov",
        tagline: "Sapanca'da ağaçların arasında üçgen çatılı bungalov tasarımı.",
        location: "Sapanca / Sakarya",
        year: 2020,
        area: "",
        category: "Bungalov",
        status: "Tasarım",
        client: "Özel",
        durum: "",
        featured: false,
        showcase: false,
        cover: g("zk-bungalov-01"),
        text: [
          "Sapanca'da bir arsa için tasarladığımız üçgen çatılı bungalov. Koyu çatı kaplaması ve ahşap cephe, ağaçlık arazide yapıyı geri planda tutuyor.",
          "Bungalov tasarımlarını arsaya özel hazırlıyor, uygulamasını da üstleniyoruz."
        ],
        gallery: [
          genis("zk-bungalov-02"),
          yatay("zk-bungalov-03"),
          yatay("zk-bungalov-01")
        ]
      },
      {
        slug: "yaylalilar",
        title: "Yaylalılar",
        tagline: "Erenler'de ahşap ve koyu yüzeyli konut bloğu tasarımı.",
        location: "Erenler / Sakarya",
        year: 2020,
        area: "",
        category: "Konut",
        status: "Tasarım",
        client: "Özel",
        durum: "",
        featured: false,
        showcase: false,
        cover: g("yaylalilar-01"),
        text: [
          "Erenler'de bir konut bloğu için hazırladığımız cephe ve kütle tasarımı.",
          "Derin balkonlar, ahşap görünümlü kaplama ve koyu çerçevelerle yatay bir cephe düzeni kuruldu."
        ],
        gallery: [
          yatay("yaylalilar-02"),
          yatay("yaylalilar-01")
        ]
      },
      {
        slug: "sakmar",
        title: "Sakmar",
        tagline: "Desenli metal cephesiyle ticari yapı tasarımı.",
        location: "Sakarya",
        year: 2020,
        area: "",
        category: "Ticari",
        status: "Tasarım",
        client: "Sakmar",
        durum: "",
        featured: false,
        showcase: false,
        cover: g("sakmar-01"),
        text: [
          "Sakmar için hazırladığımız ticari yapı tasarımı.",
          "Üst katları saran desenli koyu cephe yapıya tek parça bir görünüm veriyor; zemin kat ise yola tümüyle açılıyor."
        ],
        gallery: [
          yatay("sakmar-02"),
          yatay("sakmar-01")
        ]
      }
    ],

    /* ---------- HİZMETLER ---------- */
    services: [
      { title: "Mimari Proje", short: "Arsanıza özel villa, konut ve bungalov.", text: "Arsanıza ve ihtiyacınıza göre mimari proje hazırlıyoruz: villa, konut, site, bungalov ve ticari yapılar. Proje çizimi, cephe tasarımı ve proje takibini aynı ekip yürütür." },
      { title: "3 Boyutlu Görselleştirme", short: "Yapıyı inşaattan önce görün.", text: "Cepheyi, malzemeyi, bahçeyi ve havuzu üç boyutlu görsellerle önceden görürsünüz. Kararlar şantiyede değil, tasarım masasında verilir." },
      { title: "İnşaat ve Taahhüt", short: "Temelden anahtar teslimine.", text: "Çizdiğimiz yapıyı kendi ekibimizle inşa ediyoruz. Temel, kaba inşaat, yalıtım, şap ve ince işlerin her aşamasını paylaşır, işi anahtar teslim tamamlarız." },
      { title: "İç Mekân Tasarım ve Uygulama", short: "Konut, otel, mağaza ve ofis.", text: "İç mekânı tasarlar ve yerinde uygularız: mutfak, banyo, asma tavan ve gizli ışık, seramik, boya ve dekorasyon." },
      { title: "Cephe Tasarımı ve Uygulaması", short: "Taş, tuğla ve panel kaplamalar.", text: "Yeni ya da mevcut yapılarda cephe tasarımı ve uygulaması: doğal taş, kültür tuğlası, bordex ve betopan kaplamalar." },
      { title: "Tadilat ve Ek Yapılar", short: "Veranda, havuz, yenileme.", text: "Mevcut evlere veranda ve havuz ekliyor, mutfak ve banyo yeniliyor, eski yapıları baştan ele alıyoruz." }
    ],

    /* ---------- GÜNCEL ---------- */
    // link boş ("") bırakılırsa kart tıklanamaz olur.
    news: [
      { tag: "Şantiyeden", date: "Ekim 2026",  title: "ConcepT 15'te bahçe ve yürüyüş yolları tamam",            image: g("yerleske-03"),        link: "proje.html?id=concept-15" },
      { tag: "Şantiyeden", date: "Ekim 2026",  title: "ConcepT 12 Neviye'de çatı kaplaması sürüyor; 2+1 daireler satışta", image: g("neviye-k1"), link: "proje.html?id=concept-12-neviye" },
      { tag: "Villa",      date: "Şubat 2026", title: "S.A Villa'da cephe ve havuz tamamlandı",                   image: g("sa-villa-02"),        link: "proje.html?id=sa-villa" },
      { tag: "Teslim",     date: "Eylül 2025", title: "ConcepT 12'de 3+1 daireler hemen teslim",                  image: g("concept-12-teslim-01"), link: "proje.html?id=concept-12" }
    ],

    /* ---------- HAKKIMIZDA SAYFASI ---------- */
    studio: {
      headline: "Mimari projeyi, inşaatı ve iç mekânı tek elden yürüten bir mimarlık ve inşaat firmasıyız.",
      image: g("ofis-02"),
      text: [
        "Concept Mimarlık İnşaat, Mimar Muhammet Sefa Topçu'nun yürüttüğü, Sakarya Serdivan merkezli bir mimarlık ve inşaat firmasıdır. “Kalem ucunda sanat” sözüyle çalışırız: yapıyı önce çizer, sonra kendi ekibimizle inşa ederiz.",
        "Sapanca, Serdivan, Akyazı, Arifiye, Erenler ve Kocaeli'de villalar, bungalovlar, konut siteleri, mağazalar ve otel iç mekânları tasarladık ve uyguladık. ConcepT 12 ve ConcepT 15 gibi kendi konut projelerimizi de aynı özenle üretiyoruz.",
        "Şantiyede ne yapıldığını saklamayız. Temel demirinden cephe kaplamasına kadar her aşamayı fotoğraf ve videoyla paylaşırız; işveren, evinin hangi gün hangi aşamada olduğunu bilir."
      ],
      stats: [
        { value: "2017", label: "İlk projeler" },
        { value: "90+",  label: "Paylaşılan proje ve uygulama" },
        { value: "3",    label: "ConcepT konut projesi" },
        { value: "31 B", label: "Instagram takipçisi" }
      ]
    },

    /* ---------- EKİP ---------- */
    // image boş ("") bırakılırsa ad-soyadın baş harfleri gösterilir.
    team: [
      { name: "Muhammet Sefa Topçu", role: "Mimar", image: "" }
    ],

    /* ---------- OFİSLER ----------
       İlk iki ofisin saati açılış ekranının sağ altında görünür.
    */
    offices: [
      { city: "Sakarya", code: "SKR", timeZone: "Europe/Istanbul", address: "Köprübaşı Mah. Aralık Cad. No: 27/B, Serdivan / Sakarya", phone: "+90 534 020 90 56" }
    ],

    /* ---------- BÖLÜM BAŞLIKLARI ---------- */
    labels: {
      featured: "Öne Çıkan Projeler",
      showcaseLabel: "Seçilmiş işler",
      showcaseTitle: "Projeler",
      allProjects: "Tüm projeleri gör",
      services: "Hizmetler",
      servicesTitle: "Projeden anahtar teslimine.",
      news: "Güncel",
      newsTitle: "Şantiyeden ve satıştan",
      offices: "Ofisimiz",
      team: "Ekip",
      teamTitle: "Projelerin arkasındaki imza.",
      studio: "Hakkımızda",
      contact: "İletişim",
      view: "İNCELE",
      next: "SONRAKİ",
      nextProject: "Sonraki proje",
      more: "İncele"
    },

    /* ---------- İLETİŞİM ----------
       E-posta adresi bilinmediği için sitede e-posta yerine telefon ve
       WhatsApp bağlantısı gösterilir (js/main.js bu kopyada buna göre uyarlandı).
    */
    contact: {
      headline: "Arsanız ya da fikriniz hazırsa, gerisini birlikte çizelim.",
      email: "",
      phone: "+90 534 020 90 56",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/conceptmimarlik_/" },
        { label: "Facebook",  href: "https://www.facebook.com/stsefatopcu/" },
        { label: "WhatsApp",  href: "https://wa.me/905340209056" }
      ]
    }
  };
})();
