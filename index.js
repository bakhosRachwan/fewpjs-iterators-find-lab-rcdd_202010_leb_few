const testVar = {}

function testFunc() {
  return "hi"
}

const superBowlWin = (record) => {
  let win = record.find(x => {
    return x.result === "W"
  })
  return !!win? win.year : undefined
}