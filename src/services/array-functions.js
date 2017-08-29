
//in the function map, create a new array and store in a variable
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop into the call to fnc
//add the returned value from fnc to the new array
//return the new array

// Map Iterates through an array and creates a new array with changes.
export function map(theArray, fnc){
  let newArray = [];
  for (let i = 0; i < theArray.length; i++) {
    newArray.push(fnc(theArray[i]));
  }
  return newArray;
}

//create a new array
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true add the item to the new array else do not
//return the new array
export function filter(theArray, fnc){
  let filteredArray = [];
  for (let i = 0; i < theArray.length; i++) {
    if (fnc(theArray[i])) {
      // above means if true
      filteredArray.push(theArray[i]);
    }
  }
  return filteredArray;
}


//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true return the item
//return null
export function find(theArray, fnc){
  for (let i = 0; i<theArray.length; i++) {
    if (fnc(theArray[i])) {
      return theArray[i];
    }
  }
  return null;
}


//return the last item in theArray
export function findLast(theArray){
  return theArray [theArray.length-1];
}

//return the first element of the array
export function head(theArray){
  return theArray[0];
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
export function reverse(theArray){
  let revArr = [];
  // start with empty array that we are going to push into
  for (let i = theArray.length-1; i >= 0; i--) {
    // using a for loop, pass through each of the indices in reverse order, for every
    // sport, greater than or equal to zero. decreasing by one each time (i--)
    revArr.push(theArray[i]);
    // pushing in each element, one at a time, until the entire array has been
    // pushed into revArr
  }
  return revArr;
  // then return new Array, end function
}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
export function tail(theArray){
  let tailArr = [];
  for ( let i = 1; i < theArray.length; i++) {
    tailArr.push(theArray[i]);
  }
  return tailArr;
}

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
export function sort(theArray){
 let swap;
 do {
   swap = false;
   for(var i = 0; i < (theArray.length-1); i++) {
     if (theArray[i] > theArray[i+1]){
       let temp = theArray[i];
       theArray[i] = theArray[i+1];
       theArray[i+1] = temp;
       swap = true;
    }
   }
  } while (swap);
  return theArray;
}
