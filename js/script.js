const BASE_URL = "https://restcountries.eu/rest/v2/all";
const PARAM = "?fields=name;flag;"




fetch(BASE_URL + PARAM)
            .then(resp=>resp.json())
            .then(handleCountryData)
