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
            books: [],
            searchResult: []
        }
    }

    moveTo(choosedBook, targetShelf) {
        choosedBook.shelf = targetShelf;
        let isInShelf = false;
        let updatedBooks = this.state.books.map(b => {
            if (b.id === choosedBook.id) {
                b.shelf = targetShelf;
                isInShelf = true;
            }
            return b;
        })
        if (isInShelf === false) {
            updatedBooks = updatedBooks.concat([choosedBook]);
        }

        this.setState({
            books: updatedBooks,
        })
        BooksAPI.update(choosedBook, targetShelf);

    }

    search(query) {
        BooksAPI.search(query).then(books => {
            this.setState({
                searchResult: books
            })
        })
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({
                books
            })
        });

    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                        moveTo={(book, shelf) => this.moveTo(book, shelf)}
                    />
                )} />
                <Route exact path='/search' render={() => (
                    <SearchBooks
                        books={this.state.searchResult}
                        search={query => this.search(query)}
                        moveTo={(book, shelf) => this.moveTo(book, shelf)}
                    />

                )} />
            </div>
        )
    }
}



export default App


