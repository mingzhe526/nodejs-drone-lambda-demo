const {handler} = require('./index');


const event = {
    "data": "abc123"
}
console.log(handler(event))