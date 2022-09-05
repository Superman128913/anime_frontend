import React from 'react';
import Link from 'next/link'

const Category = props => {
    const { categories } = props;
    const [page, setPage] = React.useState(1);
 
    return (
        <div>
            <div className='category-container'>
                <div className='row'>
                    {
                        categories.map((item, index) => {
                            return (
                                <div className='col-md-4 category-items' key={index}>
                                    <Link href='/cartoon/detail'>
                                        <div className='category-gradient position-absolute'>
                                            <div className='category-gradient-text'>
                                                {item.text}
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='category-main'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center category-button'>
                <button><i className='bi bi-arrow-left-short' /></button>                    
                <div className='d-flex align-items-center mx-2'>{page}</div>
                <button><i className='bi bi-arrow-right-short' /></button>                    
            </div>
        </div>
    )
}

export default Category;