// ============================================================
//  CONNECTION – Finde 4 Gruppen à 4 Charaktere mit gemeinsamen Attributen
// ============================================================

const CONN_LIVES_TOTAL = 4;
const CONN_GROUP_SIZE = 4;
const CONN_NUM_GROUPS = 4;
const CONN_STORAGE_KEY = 'connection_state';

// Farben für gelöste Gruppen (Reihenfolge)
const GROUP_COLORS = ['#4a90d9', '#6ab04c', '#f9ca24', '#eb4d4b'];

let connLives = CONN_LIVES_TOTAL;
let connSelected = [];         // aktuell ausgewählte Charakter-Namen
let connGroups = [];           // [{label, chars: [name,...], color}]
let connSolved = [];           // indices der gelösten Gruppen
let connRemaining = [];        // char-Objekte noch im Grid
let connWrongGuesses = [];     // vorherige falsche Kombinationen (als sortierte Name-Strings)
let connGameOver = false;

// ============================================================
//  STREAK
// ============================================================
const CONN_STREAK_KEY = 'connection_streak';
const CONN_HIGHSCORE_KEY = 'connection_streak_highscore';

function getConnStreak() {
    try { return JSON.parse(localStorage.getItem(CONN_STREAK_KEY)) || { count: 0 }; }
    catch { return { count: 0 }; }
}

function getConnHighscore() {
    try { return parseInt(localStorage.getItem(CONN_HIGHSCORE_KEY)) || 0; }
    catch { return 0; }
}

function updateConnHighscore(currentStreak) {
    const best = getConnHighscore();
    if (currentStreak > best) {
        localStorage.setItem(CONN_HIGHSCORE_KEY, String(currentStreak));
    }
}

function renderHighscore() {
    const el = document.getElementById('conn-highscore');
    if (!el) return;
    const best = getConnHighscore();
    el.innerHTML = `🏆 Best Streak: ${best}`;
}

function updateConnStreak(won) {
    const data = getConnStreak();
    if (won) {
        data.count++;
    } else {
        data.count = 0;
    }
    localStorage.setItem(CONN_STREAK_KEY, JSON.stringify(data));
    updateConnHighscore(data.count);
    renderStreak();
    renderHighscore();
}

function renderStreak() {
    const el = document.getElementById('conn-streak');
    if (!el) return;
    const data = getConnStreak();
    if (data.count === 0) {
        el.textContent = 'Streak: 0';
        el.style.color = '#888';
    } else {
        el.innerHTML = `🔥 Streak: ${data.count}`;
        el.style.color = '#ff88ff';
    }
}

// ============================================================
//  PUZZLE GENERATION
// ============================================================

function getGroupableAttributes() {
    // Sammle alle möglichen Gruppen-Kriterien mit mindestens 4 Charakteren
    const groups = [];

    // 1) Gleicher Anime (mind. 4 Charaktere)
    const animeMap = {};
    for (const c of CHARACTERS_DATA) {
        if (!animeMap[c.anime]) animeMap[c.anime] = [];
        animeMap[c.anime].push(c);
    }
    for (const [anime, chars] of Object.entries(animeMap)) {
        if (chars.length >= 4) {
            groups.push({ type: 'anime', value: anime, chars });
        }
    }

    // 2) Gleiche Haarfarbe (nur reine Farben, keine Mischungen mit /)
    const hairMap = {};
    for (const c of CHARACTERS_DATA) {
        // nur reine Farben benutzen (ohne / im Wert)
        if (!c.haircolor.includes('/')) {
            const color = c.haircolor.trim();
            if (!hairMap[color]) hairMap[color] = [];
            hairMap[color].push(c);
        }
    }
    for (const [color, chars] of Object.entries(hairMap)) {
        if (chars.length >= 4) {
            groups.push({ type: 'haircolor', value: color, chars });
        }
    }

    // 3) Gleiche Augenfarbe (nur reine Farben, keine Mischungen mit /)
    const eyeMap = {};
    for (const c of CHARACTERS_DATA) {
        if (!c.eyecolor) continue;
        if (!c.eyecolor.includes('/')) {
            const color = c.eyecolor.trim();
            if (!eyeMap[color]) eyeMap[color] = [];
            eyeMap[color].push(c);
        }
    }
    for (const [color, chars] of Object.entries(eyeMap)) {
        if (chars.length >= 4) {
            groups.push({ type: 'eyecolor', value: color, chars });
        }
    }

    // 4) Gleiches einzelnes Genre (aus animegenre splitten)
    const genreMap = {};
    for (const c of CHARACTERS_DATA) {
        const genres = c.animegenre.split('/').map(g => g.trim()).filter(Boolean);
        for (const genre of genres) {
            if (!genreMap[genre]) genreMap[genre] = [];
            genreMap[genre].push(c);
        }
    }
    for (const [genre, chars] of Object.entries(genreMap)) {
        if (chars.length >= 4) {
            groups.push({ type: 'genre', value: genre, chars });
        }
    }

    // 5) Männliche Charaktere
    const maleChars = CHARACTERS_DATA.filter(c => c.gender === 'Male');
    if (maleChars.length >= 4) {
        groups.push({ type: 'gender', value: 'Male', chars: maleChars });
    }

    // 6) Nicht-menschliche Charaktere (human === false)
    const nonHumanChars = CHARACTERS_DATA.filter(c => c.human === false);
    if (nonHumanChars.length >= 4) {
        groups.push({ type: 'species', value: 'Non-Human', chars: nonHumanChars });
    }

    return groups;
}

