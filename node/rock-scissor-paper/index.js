/**
 * node 石头剪刀布游戏
 * use {node file path rock} to run
 */

// env
// console.log(__filename);
// console.log(__dirname);
// console.log(process);

var playerAction = process.argv[process.argv.length - 1];

var random = Math.random() * 3;

if (random < 1) {
  var computerAction = "rock";
} else if (random > 2) {
  var computerAction = "scissor";
} else {
  var computerAction = "paper";
}

if (computerAction === playerAction) {
  console.log("平局");
} else if (
  (computerAction === "rock" && playerAction === "paper") ||
  (computerAction === "scissor" && playerAction === "rock") ||
  (computerAction === "paper" && playerAction === "scissor")
) {
  console.log("you win");
} else {
  console.log("you fail");
}
