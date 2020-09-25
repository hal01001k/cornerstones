import React from 'react';
import Jumbotron from "reactstrap/lib/Jumbotron";
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
            <img src="logoM.png"/>
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
                        <img className="img-fluid" src="undraw/team.svg"/>
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
            <div className="container">
                <text style ={{ fontSize:30}}>Head Office</text>
                <p>Always avialable contact us at any time. we are more then happy to help.</p>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src="undraw/map.svg"/>
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