const {Users} = require('../db/models')
const {genRandomUsername} = require('../utils/username')

async function createAnonUser(){
    const user = await Users.create({
        username: genRandomUsername()
    })
    return user
}

async function getUserById(id){
    return await Users.findOne({where: {id}})
}

async function getUserByUserName(username){
    return await Users.findOne({where: {username}})
}

module.exports = {
    createAnonUser,
    getUserById,
    getUserByUserName
}

/* TEST CODE */
/*
async function task(){
    console.log(await createAnonUser())
    console.log('--------------------')
    console.log(await createAnonUser())
    console.log('--------------------')
    console.log(await createAnonUser())
    console.log('--------------------')
}
task()

async function task(){
    console.log(await createAnonUser())
    console.log('--------------------')
    console.log(await getUserById(1))
    console.log('--------------------')
    console.log(await getUserById(2))
    console.log('--------------------')
    console.log(await getUserById(3))
}

task()

*/
