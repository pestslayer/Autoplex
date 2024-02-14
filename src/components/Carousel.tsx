import React from 'react'
import imp from './../public/ipm.png'
import car_2 from './../public/car_2.png'
import car_3 from './../public/car_3.jpg'


const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators bg-dark text-light">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./../public/ipm.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Looking for a New Whip?</h5>
        <p>Come on down to get into a new ride today!!!!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./../public/car_2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Like Low-Riders?</h5>
        <p>Come and Drive Home in a Used Cadillac on hydraulics.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./../public/car_3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Like Trucks?</h5>
        <p>From show room trucks to work trucks we have you covered!!</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel