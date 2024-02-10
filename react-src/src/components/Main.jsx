import React from "react";

function Main() {

return (
    <>
        <div id="heading-container"><h2>EXPLORE</h2></div>
        <div id="card-container">
            <div className="card">
                <img className="card-photo" alt="community" src="/WordPress/wp-content/themes/wptwr/thumbnails/community.jpg" />
                <div className="card-text">Community</div>
            </div>
            <div className="card">
                <img className="card-photo" alt="community" src="/WordPress/wp-content/themes/wptwr/thumbnails/parks.jpg" />
                <div className="card-text">National Parks</div>
            </div>
            <div className="card">
                <img className="card-photo" alt="community" src="/WordPress/wp-content/themes/wptwr/thumbnails/sports.jpg" />
                <div className="card-text">Sports</div>
            </div>
            <div className="card">
                <img className="card-photo" alt="community" src="/WordPress/wp-content/themes/wptwr/thumbnails/resorts.jpg" />
                <div className="card-text">Beaches</div>
            </div>
            <div className="card">
                <img className="card-photo" alt="community" src="/WordPress/wp-content/themes/wptwr/thumbnails/venues.jpg" />
                <div className="card-text">Venues</div>
            </div>
            <div className="card">
                <img className="card-photo" alt="community" src="/WordPress/wp-content/themes/wptwr/thumbnails/guides.jpg" />
                <div className="card-text">Guides</div>
            </div>
        </div>
    </>
    )
}
export default Main;
