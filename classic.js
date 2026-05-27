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

let pool = [];
let currentIndex = 0;
let currentImage = null;
let gameRunning = false;
let slotImageSrcs = [null, null, null, null, null];

const slotsDiv = document.getElementById("slots");
const imageContainer = document.getElementById("image-container");
const startBtn = document.getElementById("startBtn");

let slots = [];

// Slots erstellen
for (let i = 0; i < 5; i++) {
    const slot = document.createElement("div");
    slot.className = "slot";

    const box = document.createElement("div");
    box.className = "box";

    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.disabled = true;

    btn.addEventListener("click", () => placeImage(i));

    slot.appendChild(box);
    slot.appendChild(btn);
    slotsDiv.appendChild(slot);

    slots.push({ box, btn });
}

// State management
function saveClassicState() {
    try {
        localStorage.setItem('classic_state', JSON.stringify({
            pool: pool,
            currentIndex: currentIndex,
            slotImageSrcs: slotImageSrcs,
            slotDisabled: slots.map(s => s.btn.disabled),
            gameRunning: gameRunning,
        }));
    } catch (e) {}
}

function clearClassicState() {
    try { localStorage.removeItem('classic_state'); } catch (e) {}
}

// Start Button
startBtn.addEventListener("click", () => {
    if (!gameRunning) {
        startGame();
    } else {
        resetGame();
    }
});

function startGame() {
    pool = [...images].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    slotImageSrcs = [null, null, null, null, null];
    gameRunning = true;

    slots.forEach(s => {
        s.btn.disabled = false;
        s.box.innerHTML = "";
    });

    startBtn.textContent = "Restart";
    startBtn.disabled = true;

    spawn();
    saveClassicState();
}

function spawn() {
    imageContainer.innerHTML = "";

    if (currentIndex >= pool.length) return;

    const img = document.createElement("img");
    img.src = pool[currentIndex++];
    currentImage = img;

    imageContainer.appendChild(img);
}

function placeImage(index) {
    const slot = slots[index];

    slotImageSrcs[index] = pool[currentIndex - 1];
    slot.box.innerHTML = "";
    slot.box.appendChild(currentImage);
    slot.btn.disabled = true;

    const allUsed = slots.every(s => s.btn.disabled);

    if (allUsed) {
        endGame();
    } else {
        spawn();
    }
    saveClassicState();
}

function endGame() {
    imageContainer.innerHTML = "";
    gameRunning = false;
    startBtn.disabled = false;
}

function resetGame() {
    imageContainer.innerHTML = "";

    slots.forEach(s => {
        s.box.innerHTML = "";
        s.btn.disabled = true;
    });

    slotImageSrcs = [null, null, null, null, null];
    startBtn.textContent = "Start";
    gameRunning = false;
    clearClassicState();
}

// Restore state on page load
(function () {
    try {
        const raw = localStorage.getItem('classic_state');
        if (!raw) return;
        const state = JSON.parse(raw);
        if (!state.pool || !state.pool.length) return;

        pool = state.pool;
        currentIndex = state.currentIndex;
        slotImageSrcs = state.slotImageSrcs || [null, null, null, null, null];
        gameRunning = state.gameRunning;

        slots.forEach((s, i) => {
            s.btn.disabled = state.slotDisabled[i];
            if (slotImageSrcs[i]) {
                const img = document.createElement('img');
                img.src = slotImageSrcs[i];
                s.box.innerHTML = '';
                s.box.appendChild(img);
            }
        });

        if (gameRunning && currentIndex > 0) {
            const img = document.createElement('img');
            img.src = pool[currentIndex - 1];
            currentImage = img;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        }

        startBtn.textContent = 'Restart';
        startBtn.disabled = gameRunning;
    } catch (e) {}
})();