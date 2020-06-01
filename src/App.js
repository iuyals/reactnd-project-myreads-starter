import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          title: "Artificial Intelligence for Games",
          authors: ["Ian Millington", "John Funge"],
          imageLinks: { thumbnail: "http://books.google.com/books/content?id=1OJ8EhvuPXAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", },
          shelf: "reading",
          id: "1OJ8EhvuPXAC"
        },
        {
          title: "Games for Language Learning",
          authors: ["Andrew Wright", "David Betteridge", "Michael Buckby"],
          imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=U9Y_NeY0Y…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=zOgkAQAAI…J&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
          shelf: "read",
          id: "U9Y_NeY0YMsC"
        }
      ],
      searchResult: [
        {
          title: "Artificial Intelligence for Games",
          authors: ["Ian Millington", "John Funge"],
          imageLinks: { thumbnail: "http://books.google.com/books/content?id=1OJ8EhvuPXAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", },
          shelf: "reading",
          id: "1OJ8EhvuPXAC"
        },
        {
          title: "Games for Language Learning",
          authors: ["Andrew Wright", "David Betteridge", "Michael Buckby"],
          imageLinks: { smallThumbnail: "http://books.google.com/books/content?id=U9Y_NeY0Y…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=zOgkAQAAI…J&printsec=frontcover&img=1&zoom=5&source=gbs_api" },
          shelf: "read",
          id: "U9Y_NeY0YMsC"
        }
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} />
          
        )} />
        <Route exact path='/search' render={() => (
          <SearchBooks books={this.state.searchResult} />
          
        )} />
      </div>
    )
  }
}



export default App


