const person = {
    name: 'Matthew',
    age : 34,
    location: {
        city: 'Simpsonville',
        temp: 23
    }
};


const {name: firstName ='anonymous', age} = person;

console.log(`${firstName} is ${age}.`)

const { city, temp: temperature} = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher


console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ medium , , amount] = item;
console.log(`a medium ${medium} costs ${amount}`);