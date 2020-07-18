import React, { Component } from 'react'

function Homepage() {
    return (
        <div class="container-fluid" id="wrapper">
            <div id="header">
                <p>Complimentary standard shipping on all orders +</p>
            </div>
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="">Aesop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Read</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Stores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="">Search</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="">Login</a>
            </li>
            </ul>
        </div>
      </nav>
        </div>

        
            
            {/* <div>
                <img className="landing-page" src={require("../images/Aesop-Homepage-Banner.jpg")} />
                    <div></div>
                    
            </div> */}
            
        </div>
    )
}

export default Homepage


