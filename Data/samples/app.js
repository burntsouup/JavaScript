
/* 
----------------------------------
FETCH API
----------------------------------
*/

// 1. create async function that calls the fetch() API, returning a Promise, and, if resolved, returns an HTTP response
// 2. use the json() method to extract the JSON body of the HTTP response; this returns a second Promise
// 3. create a DOM element from the resolved Promise

let searchValue = 'rainbow';
const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=AMqOV3iIhSOAfJ2fz8scG8HEsl0SXSJ7&q=${searchValue}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const resultsEl = document.getElementById('rainbow');
let resultsHTML = '';

// let getGif = function(num) {
//     return fetch(giphyAPI)
//         .then(response => {
//             console.log(response);
//             return response.json();
//         })
//         .then(json => {
//             console.log(json)
//             return resultsHTML = `<img src="${json.data[num].images['fixed_height'].url}">`
//         });
// }

// getGif(0)
//     .then(value => resultsEl.innerHTML += value)
//     .catch(err => console.log(err));

// alternative - using async/await instead of the .then method
async function getGif(num) {
    const response = await fetch(giphyAPI);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return resultsHTML = `<img src="${json.data[num].images['fixed_height'].url}">`
}

// getGif(0)
//     .then(value => resultsEl.innerHTML += value)
//     .catch(err => console.log(err));

/* 
----------------------------------
CHART LOCAL CSV DATA
----------------------------------
*/

// 1. async fetch csv file data
// 2. convert (split) data string into an array, where each element is the data from a given year (row)
// 3. for each element in the array (row), create a new array, divided by commas
// 4. return only the year and temp from each new array (row)
// 5. build a chart using Chart.js and a canvas element

// CSV data: https://data.giss.nasa.gov/gistemp/
// chartIt: https://www.chartjs.org/docs/latest/getting-started/

async function getData() {
    // 1.
    const response = await fetch("temp.csv");
    const data = await response.text();
    
    // 2.
    const table = data.split("\n").slice(1); // split - divides string into list of substrings, in an array
    
    // 3./4.
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        xlabels.push(year);
        const temp = columns[1];
        ylabels.push(parseFloat(temp) + 14);  // add the global mean temp (14C) to the temp (converted from string to float)
        console.log(year, temp);
    });

}

// 5.
const xlabels = [];
const ylabels = [];
async function chartIt() {
    await getData(); // chartIt will wait until the data is ready before proceeding
    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'line',
        
        data: {
            labels: xlabels,
            datasets: [{
            label: 'Global Average Temperature',
            data: ylabels,
            borderWidth: 1
            }]
        },
    });
}

// chartIt();

/* 
----------------------------------
API and JSON
----------------------------------
*/

// JSON is written in the same format as an object literal
let pos = {
    lat: -45,
    lon: 112
};

// 1. async fetch data from api (wheretheiss) and convert it to json
// 2. update DOM (span) elements with (latitude and longitude) data
// 3. plot these points on a map using library (leaflet)

// wheretheiss api: https://wheretheiss.at/w/developer
// leaftlet library: https://leafletjs.com/examples/quick-start/

// 3.
let map = L.map('issMap').setView([51.505, -0.09], 13);  //[lat, long], zoom

// 1./2.
const api_url = "https://api.wheretheiss.at/v1/satellites/25544"
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    // console.log(data.latitude);
    // console.log(data.longitude);
    const { latitude, longitude} = data;  // JS destructuring
    console.log(latitude);
    console.log(longitude);

    document.getElementById("lat").textContent = latitude;
    document.getElementById("long").textContent = longitude;
}
getISS();




