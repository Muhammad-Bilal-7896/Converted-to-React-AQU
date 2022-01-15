const NavBar = () => {
    return (
        <>
            <div id="wrapper">
                {/* Top Bar Start */}
                <div className="topbar clearfix">
                    {/* LOGO */}
                    <div className="topbar-left">
                        <div className>
                            <a href="index.html" className="logo text-center" />
                        </div>
                    </div>
                    <nav className="navbar-custom clearfix">
                        {/* Menu Collapse Button */}
                        <button type="button" className="button-menu-mobile open-left waves-effect float-left">
                            <img src="assets/images/svg/sidebar-icon.svg" alt="" />
                        </button>
                        <div className="dropdown float-left hospital-dropdown">
                            <div className="dropdown-toggle " data-toggle="dropdown">
                                <div className="clr dInlineBlock">
                                    <span className="img-holder mr--10">
                                        <img src="assets/images/hospital-img.png" alt="" />
                                    </span>
                                    <div className="txt">
                                        <h5 className="medium-font semiBold mb--0">Houston Methodist Hospital</h5>
                                        <p className="normal small-font mb--0">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">National Hospital</a>
                                <a className="dropdown-item" href="#">St. Patrick Hospital</a>
                                <a className="dropdown-item" href="#">Clinical Centre of Serbia</a>
                            </div>
                        </div>
                        <ul className="list-inline float-right mb-0">
                            {/* notification*/}
                            <li className="list-inline-item dropdown notification-list">
                                <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    {/* <i class="ion-android-notifications noti-icon"></i> */}
                                    <img src="assets/images/svg/bell-icon.svg" alt="" />
                                    <span className="badge badge-danger noti-icon-badge" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
                                    {/* item*/}
                                    <div className="dropdown-item noti-title">
                                        <h5>Notification (5)</h5>
                                    </div>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item notify-item active">
                                        <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline" /></div>
                                        <p className="notify-details truncate"><b>John Smith</b><small className="text-muted">Quisque pulvinar tellus
                                            sit amet.</small></p>
                                    </a>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="notify-icon bg-success"><i className="mdi mdi-message" /></div>
                                        <p className="notify-details"><b>New Message received</b><small className="text-muted">You have 87 unread
                                            messages</small></p>
                                    </a>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <div className="notify-icon bg-info"><i className="mdi mdi-martini" /></div>
                                        <p className="notify-details"><b>New User Registered</b><small className="text-muted">Quisque pulvinar tellus
                                            sit amet sem scelerisque tincidunt.</small></p>
                                    </a>
                                    {/* All*/}
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        View All
                                    </a>
                                </div>
                            </li>
                            {/* User*/}
                            <li className="list-inline-item dropdown notification-list">
                                <a className="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <div className="img-holder">
                                        <img src="assets/images/users/user-avatar.png" alt="user" className="rounded-circle" />
                                    </div>
                                    <span>Arlene Nguyen</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#"><i className="dripicons-exit text-muted" /> Logout</a>
                                </div>
                            </li>
                        </ul>
                        <div className="clearfix" />
                    </nav>
                </div>
                {/* Top Bar End */}
            </div>
        </>
    )
}
export default NavBar;