import React from 'react';
function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><strong to='/home'>Home</strong></li>
                            <li><strong to='/aboutus'>About Us</strong></li>
                            <li><strong to='/contactus'>Contact Us</strong></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            95 & 99, Zircon C<br />
                            Opel, Quarters <br />
                            TRI CHY.<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 7094959888<br />
                            <i className="fa fa-mobile fa-lg"></i>: +91 7073877699<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="3">info@cornerstone.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="3"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p><i className="fa fa-copyright" aria-hidden="true"></i> 2020 Cornerstone Inc</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;