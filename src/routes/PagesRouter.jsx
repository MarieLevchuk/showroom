import { Route, Routes } from "react-router-dom";
import PageMain from "../pages/PageMain";
import PageCar from "../pages/PageCar";
import PageModels from "../pages/PageModels";
import PageNotFound from "../pages/PageNotFound";
import PageBuilds from "../pages/PageBuilds";

export const PagesRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <PageMain /> } />
            <Route path="/cars" end element={ <PageModels /> } />
            <Route path="/cars/:cid" end element={ <PageCar /> } />
            <Route path="/builds" element={ <PageBuilds /> } />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    )
};