import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide w-100 h-auto" data-ride="carousel" style={{objectFit: 'contain !important'}}>
                <div className="carousel-inner" id="carousal">
                    <div className='carousal-caption' style={{ zIndex: 10, position: 'absolute', bottom: 20, width: '100%', padding: '20px'}}>
                        <form class="d-flex">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://static.vecteezy.com/system/resources/previews/024/070/480/large_2x/savor-the-aroma-and-flavor-of-india-with-biryani-a-delicious-dish-served-steamy-against-a-dark-background-ai-generated-free-photo.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
