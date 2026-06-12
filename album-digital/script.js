/* =====================================
ÁLBUM PANINI PERSONALIZADO
PARTE 1
===================================== */

/* ========= PÁGINAS ========= */

const pages = [
"pages/cover.png",
"pages/page1.png",
"pages/page2.png",
"pages/page3.png",
"pages/page4.png",
"pages/page5.png",
"pages/page6.png",
"pages/page7.png",
"pages/page8.png",
"pages/page9.png",
"pages/page10.png",
"pages/page11.png",
"pages/page12.png",
"pages/backcover.png"
];

/* ========= ESCALA ========= */

const ORIGINAL_WIDTH = 1414;
const ORIGINAL_HEIGHT = 2000;

/* ========= VARIABLES ========= */

let currentSpread = 0;

let draggedSticker = null;

let collection =
JSON.parse(
localStorage.getItem("collection")
) || [];

let placedStickers =
JSON.parse(
localStorage.getItem("placedStickers")
) || {};

/* ========= ELEMENTOS ========= */

const leftPage =
document.getElementById(
"leftPage"
);

const rightPage =
document.getElementById(
"rightPage"
);

const leftContainer =
document.getElementById(
"leftContainer"
);

const rightContainer =
document.getElementById(
"rightContainer"
);

const leftSlots =
document.getElementById(
"leftSlots"
);

const rightSlots =
document.getElementById(
"rightSlots"
);

/* ========= ESCALADO ========= */

function scaleSlot(
slot,
container
){

const scaleX =
container.clientWidth /
ORIGINAL_WIDTH;

const scaleY =
container.clientHeight /
ORIGINAL_HEIGHT;

return{

x: slot.x * scaleX,
y: slot.y * scaleY,

w: slot.w * scaleX,
h: slot.h * scaleY

};

}

/* ========= STORAGE ========= */

function saveCollection(){

localStorage.setItem(
"collection",
JSON.stringify(collection)
);

}

function savePlaced(){

localStorage.setItem(
"placedStickers",
JSON.stringify(
placedStickers
)
);

}

/* ========= ESTADÍSTICAS ========= */

function updateStats(){

const counter =
document.getElementById(
"collectedCount"
);

if(counter){

counter.textContent =
collection.length;

}

}

/* ========= PANTALLAS ========= */

function showScreen(
screenId
){

document
.querySelectorAll(".screen")
.forEach(screen => {

screen.classList.remove(
"active"
);

});

document
.getElementById(screenId)
.classList.add(
"active"
);

if(
screenId ===
"albumScreen"
){

renderAlbum();
renderAlbumStickers();

}

if(
screenId ===
"collectionScreen"
){

renderCollection();

}

updateStats();

}

/* ========= NAVEGACIÓN ========= */

function nextPage(){

if(currentSpread < 7){

currentSpread++;

renderAlbum();

}

}

function prevPage(){

if(currentSpread > 0){

currentSpread--;

renderAlbum();

}

}

/* ========= RENDER ÁLBUM ========= */

function renderAlbum(){

if(
currentSpread === 0
){

leftContainer.style.display =
"block";

rightContainer.style.display =
"none";

leftPage.src =
pages[0];

loadPlacedStickers();

return;

}

if(
currentSpread === 7
){

leftContainer.style.display =
"block";

rightContainer.style.display =
"none";

leftPage.src =
pages[13];

loadPlacedStickers();

return;

}

leftContainer.style.display =
"block";

rightContainer.style.display =
"block";

const leftIndex =
(currentSpread * 2) - 1;

const rightIndex =
currentSpread * 2;

leftPage.src =
pages[leftIndex];

rightPage.src =
pages[rightIndex];

loadPlacedStickers();

}
/* =====================================
PARTE 2
SLOTS CORREGIDOS
===================================== */

