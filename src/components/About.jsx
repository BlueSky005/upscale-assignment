import React, { useState } from 'react'
import AboutStyles from '../css/AboutStyles.module.css';
import SectionTitle from '../library/SectionTitle';
import HorizontalRow from './HorizontalRow';
import { EntypoMinus } from 'react-entypo';

function About () {

    const [upScale, setUpScale] = useState( true );
    const [service, setService] = useState( false );
    const [business, setBusiness] = useState( false );
    const [chooseUpScale, setChooseUpScale] = useState( false );


    const toggleUpScale = () => {
        setUpScale( upScale === true ? false : true );
        setService( false );
        setBusiness( false );
        setChooseUpScale( false );
    }

    const toggleService = () => {
        setService( service === true ? false : true )
        setUpScale( false );
        setBusiness( false );
        setChooseUpScale( false );
    }

    const businessToggle = () => {
        setBusiness( business === true ? false : true );
        setChooseUpScale( false );
        setService( false )
        setUpScale( false );
    }

    const chooseUpScaleToggle = () => {
        setChooseUpScale( chooseUpScale === true ? false : true );
        setBusiness( false );
        setUpScale( false );
        setService( false )
    }
    return (
        <>

            <div className={AboutStyles.AboutContainer}>
                <div className={AboutStyles.AboutLContainer}>
                    <SectionTitle title="About Our Company" />

                    <div className={AboutStyles.AboutLContent} >
                        <p style={{ marginBottom: '1.5rem' }}>
                            We at UpScale are dolor sit amet, consectetur adipiscing elit. Nunc finibus fermentum nibh, tempor venenatis mi unparalleled performance. Donec ac rhoncus lorem. Pellentesque aliquam velit non est semper elementum.
                </p>

                        <p style={{ marginBottom: '1.5rem' }} > <EntypoMinus className={AboutStyles.AboutIcons} />UpScale is a global business consulting company that delivers innovative solutions through its services.</p>

                        <p style={{ marginBottom: '1.5rem' }} > <EntypoMinus className={AboutStyles.AboutIcons} /> Our headquaters are in New York. With offices in London, Berlin and Tokyo.</p>

                        <p style={{ marginBottom: '1.5rem' }} > <EntypoMinus className={AboutStyles.AboutIcons} /> Founded in 1965, we are providing business consulting services for more than 50 years.</p>

                        <p style={{ marginBottom: '1.5rem' }}><EntypoMinus className={AboutStyles.AboutIcons} /> We are involved in more thatn 400 projects in any one time. These range in value from 1000$ to more than 10$ million.</p>
                    </div>

                </div >

                <div className={AboutStyles.AboutRContainer} style={{ marginLeft: '2rem', paddingTop: '0rem' }}>

                    <div className={AboutStyles.AboutRHeader}>
                        <label>What is UpScale?</label>

                        {upScale === true ? (
                            <i className={`fa fa-chevron-up ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={toggleUpScale}></i>
                        ) : (
                            <i className={`fa fa-chevron-down ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={toggleUpScale}></i>
                        )
                        }


                    </div>

                    <div>
                        {upScale &&
                            <p>
                                UpScale is at orci ultrices suscipit. Quisque ac metus et ante laoreet dignissim eu in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla in lacus sed libero dapibus sodales.

                            </p>
                        }

                    </div>
                    <HorizontalRow style={{ paddingTop: '0rem' }} />


                    <div className={AboutStyles.AboutRHeader}>
                        <label>What services we provide?</label>

                        {service === true ? (
                            <i className={`fa fa-chevron-up ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={toggleService}></i>
                        ) : (
                            <i className={`fa fa-chevron-down ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={toggleService}></i>
                        )
                        }
                    </div>

                    <div>
                        {service &&
                            <p>
                                Pellentesque sed interdum eros. Aenean condimentum est eu lorem accumsan tincidunt. Curabitur posuere tincidunt mi, quis consequat sem tincidunt ut. In feugiat urna ac finibus auctor.
                        </p>
                        }
                    </div>
                    <HorizontalRow style={{ paddingTop: '0rem' }} />

                    <div className={AboutStyles.AboutRHeader}>
                        <label>How can we help your business?</label>
                        {business === true ? (
                            <i className={`fa fa-chevron-up ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={businessToggle}></i>
                        ) : (
                            <i className={`fa fa-chevron-down ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={businessToggle}></i>
                        )
                        }
                    </div>

                    <div>
                        {business &&
                            <p>
                                Sed rhoncus egestas lectus egestas finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ultrices nisi, non feugiat nisi. Curabitur cursus neque vel lobortis finibus. Nullam quis consequat justo.
                        </p>
                        }
                    </div>
                    <HorizontalRow style={{ paddingTop: '0rem' }} />


                    <div className={AboutStyles.AboutRHeader}>
                        <label>Why should you choose UpScale?</label>

                        {chooseUpScale === true ? (
                            <i className={`fa fa-chevron-up ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={chooseUpScaleToggle}></i>
                        ) : (
                            <i className={`fa fa-chevron-down ${AboutStyles.AboutRToggle}`} aria-hidden="true" onClick={chooseUpScaleToggle}></i>
                        )
                        }
                    </div>

                    <div>
                        {chooseUpScale &&
                            <p>
                                Integer tristique congue ex sit amet tincidunt. Nulla vitae arcu fringilla, fermentum arcu malesuada, mattis ante. Sed in erat quis turpis consequat scelerisque sed id est. Etiam gravida tellus in mauris.
                        </p>
                        }
                    </div>
                    <br /><br />

                </div>

            </div >
        </>
    )
}

export default About
