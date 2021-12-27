import './App.css';
import './vendors/bootstrap/bootstrap.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import React from "react";
import HomeScreen from "./components/twitter/Main_Components/HomeScreen";
import ExploreScreen from "./components/twitter/Main_Components/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/twitter/Profile_Components/ProfileScreen";
import who from "./components/twitter/twitter_reducers/who";
import tweets from "./components/twitter/twitter_reducers/tweets";
import profile from "./components/twitter/twitter_reducers/profile";
import showProfileOrEdit from "./components/twitter/twitter_reducers/showProfileOrEdit";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets, who, profile, showProfileOrEdit})
const store = createStore(reducer);

const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
                  <Route path={["/", "/home"]}
                         exact={true} component={HomeScreen}/>
                  <Route path="/explore"
                         exact={true} component={ExploreScreen}/>
                  <Route path="/profile"
                         exact={true} component={ProfileScreen}/>
          </BrowserRouter>
      </Provider>
  );
}
export default App;
