import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Settings from "./components/Navbar/Setting/Settings";
import Feedback from "./components/Navbar/Feedback/Feedback";
import Groups from "./components/Navbar/Groups/Groups";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Body/Slider";


function App() {
    let pathGroups = '/groups'
    let pathFeedBack = '/feedback'
    let pathSettings = '/settings'
    return (
        <div className='app-wrapper'>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={pathGroups}
                           element={<Groups/>}/>
                    <Route path={pathFeedBack}
                           element={<Feedback/>}/>
                    <Route path={pathSettings}
                           element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
