const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  array.find(item=> {
    console.log(item.year);
  });
}

    const record = [
      {year: "2018", result: "L"},
      {year: "2017", result: "W"},
      {year: "2016", result: "N/A"}
    ]
    
superbowlWin(record);