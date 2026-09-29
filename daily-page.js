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
DailyChallenge.STEPS.forEach((step, index) => {
    const row = document.createElement('div');
    row.className = `daily-progress-row${results[step] ? ' complete' : ''}`;

    const number = document.createElement('span');
    number.className = 'daily-step-number';
    number.textContent = results[step] ? '✓' : String(index + 1);

    const label = document.createElement('span');
    label.className = 'daily-step-label';
    label.textContent = DailyChallenge.LABELS[step];

    const status = document.createElement('span');
    status.className = 'daily-step-status';
    status.textContent = results[step] ? 'Erledigt' : step === nextStep ? 'Als Nächstes' : 'Gesperrt';

    row.append(number, label, status);
    progress.appendChild(row);
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
