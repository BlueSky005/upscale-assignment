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

            <SectionTitle title="Latest Company News" />

            <div className={LatestNewsStyles.newsCardsContainer} >
                {latestNews.map( ( news, i ) => {
                    return (

                        <div className={LatestNewsStyles.newsCards} key={i}>

                            <img src={news.newsImg} className={LatestNewsStyles.newsImg} />

                            <div className={LatestNewsStyles.newsCardTitleContainer}>
                                <label className={LatestNewsStyles.newsCardTitle}><a href="">{news.titleLink}</a></label>
                            </div>

                            <div className={LatestNewsStyles.newsCardDescContainer}>
                                <p className={LatestNewsStyles.newsDate}>{news.newsDate}</p>
                            </div>

                        </div>

                    )
                } )}
            </div>

        </>
    )
}
