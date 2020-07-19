import React from 'react';

function Nurturing() {
    return(
        <div className="container">
            <div className="carousel"></div>
            <div className="row">
                <div className="col-sm-2">
                    <p id="sub-title"><strong>Nurturing formulations</strong></p>
                    <p id="title">For all ages, genders and skin types</p>
                    <p id ="sub-title">Healthy sing is the product of careful cleansing, nourishing hydration and protection against environmental factors.</p>
                    <a href=""><p className="body-btn">See all Sking Care &nbsp; &nbsp; &#8594;</p></a>
                </div>    
                <div className="col-sm-10">
                <div className="card-deck">
                        <div id="card" className="card">
                            <img src={require('../images/for_all_products/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png')} className="card-img-top" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Parsley Seed Anti-Oxidant Serum</strong></p>
                            <p id="sub-title" className="card-text">Perfect for use in humid climates</p>
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
                        <div id="card" className="card">
                            <img src={require('../images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png')} className="card-img-top scrub2" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Body Cleansing Scrub</strong></p>
                            <p id="sub-title" className="card-text">Enriched with Bergamot Rine, Tahitian</p>
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
            <div className="row">
                <div className="col-sm-3">
                    
                </div>
                <div className="col-sm-9">
                    
                </div>
            </div>
        </div>
    )
}

export default Nurturing;