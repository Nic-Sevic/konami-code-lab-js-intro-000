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
  const body = document.querySelector('body') body.addEventListener('keydown', function(event))
  body.addEventListener('keydown',function(e){onKeyDown()})

  let index = 0

  function onKeyDown(e) {
    const key = e.key
    if (key === codes[index]) {
      index++
    }
    if (index === codes.length) {
      alert('Game Unlocked')
      index = 0
    }
    else {
      alert('failure')
      index = 0
    }
  }
}
