const testVar = {}

function testFunc() {
  return "hi"
}

const superBowlWin = (record) => {
  return record.find(x => {
    return x.result === "W"
  }).year
}