const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  array.find(item=> {
    if(item.result == "W") console.log(item.year);
  });
}