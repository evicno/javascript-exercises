const findTheOldest = function(people) {
    const d = new Date();
    let year = d.getFullYear();
    for (p of people) {
        if (p.yearOfDeath === undefined){
            p.yearOfDeath = year;
        }
    }
    people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
