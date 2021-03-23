import React, { useState, useEffect } from 'react'
import { EntypoNetwork, EntypoLineGraph, EntypoFeather, EntypoGraduationCap } from 'react-entypo';
// import logo from '../assets/services/business-newspaper-380x213.jpg';

import ServiceStyles from '../css/Services.module.css';
import { servicesData } from "../assets/data";

function Services () {

    const [services, setServices] = useState( [] )

    useEffect( () => {
        setServices( servicesData );
    } );

    return (
        <div className={ServiceStyles.servicesContainer}>
            <div className={ServiceStyles.servicesTitleContainer}>
                <span className={ServiceStyles.servicesTitle}>Your business will change forever with our innovative services.</span>
            </div>

            <div className={ServiceStyles.serviceOverViewContainer}>

                <div className={ServiceStyles.serviceOverViewContent}>
                    <EntypoNetwork className={ServiceStyles.serviceIcons} />
                    <div className={ServiceStyles.serviceOverViewTitleContainer}>
                        <span className={ServiceStyles.serviceOverViewTitle}>Business network</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', color: '#999' }}></span> Gain access to our global business network and community.
                   </div>
                </div>
                <div className={ServiceStyles.serviceOverViewContent}>
                    <EntypoLineGraph className={ServiceStyles.serviceIcons} />
                    <div className={ServiceStyles.serviceOverViewTitleContainer}>
                        <span className={ServiceStyles.serviceOverViewTitle}>Data analysis</span>
                    </div>
                    <div>
                        Discover innovative next generation sequencing data analysis.
                   </div>
                </div>
                <div className={ServiceStyles.serviceOverViewContent}>
                    <EntypoFeather className={ServiceStyles.serviceIcons} />
                    <div className={ServiceStyles.serviceOverViewTitleContainer}>
                        <span className={ServiceStyles.serviceOverViewTitle}> Personal approach</span>
                    </div>
                    <div>
                        We strive to meet your needs and to exceed your expectations.
                   </div>
                </div>
                <div className={ServiceStyles.serviceOverViewContent}>
                    <EntypoGraduationCap className={ServiceStyles.serviceIcons} />
                    <div className={ServiceStyles.serviceOverViewTitleContainer}>
                        <span className={ServiceStyles.serviceOverViewTitle}>Unparalleled knowledge </span>
                    </div>
                    <div>
                        Experience the best industry experts working for your business.
                   </div>
                </div>

            </div>

            <div className={ServiceStyles.serviceCardsContainer} >
                {servicesData.map( ( service, i ) => {
                    return (

                        <div className={ServiceStyles.serviceCards} key={i}>

                            <img src={service.serviceImg} className={ServiceStyles.servicesImg} />

                            <div className={ServiceStyles.serviceCardTitleContainer}>
                                <label className={ServiceStyles.serviceCardTitle}>{service.serviceTitle}</label>
                            </div>

                            <div className={ServiceStyles.serviceCardDescContainer}>
                                <p>{service.serviceDesc}</p>
                            </div>

                        </div>

                    )
                } )}
            </div>



        </div>
    )
}

export default Services
