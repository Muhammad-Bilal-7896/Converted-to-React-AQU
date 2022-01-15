import NavBar from "../../Components/NavBar";
import Sidebar from "../../Components/Sidebar";
import RightContent from "./RightContent";

const AssignTray = () => {

    return (
        <>
            <NavBar />
            {/* Begin page */}
            <div id="wrapper">
                <Sidebar />
                <RightContent />
            </div>
            {/* END wrapper */}
        </>
    )
}
export default AssignTray;