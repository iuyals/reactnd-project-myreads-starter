import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'
import Book from './Book'


export default class SearchBooks extends React.Component {
    static propsTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {
        return (
            <div className="search-books">
                <SearchBooksBar />
                <SearchBooksResults books={this.props.books} />
            </div>
        )

    }
}

class SearchBooksBar extends React.Component {

    render() {
        return (
            <div className="search-books-bar">
                <Link to='/'className='close-search'>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" />

                </div>
            </div>
        )
    }
}

class SearchBooksResults extends React.Component {

    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.map(b => {
                        return <li key={b.id + 'result'}><Book book={b} /></li>
                    })}
                </ol>
            </div>
        )
    }
}