function generatePuzzle(attempt = 0) {
    if (attempt > 200) {
        // Fallback: gib auf und nutze das letzte Ergebnis ohne Fairness-Check
        return generatePuzzleFallback();
    }

    const allPossible = getGroupableAttributes();
    const selected = [];
    const usedCharNames = new Set();

    // Shuffle alle möglichen Gruppen komplett zufällig
    const shuffled = [...allPossible].sort(() => Math.random() - 0.5);

    for (const group of shuffled) {
        if (selected.length >= CONN_NUM_GROUPS) break;

        // Wähle 4 Charaktere aus dieser Gruppe die noch nicht benutzt wurden
        const available = group.chars.filter(c => !usedCharNames.has(c.name));
        if (available.length < CONN_GROUP_SIZE) continue;

        const picked = [...available].sort(() => Math.random() - 0.5).slice(0, CONN_GROUP_SIZE);

        // Prüfe ob einer dieser Chars schon in einer gewählten Gruppe ist
        let overlaps = false;
        for (const existing of selected) {
            const overlapCount = picked.filter(c => existing.pickedNames.has(c.name)).length;
            if (overlapCount > 0) { overlaps = true; break; }
        }
        if (overlaps) continue;

        // Prüfe ob die 4 gepickten Chars nicht zufällig eine ANDERE gültige Gruppe bilden
        // (z.B. 4 Action-Chars die alle aus Naruto sind → wäre mehrdeutig)
        let ambiguous = false;
        // Bei Anime-Gruppen: Ambiguity-Check überspringen, weil es okay ist
        // wenn 4 Chars aus demselben Anime auch die gleiche Haarfarbe haben.
        // Der Spieler wird den Anime als Verbindung erkennen.
        if (group.type !== 'anime') {
            for (const otherGroup of allPossible) {
                if (otherGroup.type === group.type && otherGroup.value === group.value) continue;
                const otherNames = new Set(otherGroup.chars.map(c => c.name));
                const matchCount = picked.filter(c => otherNames.has(c.name)).length;
                if (matchCount === CONN_GROUP_SIZE) {
                    ambiguous = true;
                    break;
                }
            }
        }
        if (ambiguous) continue;

        // Gruppe nehmen
        const pickedNames = new Set(picked.map(c => c.name));
        selected.push({
            type: group.type,
            value: group.value,
            picked,
            pickedNames
        });
        picked.forEach(c => usedCharNames.add(c.name));
    }

    if (selected.length < CONN_NUM_GROUPS) {
        // Fallback: nochmal versuchen (sollte selten vorkommen)
        return generatePuzzle(attempt + 1);
    }

    // ============================================================
    // FAIRNESS CHECK: Im gesamten 16er-Grid darf kein Attribut von
    // mehr als 4 Chars geteilt werden, es sei denn diese 4+ sind
    // EXAKT eine der gewählten Gruppen. Sonst wird es unfair/mehrdeutig.
    // Nur Gruppen mit max 20 Chars im Pool prüfen (große Genres wie
    // "Action" mit 60+ Chars sind ohnehin nicht verwechselbar).
    // ============================================================
    const allPickedChars = selected.flatMap(g => g.picked);
    const allPickedNames = new Set(allPickedChars.map(c => c.name));

    for (const possibleGroup of allPossible) {
        // Überspringe sehr große Pools – die sind zu generisch um verwechselt zu werden
        if (possibleGroup.chars.length > 20) continue;

        // Überspringe Anime-Gruppen im Check – wenn ein Anime als offizielle Gruppe
        // gewählt wurde, sind exakt 4 davon im Grid (keine Verwechslung möglich)
        if (possibleGroup.type === 'anime') continue;

        // Wie viele Chars im Grid teilen dieses Attribut?
        const groupCharNames = new Set(possibleGroup.chars.map(ch => ch.name));
        const matchingInGrid = allPickedChars.filter(c => groupCharNames.has(c.name));

        if (matchingInGrid.length > CONN_GROUP_SIZE) {
            // Mehr als 4 Chars im Grid teilen dieses Attribut
            // Prüfe ob es NICHT eine unserer offiziellen Gruppen ist
            const isOfficialGroup = selected.some(g =>
                g.type === possibleGroup.type && g.value === possibleGroup.value
            );
            if (!isOfficialGroup) {
                // Unfair! Nochmal generieren.
                return generatePuzzle(attempt + 1);
            }
        }
    }

    return selected.map((g, i) => ({
        label: formatGroupLabel(g.type, g.value),
        chars: g.picked.map(c => c.name),
        color: GROUP_COLORS[i]
    }));
}

