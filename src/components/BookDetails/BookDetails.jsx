import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const singleBookData = useLoaderData();
    console.log(singleBookData)
    return (
        <div>
            
        </div>
    );
};

export default BookDetails;