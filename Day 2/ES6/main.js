let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

const isAtLeastOneMarvel = movies.some(m => m.studio == "Marvel")

console.log("isAtLeastOneMarvel: " +   isAtLeastOneMarvel)

const isAllFuturistic = movies.every(m => m.year > 2020)

console.log("isAllFuturistic : " +  isAllFuturistic)


// --------------------------------
// Exercises
// --------------------------------

// Exercises 1
// Map the data differently so you are left with an array of each user's email and their company's name

const mapped = users.map( u => {return { email:u.email, companyName: u.company.name}})
console.log(mapped)


// Exercises 2
// Create an array with user objects that have a zip-code that starts with "5".

const filtered = users.filter(u => u.address.zipcode[0] == 5)
console.log(filtered)

// Exercises 3
// Modify your code from Exercise 2 so that your resulting array only has the IDs of the matching users. 
// You should chain your filter with a map. Ultimately, you should just have this array: [3, 4, 7]

// Exercises 4
// Create an array of only names, then only keep the names that start with with the letter "C".
// You should be left with ["Clementine Bauch", "Chelsey Dietrich", "Clementia DuBuque"]

// Exercises 5
// Determine whether all of the users live in the city of "South Christy" 
// you should find the answer to be false in a single, beautiful line of code.

// Exercises 6
// Find the user who's suite is "Apt. 950" - console log her company's name. 
// Your code should print out "Considine-Lockman".


// Exercises 7
// Write a named function that receives a single parameter, user.
// Using forEach and the named function you just wrote, 
// console log "NAME lives in CITY, and owns the company COMPANY_NAME" for each user.
