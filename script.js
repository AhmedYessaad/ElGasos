const locations = [
  "الجزائر", "وهران", "قسنطينة", "عنابة", "سطيف", "باتنة", "سكيكدة", "بجاية", "بسكرة", "تيزي وزو", "ورقلة",

  "فرنسا", "ألمانيا", "إيطاليا", "إسبانيا", "المغرب", "تونس", "مصر", "السعودية", "الإمارات", 
  "بني والبان", "تركيا", "أمريكا", "كندا", "البرازيل", "الأرجنتين", "الصين", "اليابان", "الهند", "أستراليا",

  "أسد", "طاكوس", "فيل", "بقرة", "موز",

  "كمبيوتر", "هاتف", "العيد الصغير", "مطرقة", "العيد الكبير", "رمضان", "جليد", "كرسي", "مروحة", "ثلاجة",
  "طاولة", "دفتر", "قلم", "كتاب", "طب", "فول", "كوكاكولا", "شيبس", "سجادة", "الصلاة",

  "شاطئ", "جبل", "صحراء", "غابة", "بحر", "نهر", "بحيرة", "وادي", "مغارة", "بركان",
  "ثلج", "عاصفة", "مطر", "سكالوب", "جانفي", "ضباب", "نجوم", "قمر", "شمس", "سماء",

  "مدرسة", "جامعة", "مستشفى", "مطعم", "مطار", "محطة قطار", "سفينة", "سيارة", "مخبزة", "ملعب",
  "مسجد", "سوبر ماركت", "مكتبة", "مقهى", "حديقة", "سينما", "مزرعة", "بنك", "مصنع",

  "آثار", "برج", "نهر", "فندق", "منتزه", "مسبح", "حوض أسماك", "متحف", "سجن", "مدرسة خاصة",
  "صالة رياضية", "قاعة حفلات", "حديقة حيوانات", "جسر", "بترول", "ميناء", "ثكنة عسكرية", "كشك", "كافتيريا",

  "محطة وقود", "مغسلة سيارات", "مدبح", "مقبرة", "إقامة جامعية", "شاطئ",
"مركز تسوق", "مركز بريد", "مركز شرطة", "محكمة", "محطة إطفاء", "مخزن بضائع",


  "جلبانة",  "بطاقة هوية", "جواز سفر", "فرعون", "بركان", "ڨوفريط", "دراجة", "مكة", "طروتينات",
  "أيفون", "بالون", "مظلة", "زيتون", "كاميرا", "حرڨة", "مروحية", "غواصة", "شاحنة", "صاروخ",

  "كسكس", "شوربة فريك", "شخشوخة", "بوراك", "طاجين", "بيتزا", "برغر", "مكرونة", "شاورما", "سوشي",
  "فلافل", "زفيطي", "أرز", "دجاج مقلي", "بيض مسلوق",

  "الفضاء", "كوكب", "مجرة", "ديمينو", "مخبر", "محطة فضاء", "آيس كريم", "فريث أوملاث", "زلابية"
];

let customLocations = []; // مواقع إضافية عند الحاجة
let roles = [];
let chosenLocation = "";
let currentPlayer = 0;

function startGame() {
  const totalPlayers = parseInt(document.getElementById("playerCount").value);
  const spyCount = parseInt(document.getElementById("spyCount").value);

  if (spyCount >= totalPlayers) {
    alert("عدد الجواسيس يجب أن يكون أقل من عدد اللاعبين.");
    return;
  }

  const fullLocations = [...locations, ...customLocations];
  chosenLocation = fullLocations[Math.floor(Math.random() * fullLocations.length)];

  roles = Array(totalPlayers).fill(`📍 الموضوع هو: ${chosenLocation}`);
  const spies = [];

  while (spies.length < spyCount) {
    const rand = Math.floor(Math.random() * totalPlayers);
    if (!spies.includes(rand)) {
      spies.push(rand);
      roles[rand] = "🕵️‍♂️ أنت جاسوس! حاول تعرف الموضوع.";
    }
  }

  currentPlayer = 0;
  document.getElementById("setupArea").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("playerLabel").innerText = "اللاعب 1";
  document.getElementById("roleDisplay").innerText = "";
}

function revealRole() {
  document.getElementById("roleDisplay").innerText = roles[currentPlayer];
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer >= roles.length) {
    alert("✅ تم عرض الأدوار لجميع اللاعبين. ابدأوا النقاش!");

    // إخفاء واجهة كشف الدور
    document.getElementById("gameArea").style.display = "none";

    // إظهار زر إعادة اللعبة فقط بعد انتهاء كل الأدوار
    document.getElementById("resetButton").style.display = "inline-block";
    return;
  }

  document.getElementById("playerLabel").innerText = "اللاعب " + (currentPlayer + 1);
  document.getElementById("roleDisplay").innerText = "";
}

function resetGame() {
  document.getElementById("setupArea").style.display = "block";
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("playerCount").value = 5;
  document.getElementById("spyCount").value = 1;
  document.getElementById("roleDisplay").innerText = "";
  document.getElementById("playerLabel").innerText = "اللاعب 1";
  document.getElementById("resetButton").style.display = "none";

  roles = [];
  chosenLocation = "";
  currentPlayer = 0;
}