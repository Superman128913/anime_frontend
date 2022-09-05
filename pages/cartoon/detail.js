import React from 'react';
import Link from 'next/link'

const Detail = () => {
    return (
        <>
            <div className='detail-container'>
                <div className='d-flex'>
                    <div>
                        <Link href='/cartoon'>
                            <i class="bi bi-arrow-left"></i>
                        </Link>
                    </div>
                    <div>
                        <p className='detail-previous'>Go to previous</p> 
                    </div>
                    
                </div>
                    <div className='detail-content d-flex '>
                        <div className='detail-image'></div>
                        <div>
                            <h3 className='detail-header'>Shingeki no Kyotou<i></i></h3>
                            <div className='d-flex detail-sub'>
                                <label>Type</label>
                                <span>-------------------------------------- </span>
                                <p>Movie</p>
                            </div>
                            <div className='d-flex detail-sub'>
                                <label>Source</label>
                                <span>----------------------------------- </span>
                                <p>Merge</p>
                            </div>
                            <div className='d-flex detail-sub'>
                                <label>Episodes</label>
                                <span>--------------------------------------- </span>
                                <p> 1</p>
                            </div>
                            <div className='d-flex detail-sub'>
                                <label>Status</label>
                                <span>--------------------------</span>
                                <p>Finished Airing</p>
                            </div>
                            <div className='d-flex'>
                                <div className='detail-number-first'>6.39<br/><p>Score</p></div>
                                <div className='detail-number'>7,076<br/><p>Rank</p></div>
                                <div className='detail-number'>3,979<br/><p>Popularity</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail-description'>
                        <h4>Description</h4>
                        <div>
                            A special anime featuring a battle against the Colossal Titan screened at the Tokyo Skytree. In the short,<br/>
                            the characters from Shingeki no Kyojin are part of the Sky Survey Corps, pretcting the Wall Skytree, a<br/>
                            section of the walled city that contains the Skytree. The Sky Survey Corps find that the Wall Skytree is<br/>
                            under attack by an army of titans, including a giant 350 meter-class titan that has suddenly appeared next<br/>
                            to the Skytree and remains motionless. (Source: Anime Now!)
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Detail;