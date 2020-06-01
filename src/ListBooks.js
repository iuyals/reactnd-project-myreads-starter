import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import React from 'react'
import Book from './Book'

class ListBooks extends React.Component {
    render() {
        let books = this.props.books;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf title="Current Reading"
                        books={books.filter(b => b.shelf === 'currentlyReading')}
                        moveTo={this.props.moveTo}
                    />
                    <BookShelf title="Want read"
                        books={books.filter(b => b.shelf === 'wantToRead')}
                        moveTo={this.props.moveTo}
                    />
                    <BookShelf title="read"
                        books={books.filter(b => b.shelf === 'read')}
                        moveTo={this.props.moveTo}
                    />
                </div>
                <SearchButton />
            </div>
        )
    }
}
ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
}

export default ListBooks;


class BookShelf extends React.Component {
    render() {
        const books = this.props.books;
        return (
            <div className="book-shelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(b => {
                            return (
                                <li key={b.id}><Book book={b} moveTo={this.props.moveTo} /></li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

class SearchButton extends React.Component {

    render() {
        return (
            <Link to='/search' className='open-search'>
                <button></button>
            </Link>
        )
    }
}


