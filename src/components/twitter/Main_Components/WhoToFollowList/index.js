import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWhoFollow} from "../../services/who-service";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    const dispatch = useDispatch();
    useEffect(() => fetchAllWhoFollow(dispatch), []);

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="fw-bold">Who to follow</span>
                </li>
                {
                    who.map(who => {
                        return (<WhoToFollowListItem who={who} key={who.userName}/>);
                    })
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;
