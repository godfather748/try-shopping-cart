const route = require('express').Router()
const {
    Product
} = require('../../db/db.js')
route.get('/', async (req, res) => {
    try {
        const products = await Product.findAll()
        res.send(products)
    } catch (err) {
        console.error(err)
        res.send(`could not retrieve products`)
    }
})
route.post('/', async (req, res) => {
    console.log(req.body)
    if (isNaN(req.body.price)) {
        return res.send(`Price is not a valid number`)
    }
    try {
        const newProduct = await Product.create({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            price: parseFloat(req.body.price)
        })
        res.send(newProduct)
    } catch (err) {
        console.error(err)
        res.send(`could not create new product`)
    }
})
// route.post('/',(req, res) => {
//     if(isNaN(req.body.price)){
//         return res.send(`Price is not a valid number`)
//     }
//     Product.create({
//         name: req.body.name,
//         manufacturer: req.body.manufacturer,
//         price: parseFloat(req.body.price)
//     }).then((product) => {
//         res.status(201).send(product)
//     }).catch((err) => {
//         res.status(501).send({
//             error:`could not add product`
//         })
//     })
// })
module.exports = {
    route
}