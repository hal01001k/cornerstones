import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

function Interior() {
    return (
        <div>
            <section className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-4">Interior Designer</h1>
                    <p className="lead text-muted">Secure, private. Cornerstones is on it's way to
                        revolutionize every home, mall, and city near you.</p>
                    <a className="btn btn-primary btn-raised mt-2 mr-2" href="#">Call</a><a
                    className="btn btn-default mt-2" href="#">Read more</a>
                </div>
            </section>
            <div className="container">
                <h3 className="display-5 mt-5">Our services Includes</h3>
                <div className="row space phont">
                    <div className="col-md-4 mb-4">
                        <Card inverse>
                            <CardImg width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIt80rKw1O1oAS-tHO57Zi1mq1DUvdNVQmBw&usqp=CAU" alt="Card image cap" />
                            <CardImgOverlay style={{ color:"black" }}>
                                <CardTitle>PVC Ceiling</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card inverse>
                            <CardImg width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7mORUC2kjc6vs7H1MJXZUKqpX-GJfTzGgIg&usqp=CAU" alt="Card image cap" />
                            <CardImgOverlay style={{ color:"black" }}>
                                <CardTitle>Wall Paper</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card inverse>
                            <CardImg width="100%" src="https://images.pexels.com/photos/131634/pexels-photo-131634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                            <CardImgOverlay style={{ color:"black" }}>
                                <CardTitle>Artificial Grass</CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
            </div>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Great Costumers that already use Cornerstones</h2>
                    <div className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                    <img className="img-fluid" src="pics/8.jpeg" alt=""/>
                                    <div className="row d-none d-md-block">
                                        <img className="col-3 p-3" src="pics/7.jpeg" alt=""/>
                                        <img className="col-3 p-3" src="pics/5.jpeg" alt=""/>
                                        <img className="col-3 p-3" src="pics/9.jpeg" alt=""/>
                                        <img className="col-3 p-3" src="pics/1.jpeg" alt=""/>
                                    </div>
                                    <h3 className="mt-5">We deliver as promised.</h3>
                                    <p className="lead">We are constantly looking for new partners to migrate onto
                                        the Net. The future of the internet is here - venture towards it with
                                        Cornerstones!</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Our Works</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/1.jpeg" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/2.jpeg" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/3.jpeg" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/4.jpeg" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/0.jpeg" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/6.jpeg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default Interior;


{/*<div>*/}
{/*    <a className="carousel-control-prev justify-content-start" href="#carousel-form-03" role="button" data-slide="prev">*/}
{/*        <img src="icons/chevron-left.svg" aria-hidden="true" alt=""/>*/}
{/*        <span className="sr-only">Previous</span></a>*/}
{/*    <a className="carousel-control-next justify-content-end" href="#carousel-form-03" role="button" data-slide="next">*/}
{/*        <img src="icons/chevron-right.svg" aria-hidden="true" alt=""/>*/}
{/*        <span className="sr-only">Next</span></a>*/}
{/*</div>*/}


{/*<div className="carousel-item">*/}
{/*    <div>*/}
{/*        <img className="img-fluid" src="undraw/home.svg" alt=""/>*/}
{/*        <div className="row d-none d-md-block">*/}
{/*            <img className="col-3 p-3" src="undraw/home.svg" alt=""/>*/}
{/*            <img className="col-3 p-3" src="undraw/map.svg" alt=""/>*/}
{/*            <img className="col-3 p-3" src="undraw/home.svg" alt=""/>*/}
{/*            <img className="col-3 p-3" src="undraw/home.svg" alt=""/>*/}
{/*        </div>*/}
{/*        <h3 className="mt-5">Client: Gitscape</h3>*/}
{/*        <p className="lead">We are constantly looking for new partners to migrate onto*/}
{/*            the Piper Net. The future of the internet is here - venture towards it with*/}
{/*            Pied Piper!</p>*/}
{/*    </div>*/}
{/*</div>*/}