const images = [
    "assets/images/akiadagaki.png",
    "assets/images/albedo.png",
    "assets/images/alpha.png",
    "assets/images/alyakujou.png",
    "assets/images/astolfo.png",
    "assets/images/Asuka_Langley_Soryu.PNG",
    "assets/images/asunayuuki.png",
    "assets/images/Ayame.png",
    "assets/images/ayano.png",
    "assets/images/ayukawa.png",
    "assets/images/beatrice.png",
    "assets/images/beatrix.jpg",
    "assets/images/biggiecheese.png",
    "assets/images/bigmom.png",
    "assets/images/blakeBelladonna.jpg",
    "assets/images/bridget.png",
    "assets/images/burnice.png",
    "assets/images/canari.png",
    "assets/images/chelsea.png",
    "assets/images/chika.png",
    "assets/images/chinatsu.png",
    "assets/images/cynthia.png",
    "assets/images/ceasarzzz.png",
    "assets/images/darkness.png",
    "assets/images/delta.png",
    "assets/images/emilia.png",
    "assets/images/enigmara.png",
    "assets/images/epsilon.png",
    "assets/images/erzascarlet.png",
    "assets/images/felix.png",
    "assets/images/fern.png",
    "assets/images/flamme.png",
    "assets/images/fubuki.png",
    "assets/images/frieren.png",
    "assets/images/guardevoir.png",
    "assets/images/haku.png",
    "assets/images/haru.png",
    "assets/images/hatsunemiku.png",
    "assets/images/hideyoshi.png",
    "assets/images/himari.png",
    "assets/images/hinatahyuga.png",
    "assets/images/historia.png",
    "assets/images/holo.png",
    "assets/images/hori.png",
    "assets/images/ichika.jpg",
    "assets/images/ino.png",
    "assets/images/iris.jpg",
    "assets/images/itsuki.jpg",
    "assets/images/Kaguya.png",
    "assets/images/Kana.png",
    "assets/images/karaneinda.png",
    "assets/images/kasaneTeto.png",
    "assets/images/kasumi.png",
    "assets/images/keikaruizawa.png",
    "assets/images/kirara.png",
    "assets/images/kohakuStone.png",
    "assets/images/kuina.png",
    "assets/images/kurisu.png",
    "assets/images/leafa.png",
    "assets/images/leone.png",
    "assets/images/les.png",
    "assets/images/luckycyan.png",
    "assets/images/lucoa.png",
    "assets/images/lucy.png",
    "assets/images/lucyft.png",
    "assets/images/maisakurajima.png",
    "assets/images/makima.png",
    "assets/images/maomao.png",
    "assets/images/marinkitagawa.png",
    "assets/images/maruzensky.png",
    "assets/images/masha.png",
    "assets/images/matiere.jpg",
    "assets/images/mavuika.png",
    "assets/images/merlin.png",
    "assets/images/mikasa.png",
    "assets/images/miko.png",
    "assets/images/mikunakano.png",
    "assets/images/mirko.png",
    "assets/images/misa.jpg",
    "assets/images/mistao.png",
    "assets/images/momo.png",
    "assets/images/mona.png",
    "assets/images/mtlady.png",
    "assets/images/nagisa.png",
    "assets/images/najimi.jpg",
    "assets/images/nami.png",
    "assets/images/nanase.png",
    "assets/images/nazuna.png",
    "assets/images/ninonakano.png",
    "assets/images/nobara.png",
    "assets/images/noreason.png",
    "assets/images/nowa.png",
    "assets/images/osaragi.png",
    "assets/images/ouka.png",
    "assets/images/pencilgon.png",
    "assets/images/Power.png",
    "assets/images/queen.png",
    "assets/images/raihauesugi.png",
    "assets/images/rebecca.png",
    "assets/images/rem.png",
    "assets/images/Reze.png",
    "assets/images/rias.png",
    "assets/images/rintohsaka.png",
    "assets/images/ritsuko.png",
    "assets/images/riyoreaper.png",
    "assets/images/revy.jpg",
    "assets/images/rory.png",
    "assets/images/rubyRose.jpg",
    "assets/images/rukia.png",
    "assets/images/saber.png",
    "assets/images/nicorobin.png",
    "assets/images/serie.png",
    "assets/images/shuna.png",
    "assets/images/shuri.png",
    "assets/images/sonico.png",
    "assets/images/suzuki.png",
    "assets/images/sylpha.png",
    "assets/images/tayuya.jpg",
    "assets/images/temari.png",
    "assets/images/tatsumaki.png",
    "assets/images/totsuka.png",
    "assets/images/TukaLuna.png",
    "assets/images/ubel.png",
    "assets/images/uzaki.png",
    "assets/images/vladilena.png",
    "assets/images/vivi.jpg",
    "assets/images/waguri.png",
    "assets/images/mitsuri.png",
    "assets/images/weissSchnee.png",
    "assets/images/yang.png",
    "assets/images/yamato.jpg",
    "assets/images/YorForger.png",
    "assets/images/yotsuba.png",
    "assets/images/yuiyuigahama.png",
    "assets/images/yuki.png",
    "assets/images/yukihori.png",
    "assets/images/yukiyukinoshita.png",
    "assets/images/yuuko.png",
    "assets/images/yuuamami.png",
    "assets/images/yuzuriha.png",
    "assets/images/zerotwo.png",
    "assets/images/zorro.png",
    "assets/images/cc.png",
    "assets/images/chitoseamane.png",
    "assets/images/hinachono.png",
    "assets/images/irohaisshiki.png",
    "assets/images/kobeni.png",
    "assets/images/megumin.png",
    "assets/images/mikoiino.png",
    "assets/images/shion.png",
    "assets/images/umiasanagi.jpg",
    "assets/images/aihoshino.png",
    "assets/images/akaneousaki.png",
    "assets/images/cpkIroha.png",
    "assets/images/cpkKaguya.png",
    "assets/images/cpkNoi.png",
    "assets/images/cpkYachiyo.png",
    "assets/images/elfariaalbisserfort.png",
    "assets/images/erinanakiri.png",
    "assets/images/hikarihoshimiya.png",
    "assets/images/horikitasuzune.png",
    "assets/images/koyukihikawa.png",
    "assets/images/mikiazumi.png",
    "assets/images/miorimotomiya.png",
    "assets/images/mikusakura.png",
    "assets/images/poemukohinata.png",
    "assets/images/rubyhoshino.png",
    "assets/images/yamatonadeshiko.png",
    "assets/images/yuroichishihouin.png",
];

