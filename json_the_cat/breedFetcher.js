const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
      return;
    } else {
      // console.log("Breed not found!");
      callback(null, 'breed not found')
    }
  });
};

module.exports = { fetchBreedDescription };