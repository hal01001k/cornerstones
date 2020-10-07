import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay,
         CardBody, CardSubtitle} from 'reactstrap';

function Interior() {
    return (
        <div>
            <section className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-4">Interior Designer</h1>
                    <p className="lead text-muted">Secure, private. Cornerstones is on it's way to
                        revolutionize every home, mall, and city near you.</p>
                    <a className="btn btn-primary btn-raised mt-2 mr-2" href="tel:8269874598">Call</a><a
                    className="btn btn-default mt-2" href="#">Read more</a>
                </div>
            </section>
            <div className="container">
                <h3 className="display-5 mt-5">Our services Includes</h3>
                <div className="row space phont">
                    <div className="col-md-4 mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKMM_OI6DuHp8-yT3SkEzouwGRngtExpUZYA&usqp=CAU" alt="Card image cap" />
                            <CardBody>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKMM_OI6DuHp8-yT3SkEzouwGRngtExpUZYA&usqp=CAU" alt="Card image cap" />
                            <CardBody>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKMM_OI6DuHp8-yT3SkEzouwGRngtExpUZYA&usqp=CAU" alt="Card image cap" />
                            <CardBody>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
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





