const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('thius is test')
})
let port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})