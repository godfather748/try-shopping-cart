const route = require('express').Router()
const {
    User
} = require('../../db/db.js')

route.get('/', async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).send(users)
    } catch (err) {
        // console.error(err)
        res.status(500).send({
            error: "Could not retrieve users"
        })
    }
})

// route.get('/', (req, res) => {
//     User.findAll().then((users) => {
//         res.status(200).send(users)
//     }).catch((err) => {
//         res.status(500).send({
//             error: "Could not retrieve users"
//         })
//     })
// })

route.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name
        })
        res.send(newUser)
    } catch (err) {
        console.error(err)
        res.status(501).send({
            error: "Could not create new user"
        })
    }
})

// route.post('/', (req, res) => {
//     User.create({
//         name: req.body.name
//     }).then((User) => {
//         res.status(201).send(User)
//     }).catch((err) => {
//         res.status(501).send({
//             error: "Could not create new user"
//         })
//     })
// })
module.exports = {
    route
}