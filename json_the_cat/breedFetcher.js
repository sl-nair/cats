const request = require('request');

let breedName = process.argv.splice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
    return;
  } else {
    console.log("Breed not found!");
  }

});