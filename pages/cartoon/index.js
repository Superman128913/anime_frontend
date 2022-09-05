import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';
import Category from '../../components/category';

const datas = [
    { text: 'Kyoukai no Kanata1' },
    { text: 'Kyoukai no Kanata2' },
    { text: 'Kyoukai no Kanata3' },
    { text: 'Kyoukai no Kanata4' },
    { text: 'Kyoukai no Kanata5' },
    { text: 'Kyoukai no Kanata6' },
    { text: 'Kyoukai no Kanata7' },
    { text: 'Kyoukai no Kanata8' },
    { text: 'Kyoukai no Kanata9' },
]

const Cartoon = () => {
    return (
        <>
            <Navbar />
            <hr />

            <Category categories={datas} />
            <div id="modal-root"></div>

            <hr />
            <Footer />
        </>
    )
}

export default Cartoon;