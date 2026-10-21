'use strict';

const translations = {
  id: {
    heroBrandline:'DIRANCANG UNTUK TERUS MEMBAIK.',bandStatement:'Data membuktikan hasilnya.',casePhotoCaption:'STABILITAS CONVEYOR / DOUBLE STOPPER',caseFactOne:'BASELINE / JUL 2025',caseFactTwo:'RATA-RATA / AGS—APR',caseFactThree:'BULAN TANPA DEFECT',costSubQualifier:'vs baseline',navAbout:'Tentang',navCase:'Studi Kasus',navProjects:'Proyek',navExperience:'Pengalaman',navContact:'Kontak',downloadCV:'Unduh CV',
    heroKicker:'QUALITY ASSURANCE · IPQC · CONTINUOUS IMPROVEMENT',heroTitleA:'KUALITAS.',heroTitleB:'TERBUKTI',heroTitleC:'DI PROSES',heroDesc:'Saya Sabit Iqbal Maulana, profesional Quality Assurance yang mengubah tantangan manufaktur menjadi perbaikan proses yang terukur dan berkelanjutan.',
    heroImpactTag:'SOROTAN DAMPAK BIAYA',heroImpactValue:'Rp 75,8 juta / bulan · estimasi penurunan potensi dampak',portraitEyebrow:'KENALI QUALITY ENGINEER',portraitProjectTag:'PROYEK UNGGULAN 8D',portraitProjectLink:'Lihat studi kasus ↗',costKicker:'DAMPAK BISNIS · ESTIMASI POTENSI KERUGIAN',costTitle1:'Defect menurun.',costTitle2:'Potensi kerugian berkurang.',costLead:'Perbandingan proporsional baseline Juli 2025 dengan rata-rata bulanan Agustus 2025–April 2026, berdasarkan estimasi pada presentasi proyek.',costPeriod:'BASELINE → RATA-RATA BULANAN',costOutputLabel:'ESTIMASI PENURUNAN POTENSI NILAI OUTPUT FINISHED GOODS TERDAMPAK / BULAN',costOutputSub:'Estimasi dampak peluang output, bukan penghematan tunai aktual',costBefore:'SEBELUM · JUL 2025',costAfter:'SESUDAH · RATA-RATA BULANAN',costMaterialLabel:'ESTIMASI PENURUNAN KERUGIAN MATERIAL / BULAN',costMaterialFoot:'Sebelum vs estimasi rata-rata bulanan',costTimeLabel:'ESTIMASI PENURUNAN WAKTU REWORK / BULAN',costTimeFoot:'Sebelum vs estimasi rata-rata bulanan',minutesUnit:'menit',costDisclaimer:'Estimasi mengasumsikan dampak turun proporsional dengan rata-rata jumlah kasus (17 → 1,67 kasus/bulan). Ini adalah potensi pengurangan dampak, BUKAN penghematan riil terverifikasi; nilai output dan material tidak boleh dijumlahkan sebagai satu manfaat finansial.',costEvidence:'Lihat dokumentasi improvement dari presentasi',
    exploreWork:'Lihat proyek saya',heroCredential:'Teknik Industri · Politeknik STMI Jakarta · Cum Laude',trustLabel:'PENGALAMAN & PENDIDIKAN',mainResult:'RATA-RATA KASUS BULANAN',mainMetricFoot:'dibanding baseline Juli 2025',
    aboutTitleA:'Pemikiran di balik',aboutTitleB:'setiap perbaikan.',aboutP1:'Saya menggabungkan inspeksi kualitas di area produksi dengan problem solving terstruktur—berdasarkan data, kolaborasi lintas fungsi, dan tindakan perbaikan yang mencegah masalah berulang.',aboutP2:'Pengalaman saya mencakup first-piece inspection, audit proses, verifikasi BOM/material, containment, CAPA, analisis kualitas, dan studi keandalan. Perbaikan terbaik adalah perbaikan yang mudah dijalankan secara konsisten oleh operator.',factOneLabel:'POSISI SAAT INI',factTwoLabel:'PENDIDIKAN',factThreeLabel:'PENDEKATAN',
    caseTop:'STUDI KASUS UNGGULAN',caseTitleA:'Satu masalah.',caseTitleB:'Solusi sistematis.',caseIntro:'Investigasi dan program improvement dua tahap untuk menangani goresan Cover D laptop akibat screwdriver saat proses perakitan.',caseRoleTag:'PERAN DALAM PROYEK',stat1Title:'Penurunan rata-rata kasus bulanan',stat2Title:'Baseline Jul → rata-rata Ags–Apr',stat3Title:'Nol kasus tercatat: Jan, Mar, Apr 2026',stat4Title:'Improvement terstruktur lintas fungsi',months:'bulan',trendSmall:'TREN IMPROVEMENT',trendHeading:'Temuan Cover D Scratch per bulan',legend:'Jumlah temuan per bulan',averageNote:'1,67 = rata-rata Ags–Apr, bukan defect rate produksi.',phaseKicker:'BAGAIMANA MASALAH DIATASI',twoPhaseTitle:'Dari tindakan awal menuju pengendalian berkelanjutan.',phase1Time:'FASE 01 · AGS–OKT 2025',phase1Tag:'TINDAKAN AWAL',phase1Title:'Stabilkan operator & tools',phase1Desc:'OJT, evaluasi kompetensi operator, verifikasi torsi, pemeriksaan tools, dan penyesuaian spring balancer.',phase2Time:'FASE 02 · NOV 2025–APR 2026',phase2Tag:'PERUBAHAN SISTEM',phase2Title:'Kendalikan pergerakan meja',phase2Desc:'Investigasi lanjutan menemukan pergerakan meja conveyor; Double Stopper dipasang dan disempurnakan untuk menstabilkan area kerja.',phaseEnd:'Nol temuan tercatat pada Januari, Maret, dan April 2026.',evidenceLabel:'DOKUMENTASI PROYEK ASLI',evidenceHeading:'Di balik proses improvement',evidenceSub:'Visual terpilih dari presentasi proyek 8D. Klik untuk memperbesar.',galleryOne:'GAMBARAN PROYEK',galleryTwo:'ANALISIS AWAL',galleryThree:'AKSI FASE 1',galleryFour:'ANALISIS FASE 2',galleryFive:'DOUBLE STOPPER',gallerySix:'HASIL IMPROVEMENT',caseCaution:'Baseline 17 kasus = 27,86% dari temuan NG Process Juli 2025 (17 dari 61), bukan defect rate total produksi. Hasil berdasarkan presentasi proyek yang diberikan.',
    otherWork:'LEBIH DARI SATU PROYEK',projectsTitleA:'Kualitas bertemu',projectsTitleB:'cara pikir engineering.',projectsLead:'Proyek lainnya mencakup digitalisasi laporan, analisis risiko, reliability mesin, dan perencanaan produksi.',
    careerLabel:'PERJALANAN KARIER',experienceTitleA:'Berangkat dari',experienceTitleB:'pengalaman produksi nyata.',experienceLead:'Pengalaman langsung di proses manufaktur, diperkuat dengan inspeksi, analisis, dan improvement lintas departemen.',present:'SEKARANG',exp1:'First-piece inspection, audit proses, verifikasi BOM/material, pengendalian produk tidak sesuai, RCA/8D, CAPA, analisis tren defect, dan quality awareness operator.',exp2:'Perakitan laptop, pemasangan komponen, pemeriksaan fungsi, dan self-inspection sesuai standar kualitas manufaktur.',exp3:'Studi keandalan filling line, FMEA/RCM, rekomendasi preventive maintenance, gambar P&ID, forecasting, dan perencanaan produksi.',
    capabilities:'KOMPETENSI',skillsTitleA:'Alat bantu.',skillsTitleB:'Pola pikir.',skillsLead:'Kompetensi quality engineering yang praktis, mulai dari pencegahan defect hingga menerjemahkan data menjadi tindakan.',skillGroup1:'Kualitas & Pengendalian Proses',skillGroup2:'Problem Solving & Improvement',skillGroup3:'Data & Engineering Tools',
    education:'PENDIDIKAN',educationTitleA:'Berlandaskan',educationTitleB:'teknik industri.',eduMajor:'Sarjana Teknik Industri (S1)',certLabel:'SERTIFIKASI PROFESIONAL',
    contactTitleA:'Ada tantangan',contactTitleB:'kualitas yang perlu diselesaikan?',contactDesc:'Mari bertukar ide tentang kualitas manufaktur, continuous improvement, reliability, dan pemecahan masalah berbasis data.',emailMe:'Hubungi saya',footerTag:'Berlandaskan kualitas. Digerakkan improvement.',backToTop:'Kembali ke atas',discussProject:'Diskusikan proyek',galleryKeyHint:'Tombol panah untuk navigasi · Esc untuk menutup',
    modalApproach:'Metode & kontribusi',viewDetails:'Lihat detail proyek',
  }
};

