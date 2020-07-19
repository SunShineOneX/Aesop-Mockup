import React from 'react';

function Suggestions() {
    return(
        <div className="container">
            <div className="carousel"></div>
            <div className="row">
                <div className="col-sm-5">
                    <p id="sub-title">Architecture and Design</p>
                    <p>Spaces of distinction</p>
                </div>
                <div className="col-sm-7 find-store">
                    <p id="sub-title" >Aesop stores are informed by the history, fabric and context of their local environments, yet retain an aesthetic consistency.</p>
                    <buton id="find-btn">Find a nearby store &nbsp; &nbsp; &nbsp; &#8594;</buton>
                </div>
            </div>
            <div className="psh-dwn"></div>
            <div className="row">
                <div className="col-sm-12">
                    <img id="bleeker" src={require('../images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg')} alt=""></img>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <p className="pic-num">1 of 5</p>
                </div>
                <div className="col-sm-7">
                    <p className="adrss"><strong>Aesop Bleecker Street </strong><br></br>341 Bleecker St, New York, NY, 10014</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Suggestions;