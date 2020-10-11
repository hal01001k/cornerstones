import React from "react";
function Finproject()
{
    return(
        <div><section className="py-5">
            <div className="container text-center">
                <h1 className="display-4 my-3">Our Finished projects and their details are present here.</h1>
            </div>
        </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <h2>Duplex House</h2>
                            <p>Architectural</p>
                            <p>A duplex house with its architectural plan with proper design and planning. It has various
                                elements and Customer wae very pleased.</p>
                            <p>Address: Sironj</p>
                            <table className="table mt-5 mb-4 responsive">
                                <tbody>
                                <tr>
                                    <td>Item one</td>
                                    <td className="text-right">First value</td>
                                </tr>
                                <tr>
                                    <td>Item two</td>
                                    <td className="text-right">Second value</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
                            <img className="img-fluid" src="pics/12.png" alt="0"/>
                            <div className="d-flex justify-content-between w-100 mt-4">
                                <div className="p-0">
                                    <img className="w-100" src="pics/15.png" alt="1"/>
                                </div>
                                <div className="p-0 mx-4">
                                    <img className="w-100" src="pics/16.png" alt="2"/>
                                </div>
                                <div className="p-0"><img className="w-100" src="pics/19.png" alt="3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Gallery</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/14.png" alt="1"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/20.png" alt="2"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/17.png" alt="3"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/18.png" alt="4"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/11.png" alt="5"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src="pics/21.jpg" alt="6"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Finproject;