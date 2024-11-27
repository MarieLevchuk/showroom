import { Route, Routes } from "react-router-dom";
import PageMain from "../pages/PageMain";
import PageCar from "../pages/PageCar";
import PageModels from "../pages/PageModels";
import PageNotFound from "../pages/PageNotFound";

export const PagesRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <PageMain /> } />
            <Route path="/cars" element={ <PageModels /> } />
            {/* <Route path="/cars" element={ <PageModels /> }> */}
                <Route path="/cars/:cid" element={ <PageCar /> } />
            {/* </Route> */}
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    )
};