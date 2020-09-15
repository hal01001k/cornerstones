import React from 'react';
import {Card, Button, CardTitle, CardText, CardDeck, CardBody,CardSubtitle} from 'reactstrap';
import Kerosel from './CarouselComponent'
import Header from './HeaderComponent'
import Footer from "./FooterComponent";
import CardColumns from "reactstrap/lib/CardColumns";

function Home() {
    return (
        <div>
            <Kerosel/>
            <div className="space" >
            <div className="container">
                <Card body outline color="secondary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </Card>
                <br/>
            </div>
            </div>
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
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        <Card>
                             <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
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