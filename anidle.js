let characters = [];
let targetCharacter = null;
let guessedNames = new Set();
let guessesOrdered = [];
let won = false;
let guessCount = 0;
let hintRevealed = [false, false, false];

const HINTS = [
    { id: 'hint-1', label: 'Hint 1: Genre',     key: 'animegenre', unlockAt: 5  },
    { id: 'hint-2', label: 'Hint 2: Haarfarbe', key: 'haircolor',  unlockAt: 10 },
    { id: 'hint-3', label: 'Hint 3: Anime',     key: 'anime',      unlockAt: 15 },
];

const urlParams = new URLSearchParams(window.location.search);
const MODE = urlParams.get('mode') === 'daily' ? 'daily' : 'infinity';

function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getDailyIndex(length) {
    const dateStr = getTodayKey();
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = Math.imul(31, hash) + dateStr.charCodeAt(i) | 0;
    }
    return Math.abs(hash) % length;
}

function getStorageKey() {
    return MODE === 'daily' ? 'anidle_daily_' + getTodayKey() : 'anidle_infinity';
}

function saveState() {
    try {
        const state = {
            targetName: targetCharacter.name,
            guesses: guessesOrdered,
            hintRevealed: [...hintRevealed],
            won: won,
            guessCount: guessCount,
        };
        localStorage.setItem(getStorageKey(), JSON.stringify(state));
    } catch (e) {}
}

