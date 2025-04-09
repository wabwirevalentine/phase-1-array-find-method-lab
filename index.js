// code your solution here
function superbowlWin(record) {
  const winningRecord = record.find((game) => game.result === "W");
  return winningRecord ? winningRecord.year : undefined;
}
