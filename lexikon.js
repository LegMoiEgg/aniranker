const grid = document.getElementById('lexikon-grid');
const sortSelect = document.getElementById('lexikon-sort');
const btnDir = document.getElementById('sort-dir');
let sortDir = 'asc';

document.getElementById('lexikon-count').textContent = `${CHARACTERS_DATA.length} characters`;

btnDir.addEventListener('click', () => {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    btnDir.innerHTML = sortDir === 'asc' ? '&#9650;' : '&#9660;';
    render(sortSelect.value);
});

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

    if (mode === 'anime') {
        grid.classList.add('lexikon-grid-grouped');

        const groups = {};
        for (const char of CHARACTERS_DATA) {
            const key = char.anime || 'Unbekannt';
            if (!groups[key]) groups[key] = [];
            groups[key].push(char);
        }

        const cmp = (a, b) => sortDir === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
        const sortedAnimes = Object.keys(groups).sort((a, b) => cmp(a, b));

        for (const animeName of sortedAnimes) {
            const section = document.createElement('div');
            section.className = 'lexikon-group';

            const heading = document.createElement('h2');
            heading.className = 'lexikon-group-heading';
            heading.textContent = animeName;
            section.appendChild(heading);

            const cards = document.createElement('div');
            cards.className = 'lexikon-group-cards';

            const sortedChars = groups[animeName].sort((a, b) => cmp(a.name, b.name));
            for (const char of sortedChars) {
                cards.appendChild(buildCard(char));
            }

            section.appendChild(cards);
            grid.appendChild(section);
        }
    } else if (mode === 'alphabet'){
        grid.classList.remove('lexikon-grid-grouped');

        const sorted = [...CHARACTERS_DATA].sort((a, b) =>
            sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
        for (const char of sorted) {
            grid.appendChild(buildCard(char));
        }
    } else if (mode === 'height') {
        grid.classList.remove('lexikon-grid-grouped');

        const sorted = [...CHARACTERS_DATA].sort((a, b) =>
            sortDir === 'asc' ? a.height - b.height : b.height - a.height
        );
        for (const char of sorted) {
            grid.appendChild(buildCard(char));
        }
    } else if (mode === 'age') {
        grid.classList.remove('lexikon-grid-grouped');

        const sorted = [...CHARACTERS_DATA].sort((a, b) =>
            sortDir === 'asc' ? a.age - b.age : b.age - a.age
        );
        for (const char of sorted) {
            grid.appendChild(buildCard(char));
        }
    }
}

sortSelect.addEventListener('change', () => render(sortSelect.value));

render('alphabet');

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
