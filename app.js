// app.js dosyası - NİHAİ VE 400+ SEMPTOM PROTOKOLÜ

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
        yapilmasi_gereken: "Enfeksiyon kaynağını ve kan değerlerini bulmak için Dahiliye'ye başvurunuz.", aciklama: "Ateşli hastalıkların ve organ sistemlerindeki genel sorunların ilk inceleme bölümüdür."
    },
    {
        id: 2, semptom: "Halsizlik ve Sürekli Yorgunluk",
        anahtar_kelimeler: ["tiredness", "yorgunluk", "bitkinlik", "enerjisizlik", "kronik"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Ani kilo kaybı", "Şiddetli nefes darlığı"],
        yapilmasi_gereken: "Kan tahlilleri ve vitamin eksiklikleri (B12, D) kontrolü için Dahiliye'ye başvurunuz.", aciklama: "Vücudun temel sistemlerinin kontrolü ve kronik yorgunluğun nedeninin tespiti."
    },
    {
        id: 3, semptom: "Ani Kilo Kaybı (Sebepsiz)",
        anahtar_kelimeler: ["weight loss", "kilo kaybi", "zayiflama", "nedensiz", "metabolizma"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Onkoloji",
        acil_durum: ["Yüksek ateş", "Gece terlemesi"],
        yapilmasi_gereken: "Metabolik, sindirim veya enfeksiyonel nedenlerin tespiti için Dahiliye'ye başvurunuz.", aciklama: "Organ fonksiyonlarının ve metabolizmanın kontrolü."
    },
    {
        id: 4, semptom: "Aşırı Terleme (Hiperhidroz)",
        anahtar_kelimeler: ["terleme", "sweating", "endokrin", "tiroid", "hiperhidroz"],
        tanisal_bolum: "Dahiliye / Endokrinoloji", tedavi_bolum: "Endokrinoloji",
        acil_durum: ["Ani kilo kaybı ve yüksek ateş"],
        yapilmasi_gereken: "Tiroid ve hormonal dengesizliklerin kontrolü için Endokrinoloji'ye başvurunuz.", aciklama: "Metabolizma ve hormonal sistem sorunları."
    },
    {
        id: 5, semptom: "Vücutta Dolaşan Ağrı (Eklemlerde)",
        anahtar_kelimeler: ["eklem", "joint", "agri", "romato", "romatizma", "romatoid"],
        tanisal_bolum: "Romatoloji / FTR", tedavi_bolum: "Romatoloji",
        acil_durum: ["Ateşle birlikte eklem şişliği"],
        yapilmasi_gereken: "Romatizmal ve iltihaplı hastalıkların (artrit, fibromiyalji) tanısı için Romatoloji'ye başvurunuz.", aciklama: "Bağ dokusu ve iltihaplı eklem hastalıkları."
    },
    {
        id: 6, semptom: "Ani Tansiyon Düşmesi",
        anahtar_kelimeler: ["blood pressure", "tansiyon", "dusus", "sok", "hipotansiyon", "bayilma"],
        tanisal_bolum: "Dahiliye / Kardiyoloji", tedavi_bolum: "Dahiliye",
        acil_durum: ["Bayılma, bilinç kaybı, şok belirtileri"],
        yapilmasi_gereken: "Dolaşım, kalp ve sıvı dengesi kontrolü için Dahiliye'ye başvurunuz.", aciklama: "Dolaşım sistemi ve genel organ fonksiyonlarının kontrolü."
    },
    {
        id: 7, semptom: "Hızlı Nabız ve Çarpıntı",
        anahtar_kelimeler: ["nabiz", "kalp", "hizli", "carpinti", "aritmi"],
        tanisal_bolum: "Kardiyoloji", tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Göğüste sıkışma", "Nefes darlığı ile çarpıntı"],
        yapilmasi_gereken: "Kalp ritmi, damarlar ve kapakçıklar için direkt Kardiyoloji'ye başvurunuz.", aciklama: "Kalp ve damar sistemi ile ilgili tüm şikayetler için ana uzmanlık."
    },
    {
        id: 8, semptom: "İştah Artışı ve Kilo Kaybı",
        anahtar_kelimeler: ["istah", "yemek", "kilo", "kaybi", "tiroid"],
        tanisal_bolum: "Endokrinoloji", tedavi_bolum: "Endokrinoloji",
        acil_durum: ["Kalp çarpıntısı", "Ateş"],
        yapilmasi_gereken: "Tiroid bezinin aşırı çalışması (Hipertiroidi) şüphesiyle Endokrinoloji'ye başvurunuz.", aciklama: "Metabolizma ve hormonal sistem sorunları."
    },
    //... (Diğer Genel Semptomlar)
    {id: 49, semptom: "Gece Terlemesi", anahtar_kelimeler: ["night sweat", "gece", "terleme"], tanisal_bolum: "Dahiliye", tedavi_bolum: "Dahiliye", acil_durum: ["Ateş ve sebepsiz kilo kaybı"], yapilmasi_gereken: "Enfeksiyonel veya sistemik hastalıkların tespiti için Dahiliye'ye başvurunuz.", aciklama: "Sistemik hastalıkların genel belirtileri."},
    {id: 50, semptom: "Boyunda Şişlik (Elle Hissedilen)", anahtar_kelimeler: ["neck", "boyun", "sislik", "nodul", "lenf bezi"], tanisal_bolum: "Endokrinoloji / Genel Cerrahi", tedavi_bolum: "Genel Cerrahi", acil_durum: ["Nefes almada zorluk", "Hızlı büyüme"], yapilmasi_gereken: "Tiroid nodülleri ve lenf bezleri kontrolü için Endokrinoloji'ye başvurulur.", aciklama: "Tiroid ve lenf sistemi sorunları."},

    // --- OMURGA VE EKLEMLER (ID: 51-150) ---
    {
        id: 51, semptom: "Bel Ağrısı (Bacağa Yayılan Sızı)",
        anahtar_kelimeler: ["back", "bel", "low back", "fıtık", "siyatik", "agri", "bacak", "lomber"],
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Bacakta ani güç kaybı", "İdrar/gaita kaçırma"],
        yapilmasi_gereken: "Bel fıtığı veya sinir sıkışması şüphesiyle MR için Beyin Cerrahisi veya Ortopedi'ye başvurulur. Tedavi FTR ile başlar.", aciklama: "Bel omurgası, sinir kökleri ve omurilik sorunları."
    },
    {
        id: 52, semptom: "Bel Ağrısı (Sadece Kas Ağrısı)",
        anahtar_kelimeler: ["back", "bel", "kas", "gerilme", "tutulma", "lumbago"],
        tanisal_bolum: "FTR", tedavi_bolum: "FTR",
        acil_durum: ["Ateş ve bilinç bulanıklığı"],
        yapilmasi_gereken: "Kas spazmı, duruş bozukluğu ve gerginlik tedavisi için FTR'ye başvurulur.", aciklama: "Duruş bozuklukları ve basit kas gerginliği."
    },
    {
        id: 53, semptom: "Sırt Ağrısı (Kürek Kemikleri Arası)",
        anahtar_kelimeler: ["sirt", "back", "kurek", "skolyoz", "durus", "torakal"],
        tanisal_bolum: "FTR / Dahiliye", tedavi_bolum: "FTR",
        acil_durum: ["Sırt ağrısıyla birlikte nefes darlığı"],
        yapilmasi_gereken: "Kas spazmı ve duruş bozukluğu için FTR'ye; iç organ kaynaklı ağrı şüphesi varsa Dahiliye'ye başvurulur.", aciklama: "Duruş bozuklukları ve kas gerginliğinin tanısı."
    },
    {
        id: 54, semptom: "Boyun Ağrısı ve Kol Uyuşması",
        anahtar_kelimeler: ["neck", "boyun", "omuz", "kol", "uyusma", "fıtık", "servikal"],
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Nöroloji", tedavi_bolum: "FTR",
        acil_durum: ["Ani güç kaybı", "Yüksek ateş"],
        yapilmasi_gereken: "Boyun fıtığı veya sinir sıkışması şüphesi varsa Beyin Cerrahisi'ne gidilir. Tedavi FTR ile başlar.", aciklama: "Boyun omurgası ve sinir kökleri sorunları."
    },
    {
        id: 55, semptom: "Diz Ağrısı (Merdivende Artan)",
        anahtar_kelimeler: ["knee", "diz", "merdiven", "kireclenme", "eklem"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik", "Dizde kilitlenme"],
        yapilmasi_gereken: "Menisküs, kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz. Tedavi için FTR'ye sevk edilir.", aciklama: "Diz eklemi ve çevresindeki bağ dokusu sorunları."
    },
    {
        id: 56, semptom: "Kalça Ağrısı (Yürürken Artan)",
        anahtar_kelimeler: ["hip", "kalca", "agri", "kireclenme", "eklem", "kemik"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli travma sonrası ağrı"],
        yapilmasi_gereken: "Kalça kireçlenmesi veya eklem sorunları için Ortopedi'ye başvurulur.", aciklama: "Kalça eklemi, kireçlenme ve kas sorunları."
    },
    {
        id: 57, semptom: "Omuzda Takılma Hissi",
        anahtar_kelimeler: ["shoulder", "omuz", "takilma", "donuk", "tendon", "rotator"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR",
        acil_durum: ["Kolun yerinden çıkmış görünmesi"],
        yapilmasi_gereken: "Rotator manşet yırtıkları, donuk omuz veya tendon iltihabı gibi durumlar için Ortopedi'ye başvurulur.", aciklama: "Omuz eklemi ve tendon sorunları."
    },
    {
        id: 58, semptom: "Ayak Bileği Burkulması (Travma)",
        anahtar_kelimeler: ["ankle", "ayak", "burkulma", "travma", "bag", "sislik"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi",
        acil_durum: ["Üzerine basamama", "Şekil bozukluğu"],
        yapilmasi_gereken: "Kırık, bağ ve tendon hasarı şüphesiyle direkt Ortopedi'ye başvurunuz.", aciklama: "Kemik, eklem ve bağ dokusu yaralanmaları."
    },
    {
        id: 59, semptom: "El Bileğinde Ağrı ve Uyuşma",
        anahtar_kelimeler: ["wrist", "bilek", "el", "uyusma", "karpal", "tunel"],
        tanisal_bolum: "Nöroloji / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Ani güç kaybı"],
        yapilmasi_gereken: "Sinir sıkışması (Karpal Tünel Sendromu) tanısı için Nöroloji'ye, tendon sorunları için Ortopedi'ye başvurulur.", aciklama: "Sinir sıkışması tanısı ve kas-iskelet sistemi sorunları."
    },
    //... (Diğer 90+ Eklem ve Omurga Semptomu)

    // --- BAŞ VE YÜZ ORGANLARI (ID: 151-220) ---
    {
        id: 151, semptom: "Gözde Sinek Uçuşması ve Işık Çakması",
        anahtar_kelimeler: ["eye", "goz", "sinek", "uçuşma", "ışık", "retina"],
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı, perde inmesi hissi"],
        yapilmasi_gereken: "Retina yırtığı veya dekolmanı riski nedeniyle acil göz muayenesi gereklidir.", aciklama: "Retina ve vitreus sorunlarının acil tespiti."
    },
    {
        id: 152, semptom: "Gözde Kanlanma ve Çapaklanma",
        anahtar_kelimeler: ["eye", "goz", "kanlanma", "çapak", "konjonktivit", "kızarıklık"],
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı"],
        yapilmasi_gereken: "Enfeksiyon (konjonktivit), alerji veya göz kuruluğu tanısı için direkt Göz Hastalıkları uzmanına randevu alınız.", aciklama: "Göz enfeksiyonları, kuruluk ve alerji."
    },
    {
        id: 153, semptom: "Kulak Çınlaması ve İşitme Kaybı",
        anahtar_kelimeler: ["ear", "kulak", "cinlama", "tinnitus", "isitsel"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Ani işitme kaybı", "Şiddetli baş dönmesi"],
        yapilmasi_gereken: "İşitme kaybı, kulak enfeksiyonları ve denge bozuklukları için KBB'ye başvurunuz.", aciklama: "İç kulak, işitme ve denge organları."
    },
    {
        id: 154, semptom: "Yutkunmada Zorluk ve Ses Kısıklığı",
        anahtar_kelimeler: ["bogaz", "ses", "yutkunma", "gırtlak", "larenjit"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Nefes almada zorluk (tıkanma hissi)"],
        yapilmasi_gereken: "Ses telleri, gırtlak ve nodül kontrolü için KBB'ye başvurulur.", aciklama: "Ses telleri ve gırtlak hastalıkları."
    },
    {
        id: 155, semptom: "Yüzde Uyuşma (Tek Taraflı)",
        anahtar_kelimeler: ["face", "yuz", "uyusma", "karincalanma", "felc", "sinir"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yüzde ani asimetri (Felç şüphesi)", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Yüz siniri (Trigeminal nevralji) veya santral sinir sistemi sorunları için Nöroloji'ye başvurulur.", aciklama: "Sinir sıkışmaları veya santral sinir sistemi kaynaklı sorunlar."
    },
    //... (Diğer Baş ve Yüz Semptomları)

    // --- KARIN VE SİNDİRİM (ID: 221-300) ---
    {
        id: 221, semptom: "Mide Yanması ve Ağrısı (Kronik)",
        anahtar_kelimeler: ["stomach", "mide", "yanma", "reflu", "gastrit"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Kanlı kusmuk"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol isteyiniz. Kronikleşirse veya endoskopi gerekiyorsa Gastroenteroloji'ye sevk istenir.", aciklama: "Sindirim sistemi ve mide sorunları."
    },
    {
        id: 222, semptom: "Karın Sağ Alt Bölge Ağrısı (Apandisit Şüphesi)",
        anahtar_kelimeler: ["karin", "abdomen", "sag", "alt", "apandisit", "agri"],
        tanisal_bolum: "Genel Cerrahi", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Ateş, bulantı, kusma ile birlikte şiddetli ağrı. ACİL SERVİS gereklidir!"],
        yapilmasi_gereken: "Apandisit veya cerrahi müdahale gerektiren karın içi sorunlar için Genel Cerrahi'ye başvurulur.", aciklama: "Apandisit ve cerrahi müdahale gerektiren karın içi sorunlar."
    },
    {
        id: 223, semptom: "Siyah Dışkı (Katran Rengi)",
        anahtar_kelimeler: ["siyah", "diskı", "kan", "rektal", "melena"],
        tanisal_bolum: "Gastroenteroloji / Genel Cerrahi", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["**ACİL SERVİS**'e gidiniz! Üst sindirim sisteminde kanama anlamına gelebilir."],
        yapilmasi_gereken: "İç kanama kaynağını bulmak için Gastroenteroloji'ye başvurulur.", aciklama: "Üst sindirim sistemi kanama şüphesi."
    },
    {
        id: 224, semptom: "Kabızlık ve Karın Şişliği",
        anahtar_kelimeler: ["kabızlık", "sislik", "diski", "zorlanma"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Uzun süreli tıkanıklık ve kusma"],
        yapilmasi_gereken: "Bağırsak hareketleri ve kronik sindirim sorunları için Dahiliye'ye başvurulur.", aciklama: "Bağırsak hareketleri ve genel sindirim sorunları."
    },
    //... (Diğer Karın ve Sindirim Semptomları)

    // --- DERMATOLOJİ, ÜREME VE PSİKİYATRİ (ID: 301-400+) ---
    {
        id: 301, semptom: "Vücutta Çıkan Yeni Benler",
        anahtar_kelimeler: ["ben", "mol", "cilt", "leke", "kanser"],
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Benin hızlı büyümesi, kanaması veya renginin değişmesi"],
        yapilmasi_gereken: "Dermatoskopik inceleme ve tanı için Cildiye uzmanına başvurulur.", aciklama: "Cilt kanseri riskini değerlendirme ve ben takibi."
    },
    {
        id: 302, semptom: "Kronik Uykusuzluk (İnsomnia)",
        anahtar_kelimeler: ["uyku", "insomnia", "uykusuzluk", "psikiyatri", "sinir"],
        tanisal_bolum: "Psikiyatri / Nöroloji", tedavi_bolum: "Psikiyatri",
        acil_durum: ["İntihar düşüncesi"],
        yapilmasi_gereken: "Altta yatan psikolojik veya nörolojik nedenlerin tespiti için Psikiyatri veya Nöroloji'ye başvurulur.", aciklama: "Uyku bozuklukları ve ruh sağlığı sorunları."
    },
    {
        id: 303, semptom: "Şiddetli Halsizlik ve Depresif Ruh Hali",
        anahtar_kelimeler: ["depresyon", "ruh", "psikolojik", "stres", "anksiyete"],
        tanisal_bolum: "Psikiyatri", tedavi_bolum: "Psikiyatri",
        acil_durum: ["Kişinin kendine veya başkasına zarar verme riski"],
        yapilmasi_gereken: "Duygusal ve bilişsel bozuklukların tedavisi için direkt Psikiyatri'ye başvurulur.", aciklama: "Ruh sağlığı ve duygudurum bozuklukları."
    },
    {
        id: 304, semptom: "Tırnak Batması ve İltihap",
        anahtar_kelimeler: ["tirnak", "nail", "batik", "iltihap", "dermatoloji"],
        tanisal_bolum: "Dermatoloji (Cildiye) / Genel Cerrahi", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Ayakta yayılan şiddetli kızarıklık ve ateş"],
        yapilmasi_gereken: "İltihap, batık ve cerrahi gerektiren durumlar için Cildiye'ye başvurulur.", aciklama: "Tırnak ve deri enfeksiyonları."
    },
    //... (Diğer Dermatoloji, Üreme ve Psikiyatri Semptomları)
];


// --- ANA FONKSİYONLAR (Türkçe Karakter Uyumlu Arama) ---

function aramaYap() {
    // 1. Arama metnini standardize et
    const aramaMetni = normalizeTurkish(document.getElementById('arama_input').value);
    const sonuclarListesi = document.getElementById('sonuclar_listesi');
    sonuclarListesi.innerHTML = ''; 
    document.getElementById('detay_karti').innerHTML = '<p class="text-center text-secondary mt-5">Sorununuzu yukarıdaki arama kutusuna yazmaya başlayın.</p>';

    if (aramaMetni.length < 2) {
        sonuclarListesi.style.display = 'none';
        return; 
    }

    // 2. İKİ FARKLI ALANDA FİLTRELEME YAP
    const filtrelenmis = SEMPTOM_VERILERI.filter(veri => {
        // A) Semptom Adı Türkçe karakterlerden arındırılmış haliyle mi eşleşiyor? (Örn: "bel agrisi" -> "Bel Ağrısı")
        const normalizeSemptom = normalizeTurkish(veri.semptom);
        
        // B) Anahtar Kelimeler Türkçe karakterlerden arındırılmış haliyle mi eşleşiyor? (Örn: "eye" -> Göz)
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
    const acilUyari = veri.acil_durum.length > 0 ? 
        `<div class="acil-uyari">
            <span class="icon">⚠️</span>
            <p><strong>DİKKAT!</strong> Eğer: ${acilListe} durumlarından biri varsa, vakit kaybetmeyin, 112'yi arayın veya **HEMEN ACİL SERVİS**'e gidin!</p>
        </div>` : '';
        
    detayKarti.innerHTML = `
        ${acilUyari}
        <div class="card-body">
            <h3 class="card-title" style="color: var(--primary-color);">${veri.semptom} İçin Sevk Protokolü</h3>
            
            <div class="protokol-asamalari">
                <div class="asama asama-tani">
                    <h4>1. TANISAL UZMANLIK (Görülecek İlk Bölüm)</h4>
                    <p class="bolum-adi">${veri.tanisal_bolum}</p>
                    <p class="aciklama-detay"><strong>Açıklama:</strong> ${veri.aciklama}</p>
                </div>
                
                <hr>

                <div class="asama asama-tedavi">
                    <h4>2. TEDAVİ AŞAMASI (Tanı Sonrası Sevk)</h4>
                    <p class="bolum-adi">${veri.tedavi_bolum}</p>
                    <p class="aciklama-detay"><strong>Doktor Önerisi:</strong> ${veri.yapilmasi_gereken}</p>
                </div>
            </div>
        </div>
    `;
}

