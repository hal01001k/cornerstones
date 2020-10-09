import React from "react";
function Onproject()
{
    return(
        <div>
            <section className="py-5">
                <div className="container text-center">
                    <h1 className="display-4 my-3">Our Ongoing projects and their details are present here.</h1>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <h2>Project Heading</h2>
                            <p>Type of Project</p>
                            <p>A small description about the project and few details that are to be included with new
                            a small message concerned with it.</p>
                            <p>Address: some street somewhere.</p>
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
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=867&q=80" alt=""/>
                                <div className="d-flex justify-content-between w-100 mt-4">
                                    <div className="p-0">
                                        <img className="w-100" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=867&q=80" alt=""/>
                                    </div>
                                    <div className="p-0 mx-4">
                                        <img className="w-100" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=867&q=80" alt=""/>
                                    </div>
                                    <div className="p-0"><img className="w-100" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=867&q=80" alt=""/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Onproject;