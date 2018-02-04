var chocolateBars = ["snickers","hundred grands","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return array.unshift(element)
}

function addElementoEndOfArray(array,element) {
  return [...array, element]
}

array=[]
function destructivelyAddElementToEndOfArray(array,element) {
  return array.push(element)
}