import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>

                <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`} href="home.html">
                    <span className="fa fa-home"></span>
                    <span className="d-none d-xl-inline"> Home</span></a>

                <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`} href="explore.html">
                    <span className="fa fa-hashtag"></span>
                    <span className="d-none d-xl-inline"> Explore</span></a>

                <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`} href="notifications.html">
                    <span className="fa fa-bell"></span>
                    <span className="d-none d-xl-inline"> Notifications</span></a>

                <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`} href="messages.html">
                    <span className="fa fa-envelope"></span>
                    <span className="d-none d-xl-inline"> Messages</span></a>

                <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`} href="bookmarks.html">
                    <span className="fa fa-bookmark"></span>
                    <span className="d-none d-xl-inline"> Bookmarks</span></a>

                <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`} href="lists.html">
                    <span className="fa fa-list"></span>
                    <span className="d-none d-xl-inline"> Lists</span></a>

                <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`} href="profile.html">
                    <span className="fa fa-user"></span>
                    <span className="d-none d-xl-inline"> Profile</span></a>

                <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} href="more.html">
                    <span className="fa fa-ellipsis-h"></span>
                    <span className="d-none d-xl-inline"> More</span></a>

                <div className="d-grid mt-2">
                    <a href="tweet.html"
                       className="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>  

            </div>
        </>
    );
}
export default NavigationSidebar;
