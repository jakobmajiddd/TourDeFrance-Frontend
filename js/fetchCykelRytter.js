const urlCykelRytter = "http://localhost:8080/cykelrytter";
const cykelRytterMap = new Map();

async function fetchCykelRytterfromDB() {
  await promise.then(data => {
    data.forEach(cykelRytter => {
      cykelRytterMap.set(cykelRytter.cykelRytterId, cykelRytter);
    })
  })
}
fetchCykelRytterfromDB();

const tableCykelRytter = document.getElementById("cykelrytterTable");

