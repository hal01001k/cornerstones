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
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <img src="logoM.png" alt="Logo"/>
        </Parallax>
    );

    return (
        <div>
            <div className="section">
                <p style= {{ paddingTop:'110px',fontSize:80,textAlign:"center",fontFamily:'Cabin'}}>Our Story</p>
            </div>
            <div className="container phont">
                <div className="row" style={{paddingTop:'50px'}} >
                    <div className="col-12 col-md-6">
                        <h2>Hello</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src="undraw/team.svg" alt="team"/>
                    </div>
                </div>

                <hr/>
            </div>
            <div style= {{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <ParallaxImage/>
            </div>
            <div className="container">
                <p style={{ paddingTop:'40px',
                    fontSize:40,textAlign:"center",
                    fontFamily:'Cabin'}}>
                    -Our Mission-</p>
                <p style= {{ paddingTop:'8px',
                    fontSize:20,textAlign:"center",
                    fontFamily:'Varela Round'}}>
                    We strive to offer our customers the lowest price property available, the best designers, and the utmost convenience.</p>
                <p style= {{ paddingTop:'20px',
                    fontSize:40,textAlign:"center",
                    fontFamily:'Cabin'}}>
                    -Our Vision-</p>
                <p style= {{ paddingTop:'8px',
                    fontSize:20,textAlign:"center",
                    fontFamily:'Varela Round'}}>
                    To be one of the biggest triune company for the upcoming foreign investments in the country.</p>
            <hr stylr={{paddingTop:'18px'}}/>
            </div>
            <div>
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
            </div>
            <div className="container">
                <text style ={{ fontSize:30}}>Head Office</text>
                <p>Always avialable contact us at any time. we are more then happy to help.</p>
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
            </div >
            </div>
        </div>
    )
}

export default About;
//
// <Jumbotron>
//     <h1 className="display-1 text-center">Our Story</h1>
// </Jumbotron>