import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import StudentList from "./component/StudentList";
import Create from "./component/modal/Create";
import StudentUpdate from "./component/StudentUpdate";
import NotFoundPage from "./component/NotFoundPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StudentList/>}/>
                    <Route path="create" element={<Create/>}/>
                    <Route path="update" element={<StudentUpdate/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
            <Outlet/>
        </>

    );
}

export default App;
