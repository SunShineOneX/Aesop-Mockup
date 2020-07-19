import React from 'react'

function Homepage2() {
    return (
        <div class="container">
           <div className="card-deck" id="card-deck">
                        <div class="row">
                        <div class="col-lg-3">
                        <div id="card" className="card">
                            <p>Aēsop essentials</p>
                            <br></br>
                            <h4>A selection of staples</h4>
                            <p>From beloved formulations first created decades ago to personal care neccessities.</p>
                        </div>
                        </div>
                        <div class="col-lg-3">
                        <div id="card" className="card">
                            <img class="staple-images"src={require('../images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png')} className="card-img-top" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Resurrection Arromatique Hand Wash</strong></p>
                            <p id="sub-title" className="card-text">Gentle cleansing for hard-working hands</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-3">
                        <div id="card" className="card">
                            <img class="staple-images" src={require('../images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png')} className="card-img-top frag" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title-parfum" className="card-title"><strong>Resurrection-Arromatique Hand Balm</strong></p>
                            <p id="sub-title" className="card-text">Richly hydrating, greaseless finish</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-3">
                        <div id="card" className="card">
                            <img src="staple-images" src={require('../images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png')} className="card-img-top frag" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title-deoderant" className="card-title"><strong>Deoderant</strong></p>
                            <p id="sub-title" className="card-text">Woodsy, herbaceous, earthly aromatic</p>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Homepage2;


