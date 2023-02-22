// Code your solution here
function findMatching(array, string) {
    const name = array.filter (word => word.toUpperCase() === string.toUpperCase())
    return name
}



function fuzzyMatch(array, string) {
    const letters = array.filter (word => word.slice(0,2) === string.slice(0,2))
    return letters
}



function matchName(array, string) {
    const drivers = array.filter (({name}) => name === string)
    return drivers
}