// ============================================================
//  ACHIEVEMENT DEFINITIONS
//  Neue Achievements einfach hier unten hinzufügen.
//  Felder: id (einzigartig!), icon (Emoji), title, desc
// ============================================================
const ACHIEVEMENTS = [
  {
    id: 'first_classic',
    icon: '🏆',
    title: 'First Steps',
    desc: 'Complete your first Classic ranking'
  },
  {
    id: 'quintessential',
    icon: '🌸',
    title: 'Quintessential',
    desc: 'Rank 5 Quintuplet characters in a single Classic'
  },
  {
    id: 'first_kmk',
    icon: '💋',
    title: 'Decisions, Decisions',
    desc: 'Complete your first Kiss · Marry · Kill'
  },
  {
    id: 'first_tot',
    icon: '⚡',
    title: 'Fight!',
    desc: 'Complete your first This or That'
  },
  {
    id: 'first_top10',
    icon: '📋',
    title: 'The List',
    desc: 'Build your first Top 10'
  },
  {
    id: 'first_anidle',
    icon: '📅',
    title: 'Wer bin ich?',
    desc: 'Complete your first Anidle round'
  },
  {
    id: 'anidle_first_try',
    icon: '🎯',
    title: 'First Try!',
    desc: 'Guess the character correctly on the very first attempt in Anidle'
  },
  {
    id: 'anidle_all_hints',
    icon: '🆘',
    title: 'Desperate Measures',
    desc: 'Guess correctly after all 3 hints have been revealed'
  },
  {
    id: 'all_alya',
    icon: '🇷🇺',
    title: 'Privet!',
    desc: 'Rank all Alya Sometimes Hides Her Feelings in Russian characters in one Classic'
  },
  {
    id: 'all_csm',
    icon: '🪚',
    title: 'Power, Power, Power!',
    desc: 'Rank all Chainsaw Man characters in one Classic'
  },
  {
    id: 'not_human',
    icon: '👾',
    title: 'Das ist kein Mensch.',
    desc: 'Rank 5 non-human characters in a single Classic'
  },
  {
    id: 'classic_alphabetical',
    icon: '🔢',
    title: 'Alphabetical Order',
    desc: 'Place all 5 characters in alphabetical order from slot 1 to 5'
  },
  {
    id: 'classic_same_anime',
    icon: '👯',
    title: 'Same Wavelength',
    desc: 'Rank 5 characters all from the same anime in one Classic'
  },
  {
    id: 'lobster_1',
    icon: '🦞',
    title: 'Lobster Supremacy',
    desc: 'Place Lobster in slot 1'
  },
  {
    id: 'cheese_1',
    icon: '🧀',
    title: 'Cheese Enjoyer',
    desc: 'Place Biggie Cheese in slot 1'
  },
  {
    id: 'all_umamusume',
    icon: '🐴',
    title: 'Uma Musume Fan',
    desc: 'Rank all Uma Musume characters in one Classic'
  },
  {
    id: 'not_a_girl',
    icon: '👨',
    title: 'Not a Girl?!',
    desc: 'Rank 5 male characters in a single Classic'
  },
  {
    id: 'hair_blonde',
    icon: '👱',
    title: 'Brilliant Blonde',
    desc: 'Rank 5 blonde characters in a single Classic'
  },
  {
    id: 'hair_blue',
    icon: '💧',
    title: 'Beautiful Blue',
    desc: 'Rank 5 blue-haired characters in a single Classic'
  },
  {
    id: 'hair_pink',
    icon: '🌸',
    title: 'Pretty Pink',
    desc: 'Rank 5 pink-haired characters in a single Classic'
  },
  {
    id: 'hair_black',
    icon: '⬛',
    title: 'Bold Black',
    desc: 'Rank 5 black-haired characters in a single Classic'
  },
  {
    id: 'hair_brown',
    icon: '🫔',
    title: 'Breathtaking Brown',
    desc: 'Rank 5 brown-haired characters in a single Classic'
  },
  {
    id: 'kmk_same_anime',
    icon: '🤝',
    title: 'Consistency',
    desc: 'Get 3 characters from the same anime in one Kiss · Marry · Kill'
  },
  {
    id: 'kmk_lobster_kill',
    icon: '🦞',
    title: 'Poor Lobster',
    desc: 'Kill Lobster in Kiss · Marry · Kill'
  },
  {
    id: 'tot_flawless',
    icon: '💎',
    title: 'Flawless',
    desc: 'Champion wins all 10 duels in This or That without ever losing'
  },
  {
    id: 'anidle_no_hints',
    icon: '🧠',
    title: 'No Hints Needed',
    desc: 'Guess the character correctly within 4 tries (before any hint unlocks)'
  },
  {
    id: 'anidle_streak',
    icon: '🔥',
    title: 'On a Roll',
    desc: 'Complete Anidle Daily correctly 3 days in a row'
  },
  {
    id: 'anidle_last_man',
    icon: '🧩',
    title: 'Last Man Standing',
    desc: 'Guess the Anidle character when it was the very last one remaining'
  },
  {
    id: 'ach_hunter',
    icon: '🏅',
    title: 'Achievement Hunter',
    desc: 'Unlock 10 achievements'
  },
  {
    id: 'loremaster',
    icon: '📖',
    title: 'Loremaster',
    desc: "Open every character's profile in the Lexikon"
  },
  {
    id: 'shadow_garden',
    icon: '🌑',
    title: 'Shadow Garden',
    desc: "Rank 5 characters from Eminence in Shadow in a single Classic"
  }
];

