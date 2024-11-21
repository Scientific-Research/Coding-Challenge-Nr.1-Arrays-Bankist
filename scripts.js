/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dogs owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old and it's a puppy if it's less than 3 years old!

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)!

2. Create an array with both Julia's (corrected) and Kate's data!

3. For each remaning dog, log to the console whether it's an adult ('Dog number 1 is an adult, and is 5 years old') or a puppy ('Dog number 2 is still a puppy 🐶')

4. Run the function for both test datasets!

HINT: Use tools from all lectures in this section so far 😉.

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)!

const checkDogs = (dogsJulia, dogsKate) => {
  // create a shallow copy using slice() method
  const dogsJuliaCopy1 = dogsJulia.slice();
  console.log(dogsJuliaCopy1);

  const dogsJuliaCopy3 = dogsJulia.slice();

  // create a shallow copy using spread operator
  const dogsJuliaCopy2 = [...dogsJulia];
  console.log(dogsJuliaCopy2);

  // Removing the first and the last two dogs from the Julia's array => USING SPLICE
  const removedFirstElement_Splice = dogsJuliaCopy1.splice(1);
  console.log(removedFirstElement_Splice); // [5, 2, 12, 7]
  console.log(dogsJuliaCopy1); // [3]

  const removedLastTwoElements_Splice = removedFirstElement_Splice.splice(0, 2);
  console.log(removedLastTwoElements_Splice); // [5, 2]
  console.log(removedFirstElement_Splice); // [12, 7]

  // Removing the first and the last two dogs from the Julia's array => USING SLICE
  const juliaNewArray = dogsJuliaCopy3.slice(1, 3);
  console.log(juliaNewArray); // [5, 2]

  // 2. Create an array with both Julia's (corrected) and Kate's data!
  // 1. SPREAD OPERATOR
  const newJuliaData_kateData = [...juliaNewArray, ...dogsKate];

  // 2. CONCAT
  const newJuliaData_kateData_2 = juliaNewArray.concat(dogsKate);
  console.log(newJuliaData_kateData); // [5, 2, 4, 1, 15, 8, 3]
  console.log(newJuliaData_kateData_2); // [5, 2, 4, 1, 15, 8, 3]

  // 3. For each remaning dog, log to the console whether it's an adult ('Dog number 1 is an adult, and is 5 years old') or a puppy ('Dog number 2 is still a puppy 🐶')
  // [5, 2, 4, 1, 15, 8, 3]
  newJuliaData_kateData.forEach((dog, index) => {
    if (dog >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dog} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