function generatePuzzleFallback() {
    // Einfache Generierung ohne Fairness-Check als letzter Ausweg
    const allPossible = getGroupableAttributes();
    const selected = [];
    const usedCharNames = new Set();
    const shuffled = [...allPossible].sort(() => Math.random() - 0.5);

    for (const group of shuffled) {
        if (selected.length >= CONN_NUM_GROUPS) break;
        const available = group.chars.filter(c => !usedCharNames.has(c.name));
        if (available.length < CONN_GROUP_SIZE) continue;
        const picked = [...available].sort(() => Math.random() - 0.5).slice(0, CONN_GROUP_SIZE);
        let overlaps = false;
        for (const existing of selected) {
            if (picked.some(c => existing.pickedNames.has(c.name))) { overlaps = true; break; }
        }
        if (overlaps) continue;
        const pickedNames = new Set(picked.map(c => c.name));
        selected.push({ type: group.type, value: group.value, picked, pickedNames });
        picked.forEach(c => usedCharNames.add(c.name));
    }

    return selected.map((g, i) => ({
        label: formatGroupLabel(g.type, g.value),
        chars: g.picked.map(c => c.name),
        color: GROUP_COLORS[i]
    }));
}

function formatGroupLabel(type, value) {
    switch (type) {
        case 'anime': return `Anime: ${value}`;
        case 'haircolor': return `Haarfarbe: ${value}`;
        case 'eyecolor': return `Augenfarbe: ${value}`;
        case 'genre': return `Genre: ${value}`;
        case 'gender': return `Männliche Charaktere`;
        case 'species': return `Nicht-menschlich`;
        default: return value;
    }
}

// ============================================================
//  GAME STATE
// ============================================================

function saveConnState() {
    try {
        localStorage.setItem(CONN_STORAGE_KEY, JSON.stringify({
            groups: connGroups,
            solved: connSolved,
            remaining: connRemaining.map(c => c.name),
            lives: connLives,
            wrongGuesses: connWrongGuesses,
            gameOver: connGameOver
        }));
    } catch (e) {}
}

