//*******************************************************//
//
// The Facade Pattern
//
//*******************************************************//


/****************** Demo without Facade  *****************/
//                   Test in a browser

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

/******************   Demo with Facade  *****************/

function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', { userId })
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

// Mer info om nedanstående implementering finns här
// https://www.youtube.com/watch?v=fHPa5xzbpaA

function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    return fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}