// ============================================================
//  CORE LOGIC – nichts hier ändern
// ============================================================
const ACH_LS_KEY = 'aniranker_achievements';

function achGetUnlocked() {
  try {
    return JSON.parse(localStorage.getItem(ACH_LS_KEY)) || [];
  } catch {
    return [];
  }
}

function achIsUnlocked(id) {
  return achGetUnlocked().includes(id);
}

/**
 * Schaltet ein Achievement frei.
 * Wenn es noch nicht freigeschaltet war, wird ein Popup angezeigt.
 * @param {string} id – muss einer der IDs aus ACHIEVEMENTS entsprechen
 */
function unlockAchievement(id) {
  if (achIsUnlocked(id)) return;
  const achievement = ACHIEVEMENTS.find(a => a.id === id);
  if (!achievement) return;

  const unlocked = achGetUnlocked();
  unlocked.push(id);
  localStorage.setItem(ACH_LS_KEY, JSON.stringify(unlocked));

  showAchievementPopup(achievement);

  // Meta: Achievement Hunter – fires wenn 10 Achievements gesammelt
  if (id !== 'ach_hunter' && unlocked.length >= 10) {
    setTimeout(() => unlockAchievement('ach_hunter'), 5500);
  }
}

// ============================================================
//  POPUP
// ============================================================
function showAchievementPopup(achievement) {
  // Sicherstellen, dass nicht mehrere Popups gleichzeitig laufen
  const existing = document.querySelector('.achievement-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.className = 'achievement-popup';
  popup.innerHTML = `
    <div class="achievement-popup-inner">
      <div class="achievement-popup-label">✨ Achievement Unlocked!</div>
      <div class="achievement-popup-icon">${achievement.icon}</div>
      <div class="achievement-popup-title">${achievement.title}</div>
      <div class="achievement-popup-desc">${achievement.desc}</div>
    </div>
  `;
  document.body.appendChild(popup);

  // Klick schließt Popup früher
  popup.addEventListener('click', () => dismissPopup(popup));

  // Animation starten (zwei rAF damit CSS-Transition greift)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    popup.classList.add('achievement-popup--show');
  }));

  // Auto-dismiss nach 4,5 Sekunden
  const timer = setTimeout(() => dismissPopup(popup), 4500);
  popup._dismissTimer = timer;
}

function dismissPopup(popup) {
  clearTimeout(popup._dismissTimer);
  popup.classList.remove('achievement-popup--show');
  popup.classList.add('achievement-popup--hide');
  setTimeout(() => popup.remove(), 600);
}
