const grid = document.getElementById('lexikon-grid');
const sorted = [...CHARACTERS_DATA].sort((a, b) => a.name.localeCompare(b.name));

document.getElementById('lexikon-count').textContent = `${sorted.length} characters`;

sorted.forEach((char, i) => {
    const card = document.createElement('div');
    card.className = 'lexikon-card';
    card.innerHTML = `
        <img src="${char.image}" alt="${char.name}" loading="lazy">
        <span class="lexikon-name">${char.name}</span>
    `;
    card.addEventListener('click', () => openModal(char));
    grid.appendChild(card);
});

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
