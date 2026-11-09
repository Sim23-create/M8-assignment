// STEP 1
{
    let favoriteMovies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate"
    ];

    console.log(favoriteMovies[1]);
}


// STEP 2
{
    let movies = new Array(5);

    movies[0] = "Love Jones";
    movies[1] = "Jazzman's Blues";
    movies[2] = "How Stella Got her Groove Back";
    movies[3] = "Waiting to Exhale";
    movies[4] = "A Thin Line Between Love and Hate";

    console.log(movies[0]);
}


// STEP 3
{
    let movies = new Array(5);

    movies[0] = "Love Jones";
    movies[1] = "Jazzman's Blues";
    movies[2] = "How Stella Got her Groove Back";
    movies[3] = "Waiting to Exhale";
    movies[4] = "A Thin Line Between Love and Hate";

    movies.splice(2, 0, "Brown Sugar");

    console.log(movies.length);
}


// STEP 4
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate"
    ];

    delete movies[0];

    console.log(movies);
}


// STEP 5
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    for (let index in movies) {
        console.log(movies[index]);
    }
}


// STEP 6
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    for (let movie of movies) {
        console.log(movie);
    }
}


// STEP 7
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    movies.sort();

    for (let movie of movies) {
        console.log(movie);
    }
}


// STEP 8
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    let leastFavMovies = [
        "Scream 5",
        "Centipede",
        "Single White Female"
    ];

    console.log("Movies I like:");
    console.log("");

    for (let movie of movies) {
        console.log(movie);
    }

    console.log("");
    console.log("Movies I regret watching:");
    console.log("");

    for (let movie of leastFavMovies) {
        console.log(movie);
    }
}


// STEP 9
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    let leastFavMovies = [
        "Scream 5",
        "Centipede",
        "Single White Female"
    ];

    movies = movies.concat(leastFavMovies);

    movies.sort().reverse();

    console.log(movies);
}


// STEP 10
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    let leastFavMovies = [
        "Scream 5",
        "Centipede",
        "Single White Female"
    ];

    movies = movies.concat(leastFavMovies);

    movies.sort().reverse();

    console.log(movies.pop());
}


// STEP 11
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    let leastFavMovies = [
        "",
        "The Room",
        "Movie 43"
    ];

    movies = movies.concat(leastFavMovies);

    movies.sort().reverse();

    console.log(movies.shift());
}


// STEP 12
{
    let movies = [
        "Love Jones",
        "Jazzman's Blues",
        "How Stella Got her Groove Back",
        "Waiting to Exhale",
        "A Thin Line Between Love and Hate",
        "Brown Sugar",
        "The Best Man"
    ];

    let leastFavMovies = [
        "Scream 5",
        "Centipede",
        "Single White Female"
    ];

    movies = movies.concat(leastFavMovies);

    let dislikedIndices = movies
        .map((movie, index) =>
            leastFavMovies.includes(movie) ? index : -1
        )
        .filter(index => index !== -1);

    console.log("Disliked movie indices:", dislikedIndices);

    dislikedIndices.forEach(index => {
        movies[index] = "Love Jones";
    });

    console.log("Updated movies:", movies);
}


// STEP 13
{
    let movies = [
        ["Love Jones", 1],
        ["Jazzman's Blues", 2],
        ["How Stella Got her Groove Back", 3],
        ["Waiting to Exhale", 4],
        ["A Thin Line Between Love and Hate", 5]
    ];

    let movieNames = movies
        .flat()
        .filter(item => typeof item === "string");

    console.log(movieNames);
}
// Create an array using literal notation
const employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// Create an anonymous function
const showEmployee = function(employeeList) {
    console.log("Employees:\n");

    // Loop through the array
    for (let i = 0; i < employeeList.length; i++) {
        console.log(employeeList[i]);
    }
};

// Call the function and pass in the employees array
showEmployee(employees);

function filterValues(arr) {
    return arr.filter(Boolean);
}

// Test Data
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Create a numeric array
const numberz = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Call the function
console.log(getRandomItem(numberz));

function getLargestNumber(arr) {
    return Math.max(...arr);
}

// Create a numeric array
const numbers = [15, 85, 32, 100, 47, 63, 22];

// Call the function
console.log(getLargestNumber(numbers));