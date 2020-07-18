import React from 'react';

function Suggestions() {
    return(
        <div className="container">
            <div className="carousel"></div>
            <div className="row">
                <div className="col-sm-3">
                    <p id="sub-title">Architecture and Design</p>
                    <p>Spaces of distinction</p>
                </div>
                <div className="col-sm-9">
                    <p>Aesop stores are informed by the history, fabric and context of their local environments, yet retain an aesthetic consistency.</p>
                    <buton id="find-btn">Find a nearby store &nbsp; &nbsp; &nbsp; &#8594;</buton>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <img id="bleeker" src={require('../images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg')} alt=""></img>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    
                </div>
                <div className="col-sm-9">
                    
                </div>
            </div>
        </div>
    )
}

export default Suggestions;