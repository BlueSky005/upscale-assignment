import React from 'react';
import BannerImg from '../assets/city-clouds.jpg';

function BannerImage () {

    const bannerConatiner = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: '300',
        fontSize: '26px'
    }

    const tagLine = {
        position: 'absolute',
        top: '9rem'
    }

    return (
        <div style={bannerConatiner}>

            <img src={BannerImg} style={{ width: '100%', 'height': '220px', marginTop: '2.5rem' }} />
            <div style={tagLine}>There are no secrets to success. It is the result of preparation and hard work.</div>
        </div>
    )
}

export default BannerImage
