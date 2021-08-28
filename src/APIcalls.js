export const fetchData = (dataSet) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${dataSet}`)
  .then(response => response.json())
}