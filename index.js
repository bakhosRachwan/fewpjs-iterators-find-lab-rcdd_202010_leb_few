const testVar = {}

function testFunc() {
  return "hi"
}

const superBowlWin = (record) => {
  return "The KC Chiefs won the superbowl at " + record.find(x => {
    return x.result === "W"
  }).year
}