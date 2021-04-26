const sequelize = require('sequelize')
// const db = new sequelize({
//     dialect: `mysql`,
//     username: `firstuser`,
//     password: `firstpass`,
//     database: `shopdb`,
//     host: `localhost`
// })
let db;
if (process.env.DATABASE_URL) {
    db = new sequelize(process.env.DATABASE_URL)
} else {
    db = new sequelize({
        dialect: `mysql`,
        username: `firstuser`,
        password: `firstpass`,
        database: `shopdb`,
        host: `localhost`
    })
}
const User = db.define('User', {
    Id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
})
const Product = db.define('Product', {
    Id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    manufacturer: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})
db.sync().then(() => {
    console.log(`Database synced successfully`)
}).catch((err) => {
    console.error(err)
})
module.exports = {
    User,
    Product
}