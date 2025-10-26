
// 1 - add buttons
const addMovieBtn = document.getElementById("add-movie-btn"); // add movie button
const searchBtn = document.getElementById("search-btn"); // search movie button

// 3b
let movies = []; // array to store movies

const addMovieHandler = () => {
    // 2 - get values from input fields
    const title = document.getElementById("title").value; // get title value
    const extraName = document.getElementById("extra-name").value; // get extra name value
    const extraValue = document.getElementById("extra-value").value; // get extra value

    // if any of the values are empty, return undefined
    if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") {
        return;
    }

    // 3a - create a new movie object
    const newMovie = {
        info: {
            title: title, // title of the movie
            [extraName]: extraValue, // extraName is dynamic, therefore use square brackets
        },
        id: Math.random().toString(), // generate random id
    };
    // 3c - push the new movie object to the movies array
    movies.push(newMovie); // add movie to array
    console.log(movies);

    // 5b
    renderMovies(); // call renderMovies function to display the movies
};

// 5a - render movies on the page
const renderMovies = () => {
    const movieList = document.getElementById("movie-list"); // get movie list element

    if (movies.length === 0) { 
        movieList.classList.remove("visible"); // if there are no movies, remove the visible class, hiding it
        return;
    } else {
        movieList.classList.add("visible"); // if there are movies, add the visible class to show it
    }

    movieList.innerHTML = ""; // clear the movie list

    // loop through the movies array and create a list item for each movie
    movies.forEach((movie) => {
        const movieItem = document.createElement("li"); // create a new list item
        let text = movie.info.title + " - "; // grab the title of the movie
        movieItem.textContent = text; // set the text content of the list item
        // to grab the extra info, you cant do `movie.info[extraName]` since extraName is dynamic
        // so we need to loop through the info object of the movie
        for (const key in movie.info) {
            if (key === "title") continue; // skip the title key
            text += `${key}: ${movie.info[key]}`; // add the extra info to the text
        }
        movieItem.textContent = text; // set the text content of the list item to the text
        movieList.appendChild(movieItem); // append the list item to the movie list
        }
    );
};

// 4 - add event listener to the button
addMovieBtn.addEventListener("click", addMovieHandler); // add event listener to the button