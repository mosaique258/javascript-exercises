/* My own steps:
const findTheOldest = function() {
    

    console.log("hi")

    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    console.log(people[1]["name"]);


    const currentYear =  new Date().getFullYear(); 
    const newArray = people.map((person) => 
      { if (person.yearOfDeath !== undefined) {
        return {
         age: person.yearOfDeath -     person.yearOfBirth ,
         ... person
        }
    
      
      } else {
         return {
           age: currentYear - person.yearOfBirth,
           ... person
         }
      }
      });
        
    oldest = newArray.reduce((acc,person) => {
        if (acc === null || person.age > acc) return person.age;
            return acc;
    }, null);

    result = newArray.reduce((acc, person) => {
        if (acc === null || person.age > acc) return person.age;
            return acc;
    }, null);

};

*/


const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
