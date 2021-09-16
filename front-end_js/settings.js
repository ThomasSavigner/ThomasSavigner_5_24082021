/* api's url in fetch method for collecting json file
 to display in index.html */
const url = "http://localhost:3000/api/cameras/";

/*  Défintion constantes pour récupérer l'id de l'url Product
    et l'utiliser après avec fetch et créer de nouveaux liens */
const param = new URLSearchParams(document.location.search.substring(1));
const idUrl = param.get("_id");

const urlProduct = url + idUrl;

const urlPost = url + "order";
