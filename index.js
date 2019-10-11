const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin() = function(arr) {
  let winningGame = arr.find(game => game.result === "W");
  return winningGame.year;
}
