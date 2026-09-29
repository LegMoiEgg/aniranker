const DailyChallenge = (() => {
    const STEPS = ['classic', 'kmk', 'top10', 'anidle'];
    const URLS = {
        classic: 'classic.html?mode=daily',
        kmk: 'kmk.html?mode=daily',
        top10: 'top10.html?mode=daily',
        anidle: 'anidle.html?mode=daily&flow=1'
    };
    const LABELS = {
        classic: 'Classic',
        kmk: 'Kiss · Marry · Kill',
        top10: 'Top 10',
        anidle: 'Anidle'
    };

    function getDateKey() {
        const date = new Date();
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function isDailyMode() {
        return new URLSearchParams(window.location.search).get('mode') === 'daily';
    }

    function stateKey(baseKey) {
        return isDailyMode() ? `${baseKey}_daily_${getDateKey()}` : baseKey;
    }

    function createRandom(namespace) {
        const value = `${getDateKey()}:${namespace}`;
        let seed = 2166136261;
        for (let index = 0; index < value.length; index++) {
            seed ^= value.charCodeAt(index);
            seed = Math.imul(seed, 16777619);
        }

        return () => {
            seed += 0x6D2B79F5;
            let result = seed;
            result = Math.imul(result ^ result >>> 15, result | 1);
            result ^= result + Math.imul(result ^ result >>> 7, result | 61);
            return ((result ^ result >>> 14) >>> 0) / 4294967296;
        };
    }

    function shuffle(items, namespace) {
        const shuffled = [...items];
        const random = createRandom(namespace);
        for (let index = shuffled.length - 1; index > 0; index--) {
            const target = Math.floor(random() * (index + 1));
            [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
        }
        return shuffled;
    }

    function resultsKey() {
        return `aniranker_daily_results_${getDateKey()}`;
    }

    function getResults() {
        try {
            return JSON.parse(localStorage.getItem(resultsKey())) || {};
        } catch (error) {
            return {};
        }
    }

    function complete(mode, result) {
        if (!isDailyMode() || !STEPS.includes(mode)) return;
        const results = getResults();
        results[mode] = result;
        localStorage.setItem(resultsKey(), JSON.stringify(results));
    }

    function syncExistingAnidle() {
        try {
            const state = JSON.parse(localStorage.getItem(`anidle_daily_${getDateKey()}`));
            if (state && state.won) {
                const results = getResults();
                if (!results.anidle) {
                    results.anidle = { tries: state.guessCount };
                    localStorage.setItem(resultsKey(), JSON.stringify(results));
                }
            }
        } catch (error) {}
    }

    function getNextStep() {
        syncExistingAnidle();
        const results = getResults();
        return STEPS.find(step => !results[step]) || null;
    }

    function isComplete() {
        return getNextStep() === null;
    }

    function showNextButton(mode, container) {
        if (!isDailyMode()) return;
        const currentIndex = STEPS.indexOf(mode);
        const nextStep = STEPS[currentIndex + 1];
        const link = document.createElement('a');
        link.className = container ? 'daily-next-inline' : 'daily-next-link';
        link.href = nextStep ? URLS[nextStep] : 'daily.html';

        const button = document.createElement('button');
        button.id = 'daily-next-btn';
        button.textContent = nextStep ? `Weiter zu ${LABELS[nextStep]}` : 'Daily Ergebnis';
        link.appendChild(button);
        (container || document.body).appendChild(link);
    }

    function formatShareText() {
        syncExistingAnidle();
        const results = getResults();
        if (!STEPS.every(step => results[step])) return '';

        const classic = results.classic.ranking.map((name, index) => `${index + 1} ${name}`).join(' › ');
        const kmk = results.kmk;
        const top10 = results.top10.ranking.map((name, index) => `${index + 1} ${name}`).join(' › ');
        const tries = results.anidle.tries;

        return [
            `AniRanker Daily · ${getDateKey()}`,
            `🏆 ${classic}`,
            `💋 ${kmk.kiss} · 💍 ${kmk.marry} · 💀 ${kmk.kill}`,
            `🔟 ${top10}`,
            `🎯 Anidle: ${tries} ${tries === 1 ? 'Try' : 'Tries'}`,
            'https://anirankergg.vercel.app/daily.html'
        ].join('\n');
    }

    return {
        STEPS,
        URLS,
        LABELS,
        getDateKey,
        isDailyMode,
        stateKey,
        shuffle,
        getResults,
        complete,
        syncExistingAnidle,
        getNextStep,
        isComplete,
        showNextButton,
        formatShareText
    };
})();
