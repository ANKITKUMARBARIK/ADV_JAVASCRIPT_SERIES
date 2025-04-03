function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("Data fetch successfully")
            } else {
                reject("Error fetching data")
            }
        }, 3000)
    })
}

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error))