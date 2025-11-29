// app.js dosyası
const SEMPTOM_VERILERI = [
    {
        id: 1,
        semptom: "Bel Ağrısı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Fizik Tedavi",
        acil_durum: ["Yüksek ateş", "Şiddetli travma", "Bacaklarda uyuşma", "İdrar kaçırma"],
        yapilmasi_gereken: "Öncelikle Ortopedi uzmanına giderek röntgen/MR istemelisiniz. Fizik tedaviye sevk, tanı konulduktan sonra yapılmalıdır.",
        aciklama: "Kas-iskelet sistemi, kemik ve eklem sorunları için ilk başvurulacak tanı bölümüdür. Sinir sıkışması şüphesi varsa Beyin Cerrahisi de görülebilir."
    },
    {
        id: 2,
        semptom: "Mide Yanması",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Siyah dışkı (iç kanama belirtisi)"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol ve gerekli ise Endoskopi/Kolonoskopi için sevk alınız.",
        aciklama: "Sindirim sistemi, mide ve bağırsak sorunları Dahiliye'nin alanına girer. Kronikleşirse Gastroenteroloji'ye sevk istenir."
    },
    {
        id: 3,
        semptom: "Baş Ağrısı",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani ve şiddetli ağrı (hayatınızdaki en kötüsü)", "Bilinç kaybı", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Migren, gerilim veya küme baş ağrısı gibi kronik durumlar için Nöroloji uzmanına başvurunuz. Tansiyon kontrolü için Aile Hekimi/Dahiliye de uygundur.",
        aciklama: "Sinir sistemi, beyin ve omurilik hastalıkları Nöroloji uzmanının alanıdır."
    },
    // **Buraya yüzlerce semptom/protokol kopyalayıp ekleyebilirsiniz.**
];

// Ana Arama ve Filtreleme Fonksiyonu
function aramaYap() {
    const aramaMetni = document.getElementById('arama_input').value.toLowerCase();
    const sonuclarListesi = document.getElementById('sonuclar_listesi');
    sonuclarListesi.innerHTML = ''; 
    document.getElementById('detay_karti').innerHTML = ''; // Detay kartını temizle

    if (aramaMetni.length < 2) {
        return; 
    }

    const filtrelenmis = SEMPTOM_VERILERI.filter(veri =>
        veri.semptom.toLowerCase().includes(aramaMetni)
    );

    if (filtrelenmis.length === 0) {
        sonuclarListesi.innerHTML = '<li class="list-group-item disabled">Sonuç bulunamadı. Lütfen aradığınız semptomu netleştirin.</li>';
        return;
    }

    filtrelenmis.forEach(veri => {
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = veri.semptom;
        li.onclick = () => detaylariGoster(veri.id); // Tıklayınca detayı göster
        sonuclarListesi.appendChild(li);
    });
}

// Detay Kartını Oluşturan Fonksiyon
function detaylariGoster(id) {
    const veri = SEMPTOM_VERILERI.find(d => d.id === id);
    const detayKarti = document.getElementById('detay_karti');

    // Acil durumları vurgulama
    const acilListe = veri.acil_durum.map(item => `<li>⚠️ **${item}**</li>`).join('');
    const acilUyari = veri.acil_durum.length > 0 ? 
        `<div class="acil-uyari">
            <h4>🚨 KIRMIZI ALARM (ACİL)</h4>
            <p>Eğer aşağıdaki durumlardan **HERHANGİ BİRİ** varsa, beklemeden 112'yi arayın veya hemen **ACİL SERVİS**'e gidin!</p>
            <ul>${acilListe}</ul>
        </div>` : '';
        
    // Kart içeriği
    detayKarti.innerHTML = `
        ${acilUyari}
        <div class="card-body">
            <h3 class="card-title text-primary">${veri.semptom} Protokolü</h3>
            
            <div class="protokol-asamalari">
                <div class="asama asama-tani">
                    <h4>🔍 1. TANI AŞAMASI (Görülecek İlk Uzman)</h4>
                    <p>Sorunun kaynağını bulmak için öncelikle bu bölüme randevu almalısınız:</p>
                    <p class="bolum-adi">➡️ **${veri.tanisal_bolum}**</p>
                    <p class="aciklama-detay">${veri.aciklama}</p>
                </div>
                
                <hr>

                <div class="asama asama-tedavi">
                    <h4>💊 2. TEDAVİ AŞAMASI (Sevk Durumu)</h4>
                    <p>Tanı konulduktan sonra, bu bölüme sevk edilebilirsiniz:</p>
                    <p class="bolum-adi">➡️ **${veri.tedavi_bolum}**</p>
                    <p class="aciklama-detay">⚠️ **Doktor Önerisi:** ${veri.yapilmasi_gereken}</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('sonuclar_listesi').innerHTML = ''; // Arama listesini kapat
}
