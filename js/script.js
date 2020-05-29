const BASE_URL = "https://restcountries.eu/rest/v2/all";
const PARAM = "?fields=name;flag;"

const bodyContainer = document.querySelector('.body-container');
const countryPerPage = [];
let pageNumber = 0;

//insert data according to page number
const insertHTML = page => {
    countryPerPage[page].map(country => {
        bodyContainer.insertAdjacentHTML("beforeend", `
        <img onclick="handleImgClick(event)" src=${country.flag}>
    `)
    })
}

const randomColor = () => {
    const colors = ["#e6e1e1", "#d98e4c", "#d3eb8d", "#77c6e6", "#e082c4", "#e66a70", "#3243db", "#59f0ed","#8853e6","#d7db58"]
    return colors[Math.floor(Math.random()*10)];
}

const changeTextColor = () => {
    document.querySelector('body').style.color = randomColor();
}

const changeVisibility = (element,action) => {
    document.querySelector(element).style.visibility = action;
}

//Onclick next button
const handleNext = () => {
    bodyContainer.innerHTML= "";
    pageNumber++;

    //if on the last page, hide next
    if(pageNumber === countryPerPage.length-1){
        changeVisibility("#next","hidden");
        insertHTML(pageNumber);
    }
    //if on the second page, toggle prev's visibility
    else if(pageNumber === 1){
        changeVisibility("#prev","visible");
        insertHTML(pageNumber);
    }
    else
        insertHTML(pageNumber);
}

//Onclick prev button
const handlePrev = () => {

    bodyContainer.innerHTML= "";
    
    //transition from last page to second last, toggle next button visibility
    if(countryPerPage.length-1 === pageNumber)
        changeVisibility("#next","visible");

    pageNumber--;

    //transition from second to first page, toggle prev button visibility
    if(pageNumber === 0){
        changeVisibility("#prev","hidden");
        insertHTML(pageNumber);
    }
    else{
        insertHTML(pageNumber);
    }
}

//Slice data by 10
const handleCountryData = data => {
  
    if(!data) return;

    let endPoint = 10; //10 per page
    let startPoint = 0;

    while(endPoint <= data.length){
        countryPerPage.push(data.slice(startPoint,endPoint));
        startPoint = endPoint;
        endPoint = endPoint + 10;
    }
    //the Prev button on first page
    changeVisibility("#prev","hidden");

   //insert first ten data in first page
    insertHTML(pageNumber);
}

//Fetch flag data from API
fetch(BASE_URL + PARAM)
            .then(resp=>resp.json())
            .then(handleCountryData)
            .catch(e => console.error("There has been a problem with your fetch operation: ", e))
    
//different  text color on each reload
changeTextColor();