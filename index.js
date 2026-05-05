const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('Hello from users World!')
})

const users = [
    { id: 1, name: 'sabbir', email: "sabbir@example" },
    { id: 1, name: 'abbir', email: "abbir@example" },
    { id: 1, name: 'saba', email: "saba@example" }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/products', (req, res) => {
    res.send('Products are Jummping up!')
})

app.listen(port, () => {
    console.log(`Example app lestening on port ${port}`)
})