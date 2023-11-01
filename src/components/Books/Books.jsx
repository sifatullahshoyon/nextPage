import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {
    const {books} = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingSpinner />
    }
    return (
        <div>
            <div className='my-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-8'>
                {
                    books?.map(book => <Book
                    key={book.isbn13}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;