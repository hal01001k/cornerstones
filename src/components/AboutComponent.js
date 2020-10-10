import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardTitle from "reactstrap/lib/CardTitle";
import CardSubtitle from "reactstrap/lib/CardSubtitle";
import CardText from "reactstrap/lib/CardText";
import Button from "reactstrap/lib/Button";

function About() {

    const ParallaxImage = () => (
        <Parallax className="custom-class" y={[-25, 25]} tagOuter="figure">
            <img src="logoM.png" alt="Logo"/>
        </Parallax>
    );
    return (
        <div>
            <div className="section">
                <p style={{paddingTop: '110px', fontSize: 80, textAlign: "center", fontFamily: 'Cabin'}}>Our Story</p>
            </div>
            <div className="container phont">
                <div className="row" style={{paddingTop: '50px'}}>
                    <div className="col-12 col-md-6">
                        <h2>Our Team</h2>
                        <p>
                            We have well trained and skilled personnel employed.
                            They share the same values and ethics as our company. Our Goal is to provide as well and
                            satisfactory service
                            to our customer. With our optimized model we are always strive to provide affordable housing
                            with
                            exception Aesthetics with keeping customer satisfaction as priority.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="undraw/team.svg" alt="team"/>
                    </div>
                </div>

                <hr/>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <ParallaxImage/>
            </div>
            <section className="py-5">
                <div className="container text-center">
                    <h2>Other Perks</h2>
                    <p className="mb-5">Extra reason to help you.</p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img className="mb-3 rounded-circle"
                                 src="undraw/design_components.svg" height="120" alt=""/>
                            <h5 className="mb-0">Optimized</h5>
                            <small>Data</small>
                            <p className="my-4 text-muted"> When I'm not obsessively stressing about the fate of
                                Pied Piper, I sometimes give lectures to school kids. Spend most of my time
                                coding.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="mb-3 rounded-circle"
                                 src="undraw/personal_finance.svg" height="120" alt=""/>
                            <h5 className="mb-0">Money Saver</h5>
                            <small>keeps your pocket full</small>
                            <p className="my-4 text-muted">I am the absolute best programmer at Pied Piper
                                (especially better than Gilfoyle). My genius shines and guides the Pied Piper
                                team.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="mb-3 rounded-circle"
                                 src="undraw/respond.svg" height="120" alt=""/>
                            <h5 className="mb-0">Well Explained</h5>
                            <small>System's Architect</small>
                            <p className="my-4 text-muted">I work on Pied Piper only for the advanced
                                technology. I don't really like most people I work with, but they need me to put
                                out their fires, so&nbsp;I&nbsp;stay.</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="container"/>
            <section className="py-5">
                <div className="container text-center">
                    <h2>Our plans</h2>
                    <div className="row">
                        <div className="col-md-4 my-4">
                            <div className="border rounded p-4 h-100">
                                <h3 className="mb-3 font-weight-normal">Architecture</h3>
                                <p className="lead">Join our network, but build and manage everything yourself.</p>
                                <p className="my-4">Reasonably<small className="text-muted"> Priced</small></p>
                                <a className="btn btn-lg btn-outline-primary" type="button" href="/architecture">Visit
                                    Architecture</a>
                            </div>
                        </div>
                        <div className="col-md-4 my-4">
                            <div className="border rounded p-4 h-100">
                                <h3 className="mb-3 font-weight-normal">Interior</h3>
                                <p className="lead">We build what you need, but you still need to manage your data.</p>
                                <p className="my-4">Reasonably<small className="text-muted"> Priced</small></p>
                                <a className="btn btn-lg btn-outline-primary" href="/interior" type="button">Contact
                                    Sales</a>
                            </div>
                        </div>
                        <div className="col-md-4 my-4">
                            <div className="border rounded p-4 h-100">
                                <h3 className="mb-3 font-weight-normal">Woodwork</h3>
                                <p className="lead">We do everything for you, including managing your data.</p>
                                <p className="my-4">Reasonably<small className="text-muted"> Priced</small></p>
                                <a className="btn btn-lg btn-outline-primary" href="/interior" type="button">Contact
                                    Sales</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <p style={{
                    paddingTop: '10px',
                    fontSize: 40, textAlign: "center",
                    fontFamily: 'Cabin'
                }}>
                    -Our Mission-</p>
                <p style={{
                    paddingTop: '8px',
                    fontSize: 20, textAlign: "center",
                    fontFamily: 'Varela Round'
                }}>
                    We strive to offer our customers the lowest price property available, the best designers, and the
                    utmost convenience.</p>
                <p style={{
                    paddingTop: '20px',
                    fontSize: 40, textAlign: "center",
                    fontFamily: 'Cabin'
                }}>
                    -Our Vision-</p>
                <p style={{
                    paddingTop: '8px',
                    fontSize: 20, textAlign: "center",
                    fontFamily: 'Varela Round'
                }}>
                    To be one of the biggest triune company for the upcoming foreign investments in the country.</p>

            </div>
            <div className="container space">
                <text style={{fontSize: 30}}>Head Office</text>
                <p>Always available contact us at any time. we are more then happy to help.</p>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="undraw/map.svg" alt="map"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card>
                            <CardBody>
                                <CardTitle>Address</CardTitle>
                                <CardSubtitle>Meet us in Person</CardSubtitle>
                                <CardText>Address of the main office with every detail.</CardText>
                                <Button color="primary">Call</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
