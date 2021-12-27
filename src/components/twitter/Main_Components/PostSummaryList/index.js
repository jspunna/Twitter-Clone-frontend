import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";

const PostSummaryList = ({title}) => {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="fw-bold fs-5">{title}</span>
                </li>
                {
                    posts.map(post => {
                        return (<PostSummaryItem post={post} key={post.image}/>);
                    })
                }
            </ul>
        </>
    );
}
export default PostSummaryList;