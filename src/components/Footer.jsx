import React from 'react'
import FooterStyles from '../css/Footer.module.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer () {
    return (
        <>

            <footer className={FooterStyles.footer}>
                <div className="container">
                    <div className={FooterStyles.row}>
                        <div className={FooterStyles.footerCol}>
                            <label className={FooterStyles.footerHeader}>Company</label>
                            {/* <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul> */}

                            <p className={FooterStyles.footerContent}>
                                4982 Parkway Street,
                            <br />
                            Los Angeles,
                            <br />

                            CA 90017
                            <br />

                            Tel: (800) 202-555-0120
                            <br />

                            info@upscaledemo.com
                            </p>

                            <div className={FooterStyles.socialLinks}>
                                <a href="#"> <i className="fa fa-twitter"></i></a>
                                <a href="#"> <i className="fa fa-facebook"></i></a>
                                <a href="#"> <i className="fa fa-skype"></i></a>
                                <a href="#"> <i className="fa fa-google-plus"></i></a>
                            </div>

                        </div>
                        <div className={FooterStyles.footerCol}>
                            <label className={FooterStyles.footerHeader}>Navigate</label>
                            <ul >
                                <li ><a href="#">About Us</a></li>
                                <li><a href="#" >Our Team</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Help & FAQ</a></li>
                                <li><a href="#">Our Blog</a></li>
                            </ul>
                        </div>
                        <div className={FooterStyles.footerCol}>
                            <label className={FooterStyles.footerHeader}>Services</label>
                            <ul>
                                <li><a href="#">Digital Solutions</a></li>
                                <li><a href="#">Business Design</a></li>
                                <li><a href="#">People & Talent</a></li>
                                <li><a href="#">Strategy Planning</a></li>
                                <li><a href="#">Implementation</a></li>
                            </ul>
                        </div>
                        <div className={FooterStyles.footerCol}>
                            <label className={FooterStyles.footerHeader}>Subscribe to latest news</label>
                            {/* <div className={FooterStyles.socialLinks}>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div> */}

                            <div className={FooterStyles.footerContent}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <input type="text" className={FooterStyles.footerTxt} placeholder="Your e-mail address" />
                                    <button className={FooterStyles.footerBtn}>Sign Up</button>

                                </div>
                                <br />
                                <div style={{ marginTop: '1rem', paddingTop: '2rem' }}>
                                    <span >Latest news delivered right to your inbox!</span>
                                </div>
                                <div>
                                    <em>Your information will be kept confidential and we will not send spam.</em>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div style={{
                        marginTop: '3rem', marginBottom: '0.5rem',
                        borderTop: '1px solid rgba(0,0,0,0.1)',
                        paddingTop: '30px'
                    }}>
                        {/* <hr /> */}
                    </div>
                    <div className={FooterStyles.footerCopyRightInfo}>
                        <p>© 2020 MNKY Studio. Place your own copyright message.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