const projects = {
  en:[
    {id:'digital-quality',number:'02',category:'DIGITAL QUALITY SYSTEM',icon:'◈',title:'Digital Quality Finding & Risk Assessment',description:'A Google Forms-based quality finding workflow designed to standardize reporting and support better prioritization of manufacturing risks.',tags:['Google Forms','S / O / D','FMEA'],metrics:['Risk-based prioritization','Digital traceability'],points:['Developed a structured quality finding input workflow using Google Forms.','Applied Severity, Occurrence and Detection criteria for risk prioritization.','Supported finding traceability and corrective-action monitoring.']},
    {id:'daily-report',number:'03',category:'QUALITY ANALYTICS',icon:'▤',title:'Automated Daily Review Reporting',description:'An automated spreadsheet reporting template to make daily production and quality data easier to consolidate, review and act upon.',tags:['Microsoft Excel','KPI','Reporting'],metrics:['Daily review workflow','Process and quality data'],points:['Structured the daily reporting template for production and quality performance.','Streamlined recurring data compilation through spreadsheet-based automation.','Improved the clarity and consistency of information used in management reviews.']},
    {id:'rcm',number:'04',category:'RELIABILITY ENGINEERING',icon:'⚙',title:'RCM — Filling Lithos Line 1',description:'A reliability study identifying critical failure risks and recommending preventive maintenance intervals for a filling line.',tags:['RCM','FMEA','Age Replacement'],metrics:['Vacuum component RPN: 72','Estimated downtime: 14.25 → 5.91 h'],points:['Applied RCM, FMEA, Pareto, RPN and Age Replacement methods to evaluate critical components.','Identified the vacuum component with a Risk Priority Number (RPN) of 72.','Proposed a 10-day replacement and 7-day inspection interval.','Estimated a potential reduction in downtime from 14.25 to 5.91 hours in the study; this is not a verified operating result.']},
    {id:'forecast',number:'05',category:'PRODUCTION PLANNING',icon:'↗',title:'Forecasting & Master Production Schedule',description:'A grease-product production planning study comparing demand forecasts and developing a 12-month Master Production Schedule.',tags:['Forecasting','Least Squares','MPS'],metrics:['5 forecasting methods compared','MAPE: 37.60%'],points:['Compared five forecasting methods in the studied data set.','Selected Least Squares (Linear) as the lowest-error method in that comparison, with MAPE 37.60%.','Developed a 12-month Master Production Schedule to support demand and material planning.']}
  ],
  id:[
    {id:'digital-quality',number:'02',category:'SISTEM QUALITY DIGITAL',icon:'◈',title:'Digital Quality Finding & Risk Assessment',description:'Alur pencatatan temuan quality berbasis Google Forms untuk standardisasi laporan dan prioritas risiko manufaktur.',tags:['Google Forms','S / O / D','FMEA'],metrics:['Prioritas berdasarkan risiko','Traceability digital'],points:['Membangun form pencatatan temuan quality yang terstruktur menggunakan Google Forms.','Menggunakan kriteria Severity, Occurrence, dan Detection untuk menentukan prioritas risiko.','Mendukung penelusuran temuan dan pemantauan tindakan perbaikan.']},
    {id:'daily-report',number:'03',category:'ANALISIS KUALITAS',icon:'▤',title:'Automated Daily Review Reporting',description:'Template spreadsheet otomatis untuk mempermudah rekap, review, dan analisis data produksi serta kualitas setiap hari.',tags:['Microsoft Excel','KPI','Reporting'],metrics:['Alur review harian','Data produksi & quality'],points:['Menyusun template review harian untuk data produksi dan kualitas.','Menyederhanakan kompilasi data berulang melalui otomatisasi spreadsheet.','Meningkatkan keterbacaan dan konsistensi data dalam review manajemen.']},
    {id:'rcm',number:'04',category:'RELIABILITY ENGINEERING',icon:'⚙',title:'RCM — Filling Lithos Line 1',description:'Studi keandalan mesin untuk mengidentifikasi risiko kegagalan komponen kritis dan merekomendasikan interval perawatan preventif.',tags:['RCM','FMEA','Age Replacement'],metrics:['Komponen vacuum RPN: 72','Estimasi downtime: 14,25 → 5,91 jam'],points:['Menerapkan RCM, FMEA, Pareto, RPN, dan Age Replacement untuk menilai komponen kritis.','Mengidentifikasi komponen vacuum dengan Risk Priority Number (RPN) 72.','Merekomendasikan interval penggantian 10 hari dan inspeksi 7 hari.','Studi memperkirakan potensi penurunan downtime dari 14,25 menjadi 5,91 jam; angka ini bukan hasil aktual terverifikasi.']},
    {id:'forecast',number:'05',category:'PERENCANAAN PRODUKSI',icon:'↗',title:'Forecasting & Master Production Schedule',description:'Studi perencanaan produksi grease dengan membandingkan metode peramalan serta membuat Master Production Schedule selama 12 bulan.',tags:['Forecasting','Least Squares','MPS'],metrics:['5 metode peramalan','MAPE: 37,60%'],points:['Membandingkan lima metode forecasting untuk data yang dikaji.','Memilih Least Squares (Linear) dengan error terendah di antara metode yang dibandingkan, MAPE 37,60%.','Menyusun MPS 12 bulan untuk mendukung perencanaan kebutuhan produksi dan material.']}
  ]
};

