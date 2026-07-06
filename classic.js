let pool = [];
let currentIndex = 0;
let currentChar = null;   // full character object currently shown
let gameRunning = false;
let slotChars = [null, null, null, null, null];  // character objects placed in slots

const slotsDiv = document.getElementById("slots");
const imageContainer = document.getElementById("image-container");
const startBtn = document.getElementById("startBtn");

let slots = [];

// Slots erstellen
for (let i = 0; i < 5; i++) {
    const slot = document.createElement("div");
    slot.className = "slot";

    const nameLabel = document.createElement("span");
    nameLabel.className = "slot-name";

    const box = document.createElement("div");
    box.className = "box";

    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.disabled = true;

    btn.addEventListener("click", () => placeImage(i));

    slot.appendChild(nameLabel);
    slot.appendChild(box);
    slot.appendChild(btn);
    slotsDiv.appendChild(slot);

    slots.push({ box, btn, nameLabel });
}

// State management
function saveClassicState() {
    try {
        localStorage.setItem('classic_state', JSON.stringify({
            pool: pool.map(c => c.name),
            currentIndex: currentIndex,
            slotChars: slotChars.map(c => c ? c.name : null),
            slotDisabled: slots.map(s => s.btn.disabled),
            gameRunning: gameRunning,
        }));
    } catch (e) {}
}

function clearClassicState() {
    try { localStorage.removeItem('classic_state'); } catch (e) {}
}

// Start Button
startBtn.addEventListener("click", () => {
    if (!gameRunning) {
        startGame();
    } else {
        resetGame();
    }
});

function startGame() {
    pool = [...CHARACTERS_DATA].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    slotChars = [null, null, null, null, null];
    gameRunning = true;

    slots.forEach(s => {
        s.btn.disabled = false;
        s.box.innerHTML = "";
        s.nameLabel.textContent = "";
    });

    document.getElementById('classic-copy-btn').style.display = 'none';
    startBtn.classList.remove('with-copy');
    startBtn.textContent = "Restart";
    startBtn.disabled = true;

    spawn();
    saveClassicState();
}

function spawn() {
    imageContainer.innerHTML = "";

    if (currentIndex >= pool.length) return;

    const char = pool[currentIndex++];
    currentChar = char;

    const img = document.createElement("img");
    img.src = char.image;
    imageContainer.appendChild(img);
}

function placeImage(index) {
    const slot = slots[index];

    slotChars[index] = currentChar;
    slot.box.innerHTML = "";
    const img = document.createElement("img");
    img.src = currentChar.image;
    slot.box.appendChild(img);
    slot.btn.disabled = true;

    const allUsed = slots.every(s => s.btn.disabled);

    if (allUsed) {
        endGame();
    } else {
        spawn();
    }
    saveClassicState();
}

function endGame() {
    imageContainer.innerHTML = '';
    gameRunning = false;
    startBtn.disabled = false;
    document.getElementById('classic-copy-btn').style.display = 'flex';
    startBtn.classList.add('with-copy');
    // show names above slots
    slots.forEach((s, i) => {
        if (slotChars[i]) s.nameLabel.textContent = slotChars[i].name;
    });
    unlockAchievement('first_classic');

    const nonHumanCount = slotChars.filter(c => c && c.human === false).length;
    if (nonHumanCount === 5) unlockAchievement('not_human');

    const alyaChars = CHARACTERS_DATA.filter(c => c.anime === 'Alya Sometimes Hides Her Feelings in Russian');
    if (alyaChars.every(c => slotChars.some(s => s && s.name === c.name))) unlockAchievement('all_alya');

    const csmChars = CHARACTERS_DATA.filter(c => c.anime === 'Chainsaw Man');
    if (csmChars.every(c => slotChars.some(s => s && s.name === c.name))) unlockAchievement('all_csm');

    if (slotChars.every((c, i) => i === 0 || slotChars[i-1].name.localeCompare(c.name) <= 0))
        unlockAchievement('classic_alphabetical');

    if (slotChars.every(c => c && c.anime === slotChars[0].anime))
        unlockAchievement('classic_same_anime');

    if (slotChars[0] && slotChars[0].name === 'Lobster')
        unlockAchievement('lobster_1');

    if (slotChars[0] && slotChars[0].name === 'Biggie Cheese')
        unlockAchievement('cheese_1');

    if (slotChars.filter(c => c && c.anime === 'The Quintessential Quintuplets').length === 5)
        unlockAchievement('quintessential');

    const umaChars = CHARACTERS_DATA.filter(c => c.anime === 'Uma Musume');
    if (umaChars.every(c => slotChars.some(s => s && s.name === c.name)))
        unlockAchievement('all_umamusume');

    if (slotChars.every(c => c && c.gender === 'Male'))
        unlockAchievement('not_a_girl');

    const hasHair = color => slotChars.every(c => c && c.haircolor.toLowerCase().includes(color));
    if (hasHair('blonde')) unlockAchievement('hair_blonde');
    if (hasHair('blue'))   unlockAchievement('hair_blue');
    if (hasHair('pink'))   unlockAchievement('hair_pink');
    if (hasHair('black'))  unlockAchievement('hair_black');
    if (hasHair('brown'))  unlockAchievement('hair_brown');
}

function classicCopyResult() {
    const lines = ['Classic Ranking:'];
    slotChars.forEach((char, i) => lines.push(`${i + 1}. ${char ? char.name : '—'}`));
    lines.push('\nhttps://anirankergg.vercel.app/classic.html');
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
        const btn = document.getElementById('classic-copy-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
    });
}

function resetGame() {
    imageContainer.innerHTML = "";

    slots.forEach(s => {
        s.box.innerHTML = "";
        s.btn.disabled = true;
        s.nameLabel.textContent = "";
    });

    slotChars = [null, null, null, null, null];
    startBtn.textContent = 'Start';
    gameRunning = false;
    document.getElementById('classic-copy-btn').style.display = 'none';
    startBtn.classList.remove('with-copy');
    clearClassicState();
}

// Restore state on page load
(function () {
    try {
        const raw = localStorage.getItem('classic_state');
        if (!raw) return;
        const state = JSON.parse(raw);
        if (!state.pool || !state.pool.length) return;

        pool = state.pool.map(n => CHARACTERS_DATA.find(c => c.name === n)).filter(Boolean);
        currentIndex = state.currentIndex;
        slotChars = (state.slotChars || [null,null,null,null,null]).map(n => n ? CHARACTERS_DATA.find(c => c.name === n) || null : null);
        gameRunning = state.gameRunning;

        slots.forEach((s, i) => {
            s.btn.disabled = state.slotDisabled[i];
            if (slotChars[i]) {
                const img = document.createElement('img');
                img.src = slotChars[i].image;
                s.box.innerHTML = '';
                s.box.appendChild(img);
            }
        });

        if (!gameRunning) {
            // game ended — show names and copy button
            slots.forEach((s, i) => {
                if (slotChars[i]) s.nameLabel.textContent = slotChars[i].name;
            });
            document.getElementById('classic-copy-btn').style.display = 'flex';
            startBtn.classList.add('with-copy');
        }

        if (gameRunning && currentIndex > 0) {
            currentChar = pool[currentIndex - 1];
            const img = document.createElement('img');
            img.src = currentChar.image;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        }

        startBtn.textContent = 'Restart';
        startBtn.disabled = gameRunning;
    } catch (e) {}
})();