function loadConnState() {
    try {
        const raw = localStorage.getItem(CONN_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
}

function clearConnState() {
    try { localStorage.removeItem(CONN_STORAGE_KEY); } catch (e) {}
}

// ============================================================
//  RENDERING
// ============================================================

function renderGrid() {
    const grid = document.getElementById('conn-grid');
    grid.innerHTML = '';

    for (const char of connRemaining) {
        const cell = document.createElement('div');
        cell.className = 'conn-cell';
        if (connSelected.includes(char.name)) {
            cell.classList.add('conn-selected');
        }
        cell.addEventListener('click', () => toggleSelect(char.name));

        const img = document.createElement('img');
        img.src = char.image;
        img.alt = char.name;
        img.loading = 'lazy';
        cell.appendChild(img);

        grid.appendChild(cell);
    }
}

function renderSolved() {
    const container = document.getElementById('conn-solved');
    container.innerHTML = '';

    for (const idx of connSolved) {
        const group = connGroups[idx];
        const row = document.createElement('div');
        row.className = 'conn-solved-row';
        row.style.background = group.color;

        const label = document.createElement('span');
        label.className = 'conn-solved-label';
        label.textContent = group.label;
        row.appendChild(label);

        const chars = document.createElement('div');
        chars.className = 'conn-solved-chars';
        for (const name of group.chars) {
            const charObj = CHARACTERS_DATA.find(c => c.name === name);
            if (charObj) {
                const img = document.createElement('img');
                img.src = charObj.image;
                img.alt = name;
                img.title = name;
                chars.appendChild(img);
            }
        }
        row.appendChild(chars);

        container.appendChild(row);
    }
}

function renderLives() {
    const container = document.getElementById('conn-lives');
    container.innerHTML = '';
    for (let i = 0; i < CONN_LIVES_TOTAL; i++) {
        const heart = document.createElement('span');
        heart.className = 'conn-heart';
        heart.textContent = i < connLives ? '❤️' : '🖤';
        container.appendChild(heart);
    }
}

function updateSubmitBtn() {
    const btn = document.getElementById('conn-submit');
    btn.disabled = connSelected.length !== CONN_GROUP_SIZE || connGameOver;
}

// ============================================================
//  GAME LOGIC
// ============================================================

function toggleSelect(name) {
    if (connGameOver || connLives <= 0) return;

    const idx = connSelected.indexOf(name);
    if (idx >= 0) {
        connSelected.splice(idx, 1);
    } else {
        if (connSelected.length >= CONN_GROUP_SIZE) return;
        connSelected.push(name);
    }

    renderGrid();
    updateSubmitBtn();
}

function submitGuess() {
    if (connSelected.length !== CONN_GROUP_SIZE || connGameOver || connLives <= 0) return;

    const sortedGuess = [...connSelected].sort().join('|');

    // Check ob diese Kombination schon versucht wurde
    if (connWrongGuesses.includes(sortedGuess)) {
        shakeGrid();
        return;
    }

    // Prüfe ob die ausgewählten 4 zu einer Gruppe gehören
    let matchedIdx = -1;
    for (let i = 0; i < connGroups.length; i++) {
        if (connSolved.includes(i)) continue;
        const groupNames = [...connGroups[i].chars].sort().join('|');
        if (sortedGuess === groupNames) {
            matchedIdx = i;
            break;
        }
    }

    if (matchedIdx >= 0) {
        // Richtig!
        connSolved.push(matchedIdx);
        connRemaining = connRemaining.filter(c => !connSelected.includes(c.name));
        connSelected = [];

        renderSolved();
        renderGrid();
        updateSubmitBtn();
        saveConnState();

        if (connSolved.length === CONN_NUM_GROUPS) {
            connGameOver = true;
            saveConnState();
            updateConnStreak(true);
            setTimeout(() => showResult(true), 600);
        }
    } else {
        // Falsch
        connWrongGuesses.push(sortedGuess);
        connLives--;
        renderLives();
        shakeGrid();

        connSelected = [];
        setTimeout(() => {
            renderGrid();
            updateSubmitBtn();
        }, 500);

        saveConnState();

        if (connLives <= 0) {
            connGameOver = true;
            updateSubmitBtn();
            saveConnState();
            updateConnStreak(false);
            setTimeout(() => showResult(false), 800);
        }
    }
}

function shakeGrid() {
    const grid = document.getElementById('conn-grid');
    grid.classList.add('conn-shake');
    setTimeout(() => grid.classList.remove('conn-shake'), 500);
}

function showResult(won) {
    document.getElementById('conn-result-title').textContent = won ? 'Gewonnen! 🎉' : 'Game Over 💀';

    const groupsDiv = document.getElementById('conn-result-groups');
    groupsDiv.innerHTML = '';

    connGroups.forEach((group, i) => {
        const row = document.createElement('div');
        row.className = 'conn-result-row';
        row.style.background = group.color;

        const label = document.createElement('div');
        label.className = 'conn-result-label';
        label.textContent = group.label;
        row.appendChild(label);

        const names = document.createElement('div');
        names.className = 'conn-result-names';
        names.textContent = group.chars.join(', ');
        row.appendChild(names);

        groupsDiv.appendChild(row);
    });

    document.getElementById('conn-result-overlay').style.display = 'flex';
}

// ============================================================
//  INITIALIZATION
// ============================================================

function startConnection() {
    clearConnState();

    connGroups = generatePuzzle();
    connSolved = [];
    connLives = CONN_LIVES_TOTAL;
    connSelected = [];
    connWrongGuesses = [];
    connGameOver = false;

    // Alle 16 Charaktere mischen
    const allChars = connGroups.flatMap(g =>
        g.chars.map(name => CHARACTERS_DATA.find(c => c.name === name))
    ).filter(Boolean);
    connRemaining = [...allChars].sort(() => Math.random() - 0.5);

    document.getElementById('conn-result-overlay').style.display = 'none';

    renderSolved();
    renderGrid();
    renderLives();
    updateSubmitBtn();
    saveConnState();
}

function restoreConnection() {
    const saved = loadConnState();
    if (!saved || !saved.groups || saved.groups.length !== CONN_NUM_GROUPS) {
        startConnection();
        return;
    }

    connGroups = saved.groups;
    connSolved = saved.solved || [];
    connLives = saved.lives != null ? saved.lives : CONN_LIVES_TOTAL;
    connWrongGuesses = saved.wrongGuesses || [];
    connGameOver = saved.gameOver || false;
    connSelected = [];

    connRemaining = (saved.remaining || [])
        .map(name => CHARACTERS_DATA.find(c => c.name === name))
        .filter(Boolean);

    renderSolved();
    renderGrid();
    renderLives();
    updateSubmitBtn();

    if (connGameOver) {
        const won = connSolved.length === CONN_NUM_GROUPS;
        showResult(won);
    }
}

// Submit-Button Event
document.getElementById('conn-submit').addEventListener('click', submitGuess);

// Start
renderStreak();
renderHighscore();
restoreConnection();
