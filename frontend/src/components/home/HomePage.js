import React, { Component } from "react";


class HomePage extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require(`../../assets/traveling-barber.jpg`)}
              width={1200}
              height={500}
              alt="Logo"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 class="display-2" text-warning>
                First slide label
              </h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button type="button" class="btn btn-outline-light btn-lg">
                View Demo
              </button>
              <button type="button" class="btn btn-warning btn-lg">
                Get Started
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require(`../../assets/haircit-in-greenery-trees-river-and-park.jpg`)}
              width={1200}
              height={500}
              alt="Logo"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1 class="display-2" text-warning>
                Second slide label
              </h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button type="button" class="btn btn-outline-light btn-lg">
                View Demo
              </button>
              <button type="button" class="btn btn-warning btn-lg">
                Get Started
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require(`../../assets/outdoor-hairdresser.jpg`)}
              width={1200}
              height={500}
              alt="Logo"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Third slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button type="button" class="btn btn-outline-light btn-lg">
                View Demo
              </button>
              <button type="button" class="btn btn-warning btn-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
