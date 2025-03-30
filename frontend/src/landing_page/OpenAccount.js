import React from 'react';

function OpenAccount(){
    return(
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 >Start your trading journey today</h1>
                <p>open an account in minutes and take control of your investments.</p>
                <a className='p-2 btn btn-success fs-5 mb-5' style={{width:"20%", margin:"0 auto"}} href='/signup'>Sign Up Now</a>
            </div>
        </div>
    );
}

export default OpenAccount;