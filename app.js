const express = require('express')
const app = express()

app.listen(7071, () => {
    console.log('Example app listening on port 7071!');
})

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

module .exports = app