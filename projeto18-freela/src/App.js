import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import CheckInPage from "./pages/CheckInPage/CheckInPage.js";
import ErrorPage from "./pages/ErrorPage/ErrorPage.js";
import ConfirmPage from "./pages/ConfirmPage/ConfirmPage.js";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/CheckInPage/:id" element={<CheckInPage/>}/>
        <Route path="/ConfirmPage/:id" element={<ConfirmPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
