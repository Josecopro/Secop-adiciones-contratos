import fetch from "node-fetch";

const response = await fetch("https://www.datos.gov.co/resource/rpmr-utcd.json?departamento_entidad=Antioquia");
const fetchData = await response.json();
export {fetchData};