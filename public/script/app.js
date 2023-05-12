const caseContainer = document.querySelector(".case-container");
const slider = document.querySelector(".settings__slider");
const textSlider = document.querySelector(".settings__value");
const caseSlot1 = document.querySelector("#case-slot1");
const caseSlot2 = document.querySelector("#case-slot2");
const caseSlot3 = document.querySelector("#case-slot3");
const caseSlot4 = document.querySelector("#case-slot4");
const caseSlot5 = document.querySelector("#case-slot5");
const caseSlot6 = document.querySelector("#case-slot6");
const caseSlot7 = document.querySelector("#case-slot7");
const caseSlot8 = document.querySelector("#case-slot8");
const caseSlot9 = document.querySelector("#case-slot9");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

let defaultItems = [
    getImageItem("knife1", "png"),
    getImageItem("knife2", "png"),
    getImageItem("knife3", "png"),
    getImageItem("knife4", "png"),
    getImageItem("weapon1", "png"),
    getImageItem("weapon2", "webp"),
    getImageItem("weapon3", "png"),
    getImageItem("weapon4", "png"),
    getImageItem("weapon5", "png"),
    getImageItem("weapon6", "png"),
    getImageItem("weapon7", "webp"),
    getImageItem("weapon8", "png"),
    getImageItem("weapon9", "png"),

    "NIC",
    "0.25$",
    "100$",
    "5$"
];
let items = [];
let speed = 1;
let running = false;
let soundVolume = 50;
const durationWinSound = 2500;


button.addEventListener("click", () => {
    if(running) {
        return;
    }
    setDefault();
    run();
});

if(slider) {
    slider.oninput = function() {
        soundVolume = slider.value;
        textSlider.textContent = `Volume: ${slider.value}`;
    }
}


function setDefault() {
    speed = 10;
    items = [];

    for(i = 1; i <= 9; i++) {
        item = defaultItems[i-1];
        items.push(item);
        this.setItem(i, item);
    }
}

function setItems() {
    for(i = 1; i <= 9; i++) {
        this.setItem(i, items[i-1]);
    }
}

function refresh() {
    if(items.length > 0) {
        items.shift();
    }

    item = defaultItems[Math.floor(Math.random() * defaultItems.length)];

    items.push(item);
    this.setItem(items.length, item);
    setItems();
    run();
}

function run() {
    setTimeout(() => {
        h1.innerHTML = "Trwa Losowanie...";
        running = true;
        
        speed += 7;

        if(speed >= 300) {
            end();
            return;
        } 

        refresh();
        playSound("./sounds/caseOpenning.mp3");
    }, speed);
}

function end() {
    let winItem = items[4];
    setTimeout(() => {running = false}, durationWinSound);
    h1.innerHTML = "Wygrales " + winItem;
    playSound("./sounds/win.mp3");
}

function setItem(slot, item) {
    switch(slot) {
        case 1:
            caseSlot1.innerHTML = item;
        break;

        case 2:
            caseSlot2.innerHTML = item;
        break;

        case 3:
            caseSlot3.innerHTML = item;
        break;

        case 4:
            caseSlot4.innerHTML = item;
        break;

        case 5:
            caseSlot5.innerHTML = item;
        break;

        case 6:
            caseSlot6.innerHTML = item;
        break;

        case 7:
            caseSlot7.innerHTML = item;
        break;

        case 8:
            caseSlot8.innerHTML = item;
        break;

        case 9:
            caseSlot9.innerHTML = item;
        break;
            
    }

}

function playSound(soundName) {
    let audio = new Audio(soundName);
    audio.volume = soundVolume / 100;
    audio.play();
}

function getImageItem(itemName, type) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let imageWidth = "100px";

    if (isMobile) {
        imageWidth = "50px";
    }
   
    return '<img src=./images/items/'+itemName+'.'+type+' alt="" width="'+imageWidth+'">';
}