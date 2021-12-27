import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import who from "../twitter_reducers/who";
import tweets from "../twitter_reducers/tweets";
import profile from "../twitter_reducers/profile";
import showProfileOrEdit from "../twitter_reducers/showProfileOrEdit";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "../Profile_Components/ProfileScreen";

const reducer = combineReducers({tweets, who, profile, showProfileOrEdit})
const store = createStore(reducer);

const Build = () => {
    return (
        <Provider store={store}>
            <div>
                <Route path={["/", "/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/profile"
                       exact={true} component={ProfileScreen}/>
            </div>
        </Provider>
    )
};
export default Build;