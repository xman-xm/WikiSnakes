const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen('3030',()=>{
console.log('http://localhost:3030')
})