const galleryItems=[
  {src:'assets/project-cover-d/presentation-cover.webp',en:'8D Project Overview',id:'Gambaran Proyek 8D'},
  {src:'assets/project-cover-d/root-cause-phase-1.webp',en:'Initial Root Cause Analysis',id:'Analisis Akar Masalah Awal'},
  {src:'assets/project-cover-d/countermeasure-phase-1.webp',en:'Phase 1 Countermeasures',id:'Tindakan Perbaikan Fase 1'},
  {src:'assets/project-cover-d/root-cause-phase-2.webp',en:'Phase 2 Root Cause Analysis',id:'Analisis Akar Masalah Fase 2'},
  {src:'assets/project-cover-d/double-stopper.webp',en:'Double Stopper Countermeasure',id:'Implementasi Double Stopper'},
  {src:'assets/project-cover-d/improvement-results.webp',en:'Improvement Results & Trend',id:'Hasil dan Tren Improvement'}
];

const root=document.documentElement;
let language='en';let lastFocus=null;let activeGalleryIndex=0;
const originalText=new Map();
const $=(selector,base=document)=>base.querySelector(selector);
const $$=(selector,base=document)=>Array.from(base.querySelectorAll(selector));
function getPref(key){try{return localStorage.getItem(key)}catch{return null}}
function setPref(key,val){try{localStorage.setItem(key,val)}catch{}}

