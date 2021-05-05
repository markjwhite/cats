// asyncBreeds.js
const fs = require('fs');
const { showCompletionScript } = require('yargs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      callback(data);
    } else {
      callback(undefined);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};
// const printOutCatBreed = data => {
//   console.log('Return Value: ', data) // => print out details correctly.
// };

// we try to get the return value

breedDetailsFromFile('Bombay', data => {
  console.log('Return Value: ', data)
}); // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;