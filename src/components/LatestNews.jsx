import React, { useState, useEffect } from 'react';
import SectionTitle from '../library/SectionTitle';

import LatestNewsStyles from '../css/LatestNews.module.css';
import { latestCompanyNewsData } from "../assets/data";

export default function LatestNews () {

    const [latestNews, setLatestNews] = useState( [] )

    useEffect( () => {
        setLatestNews( latestCompanyNewsData );
    } );

    return (
        <>

            {/* <div style={{ marginTop: '2rem' }}>
                <span className={LatestNewsStyles.titleCaption}>Latest Company News</span>

            </div>
            <div style={{ width: '4.5rem', marginLeft: '8%', marginTop: '2rem' }}>
                <hr style={{ backgroundColor: '#db2531', height: '2px', width: '4.5rem', border: 'none', color: '#db2531' }} />
            </div> */}

            <SectionTitle title="Latest Company News" />


            <div className={LatestNewsStyles.newsCardsContainer} >
                {latestNews.map( ( news, i ) => {
                    return (

                        <div className={LatestNewsStyles.newsCards} key={i}>
                            {/* <Card key={i}> */}
                            <img src={news.newsImg} className={LatestNewsStyles.newsImg} />

                            <div className={LatestNewsStyles.newsCardTitleContainer}>
                                <label className={LatestNewsStyles.newsCardTitle}>{news.titleLink}</label>
                            </div>

                            <div className={LatestNewsStyles.newsCardDescContainer}>
                                <p className={LatestNewsStyles.newsDate}>{news.newsDate}</p>
                            </div>
                            {/* </Card> */}

                        </div>

                    )
                } )}
            </div>

        </>
    )
}
