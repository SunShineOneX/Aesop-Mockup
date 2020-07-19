import React, { Component } from 'react'

function Homepage() {
    return (
        <div class="container-fluid" id="wrapper">
            <div id="header">
                <p>Complimentary standard shipping on all orders +</p>
            </div>
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="">Aēsop</a>
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
        <div class="row" id="landing-title">
            <div class="col-lg-3">
            <h4>Aēsop.</h4>
            </div>
            <div class="col-lg-6">
                <h5>Forumlations for skin, hair, home and body</h5>
                <h6>Created with sensory pleasure in mind.</h6>
                </div>

        </div>
        </div>
        </div>
        

        
            
        
        
    )
}

export default Homepage


