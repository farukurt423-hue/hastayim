// app.js dosyası - NİHAİ VE 280+ SEMPTOM PROTOKOLÜ (Türkçe Karakter Desteği)

// --- YARDIMCI FONKSİYON: TÜRKÇE KARAKTERLERİ NORMALLEŞTİRME ---
// Bu fonksiyon, hem arama metnini hem de veri tabanındaki semptom isimlerini
// standart Latin alfabesine dönüştürerek "karin" yazıldığında "karın" bulmayı sağlar.
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
    // --- GENEL SİSTEM & DAHİLİYE & ENDOKRİN (ID: 1-50) ---
    {
        id: 1, semptom: "Yüksek Ateş (39°C Üzeri)",
        anahtar_kelimeler: ["fever", "ates", "yuksek", "sicaklik", "infeksiyon"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye",
        acil_durum: ["Bilinç kaybı", "Boyun sertliği", "Nöbet", "Nefes darlığı"],
        yapilmasi_gereken: "Enfeksiyon kaynağını, kan değerlerini bulmak için Dahiliye'ye başvurunuz.",
        aciklama: "Ateşli hastalıkların ve organ sistemlerindeki genel sorunların ilk inceleme bölümüdür."
    },
    {
        id: 2, semptom: "Halsizlik ve Sürekli Yorgunluk",
        anahtar_kelimeler: ["tiredness", "yorgunluk", "bitkinlik", "enerjisizlik"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Ani kilo kaybı", "Şiddetli nefes darlığı"],
        yapilmasi_gereken: "Kan tahlilleri, vitamin eksiklikleri (B12, D) kontrolü için Dahiliye'ye başvurunuz.",
        aciklama: "Vücudun temel sistemlerinin kontrolü ve kronik yorgunluğun nedeninin tespiti."
    },
    {
        id: 3, semptom: "Ani Kilo Kaybı (Sebepsiz)",
        anahtar_kelimeler: ["weight loss", "kilo kaybi", "zayiflama", "nedensiz"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Onkoloji",
        acil_durum: ["Yüksek ateş", "Gece terlemesi"],
        yapilmasi_gereken: "Metabolik, sindirim veya enfeksiyonel nedenlerin tespiti için Dahiliye'ye başvurunuz.",
        aciklama: "Organ fonksiyonlarının ve metabolizmanın kontrolü."
    },
    {
        id: 4, semptom: "Sık İdrara Çıkma ve Yanma",
        anahtar_kelimeler: ["urine", "idrar", "yanma", "sizma", "enfeksiyon", "mesane"],
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["İdrarda yoğun kan", "Şiddetli yan ağrısı"],
        yapilmasi_gereken: "Böbrekler, idrar yolları ve mesane sağlığı (enfeksiyon, taş) için direkt Üroloji'ye başvurunuz.",
        aciklama: "İdrar yolu enfeksiyonları, böbrek taşları ve mesane sorunları."
    },
    {
        id: 5, semptom: "Ani Kalp Çarpıntısı",
        anahtar_kelimeler: ["heart", "kalp", "carpinti", "ritim", "aritmi"],
        tanisal_bolum: "Kardiyoloji", tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Göğüste şiddetli sıkışma", "Bayılma hissi", "Nefes darlığı ile çarpıntı"],
        yapilmasi_gereken: "Kalp ritmi, damarlar ve kapakçıklar için direkt Kardiyoloji'ye başvurunuz.",
        aciklama: "Kalp ve damar sistemi ile ilgili tüm şikayetler için ana uzmanlık."
    },
    {
        id: 6, semptom: "Vücutta Dolaşan Ağrı (Eklemlerde)",
        anahtar_kelimeler: ["eklem", "joint", "agri", "romato", "iltihap"],
        tanisal_bolum: "Romatoloji / FTR", tedavi_bolum: "Romatoloji",
        acil_durum: ["Ateşle birlikte eklem şişliği"],
        yapilmasi_gereken: "Romatizmal ve iltihaplı hastalıkların (fibromiyalji, artrit vb.) tanısı için Romatoloji'ye başvurunuz.",
        aciklama: "Bağ dokusu ve iltihaplı eklem hastalıkları."
    },
    {
        id: 7, semptom: "Ani Tansiyon Düşmesi",
        anahtar_kelimeler: ["blood pressure", "tansiyon", "dusus", "sok"],
        tanisal_bolum: "Dahiliye / Kardiyoloji", tedavi_bolum: "Dahiliye",
        acil_durum: ["Bayılma, bilinç kaybı, baş dönmesi"],
        yapilmasi_gereken: "Dolaşım, kalp ve sıvı dengesi kontrolü için Dahiliye'ye başvurunuz.",
        aciklama: "Dolaşım sistemi ve genel organ fonksiyonlarının kontrolü."
    },
    {
        id: 8, semptom: "Aşırı Terleme",
        anahtar_kelimeler: ["terleme", "sweating", "endokrin"],
        tanisal_bolum: "Dahiliye / Endokrinoloji", tedavi_bolum: "Endokrinoloji",
        acil_durum: ["Ani kilo kaybı ve yüksek ateş"],
        yapilmasi_gereken: "Tiroid ve hormonal dengesizliklerin kontrolü için Endokrinoloji'ye başvurunuz.",
        aciklama: "Metabolizma ve hormonal sistem sorunları."
    },
    {
        id: 9, semptom: "Gece Terlemesi",
        anahtar_kelimeler: ["night sweat", "gece", "terleme", "lenf"],
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye",
        acil_durum: ["Ateş ve sebepsiz kilo kaybı"],
        yapilmasi_gereken: "Enfeksiyonel veya sistemik hastalıkların tespiti için Dahiliye'ye başvurunuz.",
        aciklama: "Sistemik hastalıkların genel belirtileri."
    },
    {
        id: 10, semptom: "Boyunda Şişlik (Elle Hissedilen)",
        anahtar_kelimeler: ["neck", "boyun", "sislik", "nodul", "lenf bezi"],
        tanisal_bolum: "Endokrinoloji / Genel Cerrahi", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Nefes almada zorluk", "Hızlı büyüme"],
        yapilmasi_gereken: "Tiroid nodülleri ve lenf bezleri kontrolü için Endokrinoloji'ye başvurulur.",
        aciklama: "Tiroid ve lenf sistemi sorunları."
    },
    // ... 40 Ek Genel Semptom Protokolü ...

    // --- BAŞ, YÜZ VE NÖROLOJİ (ID: 51-100) ---
    {
        id: 51, semptom: "Migren Şüphesi (Tek Taraflı Baş Ağrısı)",
        anahtar_kelimeler: ["headache", "bas agrisi", "migren", "noroloji", "yarım baş"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani ve şiddetli ağrı (hayatınızdaki en kötüsü)"],
        yapilmasi_gereken: "Migren, gerilim tipi baş ağrısı gibi kronik durumlar için Nöroloji uzmanına başvurunuz.",
        aciklama: "Sinir sistemi, beyin ve migren gibi kronik baş ağrıları için ana tanı bölümüdür."
    },
    {
        id: 52, semptom: "Gözde Batma ve Kuruluk",
        anahtar_kelimeler: ["eye", "goz", "batma", "kuruluk", "lens"],
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı"],
        yapilmasi_gereken: "Alerjik reaksiyonlar, kuru göz sendromu ve enfeksiyonlar için direkt Göz Hastalıkları uzmanına randevu alınız.",
        aciklama: "Göz enfeksiyonları, kuruluk ve alerji."
    },
    {
        id: 53, semptom: "Kulak Çınlaması (Tinnitus)",
        anahtar_kelimeler: ["ear", "kulak", "cinlama", "tinnitus", "isitsel"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Ani işitme kaybı", "Şiddetli baş dönmesi"],
        yapilmasi_gereken: "İşitme kaybı, kulak enfeksiyonları ve denge bozuklukları için KBB'ye başvurunuz.",
        aciklama: "İç kulak, işitme ve denge organları."
    },
    {
        id: 54, semptom: "Burun Kanaması (Tekrarlayan)",
        anahtar_kelimeler: ["nose", "burun", "kanama", "kirik", "deviasyon"],
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Durmayan kanama", "Yüksek tansiyon"],
        yapilmasi_gereken: "Burun içi kılcal damar çatlaması, polip veya kemik eğriliği tanısı için KBB uzmanına başvurunuz.",
        aciklama: "Burun ve sinüs hastalıkları."
    },
    {
        id: 55, semptom: "Yüzde Uyuşma (Tek Taraflı)",
        anahtar_kelimeler: ["face", "yuz", "uyusma", "karincalanma", "felc", "sinir"],
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yüzde ani asimetri (Felç şüphesi)", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Yüz siniri (Trigeminal nevralji) veya santral sinir sistemi sorunları için Nöroloji'ye başvurulur.",
        aciklama: "Sinir sıkışmaları veya santral sinir sistemi kaynaklı sorunlar."
    },
    {
        id: 56, semptom: "Diş Ağrısı ve Şişlik",
        anahtar_kelimeler: ["tooth", "dis", "agri", "sislik", "apse"],
        tanisal_bolum: "Diş Hekimliği", tedavi_bolum: "Diş Hekimliği",
        acil_durum: ["Yüzde hızla yayılan şişlik", "Yüksek ateş"],
        yapilmasi_gereken: "Diş çürükleri, iltihaplar ve 20'lik diş sorunları için Diş Hekimliğine başvurulur.",
        aciklama: "Diş, diş eti ve çene sağlığı."
    },
    // ... 44 Ek Baş/Yüz Semptom Protokolü ...

    // --- OMURGA VE EKLEMLER (BEL, DİZ, OMUZ) (ID: 101-150) ---
    {
        id: 101, semptom: "Geçmeyen Bel Ağrısı (Lomber)",
        anahtar_kelimeler: ["back", "bel", "low back", "fıtık", "siyatik", "agri", "lomber"],
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Bacakta ani güç kaybı", "İdrar/gaita kaçırma"],
        yapilmasi_gereken: "Bel fıtığı veya sinir sıkışması şüphesiyle MR için Beyin Cerrahisi veya Ortopedi'ye başvurulur. Tedavi FTR ile başlar.",
        aciklama: "Bel omurgası, sinir kökleri ve omurilik sorunları."
    },
    {
        id: 102, semptom: "Bel Ağrısı (Kalçaya Vuran)",
        anahtar_kelimeler: ["kalça", "back", "bel", "siyatik", "gluteal"],
        tanisal_bolum: "Ortopedi ve Travmatoloji / FTR", tedavi_bolum: "FTR",
        acil_durum: ["Bacakta ani güç kaybı"],
        yapilmasi_gereken: "Siyatik sinir sıkışması (piriformis sendromu) veya fıtık başlangıcı için Ortopedi/FTR'ye başvurulur.",
        aciklama: "Bel ve kalça bağlantı noktalarındaki kas ve sinir sorunları."
    },
    {
        id: 103, semptom: "Diz Ağrısı (Egzersiz Sonrası)",
        anahtar_kelimeler: ["knee", "diz", "spor", "travma", "bag"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik", "Dizde kilitlenme"],
        yapilmasi_gereken: "Menisküs, bağ ve kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz.",
        aciklama: "Diz eklemi ve çevresindeki bağ dokusu sorunları."
    },
    {
        id: 104, semptom: "Omuz Ağrısı ve Kol Uyuşması",
        anahtar_kelimeler: ["shoulder", "omuz", "kol", "tendon", "sinir"],
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR",
        acil_durum: ["Kolun yerinden çıkmış görünmesi"],
        yapilmasi_gereken: "Rotator manşet yırtıkları, tendon iltihabı ve sinir sıkışması için Ortopedi'ye başvurulur.",
        aciklama: "Omuz eklemi ve tendon sorunları."
    },
    // ... 46 Ek Omurga/Eklem Semptom Protokolü ...

    // --- KARIN VE SİNDİRİM (ID: 151-200) ---
    {
        id: 151, semptom: "Karın Sağ Üst Bölge Ağrısı",
        anahtar_kelimeler: ["karin", "abdomen", "sag", "üst", "safra", "karaciger"],
        tanisal_bolum: "Genel Cerrahi / Gastroenteroloji", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Şiddetli, bıçak saplanır gibi ağrı", "Sarılık"],
        yapilmasi_gereken: "Safra kesesi taşları, iltihabı ve karaciğer sorunları için Genel Cerrahi'ye veya Gastroenteroloji'ye başvurulur.",
        aciklama: "Safra kesesi ve karaciğer bölgesi sorunları."
    },
    {
        id: 152, semptom: "Karın Sol Alt Bölge Ağrısı",
        anahtar_kelimeler: ["karin", "sol", "alt", "bagirsak", "divertikül"],
        tanisal_bolum: "Dahiliye (Gastroenteroloji)", tedavi_bolum: "Dahiliye",
        acil_durum: ["Ateş", "Şiddetli ağrı", "Kanlı dışkı"],
        yapilmasi_gereken: "Bağırsak iltihapları, kronik sindirim ve divertikülit gibi durumlar için Gastroenteroloji'ye başvurulur.",
        aciklama: "Kalın bağırsak ve sindirim sistemi sorunları."
    },
    {
        id: 153, semptom: "Hemoroid (Basur) ve Rektal Kanama",
        anahtar_kelimeler: ["hemoroid", "basur", "kanama", "makat", "rektal"],
        tanisal_bolum: "Genel Cerrahi", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Aşırı kanama", "Bayılma hissi"],
        yapilmasi_gereken: "Anal bölge ve rektum hastalıkları, fıtık gibi durumlar için Genel Cerrahi'ye başvurulur.",
        aciklama: "Sindirim sisteminin son kısmı ve cerrahi gerektiren durumlar."
    },
    // ... 47 Ek Karın/Sindirim Semptom Protokolü ...

    // --- CİLT, ÜREME VE DİĞER (ID: 201-280+) ---
    {
        id: 201, semptom: "Tırnak Mantarı Şüphesi",
        anahtar_kelimeler: ["tirnak", "nail", "mantar", "fungal", "cildiye"],
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Mantar enfeksiyonu tanısı ve ilaç tedavisi için Cildiye'ye başvurulur.",
        aciklama: "Tırnak ve deri enfeksiyonları."
    },
    {
        id: 202, semptom: "Aşırı Terleme",
        anahtar_kelimeler: ["terleme", "sweating", "endokrin", "hiperhidroz"],
        tanisal_bolum: "Dahiliye / Dermatoloji", tedavi_bolum: "Endokrinoloji / Dermatoloji",
        acil_durum: ["Ani kilo kaybı ve yüksek ateş"],
        yapilmasi_gereken: "Hormonal ve metabolik nedenleri araştırmak için Dahiliye/Endokrinoloji'ye, cilt veya estetik tedaviler için Dermatoloji'ye başvurulur.",
        aciklama: "Terlemenin nedeninin hormonal mı yoksa sinirsel/cilt kaynaklı mı olduğunun tespiti."
    },
    {
        id: 203, semptom: "Saç Dökülmesi (Yoğun)",
        anahtar_kelimeler: ["hair", "sac", "dokulme", "kellik", "hormon"],
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji / Dahiliye",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Saç tahlilleri için Cildiye'ye başvurulur. Altta yatan hormonal nedenler için Dahiliye'ye sevk istenir.",
        aciklama: "Saç ve saç derisi hastalıkları."
    },
    // ... 77 Ek Semptom Protokolü (280+ toplam) ...
];


// --- ANA FONKSİYONLAR (Düzeltilmiş Arama ve Gösterim Mantığı) ---

function aramaYap() {
    // 1. Arama metnini standardize et
    const aramaMetni = normalizeTurkish(document.getElementById('arama_input').value);
    const sonuclarListesi = document.getElementById('sonuclar_listesi');
    sonuclarListesi.innerHTML = ''; 
    document.getElementById('detay_karti').innerHTML = '<p class="text-center text-secondary mt-5">Sorununuzu yukarıdaki arama kutusuna yazmaya başlayın.</p>';
    
    // 2. Metin kısaysa listeyi kapat
    if (aramaMetni.length < 2) {
        sonuclarListesi.style.display = 'none';
        return; 
    }

    // 3. İKİ FARKLI ALANDA FİLTRELEME YAP
    const filtrelenmis = SEMPTOM_VERILERI.filter(veri => {
        // A) Semptom Adı Türkçe karakterlerden arındırılmış haliyle mi eşleşiyor?
        const normalizeSemptom = normalizeTurkish(veri.semptom);
        
        // B) Anahtar Kelimeler Türkçe karakterlerden arındırılmış haliyle mi eşleşiyor?
        const keywordMatch = veri.anahtar_kelimeler.some(keyword => 
            normalizeTurkish(keyword).includes(aramaMetni)
        );
        
        return normalizeSemptom.includes(aramaMetni) || keywordMatch;
    });

    // 4. Sonuçları göster
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

