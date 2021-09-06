// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, string){
   return drivers.filter(function(driver){
       return driver.toLowerCase() === string.toLowerCase()
   })
}

function fuzzyMatch(drivers, string){
    let firstLet = drivers.filter(firstLetters => firstLetters.substring(0, 2) === string)
    return firstLet
}

function matchName(drivers, string) {
    return drivers.filter(function(driver){
        return driver.name === string
    })
}
  