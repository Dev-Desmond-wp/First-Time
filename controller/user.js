const database = require('../model/database.json');
const fs = require('fs')

const savetoDB = (string) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./model/database.json', string, (err, data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const allUsers = (req, res) => {
    const users = database;
    res.status(200).json({
        message: `All users found and the total is ${users.length}`,
        data: users
    })
}

const createUser = async (req, res) => {
    const {name, gender, isMarried} = req.body;
    const user = {
        id: database.length + 1,
        name,
        gender,
        isMarried
    }

    database.push(user);

 await savetoDB(JSON.stringify(database, null, 2));

res.status(201).json({
    message: 'User created successfully',
    data: user
})
}

module.exports = {
    allUsers,
    createUser
}