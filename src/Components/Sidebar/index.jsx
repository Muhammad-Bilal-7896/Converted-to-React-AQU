const Sidebar = () => {
    return (
        <>
            {/* ========== Left Sidebar Start ========== */}
            <div className="left side-menu">
                <div className="sidebar-inner slimscrollleft">
                    <div id="sidebar-menu">
                        <ul>
                            <li>
                                <a href="index.html" className="waves-effect">
                                    <span className="icon"><img src="assets/images/svg/sidebar/dashboard-icon.svg" alt="" /></span>
                                    <span className="icon active"><img src="assets/images/svg/sidebar/dashboard-icon-active.svg" alt="" /></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className>
                                <a href="currently-tacking.html" className="waves-effect ">
                                    <span className="icon"><img src="assets/images/svg/sidebar/currently-tacking-icon.svg" alt="" /></span>
                                    <span className="icon active"><img src="assets/images/svg/sidebar/currently-tacking-icon-active.svg" alt="" /></span>
                                    <span>Currently Tacking</span>
                                </a>
                            </li>
                            <li>
                                <a href="stats.html" className="waves-effect">
                                    <span className="icon"><img src="assets/images/svg/sidebar/stats-icon.svg" alt="" /></span>
                                    <span className="icon active"><img src="assets/images/svg/sidebar/stats-icon-active.svg" alt="" /></span>
                                    <span>General Statistics</span>
                                </a>
                            </li>
                            <li>
                                <a href="tray-management.html" className="waves-effect">
                                    <span className="icon"><img src="assets/images/svg/sidebar/tray-management-icon.svg" alt="" /></span>
                                    <span className="icon active"><img src="assets/images/svg/sidebar/tray-management-icon-active.svg" alt="" /></span>
                                    <span>Tray Management</span>
                                </a>
                            </li>
                            <li>
                                <a href="schedule-data.html" className="waves-effect">
                                    <span className="icon"><img src="assets/images/svg/sidebar/schedule-icon.svg" alt="" /></span>
                                    <span className="icon active"><img src="assets/images/svg/sidebar/schedule-icon-active.svg" alt="" /></span>
                                    <span>Schedule Data</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix" />
                </div> {/* end sidebarinner */}
            </div>
            {/* Left Sidebar End */}
        </>
    )
}
export default Sidebar;