function renderProjects(){
 const grid=$('#projectsGrid');
 grid.innerHTML=projects[language].map(p=>`<article class="project-card"><span class="project-card-num">${p.number}</span><div class="project-card-main"><div class="project-card-category">${p.category}</div><h3>${p.title}</h3></div><div class="project-card-aux"><p class="project-card-description">${p.description}</p><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><button type="button" class="project-more" data-project="${p.id}" aria-label="${language==='id'?'Lihat detail':'View details'}: ${p.title}" title="${language==='id'?'Lihat detail':'View details'}">↗</button></article>`).join('');
 $$('.project-more',grid).forEach(btn=>btn.addEventListener('click',()=>openProject(btn.dataset.project)));
}
function setLanguage(lang){
 language=lang;
 root.lang=lang;
 $$('[data-t]').forEach(el=>{
  const key=el.dataset.t;
  if(!originalText.has(el)) originalText.set(el,el.textContent);
  el.textContent=lang==='id'&&Object.hasOwn(translations.id,key)?translations.id[key]:originalText.get(el);
 });
 $$('[data-number-en]').forEach(el=>el.textContent=lang==='id'?el.dataset.numberId:el.dataset.numberEn);
 $('#languageLabel').textContent=lang==='en'?'ID':'EN';
 $('#languageToggle').setAttribute('aria-label',lang==='en'?'Switch to Indonesian':'Switch to English');
 renderProjects();renderChart();
 if($('#lightbox').classList.contains('open'))updateGallery();
 setPref('sabit-language',lang);
}
function renderChart(){
 const svg=$('#trendChart');const months=language==='id'?['JUL','AGS','SEP','OKT','NOV','DES','JAN','FEB','MAR','APR']:['JUL','AUG','SEP','OCT','NOV','DEC','JAN','FEB','MAR','APR'];
 const data=[17,2,3,2,5,2,0,1,0,0];const ns='http://www.w3.org/2000/svg';const W=760,H=290,L=36,R=15,T=35,B=50;
 const innerW=W-L-R,innerH=H-T-B;const x=i=>L+(innerW/(data.length-1))*i;const y=v=>T+(20-v)/20*innerH;
 function el(type,attrs,text){let obj=document.createElementNS(ns,type);for(const[k,v]of Object.entries(attrs||{}))obj.setAttribute(k,v);if(text!==undefined)obj.textContent=text;svg.appendChild(obj);return obj}
 svg.replaceChildren();
 const defs=document.createElementNS(ns,'defs');defs.innerHTML='<linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f26035" stop-opacity=".3"/><stop offset="100%" stop-color="#f26035" stop-opacity="0"/></linearGradient>';svg.appendChild(defs);
 [0,5,10,15,20].forEach(v=>{el('line',{x1:L,y1:y(v),x2:W-R,y2:y(v),stroke:'var(--line)','stroke-width':1,'stroke-dasharray':v===0?'':'4 5'});el('text',{x:L-15,y:y(v)+4,'text-anchor':'end',fill:'var(--muted2)','font-size':12,'font-family':'DM Sans, Arial'},v)});
 const points=data.map((v,i)=>`${x(i).toFixed(1)},${y(v).toFixed(1)}`);
 el('path',{d:`M ${points[0]} L ${points.slice(1).join(' L ')} L ${x(9)} ${y(0)} L ${x(0)} ${y(0)} Z`,fill:'url(#lineFill)'});
 el('polyline',{points:points.join(' '),fill:'none',stroke:'var(--cyan2)','stroke-width':3.5,'stroke-linejoin':'round','stroke-linecap':'round'});
 data.forEach((v,i)=>{
  const node=el('circle',{cx:x(i),cy:y(v),r:i===0?7:5.5,fill:'var(--panel)',stroke:'var(--cyan)','stroke-width':3,tabindex:0,'aria-label':`${months[i]} ${i<=5?'2025':'2026'}: ${v} ${language==='id'?'kasus':'cases'}`});
  let title=document.createElementNS(ns,'title');title.textContent=`${months[i]} ${i<=5?'2025':'2026'}: ${v}`;node.appendChild(title);
  el('text',{x:x(i),y:y(v)-13,'text-anchor':'middle',fill:i===0?'var(--cyan)':'var(--text)','font-size':i===0?17:13,'font-weight':800,'font-family':'Manrope,Arial'},v);
  el('text',{x:x(i),y:H-22,'text-anchor':'middle',fill:'var(--muted)','font-size':11,'font-weight':700,'font-family':'DM Sans,Arial'},months[i]);
  el('text',{x:x(i),y:H-8,'text-anchor':'middle',fill:'var(--muted2)','font-size':10,'font-family':'DM Sans,Arial'},i<=5?'25':'26');
 });
}

