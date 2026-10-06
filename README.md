# Portfolio Personale & Engineering Showcase
### Lívia Talmeli Zapaterra — Ingegneria Informatica at Politecnico di Torino

Portfolio sviluppato con approccio minimale, pulito e focalizzato sull'ingegneria del software. Progettato specificamente per la valutazione da parte di tech recruiter, engineering manager e colleghi sviluppatori, mettendo al centro **architettura software, metriche concrete e rigore tecnico**.

---

## 📌 Caratteristiche Principali

1. **Design Umano & Autentico:**
   - Struttura tipografica chiara e minimale (`Inter`, `Plus Jakarta Sans`, `JetBrains Mono`).
   - Assenza di elementi grafici artificiali, cliché o finti widget di telemetria.
   - Schemi architetturali puliti in formato testuale/vettoriale per evidenziare il flusso logico dei progetti.

2. **Progetti Software con Codice:**
   - **Viare – AI Language Learning Bot ([tutor-italiano](https://github.com/LiviaTalmeli/tutor-italiano)):** Bot Telegram per l'apprendimento linguistico integrato con le API di OpenAI (GPT-4o-mini), backend Python e Flask ospitato su Render. Include correzione grammaticale in tempo reale con notifiche private (DM), generazione automatica di sfide quotidiane con multithreading concorrente e gestione dello stato su file JSON.
   - **Anti-Distraction – Real-Time Meeting & Audio Sentinel ([anti-distraction](https://github.com/LiviaTalmeli/anti-distraction)):** Applicazione web ed estensione Chrome (Manifest V3) per il monitoraggio in tempo reale di riunioni e lezioni (Google Meet, Teams, Zoom, YouTube). Include estrazione dei sottotitoli tramite content script, pipeline di alert multisensoriali (sintesi sonora Web Audio API, laser visivo periferico, notifiche desktop e TTS), sincronizzazione bidirezionale dello stato (`chrome.storage.local`) e misuratore VU meter con guadagno audio regolabile (1x–5x).
   - **Kite – Mobile PWA for Neurodivergent Minds ([kite-app](https://github.com/LiviaTalmeli/kite-app)):** Progressive Web App mobile-first con service worker per funzionamento offline, motore audio matematico in-browser tramite Web Audio API (rumore rosa, onde gamma a 40 Hz), sintesi vocale assistiva Web Speech API e gestione dello stato modulare in JavaScript puro (ES6+).

3. **Funzionalità per Recruiter:**
   - Scheda profilo ingegneristico (PoliTO, quadro linguistico, sede).
   - Tasto "Copy Email" istantaneo con feedback visivo.
   - Accesso diretto ai repository GitHub per ciascun progetto.
   - Documento CV stampabile e compatibile ATS ([Livia_Talmeli_Zapaterra_CV.html](assets/docs/Livia_Talmeli_Zapaterra_CV.html)).

4. **Bilingue Istantaneo (🇬🇧 EN / 🇮🇹 IT):**
   - Toggle rapido tra Inglese e Italiano senza ricaricamento della pagina.

5. **Modalità Chiara & Scura:**
   - Toggle pulito tra Dark Mode (antracite/ardesia) e Light Mode (carta/bianco editoriale).

---

## 📁 Struttura del Progetto

```
├── index.html                  # Pagina principale del portfolio
├── css/
│   └── style.css               # Design system minimale e reattivo
├── js/
│   └── main.js                 # Logica di traduzione EN/IT, tema e modale
├── assets/
│   └── docs/
│       └── Livia_Talmeli_Zapaterra_CV.html # CV pronto per la stampa
└── README.md
```

---

## 🚀 Come Pubblicare il Sito

Il portfolio è realizzato in HTML5/CSS/JavaScript statico puro, senza processi di build o dipendenze complesse. Può essere ospitato su qualsiasi servizio di hosting statico (es. GitHub Pages, Cloudflare Pages o server web statico) semplicemente caricando i file.

### Esempio con GitHub Pages:
1. Crea una nuova repository pubblica su GitHub (es. `portfolio`).
2. Esegui il push di tutti i file di questa cartella nel branch principale (`main`).
3. Vai in **Settings > Pages > Branch: main** e salva.
4. Il tuo sito sarà online con URL tipo `https://tuo-username.github.io/portfolio/`.
