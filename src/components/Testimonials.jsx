import React from 'react'
import TestimonialsStyles from '../css/TestimonialsStyles.module.css';
import { testimonialsOverviewData } from "../assets/data";

function Testimonials () {
    return (
        <>

            <div className={TestimonialsStyles.title}>
                <span className={TestimonialsStyles.titleCaption}>Client Testimonials</span>

            </div>
            <div className={TestimonialsStyles.titleMarkerContainer}>
                <hr className={TestimonialsStyles.titleMarker} />
            </div>

            <div className={TestimonialsStyles.testimonialsOverViewContainer} >
                {
                    testimonialsOverviewData.map( ( testimonial, i ) => {
                        return (


                            <div className={TestimonialsStyles.testimonialsOverViewContent} key={i}>
                                <img src={testimonial.companyImg} />
                                {/* <EntypoNetwork className={TestimonialsStyles.serviceIcons} /> */}
                                {/* <div className={TestimonialsStyles.testimonialsOverViewTitleContainer}>
                                    <em className={TestimonialsStyles.testimonialsOverViewTitle}>{testimonial.tagLine}</em>
                                </div> */}
                                <div>
                                    <em style={{ fontSize: '14px', color: '#999' }}>{testimonial.tagLine}</em>
                                </div>
                            </div>

                        )
                    } )

                }
            </div>

        </>
    )
}

export default Testimonials
