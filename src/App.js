import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';

import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/explore-screen";
import HomeScreen from "./components/tuiter/home-screen/home-screen";
import WeatherScreen from "./components/tuiter/weather-screen";
import Profile from "./screens/profile";
import EditProfile from "./screens/edit-profile";
import Signup from "./screens/signup";
import Signin from "./screens/signin";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileProvider} from "./contexts/profile-context";
import SecureRoute from "./components/secure-route";

function App() {
    return (
        <ProfileProvider>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/">
                            <Route path="signin" element={<Signin/>}/>
                            <Route path="signup" element={<Signup/>}/>
                            <Route index element={<HomeScreen/>}/>
                            <Route path="tuiter"
                                   element={<Tuiter/>}>
                                <Route index
                                       element={<HomeScreen/>}/>
                                <Route path="home" exact={true}
                                       element={<HomeScreen/>} />
                                <Route path="explore"
                                       element={<ExploreScreen/>}/>
                                <Route path="weather"
                                       element={<WeatherScreen/>}/>
                                <Route path="profile"
                                       element={
                                           <SecureRoute>
                                               <Profile/>
                                           </SecureRoute>}/>
                                <Route path="edit-profile"
                                       element={
                                   <SecureRoute>
                                       <EditProfile/>
                                   </SecureRoute>}/>
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ProfileProvider>
    );
}

export default App;
