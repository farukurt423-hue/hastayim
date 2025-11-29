// app.js dosyası - NİHAİ VE 450+ SEMPTOM PROTOKOLÜ (50 YENİ SEMPTOM EKLENMİŞTİR)

// --- YARDIMCI FONKSİYON: TÜRKÇE KARAKTERLERİ NORMALLEŞTİRME ---
const normalizeTurkish = (text) => {
    if (!text) return '';
    text = text.toLowerCase();
    return text
        .replace(/ğ/g, 'g')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ç/g, 'c');
};

const SEMPTOM_VERILERI = [
    // --- GENEL SİSTEM & DAHİLİYE (ID: 1-50) ---
    {
        id: 1, semptom: "Yüksek Ateş (39°C Üzeri)",
        anahtar_kelimeler: ["fever", "ates", "yuksek", "sicaklik", "infeksiyon", "virüs"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye",
        acil_durum: ["Bilinç kaybı", "Boyun sertliği", "Nöbet", "Nefes darlığı"],
        yapilmasi_gereken: "Enfeksiyon kaynağını ve kan değerlerini bulmak için Dahiliye'ye başvurunuz.", aciklama: "Ateşli hastalıkların ve organ sistemlerindeki genel sorunların ilk inceleme bölümüdür.",
        hazirlik_notu: "Ateşin saat kaçta başladığını ve kaç dereceye kadar çıktığını not alınız. Kullandığınız tüm ilaçları doktorunuza bildiriniz."
    },
    {
        id: 2, semptom: "Halsizlik ve Sürekli Yorgunluk",
        anahtar_kelimeler: ["tiredness", "yorgunluk", "bitkinlik", "enerjisizlik", "kronik"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Ani kilo kaybı", "Şiddetli nefes darlığı"],
        yapilmasi_gereken: "Kan tahlilleri ve vitamin eksiklikleri (B12, D) kontrolü için Dahiliye'ye başvurunuz.", aciklama: "Vücudun temel sistemlerinin kontrolü ve kronik yorgunluğun nedeninin tespiti.",
        hazirlik_notu: "Mümkünse son 6 aydaki uyku düzeninizi, beslenme alışkanlıklarınızı ve stres seviyenizi özetleyin."
    },
    {
        id: 3, semptom: "Ani Kilo Kaybı (Sebepsiz)",
        anahtar_kelimeler: ["weight loss", "kilo kaybi", "zayiflama", "nedensiz", "metabolizma"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Onkoloji",
        acil_durum: ["Yüksek ateş", "Gece terlemesi"],
        yapilmasi_gereken: "Metabolik, sindirim veya enfeksiyonel nedenlerin tespiti için Dahiliye'ye başvurunuz.", aciklama: "Organ fonksiyonlarının ve metabolizmanın kontrolü.",
        hazirlik_notu: "Son 6-12 ayda kaybettiğiniz tahmini kilo miktarını ve bu durumun ne zaman başladığını kaydediniz."
    },
    {
        id: 4, semptom: "Aşırı Terleme (Hiperhidroz)",
        anahtar_kelimeler: ["terleme", "sweating", "endokrin", "tiroid", "hiperhidroz"],
        tanisal_bolum: "Dahiliye / Endokrinoloji", tedavi_bolum: "Endokrinoloji",
        acil_durum: ["Ani kilo kaybı ve yüksek ateş"],
        yapilmasi_gereken: "Tiroid ve hormonal dengesizliklerin kontrolü için Endokrinoloji'ye başvurunuz.", aciklama: "Metabolizma ve hormonal sistem sorunları.",
        hazirlik_notu: "Terlemenin vücudun hangi bölgelerinde yoğunlaştığını ve hangi durumlarda (gece/gündüz, stres/istirahat) arttığını gözlemleyiniz."
    },
    {
        id: 5, semptom: "Vücutta Dolaşan Ağrı (Eklemlerde)",
        anahtar_kelimeler: ["eklem", "joint", "agri", "romato", "romatizma", "romatoid"],
        tanisal_bolum: "Romatoloji / FTR", tedavi_bolum: "Romatoloji",
        acil_durum: ["Ateşle birlikte eklem şişliği"],
        yapilmasi_gereken: "Romatizmal ve iltihaplı hastalıkların (artrit, fibromiyalji) tanısı için Romatoloji'ye başvurunuz.", aciklama: "Bağ dokusu ve iltihaplı eklem hastalıkları.",
        hazirlik_notu: "Ağrının sabah mı, yoksa hareket sonrası mı daha yoğun olduğunu ve şişlik olup olmadığını not ediniz."
    },
    //... (Diğer Genel Semptomlar)
    {
        id: 49, semptom: "Gece Terlemesi", 
        anahtar_kelimeler: ["night sweat", "gece", "terleme"], 
        tanisal_bolum: "Dahiliye", 
        tedavi_bolum: "Dahiliye", 
        acil_durum: ["Ateş ve sebepsiz kilo kaybı"], 
        yapilmasi_gereken: "Enfeksiyonel veya sistemik hastalıkların tespiti için Dahiliye'ye başvurunuz.", 
        aciklama: "Sistemik hastalıkların genel belirtileri.",
        hazirlik_notu: "Terlemenin yatağı veya kıyafeti ıslatacak kadar şiddetli olup olmadığını ve bunun kaç gecedir sürdüğünü belirtiniz."
    },
    {
        id: 50, semptom: "Boyunda Şişlik (Elle Hissedilen)", 
        anahtar_kelimeler: ["neck", "boyun", "sislik", "nodul", "lenf bezi"], 
        tanisal_bolum: "Endokrinoloji / Genel Cerrahi", 
        tedavi_bolum: "Genel Cerrahi", 
        acil_durum: ["Nefes almada zorluk", "Hızlı büyüme"], 
        yapilmasi_gereken: "Tiroid nodülleri ve lenf bezleri kontrolü için Endokrinoloji'ye başvurulur.", 
        aciklama: "Tiroid ve lenf sistemi sorunları.",
        hazirlik_notu: "Şişliğin hareket edip etmediğini (yutkunurken), yumuşak mı sert mi olduğunu ve ne kadar süredir var olduğunu gözlemleyin."
    },
    
    // --- YENİ EKLENEN GENEL SİSTEM & DAHİLİYE SEMPTOMLARI (ID: 500-509) ---
    {
        id: 500, semptom: "Kolay Morarma ve Kanama",
        anahtar_kelimeler: ["morarma", "kanama", "pıhtı", "hemofili", "platelet", "trombosit"],
        tanisal_bolum: "Hematoloji", tedavi_bolum: "Hematoloji",
        acil_durum: ["İdrar veya dışkıda kan", "Bilinç kaybı"],
        yapilmasi_gereken: "Kan pıhtılaşma bozuklukları, vitamin eksiklikleri veya kan hastalıklarının tespiti için Hematoloji'ye başvurulur.", aciklama: "Kan ve kan yapıcı organ hastalıkları.",
        hazirlik_notu: "Diş eti kanaması, burun kanaması veya dışkıda kan gibi diğer kanama belirtilerini gözden geçiriniz."
    },
    {
        id: 501, semptom: "Hızlı Kalp Çarpıntısı (Palpitasyon)",
        anahtar_kelimeler: ["çarpıntı", "kalp", "aritmi", "palpitasyon", "hizli", "tiroid"],
        tanisal_bolum: "Kardiyoloji / Endokrinoloji", tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Göğüs ağrısı", "Nefes darlığı", "Bayılma"],
        yapilmasi_gereken: "Kalp ritmi bozuklukları (Aritmi) ve tiroid kaynaklı sorunların tespiti için Kardiyoloji'ye başvurulur.", aciklama: "Kalp ve hormonal sistemin genel kontrolü.",
        hazirlik_notu: "Çarpıntının süresini, ritmini (düzenli mi düzensiz mi) ve ne zaman (istirahat mi efor mu) başladığını not edin."
    },
    {
        id: 502, semptom: "Anormal Susuzluk ve Sık İdrara Çıkma",
        anahtar_kelimeler: ["susuzluk", "idrar", "diyabet", "seker", "poliüri", "polidipsi"],
        tanisal_bolum: "Endokrinoloji / Üroloji", tedavi_bolum: "Endokrinoloji",
        acil_durum: ["Bilinç bulanıklığı", "Aşırı halsizlik"],
        yapilmasi_gereken: "Şeker hastalığı (Diyabet) veya böbrek fonksiyonları kontrolü için Endokrinoloji'ye başvurulur.", aciklama: "Metabolik ve hormonal dengesizlikler.",
        hazirlik_notu: "Son 8-12 saat boyunca sıvı tüketim ve idrar çıkış miktarınızı tahmini olarak kaydedin. (24 saatlik idrar kaydı istenebilir)."
    },
    {
        id: 503, semptom: "Vücutta Ödem (Şişlik ve Su Tutma)",
        anahtar_kelimeler: ["odem", "sislik", "su", "tasma", "bobrek", "kalp", "dolaşım"],
        tanisal_bolum: "Nefroloji / Kardiyoloji", tedavi_bolum: "Nefroloji / Dahiliye",
        acil_durum: ["Ani nefes darlığı"],
        yapilmasi_gereken: "Böbrek, kalp veya karaciğer fonksiyon bozukluklarının tespiti için Nefroloji veya Kardiyoloji'ye başvurulur.", aciklama: "Dolaşım, böbrek ve karaciğer sistemi sorunları.",
        hazirlik_notu: "Şişliğin gün içinde azalıp artmadığını ve basmakla iz kalıp kalmadığını (pitting ödem) kontrol edin."
    },
    {
        id: 504, semptom: "Tansiyon Yüksekliği (Sürekli)",
        anahtar_kelimeler: ["tansiyon", "yuksek", "hipertansiyon", "basinc"],
        tanisal_bolum: "Kardiyoloji / Nefroloji", tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Şiddetli baş ağrısı", "Bulanık görme"],
        yapilmasi_gereken: "Hipertansiyonun nedeni ve tedavisi için Kardiyoloji'ye başvurulur.", aciklama: "Kalp ve damar sağlığının kontrolü.",
        hazirlik_notu: "Mümkünse, farklı zamanlarda (sabah, akşam) ölçülmüş en az 5 adet tansiyon değeri kaydınızı getiriniz."
    },
    {
        id: 505, semptom: "Tansiyon Düşüklüğü (Sürekli)",
        anahtar_kelimeler: ["tansiyon", "dusuk", "hipotansiyon", "bayilma"],
        tanisal_bolum: "Dahiliye", tedavi_bolum: "Dahiliye",
        acil_durum: ["Bayılma"],
        yapilmasi_gereken: "Dehidrasyon, kansızlık veya hormonal nedenlerin tespiti için Dahiliye'ye başvurulur.", aciklama: "Genel sistemik kontrol ve elektrolit dengesi.",
        hazirlik_notu: "Baş dönmesinin ayağa kalkarken mi, yoksa uzun süre ayakta durunca mı arttığını not edin."
    },
    {
        id: 506, semptom: "Kas Güçsüzlüğü ve Kramp",
        anahtar_kelimeler: ["kas", "gucsuzluk", "kramp", "miyopati", "nöroloji"],
        tanisal_bolum: "Nöroloji / FTR", tedavi_bolum: "Nöroloji / FTR",
        acil_durum: ["Yutkunma veya nefes almada zorluk"],
        yapilmasi_gereken: "Sinir ve kas hastalıklarının (Miyopati) tespiti için Nöroloji'ye veya FTR'ye başvurulur.", aciklama: "Kas ve sinir sistemi bozuklukları.",
        hazirlik_notu: "Krampların sıklığını ve hangi kas gruplarında (gece mi gündüz mü) olduğunu kaydedin. Son kan tahliliniz varsa yanınızda bulundurun."
    },
    {
        id: 507, semptom: "Deride Sarılık (Göz Aklarında da)",
        anahtar_kelimeler: ["sarilik", "cilt", "göz", "karaciger", "bilirubin", "hepatit"],
        tanisal_bolum: "Gastroenteroloji / Dahiliye", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["**ACİL SERVİS**"],
        yapilmasi_gereken: "Karaciğer, safra yolları veya kan hastalıklarının tespiti için Gastroenteroloji'ye başvurulur.", aciklama: "Karaciğer ve safra yolları fonksiyon bozuklukları.",
        hazirlik_notu: "İdrarınızın renginin koyu (çay rengi) olup olmadığını ve dışkınızın renginin açık (kil rengi) olup olmadığını kontrol edin."
    },
    {
        id: 508, semptom: "Dilde ve Ağız Kenarlarında Çatlak",
        anahtar_kelimeler: ["dil", "agiz", "çatlak", "vitamin", "b12", "anemi"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "B12, demir gibi vitamin ve mineral eksikliklerinin tespiti için Dahiliye'ye başvurulur.", aciklama: "Vitamin ve mineral eksikliklerinin tespiti.",
        hazirlik_notu: "Ağız bakım ürünlerinizde (diş macunu, gargara) son zamanlarda değişiklik yapıp yapmadığınızı not edin."
    },
    {
        id: 509, semptom: "Genel Kaşıntı (Döküntüsüz)",
        anahtar_kelimeler: ["kasinti", "pruritus", "cilt", "karaciger", "böbrek"],
        tanisal_bolum: "Dermatoloji / Dahiliye", tedavi_bolum: "Dermatoloji / Dahiliye",
        acil_durum: ["Sarılıkla birlikte kaşıntı"],
        yapilmasi_gereken: "Cilt hastalıkları, karaciğer veya böbrek sorunları açısından incelenmek üzere Dahiliye'ye başvurulur.", aciklama: "Sistemik hastalıkların deri üzerindeki etkileri.",
        hazirlik_notu: "Son kullandığınız sabun, deterjan veya losyonları not edin. Kaşıntının gece mi yoksa sıcak su temasından sonra mı arttığını belirtin."
    },
    // --- OMURGA VE EKLEMLER (ID: 51-150) ---
    {
        id: 51, semptom: "Bel Ağrısı (Bacağa Yayılan Sızı)",
        anahtar_kelimeler: ["back", "bel", "low back", "fıtık", "siyatik", "agri", "bacak", "lomber"],
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Bacakta ani güç kaybı", "İdrar/gaita kaçırma"],
        yapilmasi_gereken: "Bel fıtığı veya sinir sıkışması şüphesiyle MR için Beyin Cerrahisi veya Ortopedi'ye başvurulur. Tedavi FTR ile başlar.", aciklama: "Bel omurgası, sinir kökleri ve omurilik sorunları.",
        hazirlik_notu: "Ağrının hangi bacağa ne kadar yayıldığını, öksürük veya ıkınmayla artıp artmadığını not ediniz."
    },
    {
        id: 52, semptom: "Bel Ağrısı (Sadece Kas Ağrısı)",
        anahtar_kelimeler: ["back", "bel", "kas", "gerilme", "tutulma", "lumbago"],
        tanisal_bolum: "FTR", tedavi_bolum: "FTR",
        acil_durum: ["Ateş ve bilinç bulanıklığı"],
        yapilmasi_gereken: "Kas spazmı, duruş bozukluğu ve gerginlik tedavisi için FTR'ye başvurulur.", aciklama: "Duruş bozuklukları ve basit kas gerginliği.",
        hazirlik_notu: "Ağrının belli bir pozisyonda (örneğin uzun süre oturunca) artıp artmadığını ve spor/ağır kaldırma sonrası başlayıp başlamadığını belirtiniz."
    },
    {
        id: 53, semptom: "Sırt Ağrısı (Kürek Kemikleri Arası)",
        anahtar_kelimeler: ["sirt", "back", "kurek", "skolyoz", "durus", "torakal"],
        tanisal_bolum: "FTR / Dahiliye", tedavi_bolum: "FTR",
        acil_durum: ["Sırt ağrısıyla birlikte nefes darlığı"],
        yapilmasi_gereken: "Kas spazmı ve duruş bozukluğu için FTR'ye; iç organ kaynaklı ağrı şüphesi varsa Dahiliye'ye başvurulur.", aciklama: "Duruş bozuklukları ve kas gerginliğinin tanısı.",
        hazirlik_notu: "Ağrının yemek yedikten veya derin nefes aldıktan sonra değişip değişmediğini gözlemleyiniz."
    },
    {
        id: 54, semptom: "Boyun Ağrısı ve Kol Uyuşması",
        anahtar_kelimeler: ["neck", "boyun", "omuz", "kol", "uyusma", "fıtık", "servikal"],
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Nöroloji", tedavi_bolum: "FTR",
        acil_durum: ["Ani güç kaybı", "Yüksek ateş"],
        yapilmasi_gereken: "Boyun fıtığı veya sinir sıkışması şüphesi varsa Beyin Cerrahisi'ne gidilir. Tedavi FTR ile başlar.", aciklama: "Boyun omurgası ve sinir kökleri sorunları.",
        hazirlik_notu: "Uyuşmanın elin hangi parmaklarına kadar yayıldığını ve boynunuzu hangi yöne çevirince ağrının arttığını kaydediniz."
    },
    {
        id: 55, semptom: "Diz Ağrısı (Merdivende Artan)",
        anahtar_kelimeler: ["knee", "diz", "merdiven", "kireclenme", "eklem"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik", "Dizde kilitlenme"],
        yapilmasi_gereken: "Menisküs, kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz. Tedavi için FTR'ye sevk edilir.", aciklama: "Diz eklemi ve çevresindeki bağ dokusu sorunları.",
        hazirlik_notu: "Merdiven çıkarken mi yoksa inerken mi ağrının daha fazla olduğunu ve dizde takılma/kilitlenme hissi olup olmadığını not ediniz."
    },
    {
        id: 56, semptom: "Kalça Ağrısı (Yürürken Artan)",
        anahtar_kelimeler: ["hip", "kalca", "agri", "kireclenme", "eklem", "kemik"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli travma sonrası ağrı"],
        yapilmasi_gereken: "Kalça kireçlenmesi veya eklem sorunları için Ortopedi'ye başvurulur.", aciklama: "Kalça eklemi, kireçlenme ve kas sorunları.",
        hazirlik_notu: "Ağrının kalçanın ön (kasık) bölgesinde mi, yoksa yan veya arka bölgesinde mi yoğunlaştığını belirtiniz."
    },
    {
        id: 57, semptom: "Omuzda Takılma Hissi",
        anahtar_kelimeler: ["shoulder", "omuz", "takilma", "donuk", "tendon", "rotator"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR",
        acil_durum: ["Kolun yerinden çıkmış görünmesi"],
        yapilmasi_gereken: "Rotator manşet yırtıkları, donuk omuz veya tendon iltihabı gibi durumlar için Ortopedi'ye başvurulur.", aciklama: "Omuz eklemi ve tendon sorunları.",
        hazirlik_notu: "Kolunuzu yukarı kaldırırken mi, yoksa sırtınıza götürürken mi ağrı veya takılma hissi yaşadığınızı belirtiniz."
    },
    {
        id: 58, semptom: "Ayak Bileği Burkulması (Travma)",
        anahtar_kelimeler: ["ankle", "ayak", "burkulma", "travma", "bag", "sislik"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi",
        acil_durum: ["Üzerine basamama", "Şekil bozukluğu"],
        yapilmasi_gereken: "Kırık, bağ ve tendon hasarı şüphesiyle direkt Ortopedi'ye başvurunuz.", aciklama: "Kemik, eklem ve bağ dokusu yaralanmaları.",
        hazirlik_notu: "Burkulmanın saatini ve nasıl gerçekleştiğini (düz yolda mı, merdivende mi) hatırlayınız. Hemen buz uygulaması yapınız."
    },
    {
        id: 59, semptom: "El Bileğinde Ağrı ve Uyuşma",
        anahtar_kelimeler: ["wrist", "bilek", "el", "uyusma", "karpal", "tunel"],
        tanisal_bolum: "Nöroloji / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Ani güç kaybı"],
        yapilmasi_gereken: "Sinir sıkışması (Karpal Tünel Sendromu) tanısı için Nöroloji'ye, tendon sorunları için Ortopedi'ye başvurulur.", aciklama: "Sinir sıkışması tanısı ve kas-iskelet sistemi sorunları.",
        hazirlik_notu: "Uyuşmanın genellikle gece mi uyandırdığını ve hangi parmaklarda yoğunlaştığını (özellikle baş, işaret ve orta parmaklar) not ediniz."
    },
    //... (Diğer 90+ Omurga ve Eklem Semptomu)

    // --- YENİ EKLENEN OMURGA VE EKLEM SEMPTOMLARI (ID: 510-519) ---
    {
        id: 510, semptom: "Topuk Ağrısı (Sabahları Şiddetli)",
        anahtar_kelimeler: ["topuk", "agri", "plantar", "fasiit", "spur"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR",
        acil_durum: ["Ateşle birlikte şişlik"],
        yapilmasi_gereken: "Topuk dikeni veya plantar fasiit tanısı için Ortopedi'ye başvurulur. Tedavi FTR ile başlar.", aciklama: "Ayak tabanı ve topuk sorunları.",
        hazirlik_notu: "Ağrının ilk adımda mı yoksa gün içinde yürüdükçe mi azaldığını belirtiniz. Kullandığınız ayakkabı tipini not edin."
    },
    {
        id: 511, semptom: "Çene Eklemi Ağrısı (Yemek Yerken)",
        anahtar_kelimeler: ["cene", "eklem", "temporomandibular", "dis", "disci"],
        tanisal_bolum: "Diş Hekimliği (Çene Cerrahisi)", tedavi_bolum: "Diş Hekimliği",
        acil_durum: ["Çenenin kilitlenmesi"],
        yapilmasi_gereken: "Temporomandibular eklem (Çene Eklemi) bozuklukları için Çene Cerrahisi'ne başvurulur.", aciklama: "Çene eklemi (TMJ) sorunları.",
        hazirlik_notu: "Dişlerinizi gıcırdattığınızı (bruksizm) düşünüyor musunuz? Eşlik eden kulak veya baş ağrısı var mı, not edin."
    },
    {
        id: 512, semptom: "Dirsek Dışında Ağrı (Tenisçi Dirseği)",
        anahtar_kelimeler: ["dirsek", "tenisci", "epicondilit", "tendinit"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR",
        acil_durum: ["Şiddetli şişlik ve kızarıklık"],
        yapilmasi_gereken: "Lateral epikondilit (Tenisçi Dirseği) tanısı ve tedavisi için Ortopedi veya FTR'ye başvurulur.", aciklama: "Dirsek tendonlarının aşırı kullanım yaralanmaları.",
        hazirlik_notu: "Dirseğinizi zorlayan tekrarlayıcı aktiviteleriniz (tenis, çekiç kullanma, bilgisayar kullanımı) hakkında bilgi veriniz."
    },
    {
        id: 513, semptom: "Dizde Kilitlenme ve Boşalma Hissi",
        anahtar_kelimeler: ["diz", "kilitlenme", "bosalma", "meniskus", "bag"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi",
        acil_durum: ["Ani travma sonrası şiddetli ağrı"],
        yapilmasi_gereken: "Menisküs yırtığı, bağ hasarı veya eklem faresi şüphesiyle Ortopedi'ye başvurulur.", aciklama: "Diz eklemi ve iç yapı sorunları.",
        hazirlik_notu: "Kilitlenmenin tam pozisyonunu ve bu durumun dizinizi düzeltmek için ne yapmanız gerektiğini (sallamak vb.) not ediniz."
    },
    {
        id: 514, semptom: "Boyunda Sertlik ve Baş Dönmesi",
        anahtar_kelimeler: ["boyun", "sertlik", "bas donmesi", "servikal"],
        tanisal_bolum: "Nöroloji / FTR", tedavi_bolum: "FTR",
        acil_durum: ["Ani güç kaybı"],
        yapilmasi_gereken: "Kas spazmı, fıtık veya servikal vertigo şüphesiyle FTR veya Nöroloji'ye başvurulur.", aciklama: "Boyun omurgası ve denge ilişkisi.",
        hazirlik_notu: "Baş dönmesinin süresini ve hangi hareketin (hızlı boyun çevirme) bunu tetiklediğini kaydediniz."
    },
    {
        id: 515, semptom: "El Parmaklarında Şişlik ve Şekil Bozukluğu",
        anahtar_kelimeler: ["parmak", "el", "sislik", "romatizma", "artrit"],
        tanisal_bolum: "Romatoloji", tedavi_bolum: "Romatoloji",
        acil_durum: ["Ateşle birlikte şiddetli ağrı"],
        yapilmasi_gereken: "Romatoid Artrit veya diğer romatizmal hastalıkların tespiti için Romatoloji'ye başvurulur.", aciklama: "İltihaplı eklem hastalıklarının tanısı.",
        hazirlik_notu: "Şişliğin sabah uyandığınızda ne kadar sürdüğünü (sabah tutukluğu) ve hangi parmak eklemlerini etkilediğini not ediniz."
    },
    {
        id: 516, semptom: "Otururken Kuyruk Sokumu Ağrısı",
        anahtar_kelimeler: ["kuyruk sokumu", "oturma", "agri", "koksiks", "travma"],
        tanisal_bolum: "FTR / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Kuyruk sokumu (Koksiks) travması veya iltihabı tanısı için FTR'ye başvurulur.", aciklama: "Kuyruk sokumu bölgesi ağrıları.",
        hazirlik_notu: "En son ne zaman ve nasıl düştüğünüzü veya sert bir zeminde oturduğunuzu hatırlayınız. Oturma pozisyonunuzda değişiklik yapmayı deneyin."
    },
    {
        id: 517, semptom: "Ayak Başparmağında Şişlik ve Kızarıklık",
        anahtar_kelimeler: ["ayak", "basparmak", "sislik", "kizariklik", "gut", "ure"],
        tanisal_bolum: "Romatoloji / Ortopedi", tedavi_bolum: "Romatoloji",
        acil_durum: ["Yüksek ateş"],
        yapilmasi_gereken: "Gut hastalığı veya iltihaplı eklem sorunları şüphesiyle Romatoloji'ye başvurulur.", aciklama: "Metabolik eklem hastalıkları.",
        hazirlik_notu: "Daha önce yüksek proteinli beslenme veya alkol tüketimi sonrası benzer bir atak geçirip geçirmediğinizi not ediniz."
    },
    {
        id: 518, semptom: "Kasık Ağrısı (Erkek)",
        anahtar_kelimeler: ["kasik", "agri", "fıtık", "hernı", "testis", "uroloji"],
        tanisal_bolum: "Genel Cerrahi / Üroloji", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Testiste ani şişlik ve şiddetli ağrı"],
        yapilmasi_gereken: "Kasık fıtığı veya testis sorunları şüphesiyle Genel Cerrahi veya Üroloji'ye başvurulur.", aciklama: "Kasık bölgesi fıtık ve ürogenital sorunlar.",
        hazirlik_notu: "Öksürürken veya ıkınırken kasıkta ele gelen bir şişlik olup olmadığını kontrol ediniz."
    },
    {
        id: 519, semptom: "Kasık Ağrısı (Kadın)",
        anahtar_kelimeler: ["kasik", "agri", "kadın", "yumurtalık", "adet", "jinekoloji"],
        tanisal_bolum: "Kadın Hastalıkları ve Doğum", tedavi_bolum: "Kadın Hastalıkları ve Doğum",
        acil_durum: ["Şiddetli, ani karın ağrısı", "Kanama"],
        yapilmasi_gereken: "Yumurtalık kisti, enfeksiyon veya adet döngüsü ile ilgili sorunlar için Jinekoloji'ye başvurulur.", aciklama: "Kadın üreme sistemi sorunları.",
        hazirlik_notu: "Ağrının adet döngünüzün hangi günlerinde veya cinsel ilişki sonrası artıp artmadığını not ediniz."
    },
    
    // --- BAŞ VE YÜZ ORGANLARI (ID: 151-220) ---
    {
        id: 151, semptom: "Gözde Sinek Uçuşması ve Işık Çakması",
        anahtar_kelimeler: ["eye", "goz", "sinek", "uçuşma", "ışık", "retina"],
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı, perde inmesi hissi"],
        yapilmasi_gereken: "Retina yırtığı veya dekolmanı riski nedeniyle acil göz muayenesi gereklidir.", aciklama: "Retina ve vitreus sorunlarının acil tespiti.",
        hazirlik_notu: "Mümkünse, son 1-2 gün içinde herhangi bir kafa travması yaşayıp yaşamadığınızı doktorunuza bildirin."
    },
    {
        id: 152, semptom: "Gözde Kanlanma ve Çapaklanma",
        anahtar_kelimeler: ["eye", "goz", "kanlanma", "çapak", "konjonktivit", "kızarıklık"],
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı"],
        yapilmasi_gereken: "Enfeksiyon (konjonktivit), alerji veya göz kuruluğu tanısı için direkt Göz Hastalıkları uzmanına randevu alınız.", aciklama: "Göz enfeksiyonları, kuruluk ve alerji.",
        hazirlik_notu: "Kontak lens kullanıyorsanız (veya kullandıysanız), bunu mutlaka belirtin. Çapaklanmanın rengini (sarı/yeşil) not edin."
    },
    {
        id: 153, semptom: "Kulak Çınlaması ve İşitme Kaybı",
        anahtar_kelimeler: ["ear", "kulak", "cinlama", "tinnitus", "isitsel", "işitme"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Ani işitme kaybı", "Şiddetli baş dönmesi"],
        yapilmasi_gereken: "İşitme kaybı, kulak enfeksiyonları ve denge bozuklukları için KBB'ye başvurunuz.", aciklama: "İç kulak, işitme ve denge organları.",
        hazirlik_notu: "Yüksek sese maruz kalıp kalmadığınızı ve çınlamanın tek kulakta mı yoksa her ikisinde mi olduğunu not ediniz."
    },
    {
        id: 154, semptom: "Yutkunmada Zorluk ve Ses Kısıklığı",
        anahtar_kelimeler: ["bogaz", "ses", "yutkunma", "gırtlak", "larenjit"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Nefes almada zorluk (tıkanma hissi)"],
        yapilmasi_gereken: "Ses telleri, gırtlak ve nodül kontrolü için KBB'ye başvurulur.", aciklama: "Ses telleri ve gırtlak hastalıkları.",
        hazirlik_notu: "Zorluğun sıvı yutarken mi, katı yutarken mi, yoksa sürekli mi olduğunu belirtiniz."
    },
    {
        id: 155, semptom: "Yüzde Uyuşma (Tek Taraflı)",
        anahtar_kelimeler: ["face", "yuz", "uyusma", "karincalanma", "felc", "sinir"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yüzde ani asimetri (Felç şüphesi)", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Yüz siniri (Trigeminal nevralji) veya santral sinir sistemi sorunları için Nöroloji'ye başvurulur.", aciklama: "Sinir sıkışmaları veya santral sinir sistemi kaynaklı sorunlar.",
        hazirlik_notu: "Uyuşmanın tam olarak yüzün hangi bölgelerini (alın, yanak, dudak) etkilediğini not ediniz."
    },
    //... (Diğer 70+ Baş ve Yüz Semptomu)

    // --- YENİ EKLENEN BAŞ VE YÜZ SEMPTOMLARI (ID: 520-534) ---
    {
        id: 520, semptom: "Baş Ağrısı (Ense Kökenli, Gerginlik Tipi)",
        anahtar_kelimeler: ["bas agrisi", "ense", "gerilim", "stres", "tension"],
        tanisal_bolum: "Nöroloji / FTR", tedavi_bolum: "Nöroloji",
        acil_durum: ["Bilinç kaybı", "Ateş ve boyun sertliği"],
        yapilmasi_gereken: "Baş ağrısı tipinin tespiti ve tedavi için Nöroloji'ye başvurulur.", aciklama: "En sık görülen baş ağrısı tipleri.",
        hazirlik_notu: "Ağrının künt mü, zonklayıcı mı olduğunu ve herhangi bir ilaçla geçip geçmediğini not ediniz."
    },
    {
        id: 521, semptom: "Baş Ağrısı (Tek Taraflı, Bulantılı - Migren)",
        anahtar_kelimeler: ["bas agrisi", "migren", "tek", "bulanti", "ışık", "ses"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani ve hayatınızdaki en şiddetli baş ağrısı"],
        yapilmasi_gereken: "Migren tanısı ve ilaç tedavisi planlaması için Nöroloji'ye başvurulur.", aciklama: "Kronik ve şiddetli baş ağrısı tanısı.",
        hazirlik_notu: "Ağrı atağı öncesinde ışık/koku hassasiyeti (aura) olup olmadığını ve atağın ne kadar sürdüğünü kaydedin."
    },
    {
        id: 522, semptom: "Ani Görme Kaybı (Kısa Süreli)",
        anahtar_kelimeler: ["gorme", "kaybi", "körlük", "retina", "göz", "geçici"],
        tanisal_bolum: "Göz Hastalıkları / Nöroloji", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["**ACİL SERVİS**"],
        yapilmasi_gereken: "Göz tansiyonu, retina sorunları veya beyin damar tıkanıklığı şüphesiyle acilen Göz Hastalıkları veya Nöroloji'ye başvurulur.", aciklama: "Göz ve nörolojik acil durumlar.",
        hazirlik_notu: "Kaybın tek gözde mi yoksa her iki gözde mi olduğunu ve kaç saniye/dakika sürdüğünü netleştirin."
    },
    {
        id: 523, semptom: "Çift Görme (Diplopi)",
        anahtar_kelimeler: ["cift gorme", "diplopi", "göz", "nöroloji", "sinir"],
        tanisal_bolum: "Nöroloji / Göz Hastalıkları", tedavi_bolum: "Nöroloji",
        acil_durum: ["Göz hareketlerinde kısıtlılık", "Baş dönmesi"],
        yapilmasi_gereken: "Göz sinirleri veya beyin kaynaklı sorunların tespiti için Nöroloji'ye başvurulur.", aciklama: "Beyin ve göz sinirleri ilişkisi.",
        hazirlik_notu: "Tek gözünüzü kapattığınızda çift görmenin kaybolup kaybolmadığını kontrol edin. (Kayboluyorsa Nörolojik neden daha olasıdır)."
    },
    {
        id: 524, semptom: "Burun Kanaması (Tekrarlayan)",
        anahtar_kelimeler: ["burun", "kanama", "epistaksis", "kbb", "tansiyon"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB) / Dahiliye", tedavi_bolum: "KBB",
        acil_durum: ["Durdurulamayan şiddetli kanama"],
        yapilmasi_gereken: "Burun içi damar sorunları, tansiyon veya kanama bozuklukları için KBB'ye başvurulur.", aciklama: "KBB ve sistemik nedenler.",
        hazirlik_notu: "Son bir ayda kaç kez kanama yaşadığınızı ve kanamanın ne kadar sürdüğünü not edin. Tansiyon değerleriniz varsa yanınızda getirin."
    },
    {
        id: 525, semptom: "Koku Kaybı (Anosmi)",
        anahtar_kelimeler: ["koku", "kaybi", "anosmi", "sinus", "polip", "kovid"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB) / Nöroloji", tedavi_bolum: "KBB",
        acil_durum: ["Ani, şiddetli baş ağrısı"],
        yapilmasi_gereken: "Sinüs tıkanıklığı, enfeksiyon veya nörolojik nedenlerin tespiti için KBB'ye başvurulur.", aciklama: "Koku alma sisteminin değerlendirilmesi.",
        hazirlik_notu: "Koku kaybının bir enfeksiyon (grip/soğuk algınlığı) sonrası mı yoksa aniden mi başladığını belirtiniz."
    },
    {
        id: 526, semptom: "Ağızda Sürekli Kötü Tat",
        anahtar_kelimeler: ["agiz", "tat", "kotu", "dis", "disci", "reflu", "sinus"],
        tanisal_bolum: "Diş Hekimliği / KBB / Gastroenteroloji", tedavi_bolum: "Diş Hekimliği",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Diş çürükleri, diş eti hastalıkları, sinüzit veya reflü şüphesiyle Diş Hekimliği'ne başvurulur.", aciklama: "Ağız ve sindirim sistemi bağlantısı.",
        hazirlik_notu: "Dişlerinizi ve dilinizi ne kadar sık fırçaladığınızı ve bu durumun yemek yedikten sonra değişip değişmediğini not edin."
    },
    {
        id: 527, semptom: "Dilde Beyaz/Sarı Pas Tabakası",
        anahtar_kelimeler: ["dil", "pas", "beyaz", "sarilik", "mantar"],
        tanisal_bolum: "Dahiliye / Gastroenteroloji", tedavi_bolum: "Dahiliye",
        acil_durum: ["Yüksek ateş"],
        yapilmasi_gereken: "Mantar enfeksiyonu, sindirim sistemi sorunları veya vitamin eksikliği için Dahiliye'ye başvurulur.", aciklama: "Genel sistemik sağlık göstergesi.",
        hazirlik_notu: "Ağızda ve dilde yanma hissi veya yemek yerken acıma olup olmadığını belirtiniz."
    },
    {
        id: 528, semptom: "Kulak Arkası Şişlik ve Ağrı",
        anahtar_kelimeler: ["kulak", "arkasi", "sislik", "mastoid", "lenf"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Yüksek ateş, kulak akıntısı"],
        yapilmasi_gereken: "Lenf bezi büyümesi veya mastoidit şüphesiyle KBB'ye başvurulur.", aciklama: "Kulak ve çevresi enfeksiyonları.",
        hazirlik_notu: "Şişliğin yumuşak mı, sert mi olduğunu ve yakın zamanda boğaz enfeksiyonu geçirip geçirmediğinizi not edin."
    },
    {
        id: 529, semptom: "Ağız Kuruluğu (Kserostomi)",
        anahtar_kelimeler: ["agiz", "kuruluk", "tukuruk", "sjogren", "diyabet"],
        tanisal_bolum: "Dahiliye / Romatoloji", tedavi_bolum: "Dahiliye",
        acil_durum: ["Yutma güçlüğü"],
        yapilmasi_gereken: "Sistemik hastalıklar (Diyabet) veya Sjögren sendromu gibi romatizmal hastalıklar için Dahiliye/Romatoloji'ye başvurulur.", aciklama: "Tükürük bezi ve sistemik hastalıklar.",
        hazirlik_notu: "Göz kuruluğu veya eklem ağrısı gibi eşlik eden başka şikayetleriniz olup olmadığını belirtiniz."
    },
    {
        id: 530, semptom: "Kulakta Basınç ve Dolgunluk Hissi",
        anahtar_kelimeler: ["kulak", "basinc", "dolgunluk", "orta", "sinuzit"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Şiddetli baş dönmesi (Vertigo)"],
        yapilmasi_gereken: "Orta kulak basıncı (Östaki) veya sinüs sorunları için KBB'ye başvurulur.", aciklama: "Orta kulak ve denge sorunları.",
        hazirlik_notu: "Uçak yolculuğu, dalış veya hızlı rakım değişimi gibi tetikleyici durumlar yaşayıp yaşamadığınızı not ediniz."
    },
    {
        id: 531, semptom: "Diş Eti Kanaması (Fırçalarken)",
        anahtar_kelimeler: ["dis eti", "kanama", "gingivit", "peridontoloji", "disci"],
        tanisal_bolum: "Diş Hekimliği (Periodontoloji)", tedavi_bolum: "Diş Hekimliği",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Diş eti iltihabı (Gingivit) ve periodontal hastalıkların tedavisi için Periodontoloji'ye başvurulur.", aciklama: "Diş eti ve çevresi hastalıkları.",
        hazirlik_notu: "Kullandığınız diş fırçasının sertliğini ve diş ipi/arayüz fırçası kullanıp kullanmadığınızı not ediniz."
    },
    {
        id: 532, semptom: "Sürekli Olarak Burun Akıntısı ve Tıkanıklığı",
        anahtar_kelimeler: ["burun", "akinti", "tikaniklik", "alerji", "rinit"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB) / Alerji", tedavi_bolum: "KBB / Alerji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Alerjik rinit veya sinüzit tanısı için KBB'ye başvurulur.", aciklama: "Üst solunum yolu enfeksiyonu ve alerji.",
        hazirlik_notu: "Belirtilerin yılın belli dönemlerinde (mevsim geçişi) mi, yoksa sürekli mi olduğunu belirtiniz."
    },
    {
        id: 533, semptom: "Ses Kısıklığı (3 Haftadan Uzun)",
        anahtar_kelimeler: ["ses", "kisiklik", "larenjit", "nodul", "kbb"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Nefes almada zorluk"],
        yapilmasi_gereken: "Ses teli nodülleri, reflü hasarı veya diğer ciddi nedenlerin tespiti için KBB'ye başvurulur.", aciklama: "Ses teli ve gırtlak (Larenks) hastalıkları.",
        hazirlik_notu: "Mesleğinizin (öğretmen, şarkıcı vb.) sesinizi yorup yormadığını ve sigara kullanıp kullanmadığınızı not ediniz."
    },
    {
        id: 534, semptom: "Gözlerde Kuruluk ve Batma Hissi",
        anahtar_kelimeler: ["goz", "kuruluk", "batma", "gozluk", "yabanci cisim"],
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme bulanıklığı"],
        yapilmasi_gereken: "Göz kuruluğu (Kuru Göz Sendromu) tanısı ve tedavisi için Göz Hastalıkları uzmanına başvurulur.", aciklama: "Göz yüzeyi ve gözyaşı bezi sorunları.",
        hazirlik_notu: "Günde kaç saat bilgisayar/telefon ekranına baktığınızı ve klimalı ortamlarda ne kadar bulunduğunuzu belirtiniz."
    },

    // --- KARIN VE SİNDİRİM (ID: 221-300) ---
    {
        id: 221, semptom: "Mide Yanması ve Ağrısı (Kronik)",
        anahtar_kelimeler: ["stomach", "mide", "yanma", "reflu", "gastrit"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Kanlı kusmuk"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol isteyiniz. Kronikleşirse veya endoskopi gerekiyorsa Gastroenteroloji'ye sevk istenir.", aciklama: "Sindirim sistemi ve mide sorunları.",
        hazirlik_notu: "Randevudan önceki 8 saat boyunca aç kalmanız gerekebilir (Özellikle endoskopi şüphesi varsa). Ne yediğinizde şikayetlerinizin arttığını not edin."
    },
    {
        id: 222, semptom: "Karın Sağ Alt Bölge Ağrısı (Apandisit Şüphesi)",
        anahtar_kelimeler: ["karin", "abdomen", "sag", "alt", "apandisit", "agri"],
        tanisal_bolum: "Genel Cerrahi", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Ateş, bulantı, kusma ile birlikte şiddetli ağrı. ACİL SERVİS gereklidir!"],
        yapilmasi_gereken: "Apandisit veya cerrahi müdahale gerektiren karın içi sorunlar için Genel Cerrahi'ye başvurulur.", aciklama: "Apandisit ve cerrahi müdahale gerektiren karın içi sorunlar.",
        hazirlik_notu: "Ağrının başlangıçta göbek çevresinde mi, yoksa direkt sağ alt bölgede mi olduğunu hatırlayınız."
    },
    {
        id: 223, semptom: "Siyah Dışkı (Katran Rengi)",
        anahtar_kelimeler: ["siyah", "diskı", "kan", "rektal", "melena"],
        tanisal_bolum: "Gastroenteroloji / Genel Cerrahi", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["**ACİL SERVİS**'e gidiniz! Üst sindirim sisteminde kanama anlamına gelebilir."],
        yapilmasi_gereken: "İç kanama kaynağını bulmak için Gastroenteroloji'ye başvurulur.", aciklama: "Üst sindirim sistemi kanama şüphesi.",
        hazirlik_notu: "Son 48 saatte demir takviyesi veya böğürtlen gibi koyu renkli gıdalar tüketip tüketmediğinizi kontrol ediniz. (Bu durum dışkının rengini etkileyebilir)."
    },
    {
        id: 224, semptom: "Kabızlık ve Karın Şişliği",
        anahtar_kelimeler: ["kabızlık", "sislik", "diski", "zorlanma"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Uzun süreli tıkanıklık ve kusma"],
        yapilmasi_gereken: "Bağırsak hareketleri ve kronik sindirim sorunları için Dahiliye'ye başvurulur.", aciklama: "Bağırsak hareketleri ve genel sindirim sorunları.",
        hazirlik_notu: "Haftada kaç kez tuvalete çıktığınızı, dışkının sertliğini ve su tüketim miktarınızı not ediniz."
    },
    //... (Diğer 80+ Karın ve Sindirim Semptomu)

    // --- YENİ EKLENEN KARIN VE SİNDİRİM SEMPTOMLARI (ID: 535-549) ---
    {
        id: 535, semptom: "Karın Sol Alt Bölge Ağrısı",
        anahtar_kelimeler: ["karin", "sol", "alt", "divertikül", "kolit"],
        tanisal_bolum: "Gastroenteroloji / Genel Cerrahi", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Yüksek ateş, şiddetli kusma"],
        yapilmasi_gereken: "Kalın bağırsak (Kolon) iltihabı veya divertikülit şüphesi için Gastroenteroloji'ye başvurulur.", aciklama: "Kalın bağırsak hastalıkları.",
        hazirlik_notu: "Yakın zamanda lif tüketiminizde azalma veya kabızlık yaşayıp yaşamadığınızı belirtiniz."
    },
    {
        id: 536, semptom: "İshal (3 Günden Uzun ve Kanlı)",
        anahtar_kelimeler: ["ishal", "kanli", "enfeksiyon", "kolit"],
        tanisal_bolum: "Gastroenteroloji / Enfeksiyon Hastalıkları", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli dehidrasyon", "Yüksek ateş"],
        yapilmasi_gereken: "Bağırsak enfeksiyonları (Kolitis) veya iltihabi bağırsak hastalığı (IBD) için Gastroenteroloji'ye başvurulur.", aciklama: "Bağırsak iltihabi ve enfeksiyonları.",
        hazirlik_notu: "Son 1 hafta içinde yurt dışı seyahati veya şüpheli gıda tüketimi olup olmadığını not ediniz."
    },
    {
        id: 537, semptom: "Kusma (Safralı veya Kanlı)",
        anahtar_kelimeler: ["kusma", "safra", "kanli", "mide", "ulkus"],
        tanisal_bolum: "Gastroenteroloji / Genel Cerrahi", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["**ACİL SERVİS**"],
        yapilmasi_gereken: "Mide kanaması veya safra yolu tıkanıklığı şüphesi için acilen Gastroenteroloji'ye başvurulur.", aciklama: "Sindirim sistemi acil durumları.",
        hazirlik_notu: "Kusma ile birlikte başka semptomların (baş ağrısı, karın ağrısı) olup olmadığını ve kusmuğun yaklaşık miktarını belirtiniz."
    },
    {
        id: 538, semptom: "Mide Bulantısı ve Karın Şişliği (Yemek Sonrası)",
        anahtar_kelimeler: ["bulanti", "sislik", "yemek", "safra", "hazimsizlik"],
        tanisal_bolum: "Dahiliye / Gastroenteroloji", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Sarılık"],
        yapilmasi_gereken: "Safra kesesi sorunları (Taş), gastrit veya hazımsızlık için Gastroenteroloji'ye başvurulur.", aciklama: "Safra kesesi ve mide hastalıkları.",
        hazirlik_notu: "Özellikle yağlı yiyecekler tükettikten sonra mı şikayetlerinizin arttığını not edin."
    },
    {
        id: 539, semptom: "Rektumdan Taze Kan Gelmesi (Dışkı Üzerinde)",
        anahtar_kelimeler: ["rektal", "kanama", "taze", "basur", "hemoroid", "fissür"],
        tanisal_bolum: "Genel Cerrahi / Gastroenteroloji", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Aşırı kan kaybı"],
        yapilmasi_gereken: "Hemoroid, fissür veya kolon polipleri/kanseri tespiti için Genel Cerrahi'ye başvurulur.", aciklama: "Anüs ve kalın bağırsak sorunları.",
        hazirlik_notu: "Kanamanın dışkılamadan önce mi, sonra mı olduğunu, tuvalet kağıdında mı yoksa klozette mi görüldüğünü belirtiniz."
    },
    {
        id: 540, semptom: "Karında Elle Hissedilen Kitle",
        anahtar_kelimeler: ["karin", "kitle", "sislik", "tumor", "organ"],
        tanisal_bolum: "Genel Cerrahi / Gastroenteroloji", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Şiddetli karın ağrısı ve kusma"],
        yapilmasi_gereken: "Organ büyümesi, fıtık veya tümöral kitle şüphesiyle Genel Cerrahi'ye başvurulur.", aciklama: "Karın içi organ ve doku sorunları.",
        hazirlik_notu: "Kitlenin pozisyonunu, sertliğini ve hareket edip etmediğini not ediniz. Mümkünse randevudan 8 saat önce aç kalınız."
    },
    {
        id: 541, semptom: "Sürekli Gaz ve Şişkinlik",
        anahtar_kelimeler: ["gaz", "siskinlik", "ibs", "laktoz", "intolerans"],
        tanisal_bolum: "Dahiliye / Gastroenteroloji", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Ani, şiddetli karın ağrısı"],
        yapilmasi_gereken: "İrritabl Bağırsak Sendromu (IBS) veya gıda intoleransları için Dahiliye'ye başvurulur.", aciklama: "Fonksiyonel bağırsak bozuklukları.",
        hazirlik_notu: "Son 1 hafta içinde tükettiğiniz süt ürünleri, fasulye veya gaz yapan diğer gıdaları not edin."
    },
    {
        id: 542, semptom: "Karnın Sağ Üst Bölge Ağrısı",
        anahtar_kelimeler: ["karin", "sag", "ust", "safra", "karaciger"],
        tanisal_bolum: "Gastroenteroloji / Genel Cerrahi", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Sarılık", "Yüksek ateş"],
        yapilmasi_gereken: "Safra kesesi iltihabı (Kolesistit) veya karaciğer sorunları için Gastroenteroloji'ye başvurulur.", aciklama: "Safra kesesi ve karaciğer hastalıkları.",
        hazirlik_notu: "Ağrının kürek kemiğine veya sağ omuza yayılıp yayılmadığını ve son yediğiniz yemeği belirtiniz."
    },
    {
        id: 543, semptom: "Yutma Güçlüğü ve Boğazda Takılma Hissi",
        anahtar_kelimeler: ["yutkunma", "zorluk", "takilma", "yabanci", "yemek borusu", "disfaji"],
        tanisal_bolum: "Gastroenteroloji / KBB", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Yemek yiyememe", "Kilo kaybı"],
        yapilmasi_gereken: "Yemek borusu (Özofagus) sorunları veya darlık şüphesiyle Gastroenteroloji'ye başvurulur.", aciklama: "Yemek borusu hastalıkları.",
        hazirlik_notu: "Hangi tip gıdayı (sıvı mı katı mı) yutarken zorlandığınızı ve bu durumun ne zaman başladığını not edin."
    },
    {
        id: 544, semptom: "Dışkıda Mukus (Sümüksü Yapı)",
        anahtar_kelimeler: ["mukus", "sumuk", "diski", "kolit", "enfeksiyon"],
        tanisal_bolum: "Gastroenteroloji", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Kanlı ishal ve ateş"],
        yapilmasi_gereken: "İltihabi bağırsak hastalığı (IBD) veya bağırsak enfeksiyonları için Gastroenteroloji'ye başvurulur.", aciklama: "Bağırsak zarının iltihabı.",
        hazirlik_notu: "Aşırı stres dönemlerinde şikayetlerinizin artıp artmadığını gözlemleyiniz."
    },
    {
        id: 545, semptom: "Kronik Hıçkırık",
        anahtar_kelimeler: ["hickirik", "kronik", "akciger", "mide", "sinir"],
        tanisal_bolum: "Dahiliye / Nöroloji", tedavi_bolum: "Dahiliye",
        acil_durum: ["Nefes darlığı"],
        yapilmasi_gereken: "Mide, göğüs kafesi sinirleri veya diyafram sorunlarının tespiti için Dahiliye'ye başvurulur.", aciklama: "Diyafram ve sinir sistemi etkileşimi.",
        hazirlik_notu: "Hıçkırığın ne kadar süredir devam ettiğini ve hangi durumlarda (yemek sonrası, heyecan) arttığını belirtiniz."
    },
    {
        id: 546, semptom: "Ağız Kokusu (Kronik, Diş Problemi Yoksa)",
        anahtar_kelimeler: ["agiz kokusu", "halitoz", "mide", "reflu", "sinus"],
        tanisal_bolum: "Gastroenteroloji / KBB", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Reflü, mide sorunları, sinüzit veya bademcik taşı şüphesiyle Gastroenteroloji'ye başvurulur.", aciklama: "Sindirim ve solunum yolu sorunları.",
        hazirlik_notu: "Gastroenteroloji muayenesi için randevuya aç gelmeniz önerilebilir (8 saat açlık)."
    },
    {
        id: 547, semptom: "Karında Ses Artışı ve Gürültü",
        anahtar_kelimeler: ["gurultu", "ses", "bagirsak", "ishal"],
        tanisal_bolum: "Dahiliye", tedavi_bolum: "Dahiliye",
        acil_durum: ["Ani karın ağrısı ile birlikte kusma ve gaz/gaita çıkaramama"],
        yapilmasi_gereken: "Bağırsak hareketleri ve gazlanma sorunları için Dahiliye'ye başvurulur.", aciklama: "Bağırsak hareketlerinin değerlendirilmesi.",
        hazirlik_notu: "Aşırı gürültüden önce gaz çıkarma veya tuvalete çıkma ihtiyacı olup olmadığını not ediniz."
    },
    {
        id: 548, semptom: "Ateş ve Titreme ile Gelen Karın Ağrısı",
        anahtar_kelimeler: ["ates", "titreme", "karin agrisi", "enfeksiyon", "apandisit", "kolit"],
        tanisal_bolum: "Genel Cerrahi / Enfeksiyon Hastalıkları", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["**ACİL SERVİS**"],
        yapilmasi_gereken: "Apandisit, safra kesesi iltihabı veya böbrek enfeksiyonu şüphesiyle acilen Genel Cerrahi'ye başvurulur.", aciklama: "Akut karın ve cerrahi acil durumlar.",
        hazirlik_notu: "Ateşin karın ağrısından önce mi, yoksa sonra mı başladığını ve ağrının pozisyonla değişip değişmediğini belirtiniz."
    },
    {
        id: 549, semptom: "Karnın Orta Üst Bölge Ağrısı (Yemekten Sonra)",
        anahtar_kelimeler: ["karin", "orta", "ust", "pankreas", "mide", "agri"],
        tanisal_bolum: "Gastroenteroloji", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Sırt'a vuran şiddetli, kuşak tarzı ağrı"],
        yapilmasi_gereken: "Mide ülseri veya pankreas sorunları için Gastroenteroloji'ye başvurulur.", aciklama: "Pankreas ve mide sorunları.",
        hazirlik_notu: "Ağrı kesici veya mide ilacı kullanıp kullanmadığınızı ve bunun ağrıyı ne kadar azalttığını belirtiniz."
    },

    // --- DERMATOLOJİ, ÜREME VE PSİKİYATRİ (ID: 301-450+) ---
    {
        id: 301, semptom: "Vücutta Çıkan Yeni Benler",
        anahtar_kelimeler: ["ben", "mol", "cilt", "leke", "kanser"],
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Benin hızlı büyümesi", "kanaması", "renginin değişmesi"],
        yapilmasi_gereken: "Dermatoskopik inceleme ve tanı için Cildiye uzmanına başvurulur.", aciklama: "Cilt kanseri riskini değerlendirme ve ben takibi.",
        hazirlik_notu: "Değişen benlerin fotoğraflarını (tarihli) çekmek ve ne kadar süredir var olduğunu not etmek muayeneyi hızlandırır."
    },
    {
        id: 302, semptom: "Kronik Uykusuzluk (İnsomnia)",
        anahtar_kelimeler: ["uyku", "insomnia", "uykusuzluk", "psikiyatri", "sinir"],
        tanisal_bolum: "Psikiyatri / Nöroloji", tedavi_bolum: "Psikiyatri",
        acil_durum: ["İntihar düşüncesi"],
        yapilmasi_gereken: "Altta yatan psikolojik veya nörolojik nedenlerin tespiti için Psikiyatri veya Nöroloji'ye başvurulur.", aciklama: "Uyku bozuklukları ve ruh sağlığı sorunları.",
        hazirlik_notu: "Son 2 haftalık uyku saatlerinizi ve uyumadan önce yaptığınız rutinleri (telefon, televizyon) kaydedin."
    },
    {
        id: 303, semptom: "Şiddetli Halsizlik ve Depresif Ruh Hali",
        anahtar_kelimeler: ["depresyon", "ruh", "psikolojik", "stres", "anksiyete"],
        tanisal_bolum: "Psikiyatri", tedavi_bolum: "Psikiyatri",
        acil_durum: ["Kişinin kendine veya başkasına zarar verme riski"],
        yapilmasi_gereken: "Duygusal ve bilişsel bozuklukların tedavisi için direkt Psikiyatri'ye başvurulur.", aciklama: "Ruh sağlığı ve duygudurum bozuklukları.",
        hazirlik_notu: "Şikayetlerinizi tetikleyen büyük bir olay (kayıp, iş değişikliği) varsa bunu not edin."
    },
    {
        id: 304, semptom: "Tırnak Batması ve İltihap",
        anahtar_kelimeler: ["tirnak", "nail", "batik", "iltihap", "dermatoloji"],
        tanisal_bolum: "Dermatoloji (Cildiye) / Genel Cerrahi", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Ayakta yayılan şiddetli kızarıklık ve ateş"],
        yapilmasi_gereken: "İltihap, batık ve cerrahi gerektiren durumlar için Cildiye'ye başvurulur.", aciklama: "Tırnak ve deri enfeksiyonları.",
        hazirlik_notu: "Batık tırnağı kendiniz kesmeye çalışmayınız. Rahat, açık ayakkabılar giyerek geliniz."
    },
    {
        id: 305, semptom: "Erkekte Sertleşme Sorunu",
        anahtar_kelimeler: ["ereksiyon", "sertlesme", "impotans", "cinsel", "uroloji"],
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Hormonal ve dolaşım sistemi kaynaklı sorunların tespiti için Üroloji'ye başvurulur.", aciklama: "Erkek üreme ve cinsel sağlığı.",
        hazirlik_notu: "Şeker hastalığı (Diyabet) veya yüksek tansiyon gibi kronik hastalıklarınız varsa, randevu öncesi doktorunuza bildiriniz."
    },
    //... (Diğer 150+ Dermatoloji, Üreme ve Psikiyatri Semptomu)

    // --- YENİ EKLENEN DERMATOLOJİ, ÜREME VE PSİKİYATRİ SEMPTOMLARI (ID: 550-570) ---
    {
        id: 550, semptom: "Ciltte Kaşıntılı Kızarıklık ve Kabarıklık (Ürtiker)",
        anahtar_kelimeler: ["kızarıklık", "kasinti", "kabarma", "ürtiker", "alerji"],
        tanisal_bolum: "Dermatoloji / Alerji", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Nefes darlığı", "Yüz ve dil şişmesi"],
        yapilmasi_gereken: "Alerjik veya kronik kurdeşen (Ürtiker) tanısı ve tedavisi için Dermatoloji'ye başvurulur.", aciklama: "Alerjik deri reaksiyonları.",
        hazirlik_notu: "Son 48 saatte yediğiniz, içtiğiniz veya teninize temas eden (yeni krem, ilaç) her şeyi listeleyin."
    },
    {
        id: 551, semptom: "Ciltte Pullu, Kabuklu, Kaşıntılı Plaklar (Egzama)",
        anahtar_kelimeler: ["egzama", "dermatit", "kasinti", "cilt", "kuruluk"],
        tanisal_bolum: "Dermatoloji", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Şiddetli yaygın enfeksiyon"],
        yapilmasi_gereken: "Atopik dermatit (Egzama) veya diğer cilt iltihapları için Dermatoloji'ye başvurulur.", aciklama: "Derinin iltihabi reaksiyonları.",
        hazirlik_notu: "Şikayetlerinizin hangi mevsimde veya stres altında arttığını belirtiniz. Cildi tahriş eden kumaşlardan kaçının."
    },
    {
        id: 552, semptom: "Akne (Şiddetli ve İz Bırakan)",
        anahtar_kelimeler: ["sivilce", "akne", "cilt", "hormon", "iz"],
        tanisal_bolum: "Dermatoloji / Endokrinoloji", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Şiddetli akne (Sivilce) ve altta yatan hormonal nedenlerin tespiti için Dermatoloji'ye başvurulur.", aciklama: "Cilt ve hormonal sistem sorunları.",
        hazirlik_notu: "Kadınlar için: Adet döngüsüyle (dönem öncesi) aknenin artıp artmadığını not ediniz."
    },
    {
        id: 553, semptom: "Kadında Anormal Vajinal Akıntı ve Kaşıntı",
        anahtar_kelimeler: ["vajina", "akinti", "kasinti", "mantar", "enfeksiyon"],
        tanisal_bolum: "Kadın Hastalıkları ve Doğum", tedavi_bolum: "Kadın Hastalıkları ve Doğum",
        acil_durum: ["Yüksek ateş ve karın ağrısı"],
        yapilmasi_gereken: "Vajinal enfeksiyon (Mantar, Bakteriyel) veya cinsel yolla bulaşan hastalıklar için Jinekoloji'ye başvurulur.", aciklama: "Kadın üreme sistemi enfeksiyonları.",
        hazirlik_notu: "Muayene için en uygun zaman adet kanamanızın bittiği günlerdir. Akıntının rengini ve kokusunu not ediniz."
    },
    {
        id: 554, semptom: "İdrar Yaparken Ağrı ve Yanma",
        anahtar_kelimeler: ["idrar", "yanma", "agri", "sistit", "enfeksiyon", "uroloji"],
        tanisal_bolum: "Üroloji / Nefroloji / Kadın Hastalıkları", tedavi_bolum: "Üroloji",
        acil_durum: ["Belde şiddetli ağrı ve yüksek ateş"],
        yapilmasi_gereken: "İdrar yolu enfeksiyonu (Sistit) veya böbrek taşları şüphesiyle Üroloji'ye başvurulur.", aciklama: "Üriner sistem enfeksiyonları.",
        hazirlik_notu: "Mümkünse, ilk idrar örneğinizi vermeden önce 2 saat tuvalete gitmeyiniz (idrar kültürü için)."
    },
    {
        id: 555, semptom: "Erkekte İdrarda Kan (Hematüri)",
        anahtar_kelimeler: ["idrar", "kan", "hematüri", "mesane", "böbrek"],
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["Pıhtılı kanama", "Şiddetli ağrı"],
        yapilmasi_gereken: "Böbrek, mesane veya prostat sorunları tespiti için acilen Üroloji'ye başvurulur.", aciklama: "Üriner sistem kanamaları.",
        hazirlik_notu: "Son 48 saatte pancar gibi kırmızı renkli gıdalar tüketip tüketmediğinizi kontrol edin (idrar rengini etkileyebilir)."
    },
    {
        id: 556, semptom: "Panik Atak (Tekrarlayan Korku Nöbetleri)",
        anahtar_kelimeler: ["panik", "atak", "korku", "kaygi", "anksiyete"],
        tanisal_bolum: "Psikiyatri", tedavi_bolum: "Psikiyatri",
        acil_durum: ["Kendine zarar verme riski"],
        yapilmasi_gereken: "Panik Bozukluk ve Anksiyete bozuklukları için Psikiyatri'ye başvurulur.", aciklama: "Anksiyete ve panik bozuklukları.",
        hazirlik_notu: "Atak sırasında nefes darlığı, çarpıntı gibi fiziksel semptomların ne kadar sürdüğünü ve atakları tetikleyen durumu not edin."
    },
    {
        id: 557, semptom: "Obsesif Düşünceler ve Tekrarlayan Davranışlar (OKB)",
        anahtar_kelimeler: ["okb", "obsesif", "kompulsif", "takinti", "psikiyatri"],
        tanisal_bolum: "Psikiyatri", tedavi_bolum: "Psikiyatri",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Obsesif Kompulsif Bozukluk (OKB) tanısı ve tedavisi için Psikiyatri'ye başvurulur.", aciklama: "Kaygı ve takıntı bozuklukları.",
        hazirlik_notu: "Takıntılarınızın (obsesyon) ve tekrarlayıcı davranışlarınızın (kompülsiyon) günlük hayatınızı ne kadar kısıtladığını anlatmaya hazırlanın."
    },
    {
        id: 558, semptom: "Hafıza Kaybı ve Unutkanlık (Günlük Yaşamı Etkileyen)",
        anahtar_kelimeler: ["hafiza", "unutkanlik", "bunama", "demans", "alzheimer"],
        tanisal_bolum: "Nöroloji / Psikiyatri", tedavi_bolum: "Nöroloji",
        acil_durum: ["Bilinç bulanıklığı"],
        yapilmasi_gereken: "Demans (Bunama), Alzheimer veya vitamin eksiklikleri tespiti için Nöroloji'ye başvurulur.", aciklama: "Bilişsel işlev bozuklukları.",
        hazirlik_notu: "Yanınızda, günlük yaşamınızdaki değişiklikleri gözlemleyen bir yakınınızın olması faydalıdır."
    },
    {
        id: 559, semptom: "Erkekte Testiste Ağrı ve Şişlik",
        anahtar_kelimeler: ["testis", "agri", "sislik", "torsiyon", "iltihap"],
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["Ani, şiddetli ağrı. **ACİL SERVİS**"],
        yapilmasi_gereken: "Testis iltihabı (Orşit) veya Testis Torsiyonu şüphesiyle acilen Üroloji'ye başvurulur.", aciklama: "Erkek üreme sistemi acil durumları.",
        hazirlik_notu: "Son zamanlarda ağır fiziksel aktivite veya travma yaşayıp yaşamadığınızı not ediniz."
    },
    {
        id: 560, semptom: "Kadında Adet Düzensizliği ve Aşırı Kanama",
        anahtar_kelimeler: ["adet", "kanama", "duzensizlik", "jinekoloji", "polikistik"],
        tanisal_bolum: "Kadın Hastalıkları ve Doğum", tedavi_bolum: "Kadın Hastalıkları ve Doğum",
        acil_durum: ["Durdurulamayan kanama"],
        yapilmasi_gereken: "Hormonal dengesizlikler, polikistik over veya miyom şüphesiyle Jinekoloji'ye başvurulur.", aciklama: "Kadın hormonal ve üreme sistemi sorunları.",
        hazirlik_notu: "Son 6 aylık adet başlama tarihlerini ve kanamanın miktarını (kaç ped değiştirdiğinizi) not ediniz."
    },
    {
        id: 561, semptom: "Tırnaklarda Renk/Şekil Değişikliği ve Kalınlaşma",
        anahtar_kelimeler: ["tirnak", "mantar", "renk", "kalinlasma", "dermatoloji"],
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Tırnak mantarı (Onikomikoz) veya sedef hastalığı gibi tırnak hastalıkları için Dermatoloji'ye başvurulur.", aciklama: "Tırnak hastalıkları.",
        hazirlik_notu: "Tırnaklarınızı oje, takma tırnak veya benzeri kozmetik ürünlerden arındırarak muayeneye geliniz."
    },
    {
        id: 562, semptom: "Kontrol Edilemeyen Öfke Patlamaları",
        anahtar_kelimeler: ["ofke", "sinir", "psikiyatri", "duygudurum"],
        tanisal_bolum: "Psikiyatri", tedavi_bolum: "Psikiyatri",
        acil_durum: ["Şiddet eğilimi"],
        yapilmasi_gereken: "Duygudurum veya dürtü kontrol bozuklukları için Psikiyatri'ye başvurulur.", aciklama: "Duygudurum bozuklukları.",
        hazirlik_notu: "Öfke patlamalarının sıklığını, süresini ve patlamadan hemen önce yaşadığınız duyguları (kaygı, üzüntü) not edin."
    },
    {
        id: 563, semptom: "Saç Dökülmesi (Yaygın ve Yoğun)",
        anahtar_kelimeler: ["sac", "dökülme", "alopesı", "dermatoloji", "tiroid"],
        tanisal_bolum: "Dermatoloji / Endokrinoloji", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Hormonal, vitamin eksiklikleri veya otoimmün nedenlerin tespiti için Dermatoloji'ye başvurulur.", aciklama: "Saç ve hormonal sağlık.",
        hazirlik_notu: "Günde yaklaşık kaç tel saçınızın döküldüğünü (tarakta, duşta) ve dökülmenin ne zaman başladığını not ediniz."
    },
    {
        id: 564, semptom: "Vücutta İstem Dışı Titreme (Tremor)",
        anahtar_kelimeler: ["titreme", "tremor", "parkinson", "sinir", "nöroloji"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yürümede ve dengede bozulma"],
        yapilmasi_gereken: "Esansiyel tremor, Parkinson veya diğer nörolojik hastalıklar için Nöroloji'ye başvurulur.", aciklama: "Hareket bozuklukları.",
        hazirlik_notu: "Titremenin istirahat halinde mi, yoksa bir şeye uzanırken/yazarken mi arttığını gözlemleyiniz."
    },
    {
        id: 565, semptom: "Cinsel İstekte Azalma (Libido Kaybı)",
        anahtar_kelimeler: ["cinsel", "istek", "libido", "hormon", "psikiyatri"],
        tanisal_bolum: "Endokrinoloji / Psikiyatri", tedavi_bolum: "Endokrinoloji / Psikiyatri",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Hormonal dengesizlikler (Testosteron, Prolaktin) veya psikolojik nedenler için Endokrinoloji/Psikiyatri'ye başvurulur.", aciklama: "Hormonal ve ruh sağlığı sorunları.",
        hazirlik_notu: "Uyku düzeninizi, stres seviyenizi ve alkol/sigara tüketiminizi dürüstçe belirtiniz."
    },
    {
        id: 566, semptom: "Uykuda Bacakları Hareket Ettirme İsteği (Huzursuz Bacak)",
        anahtar_kelimeler: ["huzursuz bacak", "uyku", "kramp", "demır", "nöroloji"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Huzursuz Bacak Sendromu tanısı ve demir eksikliği kontrolü için Nöroloji'ye başvurulur.", aciklama: "Uyku ve hareket bozuklukları.",
        hazirlik_notu: "Şikayetlerinizin akşam ve gece saatlerinde (uzanırken) artıp artmadığını not ediniz. Kansızlık geçmişinizi belirtin."
    },
    {
        id: 567, semptom: "Erkekte Prostat Büyümesi Belirtileri (Sık İdrara Çıkma)",
        anahtar_kelimeler: ["prostat", "idrar", "sık", "gece", "uroloji"],
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["Hiç idrar yapamama"],
        yapilmasi_gereken: "Prostat büyümesi (BPH) veya prostat kanseri şüphesiyle Üroloji'ye başvurulur.", aciklama: "Erkek üriner sistem sorunları.",
        hazirlik_notu: "Bir gün boyunca ne kadar sıvı tükettiğinizi, kaç kez tuvalete gittiğinizi (gece dahil) kaydediniz."
    },
    {
        id: 568, semptom: "Tırnaklarda Beyaz Lekeler",
        anahtar_kelimeler: ["tirnak", "beyaz", "leke", "vitamin", "çinko"],
        tanisal_bolum: "Dermatoloji / Dahiliye", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Çinko eksikliği veya tırnak travmaları için Dermatoloji'ye başvurulur.", aciklama: "Mineral eksikliklerinin değerlendirilmesi.",
        hazirlik_notu: "Lekelerin tırnak dibinden mi başladığını yoksa tırnak plağının tamamına mı yayıldığını not ediniz."
    },
    {
        id: 569, semptom: "Sırt ve Göğüste Sivilce (Akne)",
        anahtar_kelimeler: ["sırt", "gogus", "akne", "sivilce"],
        tanisal_bolum: "Dermatoloji", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Vücut aknesi ve tedavi planlaması için Dermatoloji'ye başvurulur.", aciklama: "Cilt hastalıkları.",
        hazirlik_notu: "Kullandığınız duş jeli, sabun ve spor sonrası hemen duş alıp almadığınızı belirtiniz."
    },
    {
        id: 570, semptom: "Duygusal Küntleşme ve İlgi Kaybı",
        anahtar_kelimeler: ["duygusal", "küntlesme", "ilgi", "kaybi", "depresyon"],
        tanisal_bolum: "Psikiyatri", tedavi_bolum: "Psikiyatri",
        acil_durum: ["İntihar düşüncesi"],
        yapilmasi_gereken: "Ağır Depresyon veya duygudurum bozuklukları için Psikiyatri'ye başvurulur.", aciklama: "Ruh sağlığı bozuklukları.",
        hazirlik_notu: "Bu durumun ne kadar süredir devam ettiğini ve keyif aldığınız aktivitelere karşı dahi bir isteksizlik olup olmadığını netleştirin."
    }
];


// --- ANA FONKSİYONLAR (Türkçe Karakter Uyumlu Arama) ---

function aramaYap() {
    // 1. Arama metnini standardize et
    const aramaMetni = normalizeTurkish(document.getElementById('arama_input').value);
    const sonuclarListesi = document.getElementById('sonuclar_listesi');
    sonuclarListesi.innerHTML = ''; 
    // Kartı placeholder'a sıfırla (estetik placeholder yapısı HTML'de tanımlı)
    document.getElementById('detay_karti').innerHTML = `
        <div class="placeholder-content text-center">
            <i class="fas fa-map-marked-alt fa-4x mb-4" style="color:var(--primary-color);"></i>
            <h4 class="mb-2">Aramaya Başlayın, Yönlendirme Kartınızı Görüntüleyin.</h4>
            <p class="mt-3">
                <i class="fas fa-info-circle me-1"></i>Bu rehber, doğru uzmana ulaşmanız için hazırlanmıştır. Tıbbi teşhis içermez.
            </p>
        </div>
    `;

    if (aramaMetni.length < 2) {
        sonuclarListesi.style.display = 'none';
        return; 
    }

    // 2. İKİ FARKLI ALANDA FİLTRELEME YAP
    const filtrelenmis = SEMPTOM_VERILERI.filter(veri => {
        const normalizeSemptom = normalizeTurkish(veri.semptom);
        const keywordMatch = veri.anahtar_kelimeler.some(keyword => 
            normalizeTurkish(keyword).includes(aramaMetni)
        );
        
        return normalizeSemptom.includes(aramaMetni) || keywordMatch;
    });

    // 3. Sonuçları göster
    sonuclarListesi.style.display = 'block';

    if (filtrelenmis.length === 0) {
        sonuclarListesi.innerHTML = '<li class="list-group-item disabled text-center">Aradığınız semptom bulunamadı.</li>';
        return;
    }

    filtrelenmis.forEach(veri => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = veri.semptom;
        li.onclick = () => detaylariGoster(veri.id); 
        sonuclarListesi.appendChild(li);
    });
}

function detaylariGoster(id) {
    const veri = SEMPTOM_VERILERI.find(d => d.id === id);
    const detayKarti = document.getElementById('detay_karti');
    document.getElementById('sonuclar_listesi').style.display = 'none';

    const acilListe = veri.acil_durum.map(item => `<span>${item}</span>`).join(' • ');
    // Yeni Hazırlık Notu Kutusu
    const hazirlikNotu = veri.hazirlik_notu ? 
        `<div class="asama asama-tedavi" style="background-color: #fce4ec; border: 1px solid #d81b6040;">
            <h4><i class="fas fa-list-check icon-vurgu" style="color:#d81b60;"></i>Muayene Öncesi Hazırlık Notu</h4>
            <p class="aciklama-detay" style="border-top: none;">
                <i class="fas fa-exclamation-circle me-2 text-danger"></i>${veri.hazirlik_notu}
            </p>
        </div>` : '';

    const acilUyari = veri.acil_durum.length > 0 ? 
        `<div class="acil-uyari-sakin">
            <div class="icon"><i class="fas fa-exclamation-triangle"></i></div>
            <div>
                <strong>ACİL UYARI:</strong> Eğer **${acilListe}** durumlarından biri varsa **HİÇ VAKİT KAYBETMEDEN 112'Yİ ARAYIN**!
            </div>
        </div>` : '';
        
    detayKarti.innerHTML = `
        <h3 class="card-title text-center mb-5" style="color: var(--text-dark); font-family: var(--font-header); font-weight: 700;">
            <i class="fas fa-notes-medical me-2 text-muted"></i> ${veri.semptom} İçin Tıbbi Yönlendirme Protokolü
        </h3>
        
        ${acilUyari}
        
        <div class="protokol-asamalari row">
            <div class="col-md-6">
                <div class="asama asama-tani">
                    <h4><i class="fas fa-eye icon-vurgu" style="color:var(--accent-color);"></i>Öncelikli Başvuru: Tanısal Uzmanlık</h4>
                    <span class="bolum-adi">${veri.tanisal_bolum}</span>
                    <p class="aciklama-detay">
                        <strong>Değerlendirme Amacı:</strong> ${veri.aciklama}
                    </p>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="asama asama-tedavi">
                    <h4><i class="fas fa-prescription-bottle-alt icon-vurgu" style="color:#d81b60;"></i>İkincil Başvuru: Tedavi ve Çözüm Uzmanlık Alanı</h4>
                    <span class="bolum-adi">${veri.tedavi_bolum}</span>
                    <p class="aciklama-detay">
                        <strong>Hekim Tavsiyesi:</strong> ${veri.yapilmasi_gereken}
                    </p>
                </div>
            </div>
        </div>
        
        ${hazirlikNotu}
    `;
    document.getElementById('arama_input').value = veri.semptom;
    document.getElementById('detay_karti').scrollIntoView({ behavior: 'smooth' });
}

// Sayfa yüklendiğinde ve arama yapıldığında placeholder'ı tekrar yüklemek için (HTML dosyasında bu kod zaten var, burası JS'ye uygunluk için eklenmiştir)
document.addEventListener('DOMContentLoaded', () => {
    // Bu kısım boş bırakılabilir, çünkü HTML'de yer tutucu zaten ayarlanmıştır.
});