let choices = ["kiss","marry","kill"];
let used = [];
let cardImages = [];
let cardChoices = [null, null, null];
let gameRunning = false;

// State management
function saveKMKState() {
    try {
        localStorage.setItem('kmk_state', JSON.stringify({
            cardImages: cardImages,
            cardChoices: cardChoices,
            used: used,
            gameRunning: gameRunning,
        }));
    } catch (e) {}
}

function clearKMKState() {
    try { localStorage.removeItem('kmk_state'); } catch (e) {}
}

const container = document.getElementById("kmk-container");
const startBtn = document.getElementById("kmkStartBtn");

const cards = document.querySelectorAll(".kmk-card");

// Alle Buttons beim Laden deaktivieren
document.querySelectorAll(".kmk-buttons button").forEach(b => b.disabled = true);

// Button Event
startBtn.addEventListener("click", () => {
    if (!gameRunning) {
        startKMK();
    } else {
        resetKMK();
    }
});

function setupCards(imgSrcs, existingChoices) {
    cards.forEach((card, index) => {
        const box = card.querySelector(".kmk-box");
        const btns = card.querySelectorAll("button");

        box.innerHTML = "";
        box.classList.remove("kiss", "marry", "kill");

        const img = document.createElement("img");
        img.src = imgSrcs[index];
        box.appendChild(img);

        const choice = existingChoices[index];
        if (choice) {
            box.classList.add(choice);
            btns.forEach(b => b.disabled = true);
        } else {
            btns.forEach(btn => {
                btn.disabled = used.includes(btn.textContent);
                btn.onclick = () => {
                    const c = btn.textContent;
                    if (used.includes(c)) return;
                    used.push(c);
                    box.classList.add(c);
                    btns.forEach(b => b.disabled = true);
                    document.querySelectorAll(".kmk-buttons button").forEach(b => {
                        if (b.textContent === c) b.disabled = true;
                    });
                    cardChoices[index] = c;
                    saveKMKState();
                    if (used.length === 3) endKMK();
                };
            });
        }
    });
}

// START
function startKMK() {
    used = [];
    cardChoices = [null, null, null];
    gameRunning = true;

    cardImages = [...images].sort(() => Math.random() - 0.5).slice(0, 3);
    setupCards(cardImages, cardChoices);

    startBtn.textContent = "Restart";
    startBtn.disabled = true;
    saveKMKState();
}

// ENDE
function endKMK() {
    gameRunning = false;
    startBtn.disabled = false;
    saveKMKState();
}

// RESET
function resetKMK() {
    cards.forEach(card => {
        const box = card.querySelector(".kmk-box");
        const btns = card.querySelectorAll("button");

        box.innerHTML = "";
        box.classList.remove("kiss","marry","kill");

        btns.forEach(b => b.disabled = true);
    });

    cardImages = [];
    cardChoices = [null, null, null];
    used = [];
    startBtn.textContent = "Start";
    gameRunning = false;
    clearKMKState();
}

// Restore state on page load
(function () {
    try {
        const raw = localStorage.getItem('kmk_state');
        if (!raw) return;
        const state = JSON.parse(raw);
        if (!state.cardImages || state.cardImages.length !== 3) return;

        cardImages = state.cardImages;
        cardChoices = state.cardChoices || [null, null, null];
        used = state.used || [];
        gameRunning = state.gameRunning;

        setupCards(cardImages, cardChoices);

        startBtn.textContent = 'Restart';
        startBtn.disabled = gameRunning;
    } catch (e) {}
})();