function loadState() {
    try {
        const raw = localStorage.getItem(getStorageKey());
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function clearState() {
    try {
        localStorage.removeItem(getStorageKey());
    } catch (e) {}
}

function init() {
    characters = CHARACTERS_DATA;

    document.querySelector('h1').textContent = MODE === 'daily' ? 'Anidle Daily' : 'Anidle Infinity';

    const restartBtn = document.getElementById('restart-btn');
    if (MODE === 'daily') {
        restartBtn.style.display = 'none';
    }

    const saved = loadState();
    if (saved) {
        const target = characters.find(c => c.name === saved.targetName);
        if (!target) {
            clearState();
            startFresh();
            return;
        }
        targetCharacter = target;
        won = saved.won || false;
        guessCount = saved.guessCount || 0;
        hintRevealed = saved.hintRevealed || [false, false, false];
        guessesOrdered = saved.guesses || [];
        guessedNames = new Set(guessesOrdered);

        const guessList = document.getElementById('guess-list');
        guessList.innerHTML = '';
        for (const name of guessesOrdered) {
            const char = characters.find(c => c.name === name);
            if (char) {
                guessList.insertBefore(buildGuessRow(char), guessList.firstChild);
            }
        }

        HINTS.forEach((hint, i) => {
            if (hintRevealed[i]) {
                const box = document.getElementById(hint.id);
                box.className = 'hint-box revealed';
                box.innerHTML = `<span class="hint-reveal-label">${hint.label}:</span> <span class="hint-reveal-value">${targetCharacter[hint.key]}</span>`;
            }
        });
        updateHints();

        if (won) {
            document.getElementById('win-screen').style.display = 'block';
            document.getElementById('win-message').textContent =
                `Correct! The character was ${targetCharacter.name}! You guessed it in ${guessCount} ${guessCount === 1 ? 'try' : 'tries'}!`;
            document.getElementById('guess-input').disabled = true;
            if (MODE === 'daily') {
                const dailyNote = document.createElement('p');
                dailyNote.textContent = 'Come back tomorrow for the next Daily challenge!';
                document.getElementById('win-screen').appendChild(dailyNote);
            }
        }
    } else {
        startFresh();
    }
}

function startFresh() {
    if (MODE === 'daily') {
        targetCharacter = characters[getDailyIndex(characters.length)];
    } else {
        targetCharacter = characters[Math.floor(Math.random() * characters.length)];
    }
    guessedNames.clear();
    guessesOrdered = [];
    won = false;
    guessCount = 0;
    hintRevealed = [false, false, false];
    document.getElementById('guess-list').innerHTML = '';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').disabled = false;
    document.getElementById('win-screen').style.display = 'none';
    document.getElementById('autocomplete-list').innerHTML = '';
    updateHints();
    saveState();
}

function pickNewTarget() {
    clearState();
    startFresh();
}

function updateHints() {
    HINTS.forEach((hint, i) => {
        const box = document.getElementById(hint.id);
        if (!box) return;
        if (hintRevealed[i]) return;
        if (guessCount >= hint.unlockAt) {
            box.className = 'hint-box unlocked';
            box.innerHTML = `<button class="hint-btn" onclick="revealHint(${i})">${hint.label} &mdash; klicken zum Aufdecken</button>`;
        } else {
            const rem = hint.unlockAt - guessCount;
            box.className = 'hint-box locked';
            box.innerHTML = `<span class="hint-lock-text">&#128274; Hint ${i + 1} &mdash; unlocks in ${rem} ${rem === 1 ? 'try' : 'tries'}</span>`;
        }
    });
}

function revealHint(i) {
    hintRevealed[i] = true;
    const hint = HINTS[i];
    const box = document.getElementById(hint.id);
    box.className = 'hint-box revealed';
    box.innerHTML = `<span class="hint-reveal-label">${hint.label}:</span> <span class="hint-reveal-value">${targetCharacter[hint.key]}</span>`;
    saveState();
}

function getArrow(guessedVal, targetVal) {
    if (guessedVal < targetVal) return ' ↑';
    if (guessedVal > targetVal) return ' ↓';
    return '';
}

function isPartialMatch(guessedVal, targetVal) {
    if (guessedVal === targetVal) return false;
    const gParts = guessedVal.split('/').map(s => s.trim().toLowerCase());
    const tParts = targetVal.split('/').map(s => s.trim().toLowerCase());
    return gParts.some(p => tParts.includes(p));
}

function buildGuessRow(char) {
    const attrs = [
        { key: 'image', isImage: true },
        { key: 'name' },
        { key: 'anime' },
        { key: 'animegenre' },
        { key: 'gender' },
        { key: 'age', isNumeric: true },
        { key: 'height', isNumeric: true },
        { key: 'haircolor' },
    ];

    const row = document.createElement('div');
    row.classList.add('guess-row');

    for (const attr of attrs) {
        const cell = document.createElement('div');
        cell.classList.add('guess-cell');

        if (attr.isImage) {
            const img = document.createElement('img');
            img.src = char.image;
            img.alt = char.name;
            cell.appendChild(img);
        } else {
            const matches = char[attr.key] === targetCharacter[attr.key];
            let cellClass;
            if (matches) {
                cellClass = 'correct';
            } else if (!attr.isNumeric && isPartialMatch(String(char[attr.key]), String(targetCharacter[attr.key]))) {
                cellClass = 'partial';
            } else {
                cellClass = 'wrong';
            }
            cell.classList.add(cellClass);
            let text = String(char[attr.key]);
            if (attr.isNumeric && !matches) {
                text += getArrow(char[attr.key], targetCharacter[attr.key]);
            }
            cell.textContent = text;
        }

        row.appendChild(cell);
    }

    return row;
}

function makeGuess(name) {
    if (won) return;
    const trimmed = name.trim();
    if (!trimmed) return;

    const char = characters.find(c => c.name.toLowerCase() === trimmed.toLowerCase());
    if (!char) return;
    if (guessedNames.has(char.name)) return;
    guessedNames.add(char.name);
    guessesOrdered.push(char.name);
    guessCount++;
    updateHints();

    const guessList = document.getElementById('guess-list');
    guessList.insertBefore(buildGuessRow(char), guessList.firstChild);

    document.getElementById('guess-input').value = '';
    document.getElementById('autocomplete-list').innerHTML = '';

    if (char.name === targetCharacter.name) {
        won = true;
        document.getElementById('win-screen').style.display = 'block';
        document.getElementById('win-message').textContent =
            `Correct! The character was ${targetCharacter.name}! You guessed it in ${guessCount} ${guessCount === 1 ? 'try' : 'tries'}!`;
        document.getElementById('guess-input').disabled = true;
        if (MODE === 'daily') {
            const dailyNote = document.createElement('p');
            dailyNote.textContent = 'Come back tomorrow for the next Daily challenge!';
            document.getElementById('win-screen').appendChild(dailyNote);
        }
    }

    saveState();
}

document.getElementById('guess-input').addEventListener('input', function () {
    const val = this.value.trim().toLowerCase();
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = '';
    if (!val) return;

    const matches = characters.filter(c =>
        c.name.toLowerCase().includes(val) && !guessedNames.has(c.name)
    );

    matches.forEach(char => {
        const item = document.createElement('div');
        item.classList.add('autocomplete-item');
        item.textContent = char.name;
        item.addEventListener('click', () => makeGuess(char.name));
        list.appendChild(item);
    });
});

document.getElementById('guess-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const firstItem = document.querySelector('#autocomplete-list .autocomplete-item');
        if (firstItem) {
            makeGuess(firstItem.textContent);
        } else {
            makeGuess(this.value);
        }
    }
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('#autocomplete-wrapper')) {
        document.getElementById('autocomplete-list').innerHTML = '';
    }
});

document.getElementById('guess-btn').addEventListener('click', function () {
    makeGuess(document.getElementById('guess-input').value);
});

document.getElementById('restart-btn').addEventListener('click', pickNewTarget);

init();
