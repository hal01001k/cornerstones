import React from 'react';
import {Card, Button, CardTitle, CardText, CardDeck, CardBody, CardSubtitle} from 'reactstrap';
import Kerosel from './CarouselComponent'
import {ParallaxBanner} from "react-scroll-parallax";
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
            <div className="section">
                <div className="container">
                    <div className="row" style={{paddingTop: '75px'}}>
                        <div className="col-12 col-md-4">
                            <img style={Ig} src="icons/Done.svg"/>
                            <p>We find suitable interior for your home.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img style={Ig} src="icons/Waiting.svg"/>
                            <p>We find suitable architecture for your home.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img style={Ig} src="icons/Success.svg"/>
                            <p>We find suitable property for your home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{paddingTop:'50px'}}>
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
                    <div className="col-12 col-md-4">
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
            <ParallaxBanner
                layers={[
                    {
                        children: (<h1 align="center" className="pad">SECTION</h1>),
                        image: 'https://images.unsplash.com/photo-1568377210220-151e1d7f42c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                        amount: 0.6,
                    }
                ]}
                style={{
                    height: "450px",
                    width: '100%',

                }}>
            </ParallaxBanner>
            <div className="container">
                <div className="row">
                    <p>
                        <h2>Feature</h2>
                        This section includes list of all features
                    </p>
                </div>
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