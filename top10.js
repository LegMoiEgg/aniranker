const POOL_SIZE = 10;
const STORAGE_KEY = 'top10_state';

let allChars = [];       // original 10 randomly picked chars
let ranked = [];         // chars placed so far: ranked[0] = #1, ranked[1] = #2, ...
let currentWinner = null; // the "defender" of the current phase
let challengers = [];    // remaining chars to challenge in current phase
let challengerIdx = 0;   // which challenger is currently up
let leftChar = null;
let rightChar = null;

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
            allCharNames:      allChars.map(c => c.name),
            rankedNames:       ranked.map(c => c.name),
            currentWinnerName: currentWinner ? currentWinner.name : null,
            challengerNames:   challengers.map(c => c.name),
            challengerIdx,
            done: ranked.length >= POOL_SIZE,
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

function startPhase(remaining) {
    currentWinner = remaining[0];
    challengers   = remaining.slice(1);
    challengerIdx = 0;
    leftChar  = currentWinner;
    rightChar = challengers[0];
}

function startGame() {
    clearState();
    allChars = shuffle(CHARACTERS_DATA).slice(0, POOL_SIZE);
    ranked = [];
    startPhase(allChars);

    document.getElementById('top10-start-btn').style.display   = 'none';
    document.getElementById('top10-restart-btn').style.display = 'none';
    document.getElementById('top10-copy-btn').style.display    = 'none';
    document.getElementById('top10-arena').style.display       = 'flex';
    document.getElementById('top10-result').style.display      = 'none';

    saveState();
    updateDisplay();
}

function init() {
    const saved = loadState();
    if (!saved) {
        document.getElementById('top10-start-btn').style.display  = '';
        document.getElementById('top10-arena').style.display      = 'none';
        document.getElementById('top10-result').style.display     = 'none';
        return;
    }

    allChars = saved.allCharNames.map(charByName).filter(Boolean);
    ranked   = saved.rankedNames.map(charByName).filter(Boolean);

    if (saved.done) {
        document.getElementById('top10-start-btn').style.display   = 'none';
        document.getElementById('top10-arena').style.display       = 'none';
        document.getElementById('top10-result').style.display      = 'block';
        showResult();
    } else {
        currentWinner = charByName(saved.currentWinnerName);
        challengers   = saved.challengerNames.map(charByName).filter(Boolean);
        challengerIdx = saved.challengerIdx;
        leftChar  = currentWinner;
        rightChar = challengers[challengerIdx];

        document.getElementById('top10-start-btn').style.display   = 'none';
        document.getElementById('top10-restart-btn').style.display = 'none';
        document.getElementById('top10-arena').style.display       = 'flex';
        document.getElementById('top10-result').style.display      = 'none';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('top10-left-img').src           = leftChar.image;
    document.getElementById('top10-left-img').alt           = leftChar.name;
    document.getElementById('top10-left-name').textContent  = leftChar.name;
    document.getElementById('top10-right-img').src          = rightChar.image;
    document.getElementById('top10-right-img').alt          = rightChar.name;
    document.getElementById('top10-right-name').textContent = rightChar.name;

    const phase      = ranked.length + 1;
    const totalRounds = challengers.length;
    document.getElementById('top10-progress').textContent =
        `Ranking #${phase} of ${POOL_SIZE} \u00b7 Round ${challengerIdx + 1} / ${totalRounds}`;
}

function pick(side) {
    currentWinner = side === 'left' ? leftChar : rightChar;
    challengerIdx++;

    if (challengerIdx >= challengers.length) {
        // Phase over — currentWinner gets this rank
        ranked.push(currentWinner);

        const remaining = allChars.filter(c => !ranked.find(r => r.name === c.name));

        if (remaining.length === 0) {
            saveState();
            showResult();
            return;
        }
        if (remaining.length === 1) {
            // Last char gets final place automatically
            ranked.push(remaining[0]);
            saveState();
            showResult();
            return;
        }

        startPhase(remaining);
    } else {
        leftChar  = currentWinner;
        rightChar = challengers[challengerIdx];
    }

    saveState();
    updateDisplay();
}

function makeCard(char, place) {
    const medals = { 1: '\uD83D\uDC51', 2: '\uD83E\uDD48', 3: '\uD83E\uDD49' };
    const imgClass = place === 1 ? 'gold' : place === 2 ? 'silver' : place === 3 ? 'bronze' : '';

    const card = document.createElement('div');
    card.className = 'top10-result-card';

    const num = document.createElement('span');
    num.className = 'top10-result-num';
    num.textContent = (medals[place] ? medals[place] + ' ' : '') + `#${place}`;

    const img = document.createElement('img');
    img.className = 'top10-result-img' + (imgClass ? ' ' + imgClass : '');
    img.src = char.image;
    img.alt = char.name;

    const name = document.createElement('span');
    name.className = 'top10-result-name';
    name.textContent = char.name;

    card.appendChild(num);
    card.appendChild(img);
    card.appendChild(name);
    return card;
}

function addRow(grid, chars, startPlace) {
    const row = document.createElement('div');
    row.className = 'top10-pyramid-row';
    chars.forEach((char, i) => row.appendChild(makeCard(char, startPlace + i)));
    grid.appendChild(row);
}

function showResult() {
    document.getElementById('top10-start-btn').style.display   = 'none';
    document.getElementById('top10-restart-btn').style.display = '';
    document.getElementById('top10-copy-btn').style.display    = 'flex';
    document.getElementById('top10-arena').style.display       = 'none';
    document.getElementById('top10-progress').textContent      = '';
    document.getElementById('top10-result').style.display      = 'block';

    const grid = document.getElementById('top10-result-grid');
    grid.innerHTML = '';

    // Row 1: #1 centered
    addRow(grid, [ranked[0]], 1);
    // Row 2: #2 silver, #3 bronze
    addRow(grid, ranked.slice(1, 3), 2);
    // Row 3: #4, #5, #6
    addRow(grid, ranked.slice(3, 6), 4);
    // Row 4: #7, #8, #9, #10
    addRow(grid, ranked.slice(6, 10), 7);
}

function copyResult() {
    const lines = ['My Top 10:'];
    ranked.forEach((char, i) => lines.push(`${i + 1}. ${char.name}`));
    lines.push('\nhttps://anirankergg.vercel.app/top10.html');
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
        const btn = document.getElementById('top10-copy-btn');
        const orig = btn.innerHTML;
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
    });
}

init();
