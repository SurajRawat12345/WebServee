import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
    const navigate = useNavigate();
    return (
        <div className='Page404 Container p-4 bg-dark text-center'>
            <h1 className='white-color'> Error 404 </h1>
            <h2 className='white-color'> Page Not Found </h2>
            <button className='btn btn-success' onClick={() => navigate('/')} > Go Back </button>
        </div>    
    )
}

export default Page404 ;