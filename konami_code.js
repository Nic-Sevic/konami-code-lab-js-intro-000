const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const body = document.querySelector('body')
  body.addEventListener('keydown', function(e){
  let index = 0
  let key = e.key
    if (key === codes[index]) {
      index++
    }
    if (index === codes.length) {
      alert('Game Unlocked')
      index = 0
    }
    else {
      index = 0
      continue
    }
  }
})
