const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  array.forEach(e=>{
    if(e.result == "W") return e.year;
  })
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]
    
superbowlWin(record);