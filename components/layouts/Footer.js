import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='footer-container d-flex justify-content-between'>
                <div>
                    <div className='footer-text-bold'>Your name</div>
                    <div className='footer-text-light'>A few words about how you found Coinable and<br /> how did you feel about this task. </div>
                </div>
                <div className='footer-arrow justify-content-center'><i class="bi bi-arrow-bar-up"></i></div>
            </div>
        </>
    )
}

export default Footer;