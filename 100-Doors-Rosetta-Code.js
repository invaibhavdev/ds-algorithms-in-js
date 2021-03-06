/*There are 100 doors in a row that are all initially closed.

You make 100 passes by the doors.

The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).

The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.

The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the 100th door.*/

/*
Task:
Implement a function to determine the state of the doors after the last pass. 
Return the final result in an array, with only the door number included in the array if it is open.
*/

function getFinalOpenedDoors(numDoors) {
  let doors = [];
  
  // function to set generate given number of doors and set their initial state to false
  const generateDoors = (numberOfDoors) => {
    for (let i = 1; i <= numberOfDoors; i++) {
      doors[i] = false;
    }
  }
  
  // function to toggle the current state of any door given the door number
  const toggleDoorState = (doorNumber) => {
    doors[doorNumber] = !doors[doorNumber];
  }
  
  // function to make passes equal to the number of doors and toggle the state
  const makePasses = (passes) => {
    for (let i = 1; i<= passes; i++) {
      for (let j = 1; j <= passes; j++) {
        if (j%i === 0) {
          toggleDoorState(j);
        }
      }
    }
  }
  
  // function to get the number of doors that are open after the final pass
  const sendFinalStatus = (doors) => {
    const finalList = [];
    for (let i = 1; i <= doors.length; i++) {
      if (doors[i]) {
        finalList.push(i);
      }
    }
    return finalList;
  }
  
  generateDoors(numDoors);
  makePasses(numDoors);
  return sendFinalStatus(doors);
}

console.log(getFinalOpenedDoors(100));
