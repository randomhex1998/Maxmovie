import React from 'react';

const SliderBox = ({collIMG , collTxt , }) => {
    return (
        <a href='#' className='coll-box'>
            <div className='coll-img-area'>
                <img src={collIMG} className="coll-img"></img>
            </div>
            <p className='coll-text'>{collTxt}</p>
        </a>
    );
};

export default SliderBox;