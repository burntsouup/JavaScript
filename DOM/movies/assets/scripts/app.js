// 1.
const addModalMovie = document.getElementById("add-modal");
// const addModalMovie = document.querySelector("#add-modal"); // alternative option
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild; // alternative option. Not ideal since, in future, we may add Elements to the header
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild; // alternative option. This is fine since the backdrop is unlikely to change
const cancelAddMovieButton = addModalMovie.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// 2.
const userInputs = addModalMovie.querySelectorAll("input");
// const userInputs = addModalMovie.getElementsByTagName("input"); // alternative option 
// 3.
const movies = [];
// 4.
const entryTextSection = document.getElementById("entry-text");
// 5.
let movieIdCounter = 0; // counter for the movie ID

// --------------------


// 1.a
// adds/removes the class "visible" to the modal Element when clicking the Add Movie button; making the CSS visible/invisible
const toggleMovieModal = () => {
    addModalMovie.classList.toggle("visible");
    toggleBackdrop(); // 1.b
};
startAddMovieButton.addEventListener("click", toggleMovieModal);

// 1.b
// adds/removes the class "visible" to the backdrop Element when clicking the Add Movie button; making the CSS visible/invisible
const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

// 1.c
// removes the class "visible" from the modal and backdrop Elements when clicking the backdrop; making the CSS invisible
const backdropClickHandler = () => {
    toggleMovieModal();
};
backdrop.addEventListener("click", backdropClickHandler);

// 1.d
// removes the class "visible" from the modal and backdrop Elements when clicking the Cancel button; making the CSS invisible
const cancelAddMovieHandler = () => {
    toggleMovieModal();
    // 2.b
    clearMovieInput(); 
};
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);

// 1.e, 2.a, 3.
// add user input validation, store values in an object and add to the movies array
const confirmAddMovieHandler = () => {
    // 2.a
    // add user input validation
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (
        titleValue.trim() === "" || // trim() removes whitespace from both ends of a string
        imageUrlValue.trim() === "" || 
        ratingValue.trim() === "" ||
        +ratingValue < 1 || +ratingValue > 5 // +ratingValue converts a string to a number
    ) {
        alert("Please enter valid values (rating between 1 and 5).");
        return;
    }

    // 3.
    // store values in an object and add to the movies array
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie);
    
    // 1.e
    // removes the class "visible" from the modal and backdrop Elements when clicking the Confirm button; making the CSS invisible
    toggleMovieModal();

    // 2.b
    clearMovieInput();

    //4.a
    updateUI();

    // 4.b
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
};
confirmAddMovieButton.addEventListener("click", confirmAddMovieHandler);

// 2.b
// clear the input fields when the modal is closed
const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = "";
    }
};

// 4.a
// update the UI (remove the "Your personal movie db" box) based on if there are movies or not (hide the entry text if there are movies in the movies array)
const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
}

// 4.b
// renders a new movie element to the page
const renderNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element"; // *styles are added in CSS for this class
    newMovieElement.id = 'movie-' + movieIdCounter++; // assign a unique ID to the movie element
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}"/>
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, newMovieElement.id)); // 5 add event listener to delete the movie element when clicked
    const moviesList = document.getElementById("movie-list");
    moviesList.append(newMovieElement);
}

// 5.
// delete the movie element when clicking on it
const deleteMovieHandler = (movieId) => {
    const movieEl = document.getElementById(movieId);
    movieEl.remove();
};


