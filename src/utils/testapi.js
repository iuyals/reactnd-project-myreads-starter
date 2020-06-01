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

//book format from api
// title: "The New Games Book"
// authors: ["New Games Foundation"]
// publisher: "Main Street Books"
// publishedDate: "1976-10-01"
// description: "More than sixty games in which two to two hundred players can participate all require elements of trust and cooperation"
// industryIdentifiers: [{…}]
// readingModes: {text: false, image: false}
// pageCount: 193
// printType: "BOOK"
// categories: ["Games"]
// maturityRating: "NOT_MATURE"
// allowAnonLogging: false
// contentVersion: "preview-1.0.0"
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=zOgkAQAAI…J&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=zOgkAQAAI…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
// language: "en"
// previewLink: "http://books.google.com/books?id=zOgkAQAAIAAJ&q=games&dq=games&hl=&cd=1&source=gbs_api"
// infoLink: "http://books.google.com/books?id=zOgkAQAAIAAJ&dq=games&hl=&source=gbs_api"
// canonicalVolumeLink: "https://books.google.com/books/about/The_New_Games_Book.html?hl=&id=zOgkAQAAIAAJ"
// id: "zOgkAQAAIAAJ"