let https://api.funtranslations.com/translate/minion.json"
let translate=document.querySelector("#translate")
let erase=document.querySelector("#clear")

function buildFinalURL(EnglishInput) {
 var encodedURI = encodeURI(EnglishInput);
 console.log("Encoded URI: " + encodedURI);
 return `${url}?text=${encodedURI}`;
}

translate.addEventListener("click",function vanila(){
  let EnglishInput=document.querySelector("#txt-input").value
  var finalURL = buildFinalURL(EnglishInput) 
  fetch(finalURL)
    .then(function x(response){
    return response.json()})
    .then(function y(json){
       let valyrian=json.contents.translated
       document.querySelector("#output").innerHTML=valyrian
    }).catch(errorHandler)
})

function errorHandler(error){
  alert("Some error occured in the server.\nPlease try again after some time !\nSorry for the inconvenience. 🙂")
}
