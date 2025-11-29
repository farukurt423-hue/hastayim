// app.js dosyası - GENİŞLETİLMİŞ VE DÜZENLENMİŞ VERİ SETİ

const SEMPTOM_VERILERI = [
    // --- GÖĞÜS ve KARIN ---
    {
        id: 10,
        semptom: "Karın Şişliği ve Gaz",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli, bıçak saplanır gibi ağrı", "Kanlı dışkı", "Yüksek ateş"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol, ultrason ve tahlil isteyiniz. Kronik sindirim sorunları için sevk alınız.",
        aciklama: "Bağırsak sorunları, hazımsızlık ve genel karın şikayetleri için genel başlangıç noktasıdır."
    },
    {
        id: 11,
        semptom: "Geçmeyen Öksürük",
        tanisal_bolum: "Göğüs Hastalıkları",
        tedavi_bolum: "Göğüs Hastalıkları",
        acil_durum: ["Nefes darlığı", "Kanlı balgam", "Göğüste sıkışma hissi"],
        yapilmasi_gereken: "Akciğer sağlığı, astım, KOAH ve kronik bronşit araştırması için direkt Göğüs Hastalıkları'na başvurunuz.",
        aciklama: "Solunum yolları, akciğerler ve alerjik öksürükler bu bölümün alanıdır."
    },
    {
        id: 12,
        semptom: "Kalp Çarpıntısı",
        tanisal_bolum: "Kardiyoloji",
        tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Göğüste şiddetli ağrı", "Bayılma hissi", "Nefes darlığı ile birlikte çarpıntı"],
        yapilmasi_gereken: "Kalp ritmi, damarlar ve kapakçıklar için direkt Kardiyoloji'ye başvurunuz. (Acil değilse, Dahiliye'den sevk de alınabilir).",
        aciklama: "Kalp ve damar sistemi ile ilgili tüm şikayetler için ana uzmanlık."
    },

    // --- BAŞ ve BOYUN ---
    {
        id: 13,
        semptom: "Boyun Ağrısı ve Tutulma",
        tanisal_bolum: "Fizik Tedavi ve Rehabilitasyon (FTR)",
        tedavi_bolum: "FTR / Ortopedi",
        acil_durum: ["Şiddetli travma", "Kol ve parmaklarda ani uyuşma/güç kaybı"],
        yapilmasi_gereken: "FTR, kas, eklem ve duruş bozukluğu kaynaklı ağrılar için iyi bir başlangıç noktasıdır. Sinir sıkışması şüphesi varsa (uyuşma) Nöroloji veya Beyin Cerrahisi'ne sevk edilir.",
        aciklama: "Boyun fıtığı, kas spazmları ve duruş bozuklukları için ilk tanı ve tedavi bölümlerindendir."
    },
    {
        id: 14,
        semptom: "Kulak Çınlaması",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Ani işitme kaybı", "Şiddetli baş dönmesi (vertigo)"],
        yapilmasi_gereken: "İşitme kaybı, kulak enfeksiyonları ve kulakta sıvı birikimi için KBB'ye başvurunuz.",
        aciklama: "Kulak enfeksiyonları, işitme sorunları ve denge bozuklukları için ana uzmanlık."
    },
    {
        id: 15,
        semptom: "Gözde Batma ve Kuruluk",
        tanisal_bolum: "Göz Hastalıkları",
        tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı", "Gözde keskin batma hissi (yabancı cisim)"],
        yapilmasi_gereken: "Alerjik reaksiyonlar, kuru göz sendromu ve görme kusurları için direkt Göz Hastalıkları uzmanına randevu alınız.",
        aciklama: "Göz enfeksiyonları, kuruluk ve görme bozuklukları."
    },

    // --- EKSTREMİTELER (KOL, DİZ, AYAK) ---
    {
        id: 16,
        semptom: "Diz Ağrısı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik", "Yere basamama", "Dizde şekil bozukluğu"],
        yapilmasi_gereken: "Menisküs, bağ ve kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz. Tedavi (ameliyatsız) için FTR'ye sevk edilir.",
        aciklama: "Kas-iskelet sistemi, eklem ve bağ sorunları için tanı uzmanıdır."
    },
    {
        id: 17,
        semptom: "El Parmaklarında Uyuşma",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji / FTR",
        acil_durum: ["Ani felç/güç kaybı", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Sinir sıkışması (Karpal Tünel), sinir hasarı veya nörolojik hastalıklar için Nöroloji'ye başvurunuz.",
        aciklama: "Sinir sistemi, beyin ve omurilikten kaynaklanan uyuşmalar için tanı bölümüdür."
    },
    {
        id: 18,
        semptom: "Ayak Topuğunda Şiddetli Ağrı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Açık yara", "Travma"],
        yapilmasi_gereken: "Topuk dikeni, tendon iltihabı gibi durumlar için Ortopedi uzmanına başvurunuz. FTR veya fizik tedavi cihazları ile tedavi planlanır.",
        aciklama: "Ayak anatomisi, kemik ve tendon sorunları için ana tanı."
    },

    // --- DERİ ve CİLT ---
    {
        id: 19,
        semptom: "Vücutta Geçmeyen Kaşıntı",
        tanisal_bolum: "Dermatoloji (Cildiye)",
        tedavi_bolum: "Dermatoloji",
        acil_durum: ["Nefes almada zorluk (Anafilaksi)", "Hızla yayılan büyük kabarcıklar"],
        yapilmasi_gereken: "Egzama, mantar, alerjik reaksiyonlar veya cilt hastalıkları için direkt Cildiye'ye başvurunuz.",
        aciklama: "Deri, saç, tırnak ve ciltteki döküntülerin tanısı ve tedavisi."
    },
    
    // --- Geri Kalan Temel Semptomlar ---
    {
        id: 20,
        semptom: "Yüksek Ateş (Sebepsiz)",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Dahiliye",
        acil_durum: ["Ateşle birlikte bilinç kaybı", "Boyun sertliği (Menenjit şüphesi)"],
        yapilmasi_gereken: "Enfeksiyon tespiti, kan tahlilleri ve hastalığın kaynağını bulmak için Dahiliye'ye başvurunuz.",
        aciklama: "Ateşli hastalıkların ve enfeksiyonların ilk inceleme bölümüdür."
    }
];

// --- ANA FONKSİYONLAR (Önceki mantık aynı, sadece stil isimleri güncellendi) ---

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
            <p><strong>DİKKAT!</strong> Eğer: ${acilListe} durumlarından biri varsa, **HEMEN ACİL SERVİS**'e başvurunuz!</p>
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
