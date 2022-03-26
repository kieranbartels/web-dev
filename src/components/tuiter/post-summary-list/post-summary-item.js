import React from "react";
import './index.css';

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }) => {
    return(
        <div className="wd-box row">
            <div className="col-8 col-sm-9 col-xl-10">
                <div className="wd-topic">
                    {post.topic}
                </div>
                <span className="wd-title">
                    {post.userName} <i className="fa fa-check-circle"></i>
                </span>
                <span className="wd-topic">
                    - {post.time}
                </span>
                <div className="wd-title">
                    {post.title}
                </div>
            </div>
            <div className="col-2">
                <img src={post.image} className="wd-rounded-image"/>
            </div>
        </div>
    );
}
export default PostSummaryItem;