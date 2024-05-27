import React from 'react'
import "../styles/Footer.css";
// import 

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h5>Location</h5>
                            <p>39, Abike Jokogbola Street, Sholebo Estate, Ikorodu, Lagos, Nigeria</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Opening Hours</h5>
                            <p>Everyday: 8AM - 6PM</p>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +234 705 791 6440</p>
                            <p><i class="fa-solid fa-envelope"></i> shakodeherbs@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* <div>
                </div> */}
            </div>
                <p className='shakode'> &copy; 2024 shakode.com</p>
        </>
    )
}

export default Footer
