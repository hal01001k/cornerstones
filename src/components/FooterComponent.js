import React from 'react';
import {NavLink} from "react-router-dom";
function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/aboutus'>About Us</NavLink></li>
                            <li><strong>Contact Us</strong></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Hanuman Path<br />
                            Sironj<br />
                            Bhopal<br />
                            <i className="fa fa-phone fa-lg"/> : +91 8269874598<br/>
                            <i className="fa fa-mobile fa-lg"/> : +91 7094959888<br/>
                            <i className="fa fa-envelope fa-lg"/> : <a href="mailto: cornerstones.in@gmail.com">cornerstones.in@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"/></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"/></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"/></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"/></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"/></a>
                            <a className="btn btn-social-icon" href="mailto: cornerstones.in@gmail.com"><i className="fa fa-envelope-o"/></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p><i className="fa fa-copyright" aria-hidden="true"/> 2020 Cornerstone Inc</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;