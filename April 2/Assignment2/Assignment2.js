let xhr = new XMLHttpRequest()
// configure the request
xhr.open("GET", "https://restcountries.com/v3.1/all")
// send the request
xhr.send();

xhr.onload = function(){
    let response = JSON.parse(xhr.response)
    response.forEach(value => {
       console.log(value.flags)
    })
};