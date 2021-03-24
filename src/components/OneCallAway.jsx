import React from 'react'
import OneCallAwayStyles from '../css/OneCallAway.module.css';
import SectionTitle from '../library/SectionTitle';

function OneCallAway () {
    return (

        <>

            <div className={OneCallAwayStyles.oneCallAwayContainer}>
                <div className={OneCallAwayStyles.oneCallAwayLContainer}>
                    <SectionTitle title="One Call Away" />
                    <p className={OneCallAwayStyles.desc}>You are only one call away from giving your business a boost. Vestibulum pellentesque vitae nibh eget condimentum. Aliquam in semper dui, ac mattis tortor. Phasellus at blandit justo, id maximus sapien. Fusce iaculis, mi vitae euismod accumsan, tortor augue ultricies lorem.</p>

                    <p className={OneCallAwayStyles.desc}>Consectetur adipiscing elit. Fusce nec elit eu dolor pretium feugiat sit amet et turpis. Pellentesque tempor porta convallis. Proin mattis libero vel ipsum condimentum in porta sapien ornare.</p>
                </div>

                <div className={OneCallAwayStyles.oneCallAwayRCard}>
                    <label className={OneCallAwayStyles.oneCallAwayRCardTitle}>Leave your contacts and we will call you.</label>
                    <div className={OneCallAwayStyles.oneCallAwayTxtContainer}>
                        <input type="text" className={OneCallAwayStyles.oneCallAwayTxt} placeholder="Full name" />
                    </div>

                    <div className={OneCallAwayStyles.oneCallAwayTxtContainer}>
                        <input type="text" className={OneCallAwayStyles.oneCallAwayTxt} placeholder="Phone number e.g. (800) 202-555-0120" />
                    </div>

                    <p className={OneCallAwayStyles.oneCallAwayRDesc}>This form is not to be used for advertising purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra dolor a mauris ornare hendrerit.</p>

                    <div>
                        <button className={OneCallAwayStyles.oneCallAwayRBtn}>Request</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default OneCallAway
