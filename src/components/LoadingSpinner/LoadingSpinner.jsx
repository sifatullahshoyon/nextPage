import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <p className='text-7xl font-lato'>L</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full mt-5 border-blue-400 animate-spin'></div>
            <p className='text-7xl font-lato'>ading....</p>
        </div>
    );
};

export default LoadingSpinner;