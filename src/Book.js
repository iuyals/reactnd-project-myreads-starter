import React from 'react'

export default class Book extends React.Component {
    render() {
        let book = this.props.book;
        //some book dont have imageLinks,need check first
        if (('imageLinks' in book) === false) {
            book.imageLinks = {
                thumbnail: 'http://imgnotfound'
            };
        }
        if (('authors' in book) === false) {
            book.authors = ['unknow']
        }
        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover" src={book.imageLinks["thumbnail"]} alt='book cover' style={{ width: 128, height: 193, }} />
                    <ShelfChanger book={this.props.book} moveTo={this.props.moveTo} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

function ShelfChanger(props) {

    return (
        <div className="book-shelf-changer">
            <select value='move' onChange={(event) => props.moveTo(props.book, event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
