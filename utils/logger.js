// info function to log general log data
const info = (...params) => {
    console.log(params)
}

// error function to log errors
const error = (...params) => {
    console.error(params)
}

// exporting both functions to use 
// this function in other files by importing
module.exports = {
    info, error
}