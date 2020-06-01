import React from 'react'

export default class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover" src={this.props.book.imageLinks["thumbnail"]} alt='book cover' style={{ width: 128, height: 193, }} />
                    <ShelfChanger />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

function ShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}