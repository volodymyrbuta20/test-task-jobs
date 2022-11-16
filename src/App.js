import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MainPage from "./pages/MainPage/MainPage";
import SingleJobPage from "./pages/SingleJobPage/SingleJobPage";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/jobs/:jobId" element={<SingleJobPage/>}/>
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
