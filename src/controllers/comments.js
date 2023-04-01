const {Comments, Posts} = require('../db/models')

async function createComment(id, title, body){
    const comment = await Comments.create({
        id ,
        title,
        body, 
    })
    return comment
}

async function findAllComment(query){
    const comment = await Comments.findAll({
        include: [ Posts]
    })
    return comment
}

module.exports = {
    createComment,
    findAllComment
}


// TEST CODE
async function task(){
    console.log(await createComment(1, "this is sample post", "Body of the 1st posts goes here")),
    console.log(await createComment(2, "Second  sample post", "Body of the 2nd posts goes here")),
    console.log(await createNewPost(3, "Third is sample post", "Body of the 3rd posts goes here"))
    // const posts = await findAllComment()
    // console.log(posts)
    // for(let p of posts){
    //     console.log(`${p.title}\n author: ${p.user.username} \n${p.body}\n=======\n`)
    // }
}

task()