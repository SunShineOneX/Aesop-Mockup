import React from 'react';

function Gifts() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <p id="title">Five mythical Gift Kits</p>
                    <p id="sub-title">Crafted for gods, mortals, and muses alike, our new Gift Kit collection makes for inspired gift giving this festive session.</p>
                    <button >Explore seasonal Gift Kits &nbsp; &nbsp; &nbsp; &#8594;</button>
                </div>
                <div className="col-sm-9">
                    <img className="kit" src={require('../images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png')} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <p id="sub-title"><strong>Fragrance</strong></p>
                    <p id="title">An aromatic signature</p>
                    <p id ="sub-title">Our bold, sophisticated fragraces-from Parfum and Eau de Parfum to Room Sprays-are meticulously crafted high-quality ingredients.</p>
                </div>
                <div className="col-sm-9">
                    <div className="card-deck">
                        <div id="card" className="card">
                            <img src={require('../images/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png')} className="card-img-top" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Istros Aromatique Room Spray</strong></p>
                            <p id="sub-title" className="card-text">Enlivening florals; smoky Tobacco</p>
                            </div>
                        </div>
                        <div id="card" className="card">
                            <img src={require('../images/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png')} className="card-img-top frag" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Tacit Eau de Parfum</strong></p>
                            <p id="sub-title" className="card-text">Basil Grand Vert, fresh citrus notes</p>
                            </div>
                        </div>
                        <div id="card" className="card">
                            <img src={require('../images/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png')} className="card-img-top frag" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Isabelle Oil Burner Blend</strong></p>
                            <p id="sub-title" className="card-text">Stimulating scents of Spearmint, Rose</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gifts;