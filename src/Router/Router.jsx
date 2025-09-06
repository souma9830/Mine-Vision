import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPages";
function Router(){
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}
export default Router;