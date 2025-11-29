// app.js dosyası - 150+ SEMPTOM VE KAPSAMLI PROTOKOL ÇEKİRDEĞİ

const SEMPTOM_VERILERI = [
    // --- GENEL SİSTEM & DAHİLİYE & METABOLİZMA (ID: 1-20) ---
    {
        id: 1, semptom: "Halsizlik ve Sürekli Yorgunluk",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Ani kilo kaybı", "Şiddetli nefes darlığı"],
        yapilmasi_gereken: "Kan tahlilleri, vitamin eksiklikleri (B12, D, Demir), tiroid ve organ fonksiyon kontrolü için Dahiliye'ye başvurunuz.",
        aciklama: "Vücudun temel sistemlerinin kontrolü ve kronik yorgunluğun nedeninin tespiti."
    },
    {
        id: 2, semptom: "Mide Yanması ve Ağrısı (Reflü)",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Kanlı kusmuk", "Siyah dışkı"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol isteyiniz. Kronikleşirse veya endoskopi gerekiyorsa Gastroenteroloji'ye sevk istenir.",
        aciklama: "Sindirim sistemi, mide ve yemek borusu sorunları."
    },
    {
        id: 3, semptom: "Karın Şişliği ve Gaz Sancısı",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli, bıçak saplanır gibi ağrı", "Ateş"],
        yapilmasi_gereken: "Bağırsak hareketleri, hazımsızlık ve genel karın şikayetleri için Dahiliye'ye başvurunuz.",
        aciklama: "Bağırsak sorunları, hazımsızlık ve genel karın şikayetleri için genel başlangıç noktasıdır."
    },
    {
        id: 4, semptom: "Geçmeyen Öksürük ve Hırıltı",
        tanisal_bolum: "Göğüs Hastalıkları", tedavi_bolum: "Göğüs Hastalıkları",
        acil_durum: ["Nefes almakta zorluk", "Kanlı balgam", "Göğüste sıkışma hissi"],
        yapilmasi_gereken: "Akciğer sağlığı, astım, KOAH ve kronik bronşit araştırması için direkt Göğüs Hastalıkları'na başvurunuz.",
        aciklama: "Solunum yolları, akciğerler ve alerjik öksürükler."
    },
    {
        id: 5, semptom: "Yüksek Tansiyon (Tekrarlayan)",
        tanisal_bolum: "Kardiyoloji / Dahiliye", tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Ani ve aşırı yüksek tansiyon (20/12 üzeri)"],
        yapilmasi_gereken: "Tansiyonun nedeninin kalp, böbrek veya stres kaynaklı olduğunu tespit etmek için bu bölümlere başvurulur.",
        aciklama: "Kan basıncının kontrolü ve hipertansiyon yönetimi."
    },
    {
        id: 6, semptom: "Şeker Şüphesi (Aşırı susama, idrar)",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Endokrinoloji",
        acil_durum: ["Bilinç bulanıklığı"],
        yapilmasi_gereken: "Kan şekeri ölçümü ve genel metabolik kontrol için Dahiliye'ye başvurulur. Tanı sonrası Endokrinoloji'ye sevk istenir.",
        aciklama: "Diyabet ve metabolizma hastalıkları."
    },
    {
        id: 7, semptom: "Anormal Adet Kanaması",
        tanisal_bolum: "Kadın Hastalıkları ve Doğum", tedavi_bolum: "Kadın Hastalıkları ve Doğum",
        acil_durum: ["Aşırı kanama ve bayılma hissi"],
        yapilmasi_gereken: "Hormonal dengesizlikler, kistler, miyomlar ve jinekolojik sağlık için direkt bu bölüme başvurulur.",
        aciklama: "Kadın üreme sağlığı ve hormonal döngü."
    },
    {
        id: 8, semptom: "İdrar Yaparken Yoğun Yanma",
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["İdrarda yoğun kan", "Şiddetli yan ağrısı", "Yüksek ateş"],
        yapilmasi_gereken: "İdrar yolu enfeksiyonu, böbrek taşları ve mesane sağlığı için Üroloji'ye başvurulur.",
        aciklama: "İdrar yolları ve mesane sorunları."
    },
    {
        id: 9, semptom: "Vücutta Dolaşan Ağrı (Eklemlerde)",
        tanisal_bolum: "Romatoloji / FTR", tedavi_bolum: "Romatoloji",
        acil_durum: ["Ateşle birlikte eklem şişliği"],
        yapilmasi_gereken: "Romatizmal ve iltihaplı hastalıkların (fibromiyalji, artrit vb.) tanısı için Romatoloji'ye başvurunuz.",
        aciklama: "Bağ dokusu ve iltihaplı eklem hastalıkları."
    },
    {
        id: 10, semptom: "Boyunda Şişlik (Elle Hissedilen)",
        tanisal_bolum: "Endokrinoloji / Genel Cerrahi", tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Nefes almada zorluk"],
        yapilmasi_gereken: "Tiroid nodülleri ve boyun lenf bezleri kontrolü için Endokrinoloji'ye başvurulur. Gerekirse Genel Cerrahi'ye sevk istenir.",
        aciklama: "Tiroid ve lenf bezi sorunları."
    },
    
    // --- BAŞ VE YÜZ DETAY (ID: 21-40) ---
    {
        id: 21, semptom: "Baş Ağrısı (Göz Çevresi Basıncı)",
        tanisal_bolum: "Nöroloji / Göz Hastalıkları", tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani görme kaybı"],
        yapilmasi_gereken: "Sinirsel ağrı veya görme bozukluğu (miyop, hipermetrop) şüphesi için Nöroloji veya Göz Hastalıkları'na başvurulur.",
        aciklama: "Göz tansiyonu, sinüzit veya sinir sistemi bağlantılı ağrılar."
    },
    {
        id: 22, semptom: "Gözde Kanlanma ve Ağrı",
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görüş azalması", "Yoğun ışık hassasiyeti"],
        yapilmasi_gereken: "Konjonktivit, göz tansiyonu veya enfeksiyon için direkt Göz Hastalıkları uzmanına başvurunuz.",
        aciklama: "Göz enfeksiyonları ve iç göz hastalıkları."
    },
    {
        id: 23, semptom: "Kulak Çınlaması ve İşitme Kaybı",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Ani işitme kaybı (Saatler içinde)"],
        yapilmasi_gereken: "İşitme testi (Odyogram) ve kulak sağlığı için KBB'ye başvurunuz.",
        aciklama: "Kulak enfeksiyonları, sinirsel işitme sorunları ve denge bozuklukları."
    },
    {
        id: 24, semptom: "Burun Kanaması (Tekrarlayan)",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Durmayan kanama", "Yüksek tansiyon"],
        yapilmasi_gereken: "Burun içi kılcal damar çatlaması, polip veya kemik eğriliği tanısı için KBB'ye başvurulur.",
        aciklama: "Burun ve sinüs hastalıkları, damar sorunları."
    },
    {
        id: 25, semptom: "Yüzde Uyuşma ve Karıncalanma",
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yüzde ani asimetri (Felç şüphesi)", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Yüz siniri (Trigeminal nevralji) ve santral sinir sistemi sorunları için Nöroloji'ye başvurulur.",
        aciklama: "Sinir sıkışmaları veya santral sinir sistemi kaynaklı sorunlar."
    },
    {
        id: 26, semptom: "Ağızda ve Dilde Yaralar",
        tanisal_bolum: "Dermatoloji / KBB", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Yaranın hızlı büyümesi"],
        yapilmasi_gereken: "Aft, uçuk, mantar veya sistemik hastalıkların ağız içi belirtileri için Dermatoloji'ye başvurulur.",
        aciklama: "Ağız içi mukoza ve dil hastalıkları."
    },
    
    // --- OMURGA VE GÖVDE (BEL, SIRT, BOYUN) (ID: 41-60) ---
    {
        id: 41, semptom: "Bel Ağrısı (Bacağa Yayılan)",
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Bacakta ani güç kaybı", "İdrar kaçırma"],
        yapilmasi_gereken: "Bel fıtığı veya sinir sıkışması şüphesiyle MR için Beyin Cerrahisi veya Ortopedi'ye başvurulur. Tedavi FTR ile başlar.",
        aciklama: "Bel omurgası, sinir kökleri ve kas-iskelet sistemi sorunları."
    },
    {
        id: 42, semptom: "Sırt Ağrısı (Kalıcı ve Derin)",
        tanisal_bolum: "FTR / Dahiliye", tedavi_bolum: "FTR",
        acil_durum: ["Sırt ağrısıyla birlikte nefes darlığı"],
        yapilmasi_gereken: "Kas spazmı, duruş bozukluğu veya romatizmal nedenler için FTR'ye; iç organ kaynaklı ağrı şüphesi varsa Dahiliye'ye başvurulur.",
        aciklama: "Duruş bozuklukları, kas gerginliği ve iç organ yansıması."
    },
    {
        id: 43, semptom: "Boyun Tutulması (Ani)",
        tanisal_bolum: "FTR", tedavi_bolum: "FTR",
        acil_durum: ["Şiddetli travma"],
        yapilmasi_gereken: "Basit kas spazmları ve duruş bozukluğu kaynaklı tutulmalar için FTR'ye başvurulur.",
        aciklama: "Boyun kasları, duruş bozuklukları ve basit fıtık sorunları için ilk aşama."
    },
    {
        id: 44, semptom: "Göğüste Batma Hissi",
        tanisal_bolum: "Kardiyoloji / Göğüs Hastalıkları", tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Sıkışma hissi, terleme, kola yayılma"],
        yapilmasi_gereken: "Kalp sorunu ihtimalini elemek için Kardiyoloji'ye başvurulur. Akciğer veya kas kaynaklıysa Göğüs Hastalıkları veya FTR'ye sevk edilir.",
        aciklama: "Kalp, akciğer veya kas kaynaklı ağrıların ayrıştırılması."
    },
    
    // --- EKSTREMİTELER (KOL, DİZ, AYAK) (ID: 61-80) ---
    {
        id: 61, semptom: "Diz Ağrısı (Merdiven Çıkarken)",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Dizde kilitlenme", "Şiddetli şişlik"],
        yapilmasi_gereken: "Menisküs, bağ ve kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz.",
        aciklama: "Diz eklemi, kıkırdak ve bağ dokusu sorunları."
    },
    {
        id: 62, semptom: "Ayak Bileği Şişliği (Travmasız)",
        tanisal_bolum: "Kardiyoloji / Ortopedi", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Ani ve tek bacakta şişme", "Nefes darlığı"],
        yapilmasi_gereken: "Ödemin dolaşım kaynaklı olup olmadığını Dahiliye/Kardiyoloji'den sonra, eklem ve tendon sorunları için Ortopedi'ye başvurulur.",
        aciklama: "Eklem iltihabı veya dolaşım kaynaklı şişlikler."
    },
    {
        id: 63, semptom: "El Parmaklarında Uyuşma (Sabahları)",
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji / FTR",
        acil_durum: ["Ani felç/güç kaybı"],
        yapilmasi_gereken: "Sinir sıkışması (Karpal Tünel Sendromu) veya nöropati tanısı için Nöroloji'ye başvurulur.",
        aciklama: "Sinir iletimi ve el sinir sıkışmaları."
    },
    {
        id: 64, semptom: "Omuzda Takılma Hissi",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Tendon zedelenmesi veya eklem kireçlenmesi şüphesiyle Ortopedi'ye başvurulur.",
        aciklama: "Omuz eklemi ve tendon sorunları."
    },
    {
        id: 65, semptom: "Kalça Ağrısı (Yürürken Artan)",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli travma sonrası ağrı"],
        yapilmasi_gereken: "Kalça kireçlenmesi veya eklem sorunları için Ortopedi'ye başvurulur.",
        aciklama: "Kalça eklemi, kireçlenme ve kas sorunları."
    },
    
    // --- 80+ SEMPTOMU BURAYA DEVAM ETMEK İÇİN KOPYALA-YAPIŞTIR YAPISI: ---
    {
        id: 66, semptom: "Siyah Dışkı (Katran Rengi)",
        tanisal_bolum: "Gastroenteroloji", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["**ACİL SERVİS**'e gidiniz! Kanama anlamına gelebilir."],
        yapilmasi_gereken: "Sindirim sisteminin üst kısmından kaynaklanan kanama şüphesiyle Gastroenteroloji'ye başvurulur.",
        aciklama: "İç kanama şüphesi ve sindirim sistemi sorunları."
    },
    // ... ve bu şekilde 150+ semptomu tamamlamak için yapıyı kullanınız.
];


// --- ANA FONKSİYONLAR (Arama ve Gösterim Mantığı) ---
// Not: Bu kısım, yeni arayüze ve düzeltilmiş arama mantığına uygundur.

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

    // Acil durumları vurgulama
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
