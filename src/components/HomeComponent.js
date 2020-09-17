import React from 'react';
import {Card, Button, CardTitle, CardText, CardDeck, CardBody, CardSubtitle} from 'reactstrap';
import Kerosel from './CarouselComponent'
import {ParallaxBanner} from "react-scroll-parallax";


function Home() {
    return (
        <div>
            <Kerosel/>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <p>We find suitable interior for your home.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <p>We find suitable architecture for your home.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <p>We find suitable property for your home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d05f6f1c9e4d68fe9d0ac8a_drawkit-grape-pack-illustration-1-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-12 col-md-8">
                        transparent process
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        Discuss with client
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
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d06154c6a9360b7a49538b6_drawkit-grape-pack-illustration-8-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-12 col-md-8">
                        transparent process
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        Discuss with client
                    </div>
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d060ea7c9e4d60c42d0d010_drawkit-grape-pack-illustration-5-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div></div>
            <ParallaxBanner
                layers={[
                    // {
                    //     children: (<h5>Project SUBTITLE</h5>),
                    //     amount: 1,
                    //
                    // },
                    {   children: (<h3 align="center">Project SUBTITLE</h3>),
                        image: 'https://images.unsplash.com/photo-1568377210220-151e1d7f42c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                        amount: 0.7,
                    }
                ]}
                style={{
                    height: "500px",
                    width:'100%'
                }}>
                <h1 align="center">Banner Children</h1>
            </ParallaxBanner>
            <div className="container">
                <row>
                    <h2 align="center">Feature</h2>
                    <p className="text-center">This section includes list of all features</p>
                </row>
                <div className="row ">
                    <CardDeck>
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This card has supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to show that
                                    equal height action.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        </div>
    )
}

export default Home;