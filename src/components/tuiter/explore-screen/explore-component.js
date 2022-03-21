import React from "react";
import './index.css';
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return(
            <div>
                <span className="position-absolute mt-3 ms-4">
                    <i className="fa fa-magnifying-glass"></i>
                </span>
                <input className="wd-search-input" id="search" placeholder="Search Tuiter"/>

                <span className="wd-settings">
                    <a href="explore-settings.html" className="wd-settings-link">
                        <span className="fa fa-cog"></span>
                    </a>
                </span>


                <ul className="nav mb-2 nav-tabs mt-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">For you</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a></li>
                    <div className="d-none d-md-block">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Entertainment</a></li>
                    </div>
                </ul>

                <div className="card">
                    <img src="/images/starship.jpg" className="card-img-top"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-end wd-card-footer">
                            <p className="card-text">SpaceX's Starship</p>
                        </div>

                    </div>

                <PostSummaryList/>
            </div>
    );
}

export default ExploreComponent;




