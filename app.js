// app.js dosyası - 200+ SEMPTOM VE KAPSAMLI PROTOKOL ÇEKİRDEĞİ

const SEMPTOM_VERILERI = [
    // --- GENEL SİSTEM & DAHİLİYE (ID: 1-20) ---
    {
        id: 1, semptom: "Yüksek Ateş (39°C Üzeri)",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye",
        acil_durum: ["Bilinç kaybı", "Boyun sertliği", "Nöbet"],
        yapilmasi_gereken: "Enfeksiyon kaynağını, kan değerlerini bulmak için Dahiliye'ye başvurunuz.",
        aciklama: "Ateşli hastalıkların ve organ sistemlerindeki genel sorunların ilk inceleme bölümüdür."
    },
    {
        id: 2, semptom: "Halsizlik ve Sürekli Yorgunluk",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Ani kilo kaybı", "Şiddetli nefes darlığı"],
        yapilmasi_gereken: "Kan tahlilleri, vitamin eksiklikleri (B12, D) kontrolü için Dahiliye'ye başvurunuz.",
        aciklama: "Vücuttaki temel sistemlerin kontrolü ve kronik yorgunluğun nedeninin tespiti."
    },
    {
        id: 3, semptom: "Mide Yanması ve Reflü",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Siyah dışkı"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek kan testi ve beslenme düzeni analizi talep ediniz. Kronikleşirse Gastroenteroloji'ye sevk istenir.",
        aciklama: "Sindirim sistemi ve mide sorunları için başlangıç noktasıdır."
    },
    {
        id: 4, semptom: "Karın Şişliği ve Ağrı",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)", tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli, bıçak saplanır gibi ağrı", "Ateş"],
        yapilmasi_gereken: "Bağırsak hareketleri, hazımsızlık ve genel karın şikayetleri için Dahiliye'ye başvurunuz.",
        aciklama: "Bağırsak sorunları, hazımsızlık ve genel karın şikayetleri için genel başlangıç noktasıdır."
    },
    {
        id: 5, semptom: "Geçmeyen Öksürük ve Hırıltı",
        tanisal_bolum: "Göğüs Hastalıkları", tedavi_bolum: "Göğüs Hastalıkları",
        acil_durum: ["Nefes almakta zorluk", "Kanlı balgam"],
        yapilmasi_gereken: "Akciğer sağlığı, astım, KOAH ve kronik bronşit araştırması için direkt Göğüs Hastalıkları'na başvurunuz.",
        aciklama: "Solunum yolları, akciğerler ve alerjik öksürükler."
    },
    {
        id: 6, semptom: "Ayaklarda Şişlik ve Ödem",
        tanisal_bolum: "Dahiliye / Kardiyoloji", tedavi_bolum: "Dahiliye",
        acil_durum: ["Ani ve tek bacakta şişme", "Nefes darlığı ile birlikte ödem"],
        yapilmasi_gereken: "Böbrek, karaciğer veya kalp fonksiyonlarını kontrol etmek için Dahiliye'ye başvurunuz.",
        aciklama: "Ödemin dolaşım veya organ fonksiyonu kaynaklı olduğunun tespiti."
    },
    {
        id: 7, semptom: "Sık İdrara Çıkma ve Yanma",
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["İdrarda yoğun kan", "Şiddetli yan ağrısı", "İdrar yapamama"],
        yapilmasi_gereken: "Böbrekler, idrar yolları ve mesane sağlığı (enfeksiyon, taş) için direkt Üroloji'ye başvurunuz.",
        aciklama: "İdrar yolu enfeksiyonları, böbrek taşları ve mesane sorunları."
    },
    {
        id: 8, semptom: "Ciltte Geçmeyen Kaşıntı ve Kızarıklık",
        tanisal_bolum: "Dermatoloji (Cildiye)", tedavi_bolum: "Dermatoloji",
        acil_durum: ["Vücudun hızla şişmesi", "Nefes darlığı (Anafilaksi)"],
        yapilmasi_gereken: "Egzama, mantar, sivilce veya alerji testi için Cildiye uzmanına başvurunuz.",
        aciklama: "Deri, saç, tırnak ve ciltteki döküntülerin tanısı."
    },
    {
        id: 9, semptom: "Bilinç Bulanıklığı ve Konuşma Zorluğu",
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani başlangıçlıysa, derhal ACİL SERVİS'e gidiniz!"],
        yapilmasi_gereken: "Santral sinir sistemi, inme veya nörolojik hastalıklar için Nöroloji'ye başvurunuz.",
        aciklama: "Beyin ve sinir sistemi işlev bozuklukları."
    },
    
    // --- OMURGA VE EKLEMLER (BEL, DİZ, OMUZ) (ID: 21-40) ---
    {
        id: 21, semptom: "Bel Ağrısı (Bacağa Yayılan)",
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Ortopedi", tedavi_bolum: "FTR",
        acil_durum: ["Bacakta ani güç kaybı", "İdrar/gaita kaçırma"],
        yapilmasi_gereken: "Bel fıtığı veya sinir sıkışması şüphesiyle MR için Beyin Cerrahisi veya Ortopedi'ye başvurulur. Tedavi FTR ile başlar.",
        aciklama: "Bel omurgası, sinir kökleri ve omurilik sorunları."
    },
    {
        id: 22, semptom: "Diz Ağrısı (Travmasız, Merdivende Artan)",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik", "Dizde kilitlenme"],
        yapilmasi_gereken: "Menisküs, bağ ve kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz. Tedavi için FTR'ye sevk edilir.",
        aciklama: "Diz eklemi ve çevresindeki bağ dokusu sorunları."
    },
    {
        id: 23, semptom: "Boyun Ağrısı ve Kol Uyuşması",
        tanisal_bolum: "Beyin ve Sinir Cerrahisi / Nöroloji", tedavi_bolum: "FTR",
        acil_durum: ["Ani güç kaybı", "Yüksek ateş"],
        yapilmasi_gereken: "Boyun fıtığı veya sinir sıkışması şüphesi varsa Beyin Cerrahisi'ne gidilir. Tedavi FTR ile başlar.",
        aciklama: "Boyun omurgası ve sinir kökleri sorunları."
    },
    {
        id: 24, semptom: "Ayak Bileği Burkulması (Travma Sonrası Şişlik)",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi",
        acil_durum: ["Üzerine basamama", "Şekil bozukluğu"],
        yapilmasi_gereken: "Kırık, bağ ve tendon hasarı şüphesiyle direkt Ortopedi'ye başvurunuz.",
        aciklama: "Kemik, eklem ve bağ dokusu yaralanmaları."
    },
    {
        id: 25, semptom: "Omuzda Takılma ve Hareket Kısıtlılığı",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR",
        acil_durum: ["Kolun yerinden çıkmış görünmesi"],
        yapilmasi_gereken: "Rotator manşet yırtıkları, donuk omuz veya tendon iltihabı gibi durumlar için Ortopedi'ye başvurulur.",
        aciklama: "Omuz eklemi ve tendon sorunları."
    },
    {
        id: 26, semptom: "Ayak Topuğunda Sabah Ağrısı",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "FTR",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Topuk dikeni veya plantar fasiit gibi durumlar için Ortopedi uzmanına başvurulur.",
        aciklama: "Ayak anatomisi, kemik ve tendon sorunları."
    },
    {
        id: 27, semptom: "El Parmaklarında Uyuşma (Sabahları)",
        tanisal_bolum: "Nöroloji", tedavi_bolum: "FTR",
        acil_durum: ["Ani felç/güç kaybı"],
        yapilmasi_gereken: "Sinir sıkışması (Karpal Tünel Sendromu) tanısı için Nöroloji'ye başvurulur.",
        aciklama: "Sinir sistemi ve el sinir sıkışmaları."
    },
    {
        id: 28, semptom: "Kalça Ağrısı (Yürürken Artan)",
        tanisal_bolum: "Ortopedi ve Travmatoloji", tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli travma sonrası ağrı"],
        yapilmasi_gereken: "Kalça kireçlenmesi, eklem sorunları veya tendon iltihabı için Ortopedi'ye başvurulur.",
        aciklama: "Kalça eklemi, kireçlenme ve kas sorunları."
    },
    
    // --- BAŞ VE YÜZ ORGANLARI DETAY (ID: 41-60) ---
    {
        id: 41, semptom: "Gözde Kanlanma ve Çapaklanma",
        tanisal_bolum: "Göz Hastalıkları", tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı"],
        yapilmasi_gereken: "Enfeksiyon (konjonktivit), alerji veya göz kuruluğu tanısı için direkt Göz Hastalıkları uzmanına randevu alınız.",
        aciklama: "Göz enfeksiyonları, kuruluk ve alerji."
    },
    {
        id: 42, semptom: "Burun Kanaması (Tekrarlayan)",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Durmayan kanama", "Yüksek tansiyon"],
        yapilmasi_gereken: "Burun içi kılcal damar çatlaması, polip veya kemik eğriliği (deviasyon) tanısı için KBB uzmanına başvurunuz.",
        aciklama: "Burun ve sinüs hastalıkları."
    },
    {
        id: 43, semptom: "Yutkunmada Zorluk ve Ses Kısıklığı",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)", tedavi_bolum: "KBB",
        acil_durum: ["Nefes almada zorluk (tıkanma hissi)"],
        yapilmasi_gereken: "Bademcik, geniz eti, ses telleri sorunları veya kronik farenjit için KBB'ye başvurulur.",
        aciklama: "Boğaz, gırtlak ve ses telleri ile ilgili şikayetler."
    },
    {
        id: 44, semptom: "Yüzde Uyuşma (Tek Taraflı)",
        tanisal_bolum: "Nöroloji", tedavi_bolum: "Nöroloji",
        acil_durum: ["Yüzde ani asimetri (Felç şüphesi)", "Konuşma bozukluğu"],
        yapilmasi_gereken: "Yüz siniri (Trigeminal nevralji) veya santral sinir sistemi sorunları için Nöroloji'ye başvurulur.",
        aciklama: "Sinir sıkışmaları veya santral sinir sistemi kaynaklı sorunlar."
    },
    
    // --- GİNEKOLOJİ VE ÜROLOJİ (ID: 61-70) ---
    {
        id: 61, semptom: "Adet Düzensizliği ve Şiddetli Ağrı",
        tanisal_bolum: "Kadın Hastalıkları ve Doğum", tedavi_bolum: "Kadın Hastalıkları ve Doğum",
        acil_durum: ["Aşırı kanama ve bayılma hissi"],
        yapilmasi_gereken: "Hormonal denge, kistler ve miyomlar gibi jinekolojik sağlık için direkt bu bölüme başvurulur.",
        aciklama: "Kadın üreme sağlığı ve hormonal döngü."
    },
    {
        id: 62, semptom: "Erkekte Sertleşme Sorunu",
        tanisal_bolum: "Üroloji", tedavi_bolum: "Üroloji",
        acil_durum: ["Yok"],
        yapilmasi_gereken: "Hormonal ve dolaşım sistemi kaynaklı sorunların tespiti için Üroloji'ye başvurulur. (Gerekirse Kardiyoloji'ye sevk istenir).",
        aciklama: "Erkek üreme ve cinsel sağlığı."
    },
    // ... ve bu şekilde tüm 200+ semptomu tamamlamak için yapıyı kullanınız.
];


// --- ANA FONKSİYONLAR (MANTIK BÖLÜMÜ) ---

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
