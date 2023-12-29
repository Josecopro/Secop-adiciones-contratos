import fetch from "node-fetch";

const response = await fetch("https://www.datos.gov.co/resource/cb9c-h8sn.json?descripcion=ADICIONAL No 3");
const fetchData = await response.json();
console.log(fetchData);
export {fetchData};