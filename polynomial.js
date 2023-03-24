let count = 0; // initialize counter for possible value assignments

for (let x = 1; x <= 1999; x++) { // iterate through possible values of X
  for (let y = 0; y < x; y++) { // iterate through possible values of Y
    let z = 2000 - x - y; // calculate value of Z
    if (z >= 0 && y >= z) { // check if conditions are satisfied
      count++; // increment counter for valid assignments
    }
  }
}

console.log(count); // print count of possible value assignments
