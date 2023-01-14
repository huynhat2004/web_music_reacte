import 'antd/dist/antd.css';
import HomePage from "./HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlayerPage from "./PlayerPage";

const App = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/web_music" element={<HomePage />}/>
                <Route path="/web_music/playing" element={<PlayerPage />}/>
            </Routes>
        </BrowserRouter>
    </div>
};
export default App;
