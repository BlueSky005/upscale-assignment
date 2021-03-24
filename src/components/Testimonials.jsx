import React from 'react'
import TestimonialsStyles from '../css/TestimonialsStyles.module.css';
import { testimonialsOverviewData, testimonialsData } from "../assets/data";

function Testimonials () {
    return (
        <>
            <div style={{ backgroundColor: 'white' }}>
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
            </div>
            <div className={TestimonialsStyles.testimonialsContainer}>
                {testimonialsData.map( ( testimonial, i ) => {
                    return (
                        <div className={TestimonialsStyles.testimonialCard} key={i}>
                            {/* <div>
                                <img src={testimonial.clientImg} />

                                <label className={TestimonialsStyles.testimonialCardR}>
                                    <span>{testimonial.clientName}</span>
                                    <span>{testimonial.companyName}</span>
                                </label>
                            </div> */}

                            <div className={TestimonialsStyles.testimonialHeader}>
                                <img src={testimonial.clientImg} style={{ borderRadius: '50%' }} />
                                <label style={{ display: 'flex', flexFlow: 'column wrap' }}>
                                    <span className={TestimonialsStyles.clientName} >{testimonial.clientName}</span>
                                    <span className={TestimonialsStyles.companyName} >{testimonial.companyName}</span>
                                </label>

                            </div>

                            <div className={TestimonialsStyles.testimonialDesc}>
                                Last few years I was closely following company activities and always trying out their latest products, and
                                needless to say, I was never disappointed.
                            </div>

                        </div>
                    )
                } )}
            </div>

        </>
    )
}

export default Testimonials