function closeModal(which){const el=which==='project'?$('#projectModal'):$('#lightbox');el.classList.remove('open');el.setAttribute('aria-hidden','true');if(!$('.modal.open')&&!$('.lightbox.open'))document.body.classList.remove('modal-open');if(lastFocus?.isConnected)lastFocus.focus();}
function openModal(which){lastFocus=document.activeElement;const el=which==='project'?$('#projectModal'):$('#lightbox');el.classList.add('open');el.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');const close=el.querySelector('.modal-close,#lightboxClose');close?.focus();}
function openProject(id){const p=projects[language].find(p=>p.id===id);if(!p)return;$('#modalCategory').textContent=p.category;$('#modalTitle').textContent=p.title;$('#modalDescription').textContent=p.description;$('#modalMetrics').replaceChildren();p.metrics.forEach(m=>{const s=document.createElement('span');s.textContent=m;$('#modalMetrics').appendChild(s)});$('#modalApproachLabel').textContent=language==='id'?'Metode & kontribusi':'Approach & contributions';$('#modalPoints').replaceChildren();p.points.forEach(point=>{const li=document.createElement('li');li.textContent=point;$('#modalPoints').appendChild(li)});openModal('project')}
function updateGallery(){const item=galleryItems[activeGalleryIndex];$('#lightboxImage').src=item.src;$('#lightboxImage').alt=item[language];$('#lightboxTitle').textContent=item[language];$('#lightboxCounter').textContent=`${activeGalleryIndex+1} / ${galleryItems.length}`}
function openGallery(index){activeGalleryIndex=index;updateGallery();openModal('gallery')}
function moveGallery(dir){activeGalleryIndex=(activeGalleryIndex+dir+galleryItems.length)%galleryItems.length;updateGallery()}
function setTheme(theme){root.dataset.theme=theme;$('#themeToggle use').setAttribute('href',theme==='dark'?'#i-sun':'#i-moon');$('#themeToggle').setAttribute('aria-label',theme==='dark'?'Activate light mode':'Activate dark mode');setPref('sabit-theme',theme)}

function init(){
 $('#year').textContent=new Date().getFullYear();
 setLanguage(getPref('sabit-language')==='id'?'id':'en');
 setTheme(getPref('sabit-theme')==='dark'?'dark':'light');
 $('#languageToggle').addEventListener('click',()=>setLanguage(language==='en'?'id':'en'));
 $('#themeToggle').addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
 const menu=$('#menuToggle');
 menu.addEventListener('click',()=>{const open=!$('#siteNav').classList.contains('open');$('#siteNav').classList.toggle('open',open);menu.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
 $$('.site-nav a').forEach(a=>a.addEventListener('click',()=>{$('#siteNav').classList.remove('open');menu.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
 $$('.evidence-tile').forEach(btn=>btn.addEventListener('click',()=>openGallery(Number(btn.dataset.gallery))));
 $('#lightboxNext').addEventListener('click',()=>moveGallery(1));$('#lightboxPrev').addEventListener('click',()=>moveGallery(-1));
 $$('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>closeModal(el.dataset.closeModal)));
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if($('#lightbox').classList.contains('open'))closeModal('gallery');else if($('#projectModal').classList.contains('open'))closeModal('project')}
  if($('#lightbox').classList.contains('open')){if(e.key==='ArrowRight')moveGallery(1);if(e.key==='ArrowLeft')moveGallery(-1)}
 });
 const navlinks=$$('.site-nav a');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navlinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}}},{rootMargin:'-35% 0px -60% 0px'});navlinks.forEach(a=>{const id=a.getAttribute('href');const section=$(id);if(section)observer.observe(section)})}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
