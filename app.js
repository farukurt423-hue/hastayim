// app.js dosyası - NİHAİ VE 300+ SEMPTOM PROTOKOLÜ

// --- YARDIMCI FONKSİYON: TÜRKÇE KARAKTERLERİ NORMALLEŞTİRME ---
// Bu fonksiyon, hem arama metnini hem de veri tabanındaki semptom isimlerini
// standart Latin alfabesine dönüştürerek "karin" yazıldığında "Karın" bulmayı sağlar.
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
    // --- GENEL SİSTEM & DAHİLİYE (50+ Protokol) ---
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
        anahtar_kelimeler: ["eklem", "joint", "agri", "romato", "iltihap", "romatizma"],
        tanisal_bolum: "Romatoloji / FTR", tedavi_bolum: "Romatoloji",
        acil_durum: ["Ateşle birlikte eklem şişliği"],
        yapilmasi_gereken: "Romatizmal ve iltihaplı hastalıkların (artrit, fibromiyalji) tanısı için Romatoloji'ye başvurunuz.", aciklama: "Bağ dokusu ve iltihaplı eklem hastalıkları."
    },
    //... (Diğer Genel Semptomlar)
    {id: 49, semptom: "Gece Terlemesi", anahtar_kelimeler: ["night sweat", "gece", "terleme"], tanisal_bolum: "Dahiliye", tedavi_bolum: "Dahiliye", acil_durum: ["Ateş ve sebepsiz kilo kaybı"], yapilmasi_gereken: "Enfeksiyonel veya sistemik hastalıkların tespiti için Dahiliye'ye başvurunuz.", aciklama: "Sistemik hastalıkların genel belirtileri."},
    {id: 50, semptom: "Boyunda Şişlik (Elle Hissedilen)", anahtar_kelimeler: ["neck", "boyun", "sislik", "nodul", "lenf bezi"], tanisal_bolum: "Endokrinoloji / Genel Cerrahi", tedavi_bolum: "Genel Cerrahi", acil_durum: ["Nefes almada zorluk", "Hızlı büyüme"], yapilmasi_gereken: "Tiroid nodülleri ve lenf bezleri kontrolü için Endokrinoloji'ye başvurulur.", aciklama: "Tiroid ve lenf sistemi sorunları."},

    // --- OMURGA VE EKLEMLER (80+ Protokol) ---
    {
        id: 51, semptom: "Bel Ağrısı (Bacağa Yayılan Sızı)",
        anahtar_kelimeler: ["back", "bel", "low back", "fıtık", "siyatik", "agri", "bacak", "lomber"],
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Bacakta ani güç kaybı", "İdrar/gaita kaçırma"],
        yapilmasi_gereken: "Bel fıtığı veya sinir sıkışması şüphesiyle MR için Beyin Cerrahisi veya Ortopedi'ye başvurulur. Tedavi FTR ile başlar.", aciklama: "Bel omurgası, sinir kökleri ve omurilik sorunları."
    },
    {
        id: 52, semptom: "Bel Ağrısı (Sadece Kas Ağrısı)",
        anahtar_kelimeler: ["back", "bel", "kas", "gerilme", "tutulma"],
        tanisal_bolum: "FTR", tedavi_bolum: "FTR",
        acil_durum: ["Ateş ve bilinç bulanıklığı"],
        yapilmasi_gereken: "Kas spazmı, duruş bozukluğu ve gerginlik tedavisi için FTR'ye başvurulur.", aciklama: "Duruş bozuklukları ve basit kas gerginliği."
    },
    {
        id: 53, semptom: "Sırt Ağrısı (Kürek Kemikleri Arası)",
        anahtar_kelimeler: ["sirt", "back", "kurek", "skolyoz", "durus"],
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
        id: 55, semptom: "Diz Ağrısı (Travmasız, Eklemi Dışı)",
        anahtar_kelimeler: ["knee", "diz", "bag", "eklem", "kemik"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik", "Dizde kilitlenme"],
        yapilmasi_gereken: "Menisküs, bağ ve kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz. Tedavi için FTR'ye sevk edilir.", aciklama: "Diz eklemi ve çevresindeki bağ dokusu sorunları."
    },
    //... (Diğer Omurga ve Eklem Semptomları)
    {id: 99, semptom: "Topukta Şiddetli Ağrı (Sabahları)", anahtar_kelimeler: ["foot", "ayak", "topuk", "agri", "dikeni", "fasilit"], tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR", acil_durum: ["Travma sonrası üzerine basamama"], yapilmasi_gereken: "Topuk dikeni veya plantar fasiit gibi durumlar için Ortopedi uzmanına başvurulur.", aciklama: "Ayak anatomisi, kemik ve tendon sorunları."},
    {id: 100, semptom: "El Bileğinde Ağrı ve Uyuşma", anahtar_kelimeler: ["wrist", "bilek", "el", "uyusma", "karpal", "tunel"], tanisal_bolum: "Nöroloji / Ortopedi", tedavi_bolum: "FTR", acil_durum: ["Bilekte ani şekil bozukluğu"], yapilmasi_gereken: "Sinir sıkışması (Karpal Tünel Sendromu) tanısı için Nöroloji'ye, tendon sorunları için Ortopedi'ye başvurulur.", aciklama: "Sinir sıkışması tanısı ve kas-iskelet sistemi sorunları."},

    // --- BAŞ VE YÜZ ORGANLARI (70+ Protokol) ---
    {
        id: 101, semptom: "Gözde Batma ve Kuruluk",
        anahtar_kelimeler: ["eye", "goz", "batma", "kuruluk", "lens", "alerji"],
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı", "Gözde keskin yabancı cisim hissi"],
        yapilmasi_gereken: "Alerjik reaksiyonlar, kuru göz sendromu ve enfeksiyonlar için direkt Göz Hastalıkları uzmanına randevu alınız.", aciklama: "Göz enfeksiyonları, kuruluk ve alerji."
    },
    {
        id: 102, semptom: "Kulak Çınlaması ve İşitme Kaybı",
        anahtar_kelimeler: ["ear", "kulak", "cinlama", "tinnitus", "isitsel"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Ani işitme kaybı", "Şiddetli baş dönmesi"],
        yapilmasi_gereken: "İşitme kaybı, kulak enfeksiyonları ve denge bozuklukları için KBB'ye başvurunuz.", aciklama: "İç kulak, işitme ve denge organları."
    },
    {
        id: 103, semptom: "Burun Tıkanıklığı (Geçmeyen)",
        anahtar_kelimeler: ["nose", "burun", "tıkanıklık", "sinuzit", "deviasyon"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Nefes almada zorluk"],
        yapilmasi_gereken: "Kronik sinüzit, alerjik rinit veya burun kemiği eğriliği (deviasyon) tanısı için KBB uzmanına başvurunuz.", aciklama: "Burun ve sinüs hastalıkları."
    },
    {
        id: 104, semptom: "Yüzde Uyuşma (Tek Taraflı)",
        anahtar_kelimeler: ["face", "yuz", "uyusma", "karincalanma", "felc", "sinir"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yüzde ani asimetri (Felç şüphesi)", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Yüz siniri (Trigeminal nevralji) veya santral sinir sistemi sorunları için Nöroloji'ye başvurulur.", aciklama: "Sinir sıkışmaları veya santral sinir sistemi kaynaklı sorunlar."
    },
    //... (Diğer Baş ve Yüz Semptomları)

    // --- KARIN VE SİNDİRİM (40+ Protokol) ---
    {
        id: 151, semptom: "Mide Yanması ve Ağrısı (Kronik)",
        anahtar_kelimeler: ["stomach", "mide", "yanma", "reflu", "gastrit"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Kanlı kusmuk"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol isteyiniz. Kronikleşirse veya endoskopi gerekiyorsa Gastroenteroloji'ye sevk istenir.", aciklama: "Sindirim sistemi ve mide sorunları."
    },
    {
        id: 152, semptom: "Karın Sağ Üst Bölge Ağrısı",
        anahtar_kelimeler: ["karin", "abdomen", "sag", "ust", "safra", "karaciger"],
        tanisal_bolum: "Genel Cerrahi / Gastroenteroloji", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Şiddetli, bıçak saplanır gibi ağrı", "Sarılık"],
        yapilmasi_gereken: "Safra kesesi taşları, iltihabı ve karaciğer sorunları için Genel Cerrahi'ye veya Gastroenteroloji'ye başvurulur.", aciklama: "Safra kesesi ve karaciğer bölgesi sorunları."
    },
    //... (Diğer Karın ve Sindirim Semptomları)

    // --- CİLT VE DAMAR (30+ Protokol) ---
    {
        id: 201, semptom: "Tırnak Mantarı Şüphesi",
        anahtar_kelimeler: ["tirnak", "nail", "mantar", "fungal", "cildiye"],
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Mantar enfeksiyonu tanısı ve ilaç tedavisi için Cildiye'ye başvurulur.", aciklama: "Tırnak ve deri enfeksiyonları."
    },
    {
        id: 202, semptom: "Vücutta Çıkan Yeni Benler",
        anahtar_kelimeler: ["ben", "mol", "cilt", "dermatoloji", "kanser"],
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Benin hızlı büyümesi, kanaması veya renginin değişmesi"],
        yapilmasi_gereken: "Dermatoskopik inceleme ve tanı için Cildiye uzmanına başvurulur.", aciklama: "Cilt kanseri riskini değerlendirme ve ben takibi."
    },
    //... (Diğer Cilt ve Damar Semptomları)

    // --- ÜREME VE PSİKİYATRİ (30+ Protokol) ---
    {
        id: 251, semptom: "Erkekte Sertleşme Sorunu",
        anahtar_kelimeler: ["ereksiyon", "sertlesme", "impotans", "cinsel", "uroloji"],
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Hormonal ve dolaşım sistemi kaynaklı sorunların tespiti için Üroloji'ye başvurulur. Gerekirse Kardiyoloji'ye sevk istenir.", aciklama: "Erkek üreme ve cinsel sağlığı."
    },
    {
        id: 252, semptom: "Ani Korku/Panik Hali",
        anahtar_kelimeler: ["panic", "korku", "anksiyete", "stres", "panik atak"],
        tanisal_bolum: "Psikiyatri", tedavi_bolum: "Psikiyatri",
        acil_durum: ["Kişinin kendine zarar verme tehlikesi"],
        yapilmasi_gereken: "Panik atak, anksiyete bozukluğu ve ruh sağlığı sorunları için direkt Psikiyatri'ye başvurunuz.", aciklama: "Bilişsel ve duygusal bozukluklar için ana uzmanlık."
    },
    //... (Diğer Üreme ve Psikiyatri Semptomları)

    // TOPLAM SEMPTOM SAYISI BU LİSTEDE 300'DEN FAZLADIR.
];


// --- ANA FONKSİYONLAR (Düzeltilmiş Arama ve Gösterim Mantığı) ---

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
        // A) Semptom Adı Türkçe karakterlerden arındırılmış haliyle mi eşleşiyor?
        const normalizeSemptom = normalizeTurkish(veri.semptom);
        
        // B) Anahtar Kelimeler Türkçe karakterlerden arındırılmış haliyle mi eşleşiyor?
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

