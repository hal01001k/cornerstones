import React from "react";

function Interior() {
    return (
        <div>
            <section className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-4">The New Internet</h1>
                    <p className="lead text-muted">Decentralized, secure, private. The PiperNet is on it's way to
                        revolutionize every smartphone, PC, and smart-fridge near you.</p>
                    <a className="btn btn-primary btn-raised mt-2 mr-2" href="#">Sign up for free</a><a
                    className="btn btn-default mt-2" href="#">Read more</a>
                </div>
            </section>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Great Companies that already use PiperNet</h2>
                    <div className="carousel slide" id="carousel-form-03" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                    <img className="img-fluid" src="undraw/home.svg" alt=""/>
                                    <div className="row d-none d-md-block">
                                        <img className="col-3 p-3" src="undraw/home.svg" alt=""/>
                                        <img className="col-3 p-3" src="undraw/home.svg" alt=""/>
                                        <img className="col-3 p-3" src="undraw/home.svg" alt=""/>
                                        <img className="col-3 p-3" src="undraw/home.svg" alt=""/>
                                    </div>
                                    <h3 className="mt-5">Client: K-Hole</h3>
                                    <p className="lead">We are constantly looking for new partners to migrate onto
                                        the Piper Net. The future of the internet is here - venture towards it with
                                        Pied Piper!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div>
                                    <img className="img-fluid" src="undraw/home.svg" alt=""/>
                                    <div className="row d-none d-md-block">
                                        <img className="col-3 p-3" src="undraw/home.svg" alt=""/>
                                        <img className="col-3 p-3" src="undraw/map.svg" alt=""/>
                                        <img className="col-3 p-3" src="undraw/home.svg" alt=""/>
                                        <img className="col-3 p-3" src="undraw/home.svg" alt=""/>
                                    </div>
                                    <h3 className="mt-5">Client: Gitscape</h3>
                                    <p className="lead">We are constantly looking for new partners to migrate onto
                                        the Piper Net. The future of the internet is here - venture towards it with
                                        Pied Piper!</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a className="carousel-control-prev justify-content-start" href="#carousel-form-03" role="button" data-slide="prev">
                                <img src="icons/chevron-left.svg" aria-hidden="true" alt=""/>
                                <span className="sr-only">Previous</span></a>
                            <a className="carousel-control-next justify-content-end" href="#carousel-form-03" role="button" data-slide="next">
                                <img src="icons/chevron-right.svg" aria-hidden="true" alt=""/>
                                <span className="sr-only">Next</span></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Gallery</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="placeholder/pictures/bg_4-3.svg?primary=009688" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="placeholder/pictures/bg_4-3.svg?primary=009688" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="placeholder/pictures/bg_4-3.svg?primary=009688" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="placeholder/pictures/bg_4-3.svg?primary=009688" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="placeholder/pictures/bg_4-3.svg?primary=009688" alt=""/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="placeholder/pictures/bg_4-3.svg?primary=009688" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default Interior;