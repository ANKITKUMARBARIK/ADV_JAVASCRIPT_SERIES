// use async/await to fetch data from an API (GitHub API in this case) and handle the response

// try-catch format
async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/ANKITKUMARBARIK')
        const data = await response.json()
        console.log(data)
        console.log(data.login)
        console.log(data.followers)
    } catch {
        console.log('ERROR')
    }
}
getAllUsers()

// Step 1: Async Function Declaration
// The function getAllUsers is declared as async.
// An async function allows you to use await to handle asynchronous operations (like fetching data from an API).

// fetch():
// Used to make an HTTP request to the provided URL.
// Returns a Promise that resolves with the HTTP response.

// await:
// Pauses execution until the fetch() Promise is resolved, ensuring the response variable contains the result.

// The response from fetch() is a Response object.
// To extract the actual data, .json() is called, which converts the response into a JSON object.
// await ensures the JSON conversion completes before moving to the next line.







//EASY WAY - ANOTHER FORMAT
// asynchronous operations with .then() and .catch() methods.
// fetch('https://api.github.com/users/ANKITKUMARBARIK')
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         console.log(data)
//         console.log(data.login)
//         console.log(data.followers)
//         console.log(data.public_repos)
//     }).catch(() => {
//         console.log('ERROR')
//     })

    

// fetch():
// Sends an HTTP request to the provided URL.
// Returns a Promise that resolves to a Response object once the request is completed.

// URL:
// https://api.github.com/users/ANKITKUMARBARIK is an endpoint in the GitHub API that provides details about the user ANKITKUMARBARIK.

// The .then() method is used to handle the Promise returned by fetch().
// The response is a Response object, not the actual data.

// response.json():
// Converts the raw response into a JSON object.
// Returns another Promise that resolves when the JSON conversion is complete.

// The second .then() processes the Promise returned by response.json() and receives the parsed JSON data (data).






// Interview Note :->
// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.