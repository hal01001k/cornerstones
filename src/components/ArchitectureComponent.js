import React from "react";
function Architecture ()
{
    return(
        <div>
            <section className="py-5">
                <div className="container space">
                    <h2 className="mb-5 text-center">Your Maps</h2>
                    <div className="card-deck">
                        <div className="card border-0">
                            <a href="#"><img className="card-img-top mb-2"
                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0TeK7awTbEvKl23FcJsbe2zJAsCSjd7n8eQ&usqp=CAU" alt=""/></a>
                            <div className="card-body">
                                <small className="text-muted">07 Nov 2018</small>
                                <h5 className="card-title my-2"><a href="#">Why I'm the Best Programmer Ever</a></h5>
                                <a className="btn btn-primary my-2 px-4" href="#">Read more</a>
                            </div>
                        </div>
                        <div className="card border-0">
                            <a href="#"><img className="card-img-top mb-2"
                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFogmJwqsLDB9mQU4ReSHm-9U5EmlGP54Rfg&usqp=CAU" alt=""/></a>
                            <div className="card-body">
                                <small className="text-muted">07 Nov 2018</small>
                                <h5 className="card-title my-2"><a href="#">Secrets of Decentralization</a></h5>
                                <a className="btn btn-primary my-2 px-4" href="#">Read more</a>
                            </div>
                        </div>
                        <div className="card border-0">
                            <a href="#"><img className="card-img-top mb-2"
                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOFmQ9DSko9Qy6G5P1Th2BkDXaIsb6ZyxkAA&usqp=CAU" alt=""/></a>
                            <div className="card-body">
                                <small className="text-muted">07 Nov 2018</small>
                                <h5 className="card-title my-2"><a href="#">Why Strong Tea Isn't Good</a></h5>
                                <a className="btn btn-primary my-2 px-4" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <h2>Architectural Plan </h2>
                            <p>Includes</p>
                            <ul className="list-inline d-flex flex-column flex-sm-row align-items-center nav nav-pills mt-5 mb-4">
                                <li className="nav-item d-flex nav-link active">Active Tab</li>
                                <li className="nav-item d-flex nav-link active">Active One</li>
                                <li className="nav-item d-flex nav-link active">Active Two</li>
                            </ul>
                            <p>Our plans include every niche details and every important factor needed for the help with
                            new and important features added and every details very precisely added as per your demands.</p>
                            <table className="table mt-5 mb-4 responsive">
                                <tbody>
                                <tr>
                                    <td>Item one</td>
                                    <td className="text-right">First value</td>
                                </tr>
                                <tr>
                                    <td>Item two</td>
                                    <td className="text-right">Secound value</td>
                                </tr>
                                <tr>
                                    <td>Item three</td>
                                    <td className="text-right">Third value</td>
                                </tr>
                                </tbody>
                            </table>
                            <button className="btn btn-primary">Call Now!</button>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                <div className="d-flex justify-content-between w-100 mt-4">
                                    <div className="p-0"><img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0TeK7awTbEvKl23FcJsbe2zJAsCSjd7n8eQ&usqp=CAU" alt=""/></div>
                                    <div className="p-0 mx-4"><img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0TeK7awTbEvKl23FcJsbe2zJAsCSjd7n8eQ&usqp=CAU" alt=""/></div>
                                    <div className="p-0"><img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0TeK7awTbEvKl23FcJsbe2zJAsCSjd7n8eQ&usqp=CAU" alt=""/></div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Architecture;