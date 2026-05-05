const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')

// midddleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from users World!')
})

const users = [
    { id: 1, name: 'sabbir', email: "sabbir@example" },
    { id: 2, name: 'abbir', email: "abbir@example" },
    { id: 3, name: 'saba', email: "saba@example" }
]

console.log(users)

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log("data in the request", req.body)

    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)

    res.send({ success: true, data: newUser, message: "post method is working" })
})

app.get('/products', (req, res) => {
    res.send('Products are Jummping up!')
})

app.listen(port, () => {
    console.log(`Example app lestening on port ${port}`)
})