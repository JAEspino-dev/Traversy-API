const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {// this is a callback function
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post, callbackFunction){
    setTimeout(() => {
        posts.push(post)
        callbackFunction()
    }, 2000)
}


createPost({title: 'Post Three', body: 'This is post three'},getPosts)