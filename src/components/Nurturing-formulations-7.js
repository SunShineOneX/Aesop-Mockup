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
                            <img src={require('../images/for_all_products/Aesop-Skin-In-Two-Minds-Facial-Cleanser-200mL-Large-835x962px.png')} className="card-img-top nurt1" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Parsley Seed Anti-Oxidant Serum</strong></p>
                            <p id="sub-title" className="card-text">Perfect for use in humid climates</p>
                            </div>
                        </div>
                        <div id="card" className="card">
                            <img src={require('../images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png')} className="card-img-top nurt2" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Mandarin Facial Hydrating Cream</strong></p>
                            <p id="sub-title" className="card-text">Rapidly absorbed, lightly hydrating</p>
                            </div>
                        </div>
                        <div id="card" className="card">
                            <img src={require('../images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png')} className="card-img-top nurt3" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Fabulous Face Oil</strong></p>
                            <p id="sub-title" className="card-text">Softens, nourishes and balances skin</p>
                            </div>
                        </div>    
                        <div id="card" className="card">
                            <img src={require('../images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png')} className="card-img-top nurt4" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title"><strong>Parsley Seed Facial Cleanser</strong></p>
                            <p id="sub-title" className="card-text">For those in polluted urban environments</p>
                            </div>
                        </div>
                        <div id="card" className="card">
                            <img src={require('../images/for_all_products/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png')} className="card-img-top nurt5" alt=""></img>
                            <div className="card-body">
                            <p id="sub-title" className="card-title nurt5"><strong>B & Tea Balancing Toner</strong></p>
                            <p id="sub-title" className="card-text">Particularly suited to sensitive skin</p>
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