// app.js dosyası - YÜZLERCE HASTALIĞIN UZMAN PROTOKOL ÇEKİRDEĞİ

const SEMPTOM_VERILERI = [
    // --- GENEL SİSTEM ve BAŞLANGIÇ NOKTALARI (ID: 1-10) ---
    {
        id: 1,
        semptom: "Bel Ağrısı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Fizik Tedavi ve Rehabilitasyon (FTR)",
        acil_durum: ["Yüksek ateş", "Şiddetli travma", "Bacaklarda ani uyuşma/güç kaybı", "İdrar kaçırma"],
        yapilmasi_gereken: "İlk randevunuzu Ortopedi uzmanından alarak röntgen/MR istemelisiniz. Tedavi için FTR'ye sevk, tanı konulduktan sonra yapılır.",
        aciklama: "Kas-iskelet sistemi, omurga ve eklem sorunları için ilk başvurulacak tanı bölümüdür. Sinir sıkışması şüphesi varsa Beyin Cerrahisi de görülebilir."
    },
    {
        id: 2,
        semptom: "Mide Yanması ve Reflü",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Gastroenteroloji",
        acil_durum: ["Şiddetli göğüs ağrısı", "Siyah dışkı (iç kanama)", "Sürekli kusma"],
        yapilmasi_gereken: "Öncelikle Dahiliye uzmanına giderek genel bir kontrol, kan testi ve beslenme düzeni analizi talep ediniz. Kronikleşirse Gastroenteroloji'ye sevk edilir.",
        aciklama: "Sindirim sistemi ve genel mide sorunları için başlangıç noktasıdır."
    },
    {
        id: 3,
        semptom: "Baş Ağrısı (Migren/Kronik)",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani ve şiddetli ağrı (hayatınızdaki en kötüsü)", "Bilinç kaybı", "Konuşma bozukluğu", "Yüksek tansiyon"],
        yapilmasi_gereken: "Migren, gerilim veya küme baş ağrısı gibi durumlar için Nöroloji uzmanına başvurunuz. Tansiyon kontrolü için Aile Hekimi/Dahiliye de uygundur.",
        aciklama: "Sinir sistemi, beyin ve migren gibi kronik baş ağrıları için ana tanı bölümüdür."
    },
    {
        id: 4,
        semptom: "Halsizlik ve Sürekli Yorgunluk",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Dahiliye / Endokrinoloji",
        acil_durum: ["Göğüs ağrısı", "Nefes darlığı"],
        yapilmasi_gereken: "Kan tahlilleri, vitamin eksiklikleri, anemi ve organ fonksiyonları kontrolü için Dahiliye'ye başvurunuz.",
        aciklama: "Vücuttaki temel sistemlerin kontrolü ve kronik yorgunluğun nedeninin tespiti."
    },
    {
        id: 5,
        semptom: "Yüksek Ateş (Sebepsiz)",
        tanisal_bolum: "Dahiliye (İç Hastalıkları)",
        tedavi_bolum: "Dahiliye",
        acil_durum: ["Ateşle birlikte bilinç kaybı", "Boyun sertliği", "Nefes darlığı"],
        yapilmasi_gereken: "Enfeksiyon tespiti, kan tahlilleri ve hastalığın kaynağını bulmak için Dahiliye'ye başvurunuz.",
        aciklama: "Ateşli hastalıkların ve enfeksiyonların ilk inceleme bölümüdür."
    },
    {
        id: 6,
        semptom: "Geçmeyen Öksürük",
        tanisal_bolum: "Göğüs Hastalıkları",
        tedavi_bolum: "Göğüs Hastalıkları",
        acil_durum: ["Nefes darlığı", "Kanlı balgam", "Göğüste sıkışma hissi"],
        yapilmasi_gereken: "Akciğer sağlığı, astım, KOAH ve kronik bronşit araştırması için direkt Göğüs Hastalıkları'na başvurunuz.",
        aciklama: "Solunum yolları, akciğerler ve alerjik öksürükler bu bölümün alanıdır."
    },
    {
        id: 7,
        semptom: "Ciltte Geçmeyen Kaşıntı",
        tanisal_bolum: "Dermatoloji (Cildiye)",
        tedavi_bolum: "Dermatoloji",
        acil_durum: ["Vücudun hızla şişmesi", "Nefes almada zorluk (Anafilaksi)"],
        yapilmasi_gereken: "Egzama, mantar, sivilce veya alerji testi için Cildiye uzmanına başvurunuz.",
        aciklama: "Deri, saç, tırnak ve ciltteki döküntülerin tanısı ve tedavisi."
    },
    {
        id: 8,
        semptom: "Sık İdrara Çıkma",
        tanisal_bolum: "Üroloji",
        tedavi_bolum: "Üroloji",
        acil_durum: ["İdrarda kan", "Şiddetli yan ağrısı", "İdrar yapamama"],
        yapilmasi_gereken: "Böbrekler, idrar yolları ve mesane sağlığı için direkt Üroloji'ye başvurunuz.",
        aciklama: "İdrar yolu enfeksiyonları, böbrek taşları ve mesane sorunları."
    },
    {
        id: 9,
        semptom: "Denge Kaybı ve Baş Dönmesi",
        tanisal_bolum: "Nöroloji / KBB",
        tedavi_bolum: "Nöroloji / KBB",
        acil_durum: ["Şiddetli bilinç bulanıklığı", "Vücudun bir tarafında uyuşma"],
        yapilmasi_gereken: "Sorun beyin kaynaklı ise Nöroloji, kulak (iç kulak) kaynaklı ise KBB'ye başvurulmalıdır.",
        aciklama: "Baş dönmesinin kaynağının (vertigo) sinirsel mi yoksa iç kulak mı olduğunun tespiti."
    },
    {
        id: 10,
        semptom: "Sürekli Karıncalanma/Uyuşma",
        tanisal_bolum: "Nöroloji",
        tedavi_bolum: "Nöroloji",
        acil_durum: ["Ani, tam his kaybı", "Yüzde düşüklük", "Kol/bacakta güçsüzlük"],
        yapilmasi_gereken: "Sinir iletimi, sıkışmaları (fıtık/kanal) ve sinir hastalıkları için Nöroloji'ye başvurunuz.",
        aciklama: "Sinir sistemi hastalıkları ve sinir sıkışması tanısı için ana bölüm."
    },
    
    // --- EKLEM ve KAS SİSTEMİ (ID: 11-20) ---
    {
        id: 11,
        semptom: "Diz Ağrısı (Travmasız)",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Şiddetli şişlik", "Kilitlenme (Dizin hareket edememesi)", "Yere basamama"],
        yapilmasi_gereken: "Menisküs, bağ ve kıkırdak hasarı, kireçlenme gibi tanı için Ortopedi'ye başvurunuz. Tedavi (ameliyatsız) için FTR'ye sevk edilir.",
        aciklama: "Diz eklemi ve çevresindeki bağ dokusu sorunları için tanı uzmanıdır."
    },
    {
        id: 12,
        semptom: "Omuz Ağrısı ve Hareket Kısıtlılığı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Kolun yerinden çıkmış görünmesi", "Ani travma sonrası tam hareket kaybı"],
        yapilmasi_gereken: "Rotator manşet yırtıkları, donuk omuz veya tendon iltihabı gibi durumlar için Ortopedi'ye başvurulur.",
        aciklama: "Omuz eklemi ve tendon sorunları için tanı uzmanı."
    },
    {
        id: 13,
        semptom: "El Bileğinde Ağrı ve Uyuşma",
        tanisal_bolum: "Nöroloji / Ortopedi",
        tedavi_bolum: "FTR",
        acil_durum: ["Bilekte ani şekil bozukluğu"],
        yapilmasi_gereken: "Sinir sıkışması (Karpal Tünel Sendromu) tanısı için Nöroloji'ye, tendon ve kemik sorunları için Ortopedi'ye başvurulur.",
        aciklama: "Sinir sıkışması tanısı ve kas-iskelet sistemi sorunlarının ayrıştırılması."
    },
    {
        id: 14,
        semptom: "Ayak Topuğunda Sabah Ağrısı",
        tanisal_bolum: "Ortopedi ve Travmatoloji",
        tedavi_bolum: "Ortopedi / FTR",
        acil_durum: ["Travma sonrası üzerine basamama"],
        yapilmasi_gereken: "Topuk dikeni veya plantar fasiit gibi durumlar için Ortopedi uzmanına başvurulur.",
        aciklama: "Ayak anatomisi, kemik ve tendon sorunları için ana tanı."
    },
    {
        id: 15,
        semptom: "Kas Ağrısı (Yaygın)",
        tanisal_bolum: "Dahiliye / FTR",
        tedavi_bolum: "FTR",
        acil_durum: ["Ateşle birlikte yaygın ağrı", "İdrar renginde koyulaşma"],
        yapilmasi_gereken: "Romatizmal ve iltihaplı kas hastalıkları için FTR veya Romatoloji'ye sevk istenir. Genel nedenler için Dahiliye'ye başvurulur.",
        aciklama: "Kas ve bağ dokusu hastalıklarının tanısı."
    },

    // --- BAŞ ve YÜZ (ID: 21-30) ---
    {
        id: 21,
        semptom: "Gözde Batma ve Kuruluk",
        tanisal_bolum: "Göz Hastalıkları",
        tedavi_bolum: "Göz Hastalıkları",
        acil_durum: ["Ani görme kaybı", "Gözde keskin batma hissi (yabancı cisim)"],
        yapilmasi_gereken: "Alerjik reaksiyonlar, kuru göz sendromu ve görme kusurları için direkt Göz Hastalıkları uzmanına randevu alınız.",
        aciklama: "Göz enfeksiyonları, kuruluk ve görme bozuklukları."
    },
    {
        id: 22,
        semptom: "Diş Ağrısı",
        tanisal_bolum: "Diş Hekimliği",
        tedavi_bolum: "Diş Hekimliği",
        acil_durum: ["Yüzde hızla yayılan şişlik", "Ateş"],
        yapilmasi_gereken: "Diş çürükleri, iltihaplar ve 20'lik diş sorunları için Diş Hekimliğine başvurulur.",
        aciklama: "Diş, diş eti ve çene sağlığı için ana uzmanlık."
    },
    {
        id: 23,
        semptom: "Burun Tıkanıklığı (Geçmeyen)",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Şiddetli burun kanaması"],
        yapilmasi_gereken: "Kronik sinüzit, alerjik rinit veya burun kemiği eğriliği tanısı için KBB uzmanına başvurunuz.",
        aciklama: "Burun ve sinüs hastalıkları."
    },
    {
        id: 24,
        semptom: "Kulakta Ağrı",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Kafadan travma sonrası ağrı", "Kulaktan sıvı/kan gelmesi"],
        yapilmasi_gereken: "Dış ve orta kulak iltihabı, kulak zarı sorunları için KBB'ye başvurunuz.",
        aciklama: "Kulak enfeksiyonları ve kulak zarı sorunları."
    },
    {
        id: 25,
        semptom: "Boyun Ağrısı (Travmasız)",
        tanisal_bolum: "Fizik Tedavi ve Rehabilitasyon (FTR)",
        tedavi_bolum: "FTR / Ortopedi",
        acil_durum: ["Şiddetli travma", "Ani kafa düşmesi"],
        yapilmasi_gereken: "Kas spazmları ve duruş bozukluğundan kaynaklanan ağrılar için FTR'ye başvurulur. Boyun fıtığı şüphesi için Beyin Cerrahisi'ne sevk istenir.",
        aciklama: "Boyun kasları, duruş bozuklukları ve basit fıtık sorunları için ilk aşama."
    },
    {
        id: 26,
        semptom: "Yutkunmada Zorluk",
        tanisal_bolum: "Kulak Burun Boğaz (KBB)",
        tedavi_bolum: "KBB",
        acil_durum: ["Nefes almada zorluk (tıkanma)"],
        yapilmasi_gereken: "Bademcik, tiroid ve yemek borusu başlangıcı ile ilgili sorunlar için KBB'ye başvurulur.",
        aciklama: "Boğaz ve yemek borusu (yutak) ile ilgili şikayetler."
    },
    
    // --- ÜROGENİTAL ve GENEL DAİLİYE (ID: 31-40) ---
    {
        id: 31,
        semptom: "Adet Düzensizliği",
        tanisal_bolum: "Kadın Hastalıkları ve Doğum",
        tedavi_bolum: "Kadın Hastalıkları ve Doğum",
        acil_durum: ["Şiddetli karın ağrısı ve kanama"],
        yapilmasi_gereken: "Hormonal dengesizlikler, kistler ve jinekolojik sağlık için direkt bu bölüme başvurulur.",
        aciklama: "Kadın üreme sağlığı ve hormonal döngü."
    },
    {
        id: 32,
        semptom: "İdrar Yaparken Yanma",
        tanisal_bolum: "Üroloji (Erkek/Kadın)",
        tedavi_bolum: "Üroloji",
        acil_durum: ["Yüksek ateş ve titreme", "Yan ağrısı"],
        yapilmasi_gereken: "İdrar yolu enfeksiyonu, böbrek ve mesane sağlığı için Üroloji'ye başvurulur. Kadınlar Aile Hekimine de gidebilir.",
        aciklama: "İdrar yolları ve mesane enfeksiyonları."
    },
    {
        id: 33,
        semptom: "Hemoroid (Basur)",
        tanisal_bolum: "Genel Cerrahi",
        tedavi_bolum: "Genel Cerrahi",
        acil_durum: ["Aşırı kanama"],
        yapilmasi_gereken: "Anal bölge ve rektum hastalıkları, fıtık ve apandisit gibi durumlar için Genel Cerrahi'ye başvurulur.",
        aciklama: "Sindirim sisteminin son kısmı ve genel cerrahi gerektiren durumlar."
    },
    {
        id: 34,
        semptom: "Sivilce ve Akne",
        tanisal_bolum: "Dermatoloji (Cildiye)",
        tedavi_bolum: "Dermatoloji",
        acil_durum: ["İltihabın hızla yayılması"],
        yapilmasi_gereken: "Cilt analizi, tedavi planı ve ilaç/krem reçetesi için direkt Cildiye'ye başvurunuz.",
        aciklama: "Cilt hastalıklarının tanısı ve tedavisi."
    },
    {
        id: 35,
        semptom: "Aşırı Terleme",
        tanisal_bolum: "Dahiliye / Dermatoloji",
        tedavi_bolum: "Dahiliye / Dermatoloji",
        acil_durum: ["Ateş", "Kilo kaybı"],
        yapilmasi_gereken: "Hormonal veya metabolik nedenleri araştırmak için Dahiliye'ye, cilt veya estetik tedaviler için Dermatoloji'ye başvurulur.",
        aciklama: "Terlemenin nedeninin hormonal mı yoksa sinirsel/cilt kaynaklı mı olduğunun tespiti."
    },

    // --- KALP ve DAMAR (ID: 41-50) ---
    {
        id: 41,
        semptom: "Kalp Çarpıntısı",
        tanisal_bolum: "Kardiyoloji",
        tedavi_bolum: "Kardiyoloji",
        acil_durum: ["Göğüste şiddetli ağrı", "Bayılma hissi", "Nefes darlığı"],
        yapilmasi_gereken: "Kalp ritmi, damarlar ve kapakçıklar için direkt Kardiyoloji'ye başvurunuz.",
        aciklama: "Kalp ve damar sistemi ile ilgili tüm şikayetler için ana uzmanlık."
    },
    {
        id: 42,
        semptom: "Ayaklarda Şişlik ve Ödem",
        tanisal_bolum: "Dahiliye / Kardiyoloji",
        tedavi_bolum: "Dahiliye / Kardiyoloji",
        acil_durum: ["Ani şişlik", "Nefes darlığı"],
        yapilmasi_gereken: "Böbrek, karaciğer veya kalp yetmezliği şüphesi için Dahiliye'ye, damar sorunları için Kardiyoloji'ye başvurulur.",
        aciklama: "Ödemin dolaşım veya organ fonksiyonu kaynaklı olduğunun tespiti."
    },
    
    // --- PSİKİYATRİ ve RUH SAĞLIĞI (ID: 51-55) ---
    {
        id: 51,
        semptom: "Uykusuzluk (Kronik)",
        tanisal_bolum: "Nöroloji / Psikiyatri",
        tedavi_bolum: "Psikiyatri",
        acil_durum: ["İntihar düşünceleri", "Halüsinasyon"],
        yapilmasi_gereken: "Uyku bozukluklarının nedeninin nörolojik mi yoksa psikolojik mi olduğunu tespit etmek için bu bölümlere başvurulur. Tedavi genellikle Psikiyatri alanıdır.",
        acıklama: "Depresyon, anksiyete, panik atak ve stres kaynaklı uyku sorunları."
    },
    {
        id: 52,
        semptom: "Ani Korku/Panik Hali",
        tanisal_bolum: "Psikiyatri",
        tedavi_bolum: "Psikiyatri",
        acil_durum: ["Kişinin kendine zarar verme tehlikesi"],
        yapilmasi_gereken: "Panik atak, anksiyete bozukluğu ve ruh sağlığı sorunları için direkt Psikiyatri'ye başvurunuz.",
        aciklama: "Bilişsel ve duygusal bozukluklar için ana uzmanlık."
    }
];


// --- ANA FONKSİYONLAR (MANTIK BÖLÜMÜ) ---

// Kalan JS kodu (aramaYap, detaylariGoster fonksiyonları) önceki gönderdiğimle aynıdır, buraya eklenmeyecektir.
// Lütfen sadece SEMPTOM_VERILERI array'ini (yukarıdaki devasa kısmı) değiştirin.

// ... (Geri kalan aramaYap ve detaylariGoster fonksiyonları, index.html'den gelen elementlerle çalışır)
// ...
// ...
