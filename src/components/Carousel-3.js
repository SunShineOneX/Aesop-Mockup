import React from 'react';

function Carousel() {
    return(
        <div className="container">
            <div className="carousel"></div>
            <div className="row">
                <div className="col-sm-3">
                    <p id="title">An odyssey of gifts, for generous and inspired giving</p>
                    <ul>
                        <li>Seasonal Gift Kits</li>
                        <li>Aesop favourites</li>
                        <li>Small gestures</li>
                        <li>Generous offerings</li>
                        <li>Fragrant formulations</li>
                        <li>Treats for self</li>
                        <li>All gifts</li>
                    </ul>
                </div>
                <div className="col-sm-9">
                    <img className="kit" src={require('../images/Aesop-Free-Market-Carousel-1-Desktop-2560x1440px.png')} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <p id="sub-title"><strong>For hands and body</strong></p>
                    <p id="title">Daiy cleansing</p>
                    <p id ="sub-title">Ensure impeccable hygiene with our range of mild yet efficacious formulations.</p>
                </div>
                <div className="col-sm-9">
                    <div className="card-deck">
                        <div id="card" className="card">
                            <img src={require('../images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png')} className="card-img-top" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Reverence Aromatique Hand Wash</strong></p>
                            <p id="sub-title" className="card-text">Woody, earthy, smoky aroma</p>
                            </div>
                        </div>
                        <div id="card" className="card">
                            <img src={require('../images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png')} className="card-img-top scrub1" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Redemption Body Scrub</strong></p>
                            <p id="sub-title" className="card-text">Bamboo Stem and Pumice, to polish skin</p>
                            </div>
                        </div>
                        <div id="card" className="card">
                            <img src={require('../images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png')} className="card-img-top scrub2" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Body Cleansing Scrub</strong></p>
                            <p id="sub-title" className="card-text">Enriched with Bergamot Rine, Tahitian</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;