const slots = {

2:[

{id:1,x:92,y:192,w:536,h:411},
{id:2,x:92,y:603,w:536,h:411},
{id:3,x:735,y:1052,w:538,h:411},
{id:4,x:735,y:1463,w:538,h:411}

],

3:[

{id:5,x:92,y:66,w:405,h:540},
{id:6,x:497,y:66,w:405,h:540},
{id:7,x:917,y:66,w:405,h:540},

{id:8,x:92,y:648,w:405,h:540},
{id:9,x:518,y:648,w:405,h:540},
{id:10,x:923,y:648,w:405,h:540},

{id:11,x:92,y:1230,w:405,h:540},
{id:12,x:505,y:1230,w:405,h:540},
{id:13,x:917,y:1230,w:405,h:540}

],

/* PAGINA 4 BAJADA */

4:[

{id:14,x:74,y:390,w:404,h:540},
{id:15,x:505,y:680,w:404,h:540},
{id:16,x:936,y:390,w:404,h:540},

{id:17,x:74,y:1040,w:404,h:540},
{id:18,x:505,y:1300,w:404,h:540},
{id:19,x:936,y:1040,w:404,h:540}

],

5:[

{id:20,x:74,y:400,w:404,h:540},
{id:21,x:74,y:995,w:404,h:540},

{id:22,x:518,y:516,w:404,h:540},
{id:23,x:518,y:1098,w:404,h:540},

{id:24,x:961,y:604,w:404,h:540},
{id:25,x:961,y:1195,w:404,h:540}

],

6:[

{id:26,x:464,y:472,w:413,h:540},
{id:27,x:877,y:472,w:413,h:540},

{id:28,x:112,y:1162,w:404,h:540},
{id:29,x:516,y:1162,w:404,h:540}

],

/* PAGINA 7
33 + 34 IMAGEN DOBLE */

7:[

{id:30,x:74,y:100,w:404,h:540},
{id:31,x:546,y:100,w:404,h:540},
{id:32,x:944,y:100,w:404,h:540},

{id:33,x:74,y:726,w:438,h:540},
{id:34,x:512,y:726,w:438,h:540},
{id:35,x:945,y:726,w:404,h:540},

{id:36,x:74,y:1352,w:404,h:540},
{id:37,x:546,y:1352,w:404,h:540},
{id:38,x:947,y:1352,w:404,h:540}

],

8:[

{id:39,x:113,y:198,w:404,h:540},
{id:40,x:514,y:198,w:404,h:540},

{id:41,x:471,y:826,w:404,h:540},
{id:42,x:471,y:1366,w:404,h:540},

{id:43,x:875,y:826,w:404,h:540},
{id:44,x:875,y:1366,w:404,h:540}

],

9:[

{id:45,x:303,y:136,w:404,h:540},
{id:46,x:700,y:136,w:404,h:540},

{id:47,x:54,y:720,w:404,h:540},
{id:48,x:505,y:720,w:404,h:540},
{id:49,x:956,y:720,w:404,h:540},

{id:50,x:303,y:1330,w:404,h:540},
{id:51,x:704,y:1330,w:404,h:540}

],

10:[

{id:52,x:262,y:286,w:404,h:540},
{id:53,x:262,y:892,w:404,h:540},

{id:54,x:748,y:554,w:404,h:540},
{id:55,x:748,y:1140,w:404,h:540}

],

11:[

{id:56,x:68,y:134,w:404,h:540},
{id:57,x:504,y:134,w:404,h:540},
{id:58,x:942,y:134,w:404,h:540},

{id:59,x:68,y:734,w:404,h:540},
{id:60,x:504,y:734,w:404,h:540},
{id:61,x:942,y:734,w:404,h:540},

{id:62,x:68,y:1334,w:404,h:540},
{id:63,x:504,y:1334,w:404,h:540},
{id:64,x:942,y:1334,w:404,h:540}

],

12:[

{id:65,x:250,y:396,w:530,h:400},
{id:66,x:680,y:840,w:536,h:411},
{id:67,x:240,y:1160,w:400,h:540}

]

};

/* =====================================
NUMEROS DE ESPACIOS
===================================== */

function renderSlotNumbers(){

const leftPageNumber =
(currentSpread * 2) - 1;

const rightPageNumber =
currentSpread * 2;

/* IZQUIERDA */

if(slots[leftPageNumber]){

slots[leftPageNumber].forEach(slot => {

if(
placedStickers[slot.id]
)
return;

const scaled =
scaleSlot(
slot,
leftContainer
);

const number =
document.createElement(
"div"
);

number.className =
"slot-number";

number.innerHTML =
"#" + slot.id;

number.style.left =
scaled.x + "px";

number.style.top =
scaled.y + "px";

number.style.width =
scaled.w + "px";

number.style.height =
scaled.h + "px";

leftSlots.appendChild(
number
);

});

}

/* DERECHA */

if(slots[rightPageNumber]){

slots[rightPageNumber].forEach(slot => {

if(
placedStickers[slot.id]
)
return;

const scaled =
scaleSlot(
slot,
rightContainer
);

const number =
document.createElement(
"div"
);

number.className =
"slot-number";

number.innerHTML =
"#" + slot.id;

number.style.left =
scaled.x + "px";

number.style.top =
scaled.y + "px";

number.style.width =
scaled.w + "px";

number.style.height =
scaled.h + "px";

rightSlots.appendChild(
number
);

});

}

}
/* =====================================
PARTE 3
SOBRES + COLECCIÓN + PEGADO
===================================== */

/* ========= SOBRES ========= */

const MAX_PACKS_PER_DAY = 4;

function getPackData() {
  return JSON.parse(localStorage.getItem("packData")) || {
    date: "",
    count: 0
  };
}

function savePackData(data) {
  localStorage.setItem("packData", JSON.stringify(data));
}

