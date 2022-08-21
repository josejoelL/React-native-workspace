let car = {
    color: 'red',
    year: 2019,
    km: 0,
    owner: {
        name: 'David',
        age: 25
    }
}

let car2 = JSON.parse(JSON.stringify(car))
car2.owner.age += 1

console.log(car, car2) // el dueño de `car2` es un año mayor al dueño de `car`