var chocolateBars = ["snickers","hundred grands","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array = [element, ...array]
  
  return array
}

function addElementoEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array = [...array, element]
  return array
}