import { Outlet, useParams } from "react-router-dom";
import ModelsSection from "../components/ModelsSection/ModelsSection";

export default function PageModels(){
    return(
        <>
            <ModelsSection/>
            {/* <Outlet /> */}
        </>
    );
}