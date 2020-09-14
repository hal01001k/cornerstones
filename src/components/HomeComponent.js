import React from 'react';
import {Card, Button, CardTitle, CardText} from 'reactstrap';
import Kerosel from './CarouselComponent'
import Header from './HeaderComponent'
import Footer from "./FooterComponent";

function Home() {
    return (
        <div>
            <Header/>
            <Kerosel/>
            <div className="space">
            <div className="container">
                <Card body outline color="secondary">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </Card>
                <br/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;