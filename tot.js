const ROUNDS = 10;
const STORAGE_KEY = 'tot_state';

let pool = [];        // shuffled chars to draw from
let leftChar = null;
let rightChar = null;
let champion = null;  // the character who won all 10 rounds
let round = 0;        // how many picks made so far
let champWins = 0;    // consecutive wins of the current leader
let champWinName = null;

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function saveState() {
    try {
        const state = {
            poolNames:    pool.map(c => c.name),
            poolNext:     pool._next,
            leftName:     leftChar ? leftChar.name : null,
            rightName:    rightChar ? rightChar.name : null,
            championName: champion ? champion.name : null,
            round,
            champWins,
            champWinName,
            done:         champion !== null,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
}

function clearState() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

function charByName(name) {
    return CHARACTERS_DATA.find(c => c.name === name) || null;
}

function startGame() {
    clearState();
    champion = null;
    round = 0;

    pool = shuffle(CHARACTERS_DATA).slice(0, ROUNDS + 1);
    pool._next = 2;

    leftChar  = pool[0];
    rightChar = pool[1];

    document.getElementById('tot-start-btn').style.display = 'none';
    document.getElementById('tot-restart-btn').style.display = 'none';
    document.getElementById('tot-arena').style.display  = 'flex';
    document.getElementById('tot-result').style.display = 'none';

    saveState();
    updateDisplay();
}

function init() {
    const saved = loadState();
    if (!saved) {
        // no saved state: show start button, hide arena
        document.getElementById('tot-start-btn').style.display = '';
        document.getElementById('tot-arena').style.display = 'none';
        document.getElementById('tot-result').style.display = 'none';
        return;
    }

    // restore pool (array of char objects)
    pool = saved.poolNames.map(charByName).filter(Boolean);
    pool._next = saved.poolNext;

    round    = saved.round;

    if (saved.done) {
        champion  = charByName(saved.championName);
        leftChar  = null;
        rightChar = null;
        document.getElementById('tot-start-btn').style.display = 'none';
        document.getElementById('tot-arena').style.display  = 'none';
        document.getElementById('tot-result').style.display = 'block';
        showResult();
    } else {
        champWins    = saved.champWins    || 0;
        champWinName = saved.champWinName || null;
        leftChar  = charByName(saved.leftName);
        rightChar = charByName(saved.rightName);
        document.getElementById('tot-start-btn').style.display = 'none';
        document.getElementById('tot-restart-btn').style.display = 'none';
        document.getElementById('tot-arena').style.display  = 'flex';
        document.getElementById('tot-result').style.display = 'none';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('tot-left-img').src   = leftChar.image;
    document.getElementById('tot-left-img').alt   = leftChar.name;
    document.getElementById('tot-left-name').textContent  = leftChar.name;

    document.getElementById('tot-right-img').src  = rightChar.image;
    document.getElementById('tot-right-img').alt  = rightChar.name;
    document.getElementById('tot-right-name').textContent = rightChar.name;

    document.getElementById('tot-progress').textContent =
        `Round ${round + 1} / ${ROUNDS}`;
}

function pick(side) {
    const winner = side === 'left' ? leftChar : rightChar;

    if (winner.name === champWinName) {
        champWins++;
    } else {
        champWinName = winner.name;
        champWins = 1;
    }

    round++;

    if (round >= ROUNDS) {
        champion = winner;
        saveState();
        unlockAchievement('first_tot');
        if (champWins >= ROUNDS) unlockAchievement('tot_flawless');
        showResult();
        return;
    }

    const next = pool[pool._next++];
    if (side === 'left') {
        rightChar = next;
    } else {
        leftChar = next;
    }

    saveState();
    updateDisplay();
}

function showResult() {
    document.getElementById('tot-start-btn').style.display = 'none';
    document.getElementById('tot-restart-btn').style.display = '';
    document.getElementById('tot-arena').style.display  = 'none';
    document.getElementById('tot-progress').textContent = '';
    document.getElementById('tot-result').style.display = 'block';

    document.getElementById('tot-champion').innerHTML = `
        <div class="tot-result-card">
            <span class="tot-champion-label">&#x1F451; Champion</span>
            <img class="tot-champion-img" src="${champion.image}" alt="${champion.name}">
            <span class="tot-result-name">${champion.name}</span>
        </div>
    `;
}

init();

