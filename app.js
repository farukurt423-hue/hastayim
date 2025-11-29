// app.js dosyası - NİHAİ UZMAN PROTOKOL ÇEKİRDEĞİ (YÜZLERCE GİRİŞ İÇİN TEMEL)

const SEMPTOM_VERILERI = [
    // --- GENEL SİSTEM & DAHİLİYE (ID: 1-10) ---
    {
        id: 1,
        semptom: "Yüksek Ateş (Sebepsiz)",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Dahiliye",
        acil_durum: ["Ateşle birlikte bilinç kaybı", "Boyun sertliği", "Nefes darlığı"],
        yapilmasi_gereken: "Enfeksiyon kaynağını, kan değerlerini ve organ fonksiyonlarını tespit etmek için Dahiliye'ye başvurulur.",
        aciklama: "Ateşli hastalıkların ve organ sistemlerindeki genel sorunların ilk inceleme bölümüdür."
    },
    {
        id: 2,
        semptom: "Halsizlik ve Sürekli Yorgunluk",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Göğüs ağrısı", "Ani kilo kaybı"],
        yapilmasi_gereken: "Kan tahlilleri, vitamin eksiklikleri (B12, D) ve tiroid gibi hormonal sorunlar için Dahiliye'ye başvurulur.",
        aciklama: "Vücudun temel sistemlerinin kontrolü ve kronik yorgunluğun nedeninin tespiti."
    },
    {
        id: 3,
        semptom: "Karın Şişliği ve Gaz",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli ağrı", "Kanlı dışkı", "Sürekli kusma"],
        yapilmasi_gereken: "Bağırsak sorunları, hazımsızlık ve genel karın şikayetleri için başlangıç noktasıdır. Kronik sorunlarda Gastroenteroloji'ye sevk istenir.",
        aciklama: "Sindirim sistemi, mide ve bağırsak sorunları için genel başlangıç noktasıdır."
    },
    {
        id: 4,
        semptom: "Sürekli Karıncalanma/Uyuşma (Yaygın)",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani felç/güç kaybı", "Yüzde düşüklük", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Sinir sistemi, sinir sıkışmaları ve nörolojik hastalıklar için Nöroloji'ye başvurunuz.",
        aciklama: "Yaygın uyuşmanın beyin veya omurilikten kaynaklı olup olmadığının tespiti."
    },
    {
        id: 5,
        semptom: "Vücutta Geçmeyen Kaşıntı",
        tanisal_bolum: "Dermatoloji (Cildiye)",
        tedavi_bolum: "Dermatoloji",
        acil_durum: ["Hızla yayılan şişlik", "Ateş"],
        yapilmasi_gereken: "Egzama, mantar, alerji veya sistemik hastalıkların ciltteki etkileri için Cildiye uzmanına başvurunuz.",
        aciklama: "Deri, saç ve tırnak hastalıklarının tanısı ve tedavisi."
    },
    {
        id: 6,
        semptom: "Adet Düzensizliği",
        tanisal_bolum: "Kadın Hastalıkları ve Doğum",
        tedavi_bolum: "Kadın Hastalıkları ve Doğum",
        acil_durum: ["Aşırı kanama", "Şiddetli karın ağrısı"],
        yapilmasi_gereken: "Hormonal denge, kistler ve jinekolojik sağlık için direkt bu bölüme başvurulur.",
        aciklama: "Kadın üreme sağlığı ve hormonal döngü."
    },
    {
        id: 7,
        semptom: "Sık İdrara Çıkma ve Yanma",
        tanisal_bolum: "Üroloji",
        tedavi_bolum: "Üroloji",
        acil_durum: ["İdrarda kan", "Şiddetli yan ağrısı", "İdrar yapamama"],
        yapilmasi_gereken: "Böbrekler, idrar yolları ve mesane sağlığı için direkt Üroloji'ye başvurunuz. (Kadınlar Nefroloji'ye de gidebilir).",
        aciklama: "İdrar yolu enfeksiyonları, böbrek taşları ve mesane sorunları."
    },
    
    // --- BAŞ VE YÜZ DETAY (ID: 11-20) ---
    {
        id: 11,
        semptom: "Baş Ağrısı (Göz Çevresi)",
        tanisal_bolum: "Nöroloji / Göz Hastalıkları",
        tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani görme kaybı"],
        yapilmasi_gereken: "Sinir ve migren nedenli ağrılar için Nöroloji'ye, görme bozukluğu veya glokom şüphesi varsa Göz Hastalıkları'na başvurulur.",
        aciklama: "Göz tansiyonu ve sinir sistemi bağlantılı ağrılar."
    },
    {
        id: 12,
        semptom: "Kulak Duymaması (Ani)",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Travma sonrası kanama", "Şiddetli baş dönmesi"],
        yapilmasi_gereken: "İşitme kaybı nedeninin acil tespiti için direkt KBB'ye gidilmelidir.",
        aciklama: "Kulak enfeksiyonları, işitme sorunları ve sinirsel kayıplar."
    },
    {
        id: 13,
        semptom: "Kulak Kaşıntısı ve Akıntı",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Yüksek ateş"],
        yapilmasi_gereken: "Mantar enfeksiyonları ve kulak yolu iltihapları için KBB uzmanına başvurunuz.",
        aciklama: "Kulak enfeksiyonları, egzama veya mantar sorunları."
    },
    {
        id: 14,
        semptom: "Burun Kanaması (Tekrarlayan)",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Durmayan kanama", "Yüksek tansiyon"],
        yapilmasi_gereken: "Burun içi kılcal damar çatlaması, polip veya kemik eğriliği (deviasyon) için KBB'ye başvurulur.",
        aciklama: "Burun ve sinüs hastalıkları, damar sorunları."
    },
    {
        id: 15,
        semptom: "Yüzde Uyuşma ve Karıncalanma",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji",
        acil_durum: ["Yüzde ani asimetri (felç şüphesi)", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Yüz siniri (Trigeminal) ve santral sinir sistemi sorunları için Nöroloji'ye başvurulur.",
        aciklama: "Sinir sıkışmaları veya santral sinir sistemi kaynaklı sorunlar."
    },
    {
        id: 16,
        semptom: "Gözde Kanlanma ve Ağrı",
        tanisal_bolum: "Göz Hastalıkları",
        tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Keskin görüş kaybı", "Ani ağrı"],
        yapilmasi_gereken: "Konjonktivit, göz tansiyonu (glokom) veya damar sorunları için direkt Göz Hastalıkları uzmanına başvurunuz.",
        aciklama: "Göz enfeksiyonları ve iç göz hastalıkları."
    },

    // --- EKSTREMİTE VE OMURGA (ID: 21-30) ---
    {
        id: 21,
        semptom: "Boyun Ağrısı ve Kol Uyuşması",
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Nöroloji",
        tedavi_bolum: "FTR",
        acil_durum: ["Şiddetli travma", "Ani güç kaybı"],
        yapilmasi_gereken: "Boyun fıtığı veya omurilik baskısı şüphesi varsa Beyin Cerrahisi'ne gidilir. Basit kas spazmı ise FTR'ye sevk istenir.",
        aciklama: "Sinir sıkışması kaynaklı ağrıların tespiti."
    },
    {
        id: 22,
        semptom: "Omuzda Tekrarlayan Sızı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Kolun yukarı kalkmaması (tam hareket kaybı)"],
        yapilmasi_gereken: "Rotator manşet, tendon iltihabı veya donuk omuz tanısı için Ortopedi'ye başvurulur.",
        aciklama: "Omuz eklemi ve tendon sorunları için tanı uzmanı."
    },
    {
        id: 23,
        semptom: "Diz Arkasında Şişlik (Kist)",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi",
        acil_durum: ["Ateş", "Bacağın aniden şişmesi (Derin Ven Trombozu şüphesi)"],
        yapilmasi_gereken: "Diz kistleri, menisküs veya kıkırdak sorunları için Ortopedi uzmanına randevu alınız.",
        aciklama: "Eklem, tendon ve kist gibi yapısal sorunlar."
    },
    {
        id: 24,
        semptom: "Ayakta Karıncalanma ve Uyuşma",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji / FTR",
        acil_durum: ["Travma sonrası güç kaybı"],
        yapilmasi_gereken: "Diyabetik nöropati, siyatik veya sinir sıkışması tanısı için Nöroloji'ye başvurunuz.",
        aciklama: "Sinir sistemi, özellikle bacak sinirlerinin iletim sorunları."
    },
    {
        id: 25,
        semptom: "Sırt Ağrısı (Kürek Kemikleri Arası)",
        tanisal_bolum: "FTR / Dahiliye",
        tedavi_bolum: "FTR",
        acil_durum: ["Sırt ağrısıyla birlikte nefes darlığı"],
        yapilmasi_gereken: "Kas spazmı ve duruş bozukluğu için FTR'ye; iç organ kaynaklı ağrı şüphesi varsa (kalp, akciğer) Dahiliye'ye başvurulur.",
        aciklama: "Duruş bozuklukları ve kas gerginliğinin tanısı."
    },
    
    // --- GENEL CERRAHİ VE DERİN KARIN (ID: 31-40) ---
    {
        id: 31,
        semptom: "Karın Sağ Alt Bölge Ağrısı",
        tanisal_bolum: "Genel Cerrahi",
        tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Kusma", "Şiddetli ateş", "Ağrının hareket etmesi"],
        yapilmasi_gereken: "Apandisit, fıtık veya bağırsak sorunları için Genel Cerrahi'ye başvurulmalıdır. Kadınlar Jinekoloji'yi de kontrol etmelidir.",
        aciklama: "Apandisit ve cerrahi müdahale gerektiren karın içi organ sorunları."
    },
    {
        id: 32,
        semptom: "Rektal Kanama",
        tanisal_bolum: "Genel Cerrahi / Gastroenteroloji",
        tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Yoğun kanama", "Bayılma hissi"],
        yapilmasi_gereken: "Hemoroid, fissür veya kolon sorunları tanısı için Genel Cerrahi'ye başvurulur. Kolonoskopi için Gastroenteroloji'ye sevk istenir.",
        aciklama: "Anal bölge ve kolon hastalıkları."
    },
    {
        id: 33,
        semptom: "Safra Kesesi Bölgesi Ağrısı (Sağ üst karın)",
        tanisal_bolum: "Genel Cerrahi / Gastroenteroloji",
        tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Şiddetli ağrı", "Sarılık"],
        yapilmasi_gereken: "Safra kesesi taşları ve iltihabı için Genel Cerrahi'ye veya Gastroenteroloji'ye başvurulur. Tedavisi cerrahi olabilir.",
        aciklama: "Karaciğer, safra kesesi ve pankreas sorunları."
    },

    // --- KALP VE DAMAR (ID: 41-50) ---
    {
        id: 41,
        semptom: "Göğüste Sıkışma/Yanma",
        tanisal_bolum: "Kardiyoloji",
        tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Ağrının kola, çeneye yayılması", "Soğuk terleme"],
        yapilmasi_gereken: "Kalp krizi veya anjina şüphesiyle acil Kardiyolojiye gidilmelidir. Acil değilse, kalp ritmi ve damar kontrolü için randevu alınır.",
        aciklama: "Kalp ve damar sağlığı ile ilgili tüm şikayetler."
    },
    {
        id: 42,
        semptom: "Ayaklarda Şişlik ve Morarma",
        tanisal_bolum: "Kardiyoloji / Kalp ve Damar Cerrahisi",
        tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Ani ve tek bacakta şişme (DVT şüphesi)"],
        yapilmasi_gereken: "Kalp yetmezliği veya dolaşım bozuklukları için Kardiyoloji'ye, varis veya damar tıkanıklığı için Kalp ve Damar Cerrahisi'ne başvurulur.",
        aciklama: "Dolaşım sistemi ve damar hastalıkları."
    },

    // *** (Bu noktadan sonra, 500 semptomu tamamlamak için bu yapıyı kopyalayıp eklemeniz gerekir.) ***
];


