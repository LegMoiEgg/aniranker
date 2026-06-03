const grid = document.getElementById('lexikon-grid');
const sortSelect = document.getElementById('lexikon-sort');
const btnDir = document.getElementById('sort-dir');
let sortDir = localStorage.getItem('lexikon_sort_dir') || 'asc';
let searchTerm = '';

// restore saved sort mode
const savedMode = localStorage.getItem('lexikon_sort_mode') || 'alphabet';
sortSelect.value = savedMode;
btnDir.innerHTML = sortDir === 'asc' ? '&#9650;' : '&#9660;';

document.getElementById('lexikon-count').textContent = `${CHARACTERS_DATA.length} characters`;

btnDir.addEventListener('click', () => {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    btnDir.innerHTML = sortDir === 'asc' ? '&#9650;' : '&#9660;';
    localStorage.setItem('lexikon_sort_dir', sortDir);
    render(sortSelect.value);
});

document.getElementById('lexikon-search').addEventListener('input', function () {
    searchTerm = this.value.trim().toLowerCase();
    render(sortSelect.value);
});

function getFiltered() {
    if (!searchTerm) return CHARACTERS_DATA;
    return CHARACTERS_DATA.filter(c =>
        c.name.toLowerCase().includes(searchTerm) ||
        (c.anime && c.anime.toLowerCase().includes(searchTerm))
    );
}

function buildCard(char) {
    const card = document.createElement('div');
    card.className = 'lexikon-card';
    card.innerHTML = `
        <img src="${char.image}" alt="${char.name}" loading="lazy">
        <span class="lexikon-name">${char.name}</span>
    `;
    card.addEventListener('click', () => openModal(char));
    return card;
}

function render(mode) {
    grid.innerHTML = '';
    const chars = getFiltered();
    document.getElementById('lexikon-count').textContent =
        chars.length === CHARACTERS_DATA.length
            ? `${CHARACTERS_DATA.length} characters`
            : `${chars.length} / ${CHARACTERS_DATA.length} characters`;

    const cmpStr = (a, b) => sortDir === 'asc' ? a.localeCompare(b) : b.localeCompare(a);

    if (mode === 'anime' || mode === 'haircolor') {
        grid.classList.add('lexikon-grid-grouped');
        const groupKey = mode === 'anime' ? 'anime' : 'haircolor';

        const groups = {};
        for (const char of chars) {
            const raw = char[groupKey] || 'Unbekannt';
            const keys = mode === 'haircolor'
                ? raw.split('/').map(s => s.trim()).filter(Boolean)
                : [raw];
            for (const key of keys) {
                if (!groups[key]) groups[key] = [];
                groups[key].push(char);
            }
        }

        const sortedKeys = Object.keys(groups).sort((a, b) => cmpStr(a, b));

        for (const keyName of sortedKeys) {
            const section = document.createElement('div');
            section.className = 'lexikon-group';

            const heading = document.createElement('h2');
            heading.className = 'lexikon-group-heading';
            heading.textContent = keyName;
            section.appendChild(heading);

            const cards = document.createElement('div');
            cards.className = 'lexikon-group-cards';

            const sortedChars = groups[keyName].sort((a, b) => cmpStr(a.name, b.name));
            for (const char of sortedChars) {
                cards.appendChild(buildCard(char));
            }

            section.appendChild(cards);
            grid.appendChild(section);
        }
    } else if (mode === 'alphabet') {
        grid.classList.remove('lexikon-grid-grouped');
        const sorted = [...chars].sort((a, b) => cmpStr(a.name, b.name));
        for (const char of sorted) grid.appendChild(buildCard(char));
    } else if (mode === 'height') {
        grid.classList.remove('lexikon-grid-grouped');
        const sorted = [...chars].sort((a, b) =>
            sortDir === 'asc' ? a.height - b.height : b.height - a.height
        );
        for (const char of sorted) grid.appendChild(buildCard(char));
    } else if (mode === 'age') {
        grid.classList.remove('lexikon-grid-grouped');
        const sorted = [...chars].sort((a, b) =>
            sortDir === 'asc' ? a.age - b.age : b.age - a.age
        );
        for (const char of sorted) grid.appendChild(buildCard(char));
    }
}

sortSelect.addEventListener('change', () => {
    localStorage.setItem('lexikon_sort_mode', sortSelect.value);
    render(sortSelect.value);
});

render(savedMode);

document.getElementById('lexikon-modal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

function openModal(char) {
    document.getElementById('modal-img').src = char.image;
    document.getElementById('modal-img').alt = char.name;
    document.getElementById('modal-name').textContent = char.name;

    const rows = [
        ['Anime',      char.anime],
        ['Genre',      char.animegenre],
        ['Gender',     char.gender],
        ['Age',        char.age],
        ['Height',     char.height + ' cm'],
        ['Haircolor',  char.haircolor],
    ];

    document.getElementById('modal-table').innerHTML = rows
        .map(([k, v]) => `<tr><td class="modal-key">${k}</td><td class="modal-val">${v}</td></tr>`)
        .join('');

    document.getElementById('lexikon-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('lexikon-modal').style.display = 'none';
}
