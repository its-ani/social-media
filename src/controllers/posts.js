const {Posts, Users} = require('../db/models')


async function createNewPost(userId, title, body){
 const post = await Posts.create({
    title,
    body,
    userId,
 })
 return post
}

async function findAllPosts(query){

    const posts = await Posts.findAll({
        include: [ Users]
    })

    return posts
}

module.exports = {
    createNewPost,
    findAllPosts
}


// TEST CODE
// async function task(){
    // console.log(await createNewPost(1, "this is sample post", "Body of the 1st posts goes here")),
    // console.log(await createNewPost(2, "Second  sample post", "Body of the 2nd posts goes here")),
    // console.log(await createNewPost(3, "Third is sample post", "Body of the 3rd posts goes here"))
    // const posts = await findAllPosts()
    // for(let p of posts){
    //     console.log(`${p.title}\n author: ${p.user.username} \n${p.body}\n=======\n`)
    // }
// }

// task()