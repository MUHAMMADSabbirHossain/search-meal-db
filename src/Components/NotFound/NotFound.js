import React from 'react';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold'><span className='font-extrabold'>404 Error!</span> The page is not found.</h1>
            <h3>Please try later.</h3>
        </div>
    );
};

export default NotFound;