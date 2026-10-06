/**
 * LÍVIA TALMELI ZAPATERRA — PERSONAL PORTFOLIO
 * Clean, Robust Vanilla JS
 * - Interactive Project Filtering (3 Code Projects: Viare, Anti-Distraction, Kite)
 * - Seamless Bilingual Switching (EN / IT)
 * - Dark / Light Theme Toggle (Persisted in localStorage)
 * - Inline Copy Email Feedback
 */

const i18n = {
  en: {
    navProjects: "Projects",
    navEducation: "Education",
    navSkills: "Skills",
    navContact: "Contact",

    heroSubtitle: "Software Developer & Computer Engineering Student at Politecnico di Torino",
    heroText: "Computer Engineering student at Politecnico di Torino with a focus on AI systems integration and end-to-end software development. Experienced in coordinating software architectures and developing scalable web and mobile applications.",
    btnResume: "Curriculum Vitae (PDF)",

    overviewCardHeader: "Engineering Profile",
    ovDegree: "Degree",
    ovUni: "University",
    ovLanguages: "Languages",
    ovLocation: "Location",

    secProjectsTitle: "Featured Projects",
    btnViewCode: "View Code on GitHub ↗",
    toggleTechDetails: "Key Technical Highlights",

    p1Affiliation: "Full-Stack Developer & AI Integrator | Italia",
    p1Desc: "Automated Telegram bot for language learning, integrating OpenAI (GPT-4o-mini) with a Python and Flask backend deployed on Render.",
    p1Key1: "<strong>Real-Time Grammar Correction:</strong> Monitors group chat messages and validates Italian syntax using OpenAI (GPT-4o-mini). Sends structured corrections (error, fix, explanation) via private message (DM) to encourage learning without public embarrassment.",
    p1Key2: "<strong>Dynamic Daily Challenges:</strong> Automated background scheduler that creates daily conversation prompts across weighted difficulty levels (A1 to B1) and everyday Italian scenarios, tracking history in JSON to prevent repetition.",
    p1Key3: "<strong>Multithreaded Cloud Architecture:</strong> Concurrently runs the Flask web server (for Render cloud health checks), the Telegram long-polling service, and the background task scheduler in a single thread-safe Python process.",

    p2Desc: "Web application and Manifest V3 browser extension that monitors live streams, lectures, and remote meetings (Google Meet, Teams, Zoom, YouTube) in real time, detecting custom keywords and triggering instant multi-sensory alerts.",
    p2Key1: "<strong>Real-Time Stream Monitoring & Subtitle Extraction:</strong> Manifest V3 browser extension with content scripts targeting live caption streams in Google Meet, Teams, Zoom, and YouTube, alongside a browser engine for local audio/video file processing.",
    p2Key2: "<strong>Multi-Sensory Alert Pipeline:</strong> Instantaneous dispatch of coordinated alerts upon keyword detection—synthesizing alert frequencies via the Web Audio API, flashing peripheral screen borders, sending system desktop notifications, and triggering native Web Speech TTS.",
    p2Key3: "<strong>Bi-Directional State Sync & Audio Gain:</strong> Seamless bi-directional synchronization between the web dashboard and extension popup via chrome.storage.local, with real-time decibel VU meter visualization and customizable audio gain (1x–5x).",

    p3Affiliation: "Co-Founder & Web Development | Brazil",
    p3Desc: "Responsive Progressive Web App (PWA) co-founded for individuals with high cognitive abilities and neurodivergence, featuring community channels, focus tools, and an AI-assisted knowledge engine.",
    p3Key1: "<strong>Progressive Web App Architecture:</strong> Built as an installable PWA with Service Worker offline caching, responsive mobile-first architecture, smartphone simulator, and local state persistence via localStorage.",
    p3Key2: "<strong>Regulation & Audio Tools (Web Audio API):</strong> Synthesizes real-time soundscapes mathematically in-browser (Pink noise, 40Hz Gamma wave) using the Web Audio API without external audio files, alongside a 4-7-8 guided breathing visualizer and hyperfocus timers.",
    p3Key3: "<strong>Community & Specialized AI:</strong> Features thematic channels with neurodivergent tone indicators (/gen, /srs) and an integrated assistant with native Web Speech synthesis for accessible reading.",

    secEduTitle: "Education & Honors",
    eduPoliDesc: "Bachelor's degree in Computer Engineering. Coursework includes Algorithms, Computer Architecture, C, Operating Systems, Software Engineering, and Mathematics. Technical Project Coordinator at Team DIANA (space exploration rovers).",
    eduMichDesc: "Intensive training in systems engineering principles, collaborative problem-solving, and laboratory experimentation.",
    certGcpTitle: "Cloud Digital Leader (CDL)",
    certGcpMeta: "Google Cloud | Certification",
    certGcpDesc: "Certification validating core knowledge of cloud computing concepts, scalable architecture, and Google Cloud services.",
    certGenAiTitle: "Generative AI for Developers",
    certGenAiMeta: "Google | Certification",
    certGenAiDesc: "Technical specialization validating practical expertise in generative AI models, prompt design, API integration, and foundational LLM architectures.",
    awardUnbMeta: "University of Brasília (UnB) | 2021",
    awardUnbDesc: "Recognized for technical potential and leadership in STEM initiatives supporting women in engineering.",
    awardSweTitle: "Society of Women Engineers (SWE) Scholarship",
    awardSweMeta: "Society of Women Engineers | Recipient",
    awardSweDesc: "Merit-based scholarship granted by the Society of Women Engineers.",
    awardObaTitle: "Gold Medal • Brazilian Astronomy Olympiad (OBA)",
    awardObaMeta: "OBA National Competition | 2022",
    awardObaDesc: "National Gold Medal distinction in physics, celestial mechanics, and analytical problem-solving at the Brazilian Astronomy Olympiad.",

    secSkillsTitle: "Technical Skills",
    catLang: "Programming Languages",
    catTech: "Frameworks & Tools",
    catAI: "AI & Automation",
    catMethod: "Methodologies",
    catSpoken: "Spoken Languages",

    secContactTitle: "Contact",
    contactIntro: "Open to software engineering opportunities, technical collaborations, and discussions on software systems and AI applications."
  },

  it: {
    navProjects: "Progetti",
    navEducation: "Formazione",
    navSkills: "Competenze",
    navContact: "Contatti",

    heroSubtitle: "Sviluppatrice Software & Studentessa di Ingegneria Informatica al Politecnico di Torino",
    heroText: "Studentessa di Ingegneria Informatica al Politecnico di Torino con focus sull'integrazione di sistemi AI e sviluppo software end-to-end. Comprovata esperienza nel coordinamento di architetture software e nello sviluppo di applicazioni web e mobile scalabili.",
    btnResume: "Curriculum Vitae (PDF)",

    overviewCardHeader: "Profilo Tecnico",
    ovDegree: "Percorso",
    ovUni: "Ateneo",
    ovLanguages: "Lingue",
    ovLocation: "Sede",

    secProjectsTitle: "Progetti Software",
    btnViewCode: "Vedi Codice su GitHub ↗",
    toggleTechDetails: "Dettagli Tecnici & Architettura",

    p1Affiliation: "Full-Stack Developer & AI Integrator | Italia",
    p1Desc: "Bot Telegram automatizzato per l'apprendimento della lingua italiana, integrato con le API di OpenAI (GPT-4o-mini) tramite backend Python e Flask ospitato su Render.",
    p1Key1: "<strong>Correzione Grammaticale in Tempo Reale:</strong> Analizza i messaggi della community e fornisce correzioni contestuali strutturate (errore, forma corretta, spiegazione) tramite messaggio privato (DM), tutelando la privacy dello studente.",
    p1Key2: "<strong>Sfide Didattiche Quotidiane:</strong> Sistema di task pianificati che propone sfide quotidiane con difficoltà bilanciata (da A1 a B1) ed esercizi su situazioni reali, tracciando lo storico in JSON per evitare ripetizioni.",
    p1Key3: "<strong>Architettura Multithreading su Render:</strong> Esecuzione concorrente in un unico processo Python del web server Flask (per gli health check del cloud), del demone di ascolto Telegram e del motore di scheduling.",

    p2Desc: "Applicazione web ed estensione browser (Manifest V3) per il monitoraggio in tempo reale di lezioni, video e riunioni da remoto (Google Meet, Teams, Zoom, YouTube), con rilevamento di parole-chiave e notifiche sensoriali istantanee.",
    p2Key1: "<strong>Monitoraggio Flussi & Estrazione Trascrizioni:</strong> Estensione per browser con content script dedicati per agganciare in tempo reale i sottotitoli di Google Meet, Teams, Zoom e YouTube, combinata con un motore web per l'elaborazione di file audio e video locali.",
    p2Key2: "<strong>Pipeline di Notifica Sensoriale:</strong> Disparo istantaneo di avvisi coordinati al rilevamento di parole-chiave critiche: avvisi sonori sintetizzati tramite Web Audio API (chime, radar, allarme), bordo visivo lampeggiante per la visione periferica, notifiche desktop di sistema e sintesi vocale (TTS).",
    p2Key3: "<strong>Sincronizzazione Bidirezionale & Controllo Guadagno:</strong> Architettura a sincronizzazione continua tra dashboard web e popup dell'estensione tramite chrome.storage.local, integrata con VU meter per i decibel e amplificazione regolabile del guadagno audio (1x–5x).",

    p3Affiliation: "Co-Founder & Web Development | Brazil",
    p3Desc: "Progressive Web App (PWA) responsive co-fondata per individui con alto potenziale cognitivo e neurodivergenza, con canali tematici, strumenti di regolazione sensoriale e assistente AI integrato.",
    p3Key1: "<strong>Architettura Progressive Web App:</strong> PWA installabile su iOS e Android con Service Worker per il caching offline, architettura modulare mobile-first, simulatore per desktop e persistenza locale dei dati su localStorage.",
    p3Key2: "<strong>Strumenti di Focus & Audio (Web Audio API):</strong> Generazione matematica in tempo reale di paesaggi sonori nel browser (rumore rosa, onde gamma a 40Hz) tramite Web Audio API senza file audio esterni, con timer per l'iperfocus ed esercizio di respirazione guidata (4-7-8).",
    p3Key3: "<strong>Community & Assistente Dedicato:</strong> Canali tematici di discussione con indicatori di tono (/gen, /srs), modalità infodump e assistente integrato con sintesi vocale nativa (Web Speech API) per favorire l'accessibilità.",

    secEduTitle: "Formazione & Riconoscimenti",
    eduPoliDesc: "Corso di laurea in Ingegneria Informatica con esami in Algoritmi, Architettura degli Elaboratori, Linguaggio C, Sistemi Operativi, Ingegneria del Software e Matematica. Technical Project Coordinator in Team DIANA (rover spaziali).",
    eduMichDesc: "Formazione intensiva su principi di ingegneria di sistema, problem solving collaborativo e sperimentazione in laboratorio.",
    certGcpTitle: "Cloud Digital Leader (CDL)",
    certGcpMeta: "Google Cloud | Certificazione",
    certGcpDesc: "Certificazione professionale sui concetti fondamentali di cloud computing, infrastrutture scalabili e servizi Google Cloud.",
    certGenAiTitle: "Generative AI for Developers",
    certGenAiMeta: "Google | Certificazione",
    certGenAiDesc: "Specializzazione tecnica sull'applicazione pratica di modelli di IA generativa, prompt engineering, integrazione API e architetture LLM.",
    awardUnbMeta: "Università di Brasilia (UnB) | 2021",
    awardUnbDesc: "Riconoscimento per meriti tecnici e leadership nella promozione della partecipazione femminile nell'ingegneria.",
    awardSweTitle: "Borsa di Studio • Society of Women Engineers (SWE)",
    awardSweMeta: "Society of Women Engineers | Assegnataria",
    awardSweDesc: "Borsa di studio internazionale su base meritocratica assegnata dalla Society of Women Engineers.",
    awardObaTitle: "Medaglia d'Oro • Olimpiade Brasiliana di Astronomia (OBA)",
    awardObaMeta: "Competizione Nazionale OBA | 2022",
    awardObaDesc: "Medaglia d'Oro nazionale in fisica, meccanica celeste e problem-solving analitico all'Olimpiade Brasiliana di Astronomia.",

    secSkillsTitle: "Competenze Tecniche",
    catLang: "Linguaggi di Programmazione",
    catTech: "Framework & Strumenti",
    catAI: "AI & Automazione",
    catMethod: "Metodologie",
    catSpoken: "Lingue Parlate",

    secContactTitle: "Contatti",
    contactIntro: "Disponibile per opportunità lavorative in ambito software engineering, collaborazioni tecniche e confronti su architetture software e applicazioni AI."
  }
};

let currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
});

// --- Theme Management ---
function initTheme() {
  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("livia_theme_mode") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeBtn(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme") || "light";
      const next = active === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("livia_theme_mode", next);
      updateThemeBtn(next);
    });
  }

  function updateThemeBtn(theme) {
    if (!themeBtn) return;
    themeBtn.textContent = theme === "dark" ? "Light" : "Dark";
  }
}

// --- Language Management ---
function initLanguage() {
  const langBtn = document.getElementById("lang-toggle");
  const savedLang = localStorage.getItem("livia_lang_mode") || "en";
  currentLang = savedLang;
  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "it" : "en";
      localStorage.setItem("livia_lang_mode", currentLang);
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    if (langBtn) {
      langBtn.textContent = lang === "en" ? "IT" : "EN";
    }

    // Dynamic CV Link based on active language (English or Italian)
    const heroCvLink = document.getElementById("hero-cv-link");
    if (heroCvLink) {
      heroCvLink.href = lang === "it"
        ? "assets/docs/CV_Livia_Talmeli_Zapaterra.pdf"
        : "assets/docs/CV_Livia_Talmeli_Zapaterra_EN.pdf";
    }

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }
}




