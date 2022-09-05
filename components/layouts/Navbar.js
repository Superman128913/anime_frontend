import React from 'react';
import Modal from '../modal';

const Navbar = () => {
    const [showModal, setShowModal] = React.useState(false);

    var today = new Date();
    
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    // this.state = {
    //     date: date
    // };

    return (
        <>
            <div className='navbar-container d-flex justify-content-between'>
                <div className='navbar-title'>Anime</div>
                <div>
                    <input className='navbar-searchbar' placeholder='&#128269; Search...' type="text" onClick={() => setShowModal(true)}/>
                    {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
                    <Modal
                        onClose={() => setShowModal(false)}
                        show={showModal}
                    >
                    </Modal>
                </div>
                <div className='navbar-date'>
                    Today is {today.toLocaleDateString(undefined, options)}
                    
                </div>
            </div>

            
        </>
    )
}

export default Navbar;