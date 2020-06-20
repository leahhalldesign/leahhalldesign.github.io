document.addEventListener('keydown', logKey);
let keyArr = {
  'a': 0,
  's': 0,
  'd': 0,
  'f': 0,
  'g': 0,
  'h': 0,
  'j': 0,
  'k': 0,
  'l': 0,
};


function logKey(e) {
let dKey =document.querySelector(`audio[data-key="${e.keyCode}"]`)
let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
console.log(dKey.getAttribute('src'));
dKey.pause();
dKey.currentTime = 0;
dKey.play();
console.dir(dKey.play());


key.classList.add('playing');
// audio.play();

dKey.addEventListener('ended', (event) => {
    // console.log('end of file')
    key.classList.remove('playing');
})

const keys = Array.from(document.querySelectorAll('.key'));


let button = keyArr[e.key]

if(button >= 100)  {
  keyArr[e.key] = 0;
} else {
  keyArr[e.key] += 10;
}

key.style.transform = `translateY(${keyArr[e.key]}px)`
}