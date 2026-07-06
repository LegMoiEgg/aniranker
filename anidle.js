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

const STREAK_KEY = 'anidle_daily_streak';

function getStreakData() {
    try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || { count: 0, lastDate: null }; }
    catch { return { count: 0, lastDate: null }; }
}

function updateStreakDisplay() {
    const el = document.getElementById('daily-streak-display');
    if (!el || MODE !== 'daily') return;
    const data      = getStreakData();
    const today     = getTodayKey();
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const active    = data.lastDate === today || data.lastDate === yesterday;
    const streak    = active ? data.count : 0;
    el.style.display = '';
    if (streak === 0) {
        el.textContent = 'Start your streak today!';
        el.style.color  = '#888';
    } else {
        el.innerHTML   = `🔥 ${streak} day${streak === 1 ? '' : 's'} in a row`;
        el.style.color  = '#ff88ff';
    }
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
    updateStreakDisplay();

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
            document.getElementById('guess-input').disabled = true;
            openWinModal();
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
    document.getElementById('autocomplete-list').innerHTML = '';
    updateHints();
    saveState();
}

function pickNewTarget() {
    document.getElementById('win-modal').style.display = 'none';
    clearState();
    startFresh();
}

function openWinModal() {
    document.getElementById('win-modal-img').src = targetCharacter.image;
    document.getElementById('win-modal-img').alt = targetCharacter.name;
    document.getElementById('win-modal-message').textContent =
        `Correct! The character was ${targetCharacter.name}! You guessed it in ${guessCount} ${guessCount === 1 ? 'try' : 'tries'}!`;
    if (MODE === 'daily') {
        document.getElementById('win-modal-daily-note').style.display = '';
        document.getElementById('win-modal-copy').style.display = '';
        document.getElementById('win-modal-restart').style.display = 'none';
    } else {
        document.getElementById('win-modal-daily-note').style.display = 'none';
        document.getElementById('win-modal-copy').style.display = 'none';
        document.getElementById('win-modal-restart').style.display = '';
    }
    document.getElementById('win-modal').style.display = 'flex';
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
        document.getElementById('guess-input').disabled = true;
        unlockAchievement('first_anidle');
        if (guessCount === 1) unlockAchievement('anidle_first_try');
        if (guessCount < 5)   unlockAchievement('anidle_no_hints');
        if (guessCount >= 16) unlockAchievement('anidle_all_hints');
        if (guessCount === characters.length) unlockAchievement('anidle_last_man');
        if (MODE === 'daily') {
            const today      = getTodayKey();
            const yesterday  = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            const streakData = getStreakData();
            if (streakData.lastDate !== today) {
                const newCount = streakData.lastDate === yesterday ? streakData.count + 1 : 1;
                localStorage.setItem(STREAK_KEY, JSON.stringify({ count: newCount, lastDate: today }));
                updateStreakDisplay();
                if (newCount >= 3) unlockAchievement('anidle_streak');
            }
        }
        openWinModal();
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

document.getElementById('win-modal-restart').addEventListener('click', pickNewTarget);

(function initColorblindToggle() {
    const CB_KEY = 'anidle_colorblind';
    const toggle = document.getElementById('colorblind-toggle');
    const saved = localStorage.getItem(CB_KEY) === '1';
    toggle.checked = saved;
    document.body.classList.toggle('colorblind-mode', saved);
    toggle.addEventListener('change', function () {
        const enabled = this.checked;
        localStorage.setItem(CB_KEY, enabled ? '1' : '0');
        document.body.classList.toggle('colorblind-mode', enabled);
    });
})();

function copyResult() {
    const tries = guessCount;
    const text = `Anidle Daily: ${tries} ${tries === 1 ? 'Try' : 'Tries'} 🎯\nhttps://anirankergg.vercel.app/anidle.html?mode=daily`;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('win-modal-copy');
        const original = btn.innerHTML;
        btn.textContent = 'Copied!';
        btn.style.color = '#00ff88';
        btn.style.borderColor = '#00ff88';
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

init();
