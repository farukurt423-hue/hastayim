// app.js dosyası - YÜZLERCE HASTALIĞIN BAŞLANGIÇ ÇEKİRDEĞİ

const SEMPTOM_VERILERI = [
    // --- Vücut Ana Çekirdek (Ortak Sorunlar) ---
    {
        id: 1,
        semptom: "Bel Ağrısı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Fizik Tedavi ve Rehabilitasyon (FTR)",
        acil_durum: ["Yüksek ateş", "Şiddetli travma", "Bacaklarda ani uyuşma", "İdrar kaçırma"],
        yapilmasi_gereken: "İlk randevunuzu Ortopedi uzmanından alarak röntgen/MR istemelisiniz. Tedavi için FTR'ye sevk, tanı konulduktan sonra yapılır.",
        aciklama: "Kas-iskelet sistemi, omurga ve eklem sorunları için ilk başvurulacak tanı bölümüdür."
    },
    {
        id: 2,
        semptom: "Mide Yanması",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Siyah dışkı (iç kanama)", "Sürekli kusma"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol ve kan testi talep ediniz. Kronikleşirse sevk istenir.",
        aciklama: "Sindirim sistemi, mide ve bağırsak sorunları için genel başlangıç noktasıdır."
    },
    {
        id: 3,
        semptom: "Baş Ağrısı",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani ve şiddetli ağrı (hayatınızdaki en kötüsü)", "Bilinç kaybı", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Migren, gerilim tipi baş ağrısı gibi kronik durumlar Nöroloji'nin alanıdır. İlk defa şiddetli yaşanıyorsa Dahiliye veya Acil'e başvurulabilir.",
        aciklama: "Sinir sistemi, beyin ve migren gibi kronik baş ağrıları için ana tanı bölümüdür."
    },
    {
        id: 4,
        semptom: "Halsizlik ve Sürekli Yorgunluk",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Göğüs ağrısı", "Nefes darlığı"],
        yapilmasi_gereken: "Kan tahlilleri, vitamin eksiklikleri ve organ fonksiyonları için Dahiliye uzmanına başvurunuz. Hormonal sorun şüphesi varsa Endokrinoloji'ye sevk edilir.",
        aciklama: "Vitamin, kan değerleri, tiroid ve organ fonksiyonlarının kontrolü için genel başlangıç."
    },

    // --- Kulak, Burun, Boğaz (KBB) ---
    {
        id: 5,
        semptom: "Kulak Çınlaması",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Ani işitme kaybı", "Şiddetli baş dönmesi (vertigo)"],
        yapilmasi_gereken: "İşitme testi (odyogram) ve kulak sağlığı için KBB'ye başvurunuz.",
        aciklama: "Kulak enfeksiyonları, işitme sorunları ve denge bozuklukları için ana uzmanlık."
    },
    {
        id: 6,
        semptom: "Geçmeyen Boğaz Ağrısı",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Nefes almada zorluk", "Yutkunamama"],
        yapilmasi_gereken: "Bademcik, geniz eti ve kronik farenjit gibi durumlar için KBB uzmanına başvurunuz.",
        aciklama: "Farenjit, tonsilit ve sinüzit gibi üst solunum yolu sorunları."
    },

    // --- Göz Hastalıkları ---
    {
        id: 7,
        semptom: "Gözde Kızarıklık ve Kaşıntı",
        tanisal_bolum: "Göz Hastalıkları",
        tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı", "Gözde keskin batma hissi (yabancı cisim)"],
        yapilmasi_gereken: "Alerjik reaksiyonlar, enfeksiyon veya miyopi/astigmat gibi görme kusurları için direkt Göz Hastalıkları uzmanına randevu alınız.",
        aciklama: "Göz enfeksiyonları, kuruluk, alerji ve görme bozuklukları."
    },

    // --- Cilt ve Ayak Sağlığı (Ayak, Deri, Tırnak) ---
    {
        id: 8,
        semptom: "Ciltte Geçmeyen Kaşıntı",
        tanisal_bolum: "Dermatoloji (Cildiye)",
        tedavi_bolum: "Dermatoloji",
        acil_durum: ["Vücudun hızla şişmesi", "Nefes almada zorluk (anafilaksi)"],
        yapilmasi_gereken: "Egzama, mantar, sivilce veya alerji testi için Cildiye uzmanına başvurunuz.",
        aciklama: "Deri, saç, tırnak ve cinsel yolla bulaşan hastalıklar bu bölümün alanıdır."
    },
    {
        id: 9,
        semptom: "Ayak Bileği Burkulması",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik ve üzerine basamama"],
        yapilmasi_gereken: "Kemik kırığı, bağ ve tendon hasarı şüphesiyle direkt Ortopedi uzmanına başvurulmalıdır.",
        aciklama: "Travmatik yaralanmalar, kırıklar, çıkıklar ve eklem sorunları Ortopedi'nin tanı alanıdır."
    }
    
    // **Siz de bu yapıyı kullanarak yüzlerce semptom ekleyebilirsiniz!**
];


