const BASE_URL = "https://restcountries.eu/rest/v2/all";
const PARAM = "?fields=name;flag;"
const bodyContainer = document.querySelector('.body-container');
const countryPerPage = [];
let pageNumber = 0;


const insertHTML = (page) => {
    countryPerPage[page].map(country => {
        bodyContainer.insertAdjacentHTML("beforeend", `
        <img src=${country.flag}>
    `)
    })
}

const handleNext = () => {
    bodyContainer.innerHTML= "";
    pageNumber++;
    if(pageNumber > countryPerPage.length-2){
        insertHTML(pageNumber);
        document.querySelector('#next').style.visibility = "hidden"; 
    }
    else
        insertHTML(pageNumber);
}

const handlePrev = () => {
    if(pageNumber === 0) return;
    
    bodyContainer.innerHTML= "";
    pageNumber--;
    if(countryPerPage.length-1 === pageNumber + 1 )
        document.querySelector('#next').style.visibility = "visible"; 

    if(pageNumber === 0){
        insertHTML(pageNumber);
        document.querySelector('#prev').style.visibility = "hidden"; 
    }
    else{
        insertHTML(pageNumber);
    }
}

const handleCountryData = (data) => {
    let endPoint = 10;
    let startPoint = 0;

    while(endPoint <= 50){
        countryPerPage.push(data.slice(startPoint,endPoint));
        startPoint = endPoint;
        endPoint = endPoint + 10;
    }
    
    insertHTML(pageNumber);
}


fetch(BASE_URL + PARAM)
            .then(resp=>resp.json())
            .then(handleCountryData)
