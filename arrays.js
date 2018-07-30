var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element) {
    var newArray = array.push(element)
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.push(element)
    return array
  }