// --- ANA FONKSİYONLAR ---

// Ana Arama ve Filtreleme Fonksiyonu (Aramayı Yaptırırken otomatik listeler)
function aramaYap() {
    const aramaMetni = document.getElementById('arama_input').value.toLowerCase();
    const sonuclarListesi = document.getElementById('sonuclar_listesi');
    sonuclarListesi.innerHTML = ''; 
    document.getElementById('detay_karti').innerHTML = '<p class="text-center text-secondary mt-5">Lütfen aramak istediğiniz semptomu listeden seçin.</p>';

    if (aramaMetni.length < 2) {
        sonuclarListesi.style.display = 'none';
        return; 
    }

    const filtrelenmis = SEMPTOM_VERILERI.filter(veri =>
        veri.semptom.toLowerCase().includes(aramaMetni)
    );

    sonuclarListesi.style.display = 'block';

    if (filtrelenmis.length === 0) {
        sonuclarListesi.innerHTML = '<li class="list-group-item disabled text-center">Aradığınız semptom bulunamadı. Lütfen farklı kelimeler deneyin.</li>';
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

// Detay Kartını Oluşturan Fonksiyon (Tıbbi Protokolü Gösterir)
function detaylariGoster(id) {
    const veri = SEMPTOM_VERILERI.find(d => d.id === id);
    const detayKarti = document.getElementById('detay_karti');
    document.getElementById('sonuclar_listesi').style.display = 'none'; // Arama listesini kapat

    // Acil durumları vurgulama
    const acilListe = veri.acil_durum.map(item => `<li><span class="text-danger">🚨</span> **${item}**</li>`).join('');
    const acilUyari = veri.acil_durum.length > 0 ? 
        `<div class="acil-uyari">
            <h4>🚨 ACİL VE KRİTİK UYARI</h4>
            <p>Eğer aşağıdaki durumlardan **HERHANGİ BİRİ** varsa, vakit kaybetmeyin, 112'yi arayın veya hemen **ACİL SERVİS**'e gidin!</p>
            <ul>${acilListe}</ul>
        </div>` : '';
        
    // Kart içeriği
    detayKarti.innerHTML = `
        ${acilUyari}
        <div class="card-body">
            <h3 class="card-title text-primary">${veri.semptom} İçin Sevk Protokolü</h3>
            
            <div class="protokol-asamalari">
                <div class="asama asama-tani">
                    <h4>1. TANISAL UZMANLIK (Görülecek İlk Bölüm)</h4>
                    <p class="bolum-adi">➡️ ${veri.tanisal_bolum}</p>
                    <p class="aciklama-detay"><strong>Açıklama:</strong> ${veri.aciklama}</p>
                </div>
                
                <hr>

                <div class="asama asama-tedavi">
                    <h4>2. TEDAVİ AŞAMASI (Tanı Sonrası Sevk)</h4>
                    <p class="bolum-adi">➡️ ${veri.tedavi_bolum}</p>
                    <p class="aciklama-detay"><strong>Doktor Önerisi:</strong> ${veri.yapilmasi_gereken}</p>
                </div>
            </div>
        </div>
    `;
}
