import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
<!-- should be a column class-->
            <div class="col-8 col-lg-7">
            <!-- search field and cog -->
                <span class="position-absolute mt-3 ms-4">
                    <i class="fa fa-magnifying-glass"></i>
                </span>
                <input class="wd-search-input" id="search" placeholder="Search Tuiter"/>
                
                <span class="wd-settings">
                    <a href="explore-settings.html" class="wd-settings-link">
                        <span class="fa fa-cog"></span>
                    </a>
                </span>
           
           
           <ul class="nav mb-2 nav-tabs mt-3">
           <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a></li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a></li>
                <div class="d-none d-md-block">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Entertainment</a></li>
                </div>
           </ul>
           
           <!-- image with overlaid text -->
           <div class="card">
                <img src="../images/starship.jpg" class="card-img-top">
                <div class="card-img-overlay d-flex flex-column justify-content-end wd-card-footer">
                    <p class="card-text">SpaceX's Starship</p>
                </div>
           </div>
           
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;




