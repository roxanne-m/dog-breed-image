'use strict';

/* Create an app that loads a single random image for a specific breed, 
based on a user input. This app should account for the happy case when
 the breed is found, as well as the unhappy case when it is not. Use the
 endpoint described in the "RANDOM IMAGE FROM A BREED COLLECTION" section 
 of this page of the DogAPI docs. Note that the API will return an HTTP status 
 code of 404 along with a JSON object with info about the error if a request is
made for a breed that can't be found. */

function getDogImage(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(error));
}


function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        let breed = $('input[type="text"]').val().toLowerCase();
        getDogImage(breed);

    })
}

function displayResults(responseJson){
    console.log(responseJson);

    if(responseJson.status === "error")
    {
        throw `${responseJson.code}: ${responseJson.message}`;
    }
    $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`)
}



function main(){
    watchForm();
}

$(main);