import React from 'react';
import Jumbotron from "reactstrap/lib/Jumbotron";
import Media from "reactstrap/lib/Media";
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
            <img src="logoM.png"/>
        </Parallax>
    );

    return (
        <div>
            <Jumbotron fluid>
                <h1 className="display-1 text-center">Our Story</h1>
            </Jumbotron>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2>hello</h2>
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
            <Jumbotron>
                <h1 className="display-1 text-center">Our Story</h1>
            </Jumbotron>
            <div className="container">
                <strong>Head Office</strong>
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
                            <Button>Call</Button>
                        </CardBody>
                    </Card>
                </div>
            </div >
            </div>
        </div>
    )
}

export default About;