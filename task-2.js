function vaxTrail(information) {

    let A = []
    let B = []
    let C = []
    let D = []

    information.forEach((data) => {
        if (data.age >= 20 && data.age <= 30 && data.temperature < 100) { A.push(data) }
        else if (data.age >= 31 && data.age <= 40 && data.temperature < 100) { B.push(data) }
        else if (data.age >= 41 && data.age <= 50 && data.temperature < 100) { C.push(data) }
        else if (data.temperature >= 100) { D.push(data) }
    }

    )
    return { A, B, C, D }

}

const informationList = [
    {
        name: 'Sunil', age: 21, temperature: 98
    },
    {
        name: 'Rakib', age: 51, temperature: 99
    },
    {
        name: 'Antor', age: 27, temperature: 95
    },
    {
        name: 'Sumon', age: 81, temperature: 98
    },
    {
        name: 'Sakib', age: 45, temperature: 94
    },
    {
        name: 'Nakib', age: 36, temperature: 100
    },
    {
        name: 'Maruf', age: 56, temperature: 108
    },
    {
        name: 'Nirob', age: 36, temperature: 98
    },
    {
        name: 'Kuddus', age: 27, temperature: 98
    },
]

console.log(vaxTrail(informationList));