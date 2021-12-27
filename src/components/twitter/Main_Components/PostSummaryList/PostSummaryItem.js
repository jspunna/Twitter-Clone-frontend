import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "/images/reactjs_logo.png",
                                 "tweets": ""
                             }
}) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row d-flex align-items-center">
                    <div className="col-9 col-sm-9 col-md-10 fw-bold">
                        <span className="fw-normal wd-dm-gray">{post.topic}</span>
                        <div>
                            {post.userName} <i className="fas fa-check-circle"></i>
                            <span className="fw-normal wd-dm-gray"> - {post.time}</span>
                        </div>
                        <div>
                            {post.title}
                        </div>
                        <div>
                            <span className="fw-normal wd-dm-gray">{post.tweets}</span>
                        </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-2">
                        <img src={post.image} alt="logo image" className="img-fluid rounded float-right"/>
                    </div>
                </div>
            </li>
        </>
    );
}
export default PostSummaryItem;