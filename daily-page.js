DailyChallenge.syncExistingAnidle();

const results = DailyChallenge.getResults();
const nextStep = DailyChallenge.getNextStep();
const date = new Date(`${DailyChallenge.getDateKey()}T12:00:00`);

document.getElementById('daily-date').textContent = new Intl.DateTimeFormat('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
}).format(date);

const progress = document.getElementById('daily-progress');

function addResultLine(panel, label, value) {
    const line = document.createElement('div');
    line.className = 'daily-result-line';

    const labelElement = document.createElement('span');
    labelElement.className = 'daily-result-label';
    labelElement.textContent = label;

    const valueElement = document.createElement('span');
    valueElement.className = 'daily-result-value';
    valueElement.textContent = value;

    line.append(labelElement, valueElement);
    panel.appendChild(line);
}

function buildResultPanel(step, result) {
    const panel = document.createElement('div');
    panel.className = 'daily-result-panel';
    panel.hidden = true;

    if (step === 'classic') {
        result.ranking.forEach((name, index) => addResultLine(panel, `#${index + 1}`, name));
    } else if (step === 'kmk') {
        addResultLine(panel, 'Kiss', result.kiss);
        addResultLine(panel, 'Marry', result.marry);
        addResultLine(panel, 'Kill', result.kill);
    } else if (step === 'top10') {
        result.ranking.forEach((name, index) => addResultLine(panel, `#${index + 1}`, name));
    } else if (step === 'anidle') {
        addResultLine(panel, 'Versuche', `${result.tries} ${result.tries === 1 ? 'Try' : 'Tries'}`);
    }

    return panel;
}

DailyChallenge.STEPS.forEach((step, index) => {
    const row = document.createElement('div');
    row.className = `daily-progress-row${results[step] ? ' complete' : ''}`;

    const number = document.createElement('span');
    number.className = 'daily-step-number';
    number.textContent = results[step] ? '✓' : String(index + 1);

    const label = document.createElement(results[step] ? 'button' : 'span');
    label.className = `daily-step-label${results[step] ? ' daily-result-trigger' : ''}`;
    label.textContent = DailyChallenge.LABELS[step];

    const status = document.createElement('span');
    status.className = 'daily-step-status';
    status.textContent = results[step] ? 'Erledigt' : step === nextStep ? 'Als Nächstes' : 'Gesperrt';

    row.append(number, label, status);

    if (results[step]) {
        const panel = buildResultPanel(step, results[step]);
        label.type = 'button';
        label.setAttribute('aria-expanded', 'false');
        label.addEventListener('click', () => {
            const isOpen = !panel.hidden;
            panel.hidden = isOpen;
            label.classList.toggle('expanded', !isOpen);
            label.setAttribute('aria-expanded', String(!isOpen));
        });
        progress.append(row, panel);
    } else {
        progress.appendChild(row);
    }
});

const startLink = document.getElementById('daily-start-link');
const startButton = document.getElementById('daily-start-btn');
const copyButton = document.getElementById('daily-copy-all');

if (nextStep) {
    startLink.href = DailyChallenge.URLS[nextStep];
    startButton.textContent = nextStep === 'classic' ? 'Daily starten' : 'Daily fortsetzen';
} else {
    startLink.style.display = 'none';
    copyButton.style.display = '';
}

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(DailyChallenge.formatShareText()).then(() => {
        const original = copyButton.textContent;
        copyButton.textContent = 'Kopiert';
        copyButton.classList.add('copied');
        setTimeout(() => {
            copyButton.textContent = original;
            copyButton.classList.remove('copied');
        }, 2000);
    });
});