function openPack(){

const today = new Date().toDateString();
const data = getPackData();

// reinicio diario automático
if(data.date !== today){
data.date = today;
data.count = 0;
savePackData(data);
}

// bloqueo si ya usó los 4
if(data.count >= MAX_PACKS_PER_DAY){
alert("⛔ Ya abriste tus 4 sobres de hoy. Vuelve mañana");
return;
}

const pack =
document.getElementById(
"packResult"
);

if(!pack) return;

pack.innerHTML = "";

const generated = [];

while(generated.length < 5){

const stickerId =
Math.floor(Math.random()*67)+1;

if(
!generated.includes(
stickerId
)
){
generated.push(
stickerId
);
}

}

generated.forEach(stickerId => {

if(
!collection.includes(
stickerId
)
){

collection.push(
stickerId
);

}

const img =
document.createElement(
"img"
);

img.src =
`stickers/${stickerId}.png`;

img.className =
"pack-sticker";

img.draggable =
true;

img.dataset.id =
stickerId;

img.addEventListener(
"dragstart",
dragSticker
);

pack.appendChild(
img
);

});

saveCollection();

renderCollection();

renderAlbumStickers();

updateStats();

// 🔥 registrar uso del sobre
data.count += 1;
data.date = today;
savePackData(data);

alert(`✔ Te quedan ${MAX_PACKS_PER_DAY - data.count} sobres hoy`);

}

/* ========= COLECCIÓN ========= */

function renderCollection(){

const grid =
document.getElementById(
"collectionGrid"
);

if(!grid) return;

grid.innerHTML = "";

collection
.sort((a,b)=>a-b)
.forEach(id => {

const img =
document.createElement(
"img"
);

img.src =
`stickers/${id}.png`;

img.className =
"collection-item";

img.draggable =
true;

img.dataset.id =
id;

img.addEventListener(
"dragstart",
dragSticker
);

grid.appendChild(
img
);

});

}

/* ========= STICKERS DEL ÁLBUM ========= */

function renderAlbumStickers(){

const container =
document.getElementById(
"albumStickers"
);

if(!container) return;

container.innerHTML = "";

collection
.sort((a,b)=>a-b)
.forEach(id => {

if(
placedStickers[id]
)
return;

const wrapper =
document.createElement(
"div"
);

wrapper.className =
"album-sticker-wrapper";

const img =
document.createElement(
"img"
);

img.src =
`stickers/${id}.png`;

img.className =
"collection-item";

img.draggable =
true;

img.dataset.id =
id;

img.addEventListener(
"dragstart",
dragSticker
);

const label =
document.createElement(
"div"
);

label.className =
"sticker-label";

label.textContent =
"#" + id;

wrapper.appendChild(
img
);

wrapper.appendChild(
label
);

container.appendChild(
wrapper
);

});

}

/* ========= DRAG ========= */

function dragSticker(e){

draggedSticker =
parseInt(
e.target.dataset.id
);

}

/* ========= DROP ========= */

function dropSticker(
event,
isLeft
){

if(
!draggedSticker
)
return;

const pageNumber =
isLeft
? ((currentSpread * 2)-1)
: (currentSpread * 2);

if(
!slots[pageNumber]
)
return;

const slot =
slots[pageNumber].find(
s => s.id === draggedSticker
);

if(!slot)
return;

placedStickers[
draggedSticker
] = {

page: pageNumber

};

savePlaced();

loadPlacedStickers();

renderAlbumStickers();

}

/* ========= EVENTOS ========= */

leftContainer.addEventListener(
"dragover",
e => e.preventDefault()
);

rightContainer.addEventListener(
"dragover",
e => e.preventDefault()
);

leftContainer.addEventListener(
"drop",
e => dropSticker(
e,
true
)
);

rightContainer.addEventListener(
"drop",
e => dropSticker(
e,
false
)
);

/* ========= STICKERS PEGADOS ========= */

function loadPlacedStickers(){

leftSlots.innerHTML = "";
rightSlots.innerHTML = "";

const leftPageNumber =
(currentSpread * 2) - 1;

const rightPageNumber =
currentSpread * 2;

/* PRIMERO DIBUJA LOS NÚMEROS */

renderSlotNumbers();

/* DESPUÉS DIBUJA LOS STICKERS */

Object.keys(
placedStickers
).forEach(stickerId => {

const id =
parseInt(
stickerId
);

const info =
placedStickers[id];

const page =
info.page;

if(
!slots[page]
)
return;

const slot =
slots[page].find(
s => s.id === id
);

if(!slot)
return;

let targetLayer;

let targetContainer;

if(
page === leftPageNumber
){

targetLayer =
leftSlots;

targetContainer =
leftContainer;

}
else if(
page === rightPageNumber
){

targetLayer =
rightSlots;

targetContainer =
rightContainer;

}
else{

return;

}

const scaled =
scaleSlot(
slot,
targetContainer
);

const img =
document.createElement(
"img"
);

img.src =
`stickers/${id}.png`;

img.className =
"sticker";

const borderlessStickers = [

1,2,
3,4,
5,6,
9,10,

26,27,
28,29,

31,32,
33,34,

37,38,

39,40,

41,42,43,44,

45,46,

50,51,

65,66,67

];

if(
borderlessStickers.includes(id)
){
img.classList.add(
"double-sticker"
);
}

img.style.left =
scaled.x + "px";

img.style.top =
scaled.y + "px";

img.style.width =
scaled.w + "px";

img.style.height =
scaled.h + "px";

targetLayer.appendChild(
img
);

});

}

/* ========= INICIO ========= */

updateStats();

renderAlbum();

renderCollection();

renderAlbumStickers();