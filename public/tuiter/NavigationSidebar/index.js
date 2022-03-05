const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->

                <a class="list-group-item" href="home.html">
                    <span class="fa fa-home"></span>
                    <span class="d-none d-xl-inline"> Home</span></a>
                <a class="list-group-item" href="explore.html">
                    <span class="fa fa-hashtag"></span>
                    <span class="d-none d-xl-inline"> Explore</span></a>
                <a class="list-group-item" href="notifications.html">
                    <span class="fa fa-bell"></span>
                    <span class="d-none d-xl-inline"> Notifications</span></a>
                <a class="list-group-item" href="messages.html">
                    <span class="fa fa-envelope"></span>
                    <span class="d-none d-xl-inline"> Messages</span></a>
                <a class="list-group-item" href="bookmarks.html">
                    <span class="fa fa-bookmark"></span>
                    <span class="d-none d-xl-inline"> Bookmarks</span></a>
                <a class="list-group-item" href="lists.html">
                    <span class="fa fa-list"></span>
                    <span class="d-none d-xl-inline"> Lists</span></a>
                <a class="list-group-item" href="profile.html">
                    <span class="fa fa-user"></span>
                    <span class="d-none d-xl-inline"> Profile</span></a>
                <a class="list-group-item" href="more.html">
                    <span class="fa fa-ellipsis-h"></span>
                    <span class="d-none d-xl-inline"> More</span></a>
                <div class="d-grid mt-2">
                    <a href="tweet.html"
                       class="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>  

            </div>
            
    `);
}
export default NavigationSidebar;
