const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.



const get = (bookId) =>
    fetch(`${api}/books/${bookId}`, { headers })
        .then(res => res.json())
        .then(data => data.book)

const getAll = () =>
    fetch(`${api}/books`, { headers })
        .then(res => res.json())
        .then(data => data.books)

const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    }).then(res => res.json())

const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => res.json())
        .then(data => data.books)


const headers = {
    'Accept': 'application/json',
    'Authorization': 'cyl'
}


search('game')