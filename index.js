const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let win = record.find(x => x.result === "W")
  return !!win? win.year : undefined
}