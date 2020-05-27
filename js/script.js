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
    insertHTML(pageNumber);
}

const handleCountryData = (data) => {
    let endPoint = 10;
    let startPoint = 0;
    data.length = 50;

    while(endPoint <= 49){
        countryPerPage.push(data.slice(startPoint,endPoint));
        startPoint = endPoint;
        endPoint = endPoint + 10;
    }
    
    insertHTML(pageNumber);
}


fetch(BASE_URL + PARAM)
            .then(resp=>resp.json())
            .then(handleCountryData)