// --- ANA FONKSİYONLAR (MANTIK BÖLÜMÜ) ---

// Geri kalan JavaScript kodları (aramaYap ve detaylariGoster fonksiyonları) aynıdır.
// Bu kısım, HTML'den gelen input ve listeleme mantığını yönetir.
function aramaYap() {
    const aramaMetni = document.getElementById('arama_input').value.toLowerCase();
    const sonuclarListesi = document.getElementById('sonuclar_listesi');
    sonuclarListesi.innerHTML = ''; 
    document.getElementById('detay_karti').innerHTML = '<p class="text-center text-secondary mt-5">Sorununuzu yukarıdaki arama kutusuna yazmaya başlayın.</p>';

    if (aramaMetni.length < 2) {
        sonuclarListesi.style.display = 'none';
        return; 
    }

    const filtrelenmis = SEMPTOM_VERILERI.filter(veri =>
        veri.semptom.toLowerCase().includes(aramaMetni)
    );

    sonuclarListesi.style.display = 'block';

    if (filtrelenmis.length === 0) {
        sonuclarListesi.innerHTML = '<li class="list-group-item disabled text-center">Aradığınız semptom bulunamadı. Lütfen aradığınız semptomu netleştirin.</li>';
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

    // Acil durumları vurgulama (Küçültülmüş ve hoş stil)
    const acilListe = veri.acil_durum.map(item => `<span>${item}</span>`).join(' • ');
    const acilUyari = veri.acil_durum.length > 0 ? 
        `<div class="acil-uyari">
            <span class="icon">⚠️</span>
            <p><strong>DİKKAT!</strong> Eğer: ${acilListe} durumlarından biri varsa, vakit kaybetmeyin, 112'yi arayın veya **HEMEN ACİL SERVİS**'e gidin!</p>
        </div>` : '';
        
    // Kart içeriği
    detayKarti.innerHTML = `
        ${acilUyari}
        <div class="card-body">
            <h3 class="card-title text-primary">${veri.semptom} İçin Sevk Protokolü</h3>
            
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
