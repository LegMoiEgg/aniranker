let choices = ["kiss","marry","kill"];
let used = [];
let cardChars = [];  // full character objects
let cardChoices = [null, null, null];
let gameRunning = false;

// State management
function saveKMKState() {
    try {
        localStorage.setItem('kmk_state', JSON.stringify({
            cardChars: cardChars.map(c => c ? c.name : null),
            cardChoices: cardChoices,
            used: used,
            gameRunning: gameRunning,
        }));
    } catch (e) {}
}

function clearKMKState() {
    try { localStorage.removeItem('kmk_state'); } catch (e) {}
}

const container = document.getElementById("kmk-container");
const startBtn = document.getElementById("kmkStartBtn");

const cards = document.querySelectorAll(".kmk-card");

// Alle Buttons beim Laden deaktivieren
document.querySelectorAll(".kmk-buttons button").forEach(b => b.disabled = true);

// Button Event
startBtn.addEventListener("click", () => {
    if (!gameRunning) {
        startKMK();
    } else {
        resetKMK();
    }
});

function setupCards(chars, existingChoices) {
    cards.forEach((card, index) => {
        const box = card.querySelector(".kmk-box");
        const nameEl = card.querySelector(".kmk-char-name");
        const btns = card.querySelectorAll("button");

        box.innerHTML = "";
        box.classList.remove("kiss", "marry", "kill");
        btns.forEach(b => {
            b.classList.remove("kmk-btn-kiss", "kmk-btn-marry", "kmk-btn-kill");
        });

        const char = chars[index];
        const img = document.createElement("img");
        img.src = char.image;
        box.appendChild(img);

        nameEl.textContent = char.name;

        const choice = existingChoices[index];
        if (choice) {
            box.classList.add(choice);
            btns.forEach(b => {
                b.disabled = true;
                if (b.textContent === choice) b.classList.add(`kmk-btn-${choice}`);
            });
        } else {
            btns.forEach(btn => {
                btn.disabled = used.includes(btn.textContent);
                btn.onclick = () => {
                    const c = btn.textContent;
                    if (used.includes(c)) return;
                    used.push(c);
                    box.classList.add(c);
                    btns.forEach(b => {
                        b.disabled = true;
                        if (b.textContent === c) b.classList.add(`kmk-btn-${c}`);
                    });
                    document.querySelectorAll(".kmk-buttons button").forEach(b => {
                        if (b.textContent === c) b.disabled = true;
                    });
                    cardChoices[index] = c;
                    saveKMKState();
                    if (used.length === 3) endKMK();
                };
            });
        }
    });
}

// START
function startKMK() {
    used = [];
    cardChoices = [null, null, null];
    gameRunning = true;

    cardChars = [...CHARACTERS_DATA].sort(() => Math.random() - 0.5).slice(0, 3);
    setupCards(cardChars, cardChoices);

    startBtn.textContent = "Restart";
    startBtn.disabled = true;
    saveKMKState();
}

// ENDE
function endKMK() {
    gameRunning = false;
    startBtn.disabled = false;
    saveKMKState();
    unlockAchievement('first_kmk');

    if (cardChars.length === 3 && cardChars.every(c => c.anime === cardChars[0].anime))
        unlockAchievement('kmk_same_anime');

    if (cardChars.some((c, i) => c.name === 'Lobster' && cardChoices[i] === 'kill'))
        unlockAchievement('kmk_lobster_kill');
}

// RESET
function resetKMK() {
    cards.forEach(card => {
        const box = card.querySelector(".kmk-box");
        const nameEl = card.querySelector(".kmk-char-name");
        const btns = card.querySelectorAll("button");

        box.innerHTML = "";
        box.classList.remove("kiss","marry","kill");
        nameEl.textContent = "";
        btns.forEach(b => {
            b.disabled = true;
            b.classList.remove("kmk-btn-kiss", "kmk-btn-marry", "kmk-btn-kill");
        });
    });

    cardChars = [];
    cardChoices = [null, null, null];
    used = [];
    startBtn.textContent = "Start";
    gameRunning = false;
    clearKMKState();
}

// Restore state on page load
(function () {
    try {
        const raw = localStorage.getItem('kmk_state');
        if (!raw) return;
        const state = JSON.parse(raw);
        if (!state.cardChars || state.cardChars.length !== 3) return;

        cardChars = state.cardChars.map(n => CHARACTERS_DATA.find(c => c.name === n) || null);
        if (cardChars.some(c => !c)) return;
        cardChoices = state.cardChoices || [null, null, null];
        used = state.used || [];
        gameRunning = state.gameRunning;

        setupCards(cardChars, cardChoices);

        startBtn.textContent = 'Restart';
        startBtn.disabled = gameRunning;
    } catch (e) {}
})();
