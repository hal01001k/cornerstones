import React from 'react';
import Jumbotron from "reactstrap/lib/Jumbotron";
import Media from "reactstrap/lib/Media";

function About() {
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
                        <img className="img-fluid" src="team.svg"/>
                    </div>
                </div>
                <hr/>
             <div className="row">
                 <div className="col-12 col-sm-9">
                     <h2>hello</h2>
                     <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type
                         specimen</p>
                 </div>
                 <div className="col-12 col-sm-3">
                    <img className="im-sz" src="logo1.jpg"/>
                 </div>
             </div>
            </div>
            <Jumbotron>
                <h1 className="display-1 text-center">Our Story</h1>
            </Jumbotron>
        </div>
    )
}

export default About;