import React from "react";
import { Card, CardTitle, CardText,
         CardBody, CardSubtitle} from 'reactstrap';

function Interior() {
    return (
        <div>
            <div className="container d-block d-sm-none"><h1>Hi!</h1></div>
            <section className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-4">Interior Designer</h1>
                    <p className="lead text-muted">Better, Beautiful. Cornerstones is on it's way to
                        revolutionize every home, mall, and city near you.</p>
                    <a className="btn btn-primary btn-raised mt-2 mr-2" href="tel:8269874598">Call for Interior Designer</a>
                </div>
            </section>
            <div className="container">
                <h3 className="display-5 mt-5">Our services Includes</h3>
                <div className="row space phont">
                    <div className="col-md-4 mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle>PVC Ceiling</CardTitle>
                                <CardSubtitle>A Grade</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card cap"/>
                            <CardBody>
                                <CardText>You have a variety of choices to choose from our very pleasing design.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle>Wallpaper</CardTitle>
                                <CardSubtitle>Pleasing Designs</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKMM_OI6DuHp8-yT3SkEzouwGRngtExpUZYA&usqp=CAU" alt="0" />
                            <CardBody>
                                <CardText>A fast and very pleasing service to provide better design for Wallpaper.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle>Artificial Grass</CardTitle>
                                <CardSubtitle>Its all Green</CardSubtitle>
                            </CardBody>
                            <img width="100%" src="https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="1"/>
                            <CardBody>
                                <CardText>Extra service that will help you with your interior.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <section className="py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6 col-lg-4 p-3">
                            <h5>2D</h5>
                            <p>we provide 2D models of design.</p>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3">
                            <h5>3D</h5>
                            <p>We provide a 3D model for our design for customers.</p>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3">
                            <h5>Speed</h5>
                            <p>Finish your work at very high pace</p>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3">
                            <h5>Woodwork</h5>
                            <p>Provide you with interior design materials.</p>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3">
                            <h5>Deadline Prediction</h5>
                            <p>We provide a deadline and finish your work within that limit.</p>
                        </div>
                        <div className="col-md-6 col-lg-4 p-3">
                            <h5>Customer care</h5>
                            <p>We are always available.</p>
                        </div>
                    </div>
                </div>
            </section>
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





