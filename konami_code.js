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
  const codeCheck = document.body.addEventListener('keydown', function(event))

  let index = 0

  function onKeyDownHandler(e) {
    const key = e.key
    if (key === codes[index]) {
      index++
    }
    if (index === codes.length) {
      alert('Game Unlocked')
      index = 0
    }
    else {
      index = 0
    }
  }
}
