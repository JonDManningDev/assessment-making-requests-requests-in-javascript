const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";
const url = "http://localhost:5000/constellations";

function getAllNames() {
  axios.get(url).then((response) => {
    const constellations = response.data;
    const names = constellations.map((constellation) => constellation.name);
    console.log(names);
  });
};

function getConstellationsByQuadrant(quadrant) {
  axios.get(url).then((response) => {
    const constellations = response.data;
    const result = constellations.filter((constellation) => quadrant == constellation.quadrant);
    console.log(result);
  });
};

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
