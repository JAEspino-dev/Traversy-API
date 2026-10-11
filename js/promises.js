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
function createPost(post) {
    return new Promise((resolve, reject) => { // take in 2 parameters which are going to be functions. You're defining what happens if the promise is resolved or rejected
        setTimeout(() => {
            posts.push(post)
            const error = false;

            if (!error) {
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 2000)
    })
}



// createPost({ title: 'Post Three', body: 'This is post three' }) // this returns a promise, so we can use the .then syntax
//     .then(getPosts)
//     .catch(err => console.log(err))

// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10
// const promise3 = new Promise((resolve,reject) => 
// setTimeout(resolve, 2000, 'Goodbye')
// )

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users') // fetch returns a promise, either resolve or reject
// .then(response => response.json())
// .then(data => console.log(data))

// Async/Await
// async function init() {
//     await createPost({ title: 'Post Three', body: 'This is post three' })
//     console.log('Await just finished')
//     getPosts()
// }
// init()

// Async/Await with fetch()
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
}
fetchUsers()

function foo() {
    throw new Error('Oops')
}
function bar(){
    foo()
}
function baz(){
    bar()
}
baz()