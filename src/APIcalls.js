export const fetchData = (dataSet) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${dataSet}`)
  .then(response => checkError(response))
  .catch(error => console.log(error))
}

const checkError = (res) => {
  if (!res.ok) {
    throw new Error(
      "Sorry...Internet Server Error"
    )
  } else {
      return res.json()
  }
}
