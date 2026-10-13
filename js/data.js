/* =====================================================================
   SİTE İÇERİĞİ — BU DOSYA SİTENİN TEK İÇERİK KAYNAĞIDIR
   =====================================================================
   Concept Mimarlık İnşaat (Serdivan / Sakarya) için hazırlanmıştır.

   KAYNAKLAR (13 Eki 2026)
   - Proje adları, yerler, yıllar ve teknik bilgiler: firmanın kendi
     Instagram paylaşımları (@conceptmimarlik_, 494 gönderi).
   - Fotoğraf ve videolar: aynı hesap + firmanın WhatsApp'tan gönderdiği
     6 fotoğraf ve 5 video (ConcepT 12).
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
      { label: "Hakkımızda", href: "studyo.html" },
      { label: "İletişim",   href: "studyo.html#iletisim" }
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
      { image: g("kac-01"),          caption: "Kaç A.Ş konutları — tasarım, Kocaeli" },
      { image: g("khalid-villa-01"), caption: "K.Halid Villa — Kırkpınar, Sapanca" },
      { image: g("concept-12-01"),   caption: "ConcepT 12 — Arifiye, Sakarya" },
      { image: g("dag-evi-01"),      caption: "Dağ Evi — tasarım, Sapanca" },
      { image: g("na-villa-01"),     caption: "N.A Villa — Esentepe, Serdivan" }
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
          g("zk-bungalov-01"),
          g("kac-02"),
          g("ma-villa-01")
        ]
      },
      {
        label: "Uygulama",
        title: "Çizdiğimizi kendimiz yaparız.",
        text: "Temel demirinden cephe kaplamasına kadar şantiyeyi kendi ekibimiz yürütür. Hangi betonun döküldüğünü, hangi katın çıkıldığını adım adım paylaşırız; iş, yapı denetim ve laboratuvar kontrolleriyle ilerler.",
        linkLabel: "Bizi tanıyın",
        linkHref: "studyo.html",
        images: [
          g("sa-villa-06"),
          g("sa-villa-04"),
          g("sa-villa-01")
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
        slug: "concept-12",
        title: "ConcepT 12",
        tagline: "Arifiye'de, ortak bahçe çevresinde iki bloktan oluşan 12 dairelik konut.",
        location: "Fatih Mah., Arifiye / Sakarya",
        year: 2025,
        area: "12 daire · 3+1 · 125 m²",
        category: "Konut",
        status: "Tamamlandı",
        client: "Concept Mimarlık İnşaat",
        featured: true,
        showcase: true,
        cover: g("concept-12-01"),
        text: [
          "ConcepT 12, Arifiye Fatih Mahallesi'nde tasarımını ve inşaatını kendimiz üstlendiğimiz 12 dairelik konut projemiz. Dairelerin tamamı 3+1 ve 125 m².",
          "Yapı radye temel üzerine C30 betonla inşa edildi. Dairelerde yerden ısıtma, 60x120 seramik zemin kaplaması, salon ve holde gizli ışıklı LED aydınlatma ve ebeveyn banyosu bulunuyor.",
          "Site içinde 450 m² yeşil alan var; bloklar arasındaki baskı beton yürüyüş yolu ve bahçe çocukların rahatça oynayabileceği şekilde düzenlendi. Cami, okul ve marketler 5 dakikalık yürüme mesafesinde; Arifiye tren garı 7 dakika, büyükşehir terminali 2 km uzaklıkta."
        ],
        gallery: [
          genis("concept-12-10"),
          dikey("concept-12-03"),
          dikey("concept-12-04"),
          { video: "images/concept-12-tur.mp4", poster: g("concept-12-tur") },
          dikey("concept-12-06"),
          dikey("concept-12-02"),
          dikey("concept-12-07"),
          dikey("concept-12-08"),
          dikey("concept-12-09")
        ]
      },
      {
        slug: "k-halid-villa",
        title: "K.Halid Villa",
        tagline: "Kırkpınar'da tasarımı ve inşaatı bize ait, havuzlu iki katlı villa.",
        location: "Kırkpınar, Sapanca / Sakarya",
        year: 2024,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "Özel",
        featured: true,
        showcase: true,
        cover: g("khalid-villa-01"),
        text: [
          "Sapanca Kırkpınar'daki bu villanın hem mimari projesini çizdik hem de inşaatını yaptık. Mimar: Muhammet Sefa Topçu.",
          "Antrasit ve beyaz yüzeyler, ahşap görünümlü dikey panellerle yumuşatıldı. Geniş doğramalar salonu doğrudan bahçeye ve havuza açıyor.",
          "Bahçe düzenlemesi ve havuz uygulaması da aynı ekip tarafından tamamlandı."
        ],
        gallery: [
          dikey("khalid-villa-02"),
          dikey("khalid-villa-03"),
          dikey("khalid-villa-04"),
          dikey("khalid-villa-05"),
          dikey("khalid-villa-06"),
          dikey("khalid-villa-01")
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
        featured: true,
        showcase: true,
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
        featured: false,
        showcase: true,
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
        slug: "sa-villa",
        title: "S.A Villa",
        tagline: "Karaman'da temelinden havuzuna kadar tüm yapımını üstlendiğimiz villa.",
        location: "Karaman, Sakarya",
        year: 2025,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "Özel",
        featured: true,
        showcase: false,
        cover: g("sa-villa-01"),
        text: [
          "S.A Villa'nın mimari projesi de inşaatı da bize ait. Mimar: Muhammet Sefa Topçu.",
          "Temel C25/30 betonla atıldı; yapı denetim ve laboratuvar kontrolleri yapıldı. Kalıp, kolon, döşeme ve cephe aşamalarının her birini şantiyeden paylaştık.",
          "Gri sıva yüzeyler ahşap görünümlü kaplamayla birlikte kullanıldı. Bahçe duvarı ve havuz da aynı iş kapsamında tamamlandı."
        ],
        gallery: [
          dikey("sa-villa-02"),
          dikey("sa-villa-03"),
          dikey("sa-villa-04"),
          dikey("sa-villa-05"),
          dikey("sa-villa-06"),
          dikey("sa-villa-01")
        ]
      },
      {
        slug: "concept-15",
        title: "ConcepT 15",
        tagline: "Arifiye'nin merkezinde, Arifbey'de 2+1 ve 3+1 dairelerden oluşan konut projesi.",
        location: "Arifbey, Arifiye / Sakarya",
        year: 2025,
        area: "3+1 (125 m²) · 2+1 (98 m²)",
        category: "Konut",
        status: "Satışta",
        client: "Concept Mimarlık İnşaat",
        featured: true,
        showcase: false,
        cover: g("concept-15-01"),
        text: [
          "ConcepT 15, Arifiye'nin merkezinde, Arifbey'de yer alan yeni konut projemiz. Projede 3+1 (125 m²) ve 2+1 (98 m²) daireler bulunuyor.",
          "Dairelerde yerden ısıtma, LED spot aydınlatma ve 60x120 seramik zemin kaplaması var. Yapı, site düzeninde ve modern bir dış cepheyle tasarlandı.",
          "Daire seçenekleri ve güncel durum için bizi arayabilir ya da WhatsApp'tan yazabilirsiniz."
        ],
        gallery: [
          dikey("concept-15-02"),
          dikey("concept-15-03")
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
        client: "Concept Mimarlık İnşaat",
        featured: false,
        showcase: false,
        cover: g("neviye-01"),
        text: [
          "ConcepT 12 Neviye, Arifiye Neviye'de inşaatı devam eden konut projemiz. 2+1 ve 3+1 daireler lansman döneminden itibaren satışta.",
          "Şantiyedeki ilerlemeyi düzenli olarak paylaşıyoruz; güncel durum ve daire seçenekleri için bize ulaşabilirsiniz."
        ],
        gallery: [
          genis("neviye-02"),
          dikey("neviye-03"),
          dikey("neviye-01")
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
        client: "Dağtepe Tekstil",
        featured: true,
        showcase: false,
        cover: g("lapis-01"),
        text: [
          "Akyazı Ömercikler Mahallesi'nde Dağtepe Tekstil için yürüttüğümüz Lapis projesi. Binanın dış cephesini ve iç mekânını birlikte ele aldık.",
          "Yola bakan yüzde boydan boya cam cephe, ahşap görünümlü kaplama ve koyu çerçevelerle birlikte kullanıldı."
        ],
        gallery: [
          yatay("lapis-03"),
          yatay("lapis-02")
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
        featured: true,
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
        slug: "kokumer-villalari",
        title: "Kökümer Villaları",
        tagline: "Serdivan'da doğal taş kaplamalı, silindirik kuleli villalar.",
        location: "Serdivan / Sakarya",
        year: 2021,
        area: "",
        category: "Villa",
        status: "Tasarım + uygulama",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("kokumer-01"),
        text: [
          "Kökümer Villaları'nın inşaatını ve cephe uygulamasını yürüttük. Mimar: Muhammet Sefa Topçu.",
          "Cephede doğal taş kaplama, ahşap görünümlü paneller ve koyu saçak bir arada kullanıldı; köşedeki silindirik kule yapının imzası oldu. Cephe altyapısında şase, bordex ve betopan uygulandı."
        ],
        gallery: [
          dikey("kokumer-02"),
          dikey("kokumer-03")
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
        status: "Tasarım + uygulama",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("na-villa-01"),
        text: [
          "Serdivan Esentepe'de, geniş bir bahçenin içine yerleşen villa. Kalıp aşamasından cepheye kadar inşaat sürecini biz yürüttük.",
          "Yapı, bahçedeki yürüyüş yolları ve peyzajla birlikte ele alındı."
        ],
        gallery: [
          genis("na-villa-01"),
          yatay("na-villa-03"),
          yatay("na-villa-02")
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
        slug: "ct-proje",
        title: "C.T Proje",
        tagline: "Sapanca'da taş kaplamalı, yuvarlak pencereli üç katlı yapı.",
        location: "Sapanca / Sakarya",
        year: 2021,
        area: "",
        category: "Konut",
        status: "Tamamlandı",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("ct-01"),
        text: [
          "Sapanca'daki C.T Proje'nin mimarlığını ve yapımını üstlendik. Mimar: Muhammet Sefa Topçu.",
          "Cephede doğal taş kaplama, beyaz söveler ve yuvarlak pencereler kullanıldı; geniş balkonlar yola ve manzaraya açılıyor."
        ],
        gallery: [
          genis("ct-01"),
          dikey("ct-02"),
          dikey("ct-03")
        ]
      },
      {
        slug: "ma-villa",
        title: "M.A Villa",
        tagline: "Akyazı'da görselinden şantiyesine kadar takip ettiğimiz modern villa.",
        location: "Akyazı / Sakarya",
        year: 2020,
        area: "",
        category: "Villa",
        status: "Tasarım + uygulama",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("ma-villa-01"),
        text: [
          "M.A Villa'yı önce üç boyutlu görsellerle tasarladık, ardından Akyazı'daki şantiyesini yürüttük.",
          "Geniş saçaklı çatı, açık renkli kütle ve ahşap görünümlü yüzeylerden oluşan tasarım, uygulamada da aynı çizgide hayata geçti."
        ],
        gallery: [
          genis("ma-villa-02"),
          yatay("ma-villa-03"),
          yatay("ma-villa-01")
        ]
      },
      {
        slug: "bahcecik-villa",
        title: "Bahçecik Villa",
        tagline: "Kocaeli Bahçecik'te tuğla ve beyaz yüzeylerle tasarlanan villa.",
        location: "Bahçecik, Kocaeli",
        year: 2020,
        area: "",
        category: "Villa",
        status: "Tasarım",
        client: "Özel",
        featured: false,
        showcase: false,
        cover: g("bahcecik-01"),
        text: [
          "Kocaeli Bahçecik'te tasarladığımız villa. Proje 2018'de başladı; görseller 2020'de güncellendi.",
          "Tuğla yüzeyler, beyaz saçak ve koyu doğramalar bir arada kullanıldı. Tasarım, bahçe düzenlemesiyle birlikte farklı açılardan görselleştirildi."
        ],
        gallery: [
          genis("bahcecik-01"),
          yatay("bahcecik-02"),
          yatay("bahcecik-03"),
          genis("bahcecik-04")
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
      },
      {
        slug: "sapanca-aqua-hotel",
        title: "Sapanca Aqua Hotel & Spa",
        tagline: "Süit odaların tasarımı ve endüstriyel mutfağın uygulaması.",
        location: "Sapanca / Sakarya",
        year: 2019,
        area: "",
        category: "İç Mekân",
        status: "Tasarım + uygulama",
        client: "Sapanca Aqua Hotel & Spa",
        featured: false,
        showcase: false,
        cover: g("aqua-01"),
        text: [
          "Sapanca Aqua Hotel & Spa'nın süit odalarını tasarladık, endüstriyel mutfağının uygulamasını yaptık.",
          "Süit odalarda koyu tonlar ve gizli aydınlatma bir arada kullanıldı. Mutfakta seramik kaplama yerinde uygulandı."
        ],
        gallery: [
          yatay("aqua-02"),
          yatay("aqua-03")
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
      { tag: "Satışta", date: "Ekim 2026",  title: "Arifiye Neviye'de 2+1 daireler satışta",       image: g("neviye-01"),     link: "proje.html?id=concept-12-neviye" },
      { tag: "Villa",   date: "Şubat 2026", title: "S.A Villa'da cephe ve havuz tamamlandı",      image: g("sa-villa-02"),   link: "proje.html?id=sa-villa" },
      { tag: "Lansman", date: "Eylül 2025", title: "ConcepT 15, Arifiye Arifbey'de satışa çıktı", image: g("concept-15-03"), link: "proje.html?id=concept-15" },
      { tag: "Teslim",  date: "Eylül 2025", title: "ConcepT 12'de 3+1 daireler hemen teslim",     image: g("concept-12-03"), link: "proje.html?id=concept-12" }
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
