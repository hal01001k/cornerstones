import React from 'react';
import {Card, Button, CardTitle, CardText, CardDeck, CardBody, CardSubtitle} from 'reactstrap';
import Kerosel from './CarouselComponent'
import Box from '@material-ui/core/Box';
import
{
    defaultProps1, defaultProps2,
    styleObj, styleObj1,
    Ig

} from "./AttComponent";
import HorizontalLabelPositionBelowStepper from "./Steps"


function Home() {
    return (
        <div>
            <Kerosel/>
            <div className="section phont">
                <div className="container d-none d-md-block">
                    <div className="row" style={{paddingTop: '75px'}}>
                        <div className="col-12 col-md-4">
                            <img style={Ig} src="icons/Done.svg" alt="Done"/>
                            <p>We find suitable interior for your home.
                               All our services are approved and well maintained.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img style={Ig} src="icons/Waiting.svg" alt="wait"/>
                            <p>We find suitable architecture for your home. We
                            finish our services in time with every step.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img style={Ig} src="icons/Success.svg" alt="Success"/>
                            <p>We find suitable property for your home. we Provide professional and
                               world class service.</p>
                        </div>
                    </div>
                </div>
                <div className="container d-block d-sm-none">
                    <section className="py-5">
                        <div className="container text-center">
                            <strong>The New Internet</strong>
                            <h5 className="display-5 my-5">We've built a decentralized internet where information is
                                totally free</h5>
                            <a className="btn btn-primary btn-raised mt-2" href="#">Read more</a>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container phont" style={{ paddingTop:'50px' }}>
              <h1>How it's done?</h1>
            </div>
            <div className="container" style={{paddingTop:'50px'}}>
                <HorizontalLabelPositionBelowStepper/>
            </div>
            <div className="container phont" style={{paddingTop: '50px'}}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d05f6f1c9e4d68fe9d0ac8a_drawkit-grape-pack-illustration-1-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                        <div className="d-block d-sm-none">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps2}>
                                <p style={styleObj1}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                        <div className="d-block d-sm-none">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps2}>
                                <p style={styleObj1}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d05f9736a93605e6d950a1e_drawkit-grape-pack-illustration-4-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4" >
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d06154c6a9360b7a49538b6_drawkit-grape-pack-illustration-8-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                        <div className="d-block d-sm-none">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps2}>
                                <p style={styleObj1}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                        <div className="d-block d-sm-none">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps2}>
                                <p style={styleObj1}>
                                    <h1>Hello!</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </Box>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d060ea7c9e4d60c42d0d010_drawkit-grape-pack-illustration-5-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <p>
                        <h2>Feature</h2>
                        This section includes list of all features
                    </p>
                </div>
                <div >
                    <CardDeck className="phont" style={{paddingBottom:"20px"}}>
                        <Card>
                            <CardBody>
                                <CardTitle>Interior</CardTitle>
                                <CardSubtitle>Choose from lots</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</CardText>
                                <Button color='primary'>Interior</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Architecture</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This card has supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button color='primary'>Architecture</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Property</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional content.</CardText>
                                <Button color='primary'>Properties</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                    <section className="py-5">
                        <div className="container text-center">
                            <div className="card">
                                <img className="card-img" src="https://images.pexels.com/photos/3609112/pexels-photo-3609112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                    <div
                                        className="card-img-overlay d-flex justify-content-center align-items-center flex-column">
                                        <h3 className="card-title">Future of the Internet</h3>
                                        <p className="card-text">Decentralized, secure, private. The PiperNet is on it's
                                            way to revolutionize every smartphone, PC, and smart-fridge near you.</p>
                                        <a className="btn btn-primary btn-raised" href="/interior">Join the Revolution!</a>
                                    </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-5">
                        <div className="container">
                            <h2 className="mb-5 text-center">Some of our Interior features</h2>
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <h5>Woodwork</h5>
                                    <p>Your data is stored in many places at once. Awesome, right?</p>
                                    <a href="#" role="button">Read more</a>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <h5>Wallpapers</h5>
                                    <p>Nobody will be able to use your data without your consent.</p>
                                    <a href="#" role="button">Read more</a>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <h5></h5>
                                    <p>Your online activity is only yours to know. Always.</p>
                                    <a href="#" role="button">Read more</a>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <h5>Speed</h5>
                                    <p>Unimaginable transfer speed thanks to middle-out compression.</p>
                                    <a href="#" role="button">Read more</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;
