import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./DocsLayout.scss";

function DocsLayout() {
    return(
        <div className="layout">
            <Navbar />

            
            <div className="layout__body">
                {/* <LeftSidebar /> */}

                <main className="layout__content">
                <Outlet />
                </main>

                {/* <RightSidebar /> */}
            </div>

        </div>
    );
}

export default DocsLayout;