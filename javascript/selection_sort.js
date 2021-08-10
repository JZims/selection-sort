function selectionSort(arr) {

  //Iterate through initially
  for (var i = 0; i < arr.length; i++){
    //Store the INDEX OF the first element as the smallest value seen so far
    let smallestNum = i
    for(var j = i + 1; j < arr.length; j++ ){
    //Compare this item to the next item in the array until you find a smaller number
    
        if (arr[j] < arr[smallestNum]) smallestNum = j
    //Save the index of where the value is found as the new lowest number when found
    
    }
    //If the minimum is not the value you initially began with, swap the two values
    //Repeat this with the next item until the array is sorted
      if(i !== smallestNum){
        var temp = arr[i]
        arr[i] = arr[smallestNum]
        arr[smallestNum] = temp
    }
    
  }

  return arr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution


  
  
  

 