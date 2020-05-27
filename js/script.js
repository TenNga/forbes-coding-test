const BASE_URL = "https://restcountries.eu/rest/v2/all";
const PARAM = "?fields=name;flag;"

const insertHTML = (countriesData) => {
    const bodyContainer = document.querySelector('.body-container');
    countriesData[0].map(country => {
        bodyContainer.insertAdjacentHTML("beforeend", `
        <img src=${country.flag}>
    `)
    })
}

const handleCountryData = (data) => {
    let endPoint = 10;
    let startPoint = 0;
    const countryPerPage = [];
    data.length = 50;

    while(endPoint <= 49){
        countryPerPage.push(data.slice(startPoint,endPoint));
        startPoint = endPoint;
        endPoint = endPoint + 10;
    }
    
    insertHTML(countryPerPage);
}


fetch(BASE_URL + PARAM)
            .then(resp=>resp.json())
            .then(handleCountryData)
