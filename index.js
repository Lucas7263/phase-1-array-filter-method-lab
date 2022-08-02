// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
        return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
       })

    } 

    function fuzzyMatch(drivers, letters) {
        return drivers.filter(function (driver) {
            // console.log(driver.match(letters));
            return  driver.slice(0, 2) === letters
        })
    }

    function matchName(drivers, firstName) {
        return drivers.filter(function (driver) {
            return driver.name === firstName 
        })
    
    }
    
    







