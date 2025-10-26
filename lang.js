
(function(){
  const dict = {"en": {"hero_h1": "Real JDM drift, made easy.", "hero_sub": "Beginner-friendly • Tsukuba Circuit", "hero_p": "Choose a 3.5-hour morning or afternoon session at the legendary Tsukuba Circuit. Pro instructor, manual turbo cars. Perfect for first-timers.", "hero_btn1": "View pricing", "hero_btn2": "See cars", "cars_h2": "Cars built for drift", "cars_mk2_h3": "Mark II (MT • Turbo)", "cars_mk2_p": "Manual gearbox with a modified turbo setup tuned for full drift.", "cars_crown_h3": "Crown (MT • Turbo)", "cars_crown_p": "Manual, turbo-modified build to keep you sliding with confidence.", "gallery_h2": "Photo gallery", "pricing_h2": "Simple pricing", "pricing_b1": "Morning session: 3.5 hours", "pricing_b2": "Afternoon session: 3.5 hours", "pricing_price": "Price: ¥150,000 per person", "pricing_note": "Short cool-down/rest is included in the session time.", "qa_h2": "Q & A", "qa_q1": "What if there’s a crash?", "qa_a1": "Drivers are responsible for damages. The area is large with almost no obstacles, and a professional driver is present — crashes are very unlikely.", "qa_q2": "How many people can join?", "qa_a2": "No fixed minimum or maximum. We may limit numbers in some cases for safety or quality.", "qa_q3": "When do I pay?", "qa_a3": "Payment must be made in advance. Your slot is confirmed after payment.", "qa_access_h3": "Access", "qa_access_p": "Held at Tsukuba Circuit. Easy access from Tokyo.", "booking_h2": "Booking", "booking_p": "Tell us your preferred date, session (morning/afternoon), and number of people.", "booking_email": "Email: booking@jdmdriftplayground.com", "booking_whatsapp": "WhatsApp: +81 80-4575-0033", "footer_copy": "© 2025 JDM DRIFT PLAYGROUND"}, "ja": {"hero_h1": "本物のJDMドリフトを、やさしく体験", "hero_sub": "初心者歓迎 • 筑波サーキット", "hero_p": "筑波サーキットで体験できる3時間半の午前または午後セッション。プロ同乗、MT＆ターボ車両。初心者でも安心して楽しめます。", "hero_btn1": "料金を見る", "hero_btn2": "車両を見る", "cars_h2": "ドリフト専用に仕上げた車両", "cars_mk2_h3": "マークII（MT・ターボ）", "cars_mk2_p": "フルドリ体験に合わせたターボ＆MTのモディファイ仕様。", "cars_crown_h3": "クラウン（MT・ターボ）", "cars_crown_p": "安心して滑らせ続けられるMTターボのセットアップ。", "gallery_h2": "フォトギャラリー", "pricing_h2": "料金", "pricing_b1": "午前の部：3時間半", "pricing_b2": "午後の部：3時間半", "pricing_price": "料金： お一人様 150,000円", "pricing_note": "※ セッション時間には短いクールダウン・休憩を含みます。", "qa_h2": "Q&A（よくある質問）", "qa_q1": "クラッシュした場合は？", "qa_a1": "万一クラッシュが発生した場合、車両損傷はドライバー様のご負担となります。会場は広く障害物がほぼなく、プロインストラクターが同乗するため、クラッシュの可能性は非常に低いです。", "qa_q2": "参加人数に制限はありますか？", "qa_a2": "最少・最大の固定はありませんが、安全や品質のため制限する場合があります。", "qa_q3": "支払いのタイミングは？", "qa_a3": "事前決済が必須です。ご入金確認後に予約枠が確定します。", "qa_access_h3": "アクセス", "qa_access_p": "会場は筑波サーキット。東京からのアクセスも容易です。", "booking_h2": "予約", "booking_p": "ご希望日、午前/午後の部、人数をご連絡ください。", "booking_email": "メール： booking@jdmdriftplayground.com", "booking_whatsapp": "WhatsApp： +81 80-4575-0033", "footer_copy": "© 2025 JDM DRIFT PLAYGROUND"}};
  const key = 'jdmdrift_lang';
  const btnEn = document.getElementById('btn-en');
  const btnJa = document.getElementById('btn-ja');

  function applyLang(lang) {
    const map = dict[lang] || dict.en;
    document.documentElement.setAttribute('lang', lang === 'ja' ? 'ja' : 'en');
    document.querySelectorAll('[data-i18n]').forEach(function(node){
      const k = node.getAttribute('data-i18n');
      if (map[k]) node.textContent = map[k];
    });
    try { localStorage.setItem(key, lang); } catch(e){}
    // Simple active state
    if (btnEn && btnJa) {
      btnEn.disabled = (lang === 'en');
      btnJa.disabled = (lang === 'ja');
    }
  }

  function init(){
    let lang = 'en';
    try {
      lang = localStorage.getItem(key) || (navigator.language && navigator.language.startsWith('ja') ? 'ja' : 'en');
    } catch(e){}
    applyLang(lang);
    if (btnEn) btnEn.addEventListener('click', function(){ applyLang('en'); });
    if (btnJa) btnJa.addEventListener('click', function(){ applyLang('ja'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
