import Footer from "../../Components/Footer"

const RightContent = () => {
    return (
        <>
            {/* Start right Content here */}
            <div className="content-page">
                {/* Start content */}
                <div className="content">
                    {/* ==================
                   PAGE CONTENT START
                   ================== */}
                    <div className="page-content-wrapper dashboard-page">
                        <div className="default-card clr">
                            <div className="float-left">
                                <div className="dFlex" style={{ height: '38px' }}>
                                    <h2 className="mb--0 bold xlarge2-font">My Profile</h2>
                                </div>
                            </div>
                        </div>
                        <div className="default-card">
                            <div className="clr">
                                <div className="img-holder dp-holder" style={{ width: '205px' }}>
                                    <img src="assets/images/users/user-avatar.png" alt="" className="full-round img-fluid" />
                                    <span className="clicker">
                                        <img src="assets/images/svg/camera-icon.svg" alt="" />
                                    </span>
                                </div>
                                <div className="clr top-form-section">
                                    <form className="general-form">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor>First Name</label>
                                                    <div className="input-holder clr">
                                                        <input type="text" className="form-control" id aria-describedby placeholder="First Name" defaultValue="Marc" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor>Last Name</label>
                                                    <div className="input-holder clr">
                                                        <input type="text" className="form-control" id aria-describedby placeholder="Last Name" defaultValue="Jhonson" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor>Email Address</label>
                                                    <div className="input-holder clr">
                                                        <input type="email" className="form-control" id aria-describedby placeholder="Email Address" defaultValue="marcemail@somecompany.com" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor>Phone Number</label>
                                                    <div className="input-holder clr">
                                                        <input type="text" className="form-control" id aria-describedby placeholder="Phone Number" defaultValue="+1 3930 333 5930" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor>About yourself</label>
                                                    <div className="input-holder clr">
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="clr pt--10 pb--20">
                                <div className="default-card option2 clr">
                                    <div className="float-left">
                                        <div className="dFlex">
                                            <span className="title-icon dInlineBlock mr--10"><img src="assets/images/svg/lock-icon-lg.svg" alt="" /></span>
                                            <h2 className="mb--0 xlarge-font semiBold  dInlineBlock ">Password</h2>
                                        </div>
                                    </div>
                                </div>
                                <form className="general-form">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor>Current Password</label>
                                                <div className="input-holder clr">
                                                    <input type="password" className="form-control" id aria-describedby placeholder="Current Password" defaultValue="Current Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor>New Password</label>
                                                <div className="input-holder clr">
                                                    <input type="password" className="form-control" id aria-describedby placeholder="New Password" defaultValue="New Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor>Repeat New Password</label>
                                                <div className="input-holder clr">
                                                    <input type="password" className="form-control" id aria-describedby placeholder="Repeat New Password" defaultValue="Repeat New Password" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="clr pt--10 pb--20">
                                <div className="default-card option2 clr">
                                    <div className="float-left">
                                        <div className="dFlex">
                                            <span className="title-icon dInlineBlock mr--10"><img src="assets/images/svg/bell-icon-lg.svg" alt="" /></span>
                                            <h2 className="mb--0  xlarge-font semiBold dInlineBlock ">Notifications Settings</h2>
                                        </div>
                                    </div>
                                </div>
                                <form className="general-form">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <div className="custom-switch-holder clr">
                                                    <div className="dInlineBlock mr--10 float-left">
                                                        <input className="tgl tgl-light" id="cb1" type="checkbox" defaultChecked />
                                                        <label className="tgl-btn" htmlFor="cb1" />
                                                    </div>
                                                    <div className="dInlineBlock txt medium basic-font  float-left">Send me system notifications</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <div className="custom-switch-holder clr">
                                                    <div className="dInlineBlock mr--10 float-left">
                                                        <input className="tgl tgl-light" id="cb2" type="checkbox" defaultChecked />
                                                        <label className="tgl-btn" htmlFor="cb2" />
                                                    </div>
                                                    <div className="dInlineBlock txt medium basic-font  float-left">When tray reports are ready</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <div className="custom-switch-holder clr">
                                                    <div className="dInlineBlock mr--10 float-left">
                                                        <input className="tgl tgl-light" id="cb3" type="checkbox" defaultChecked />
                                                        <label className="tgl-btn" htmlFor="cb3" />
                                                    </div>
                                                    <div className="dInlineBlock txt medium basic-font  float-left">Send me alerts on my email address
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <div className="custom-switch-holder clr">
                                                    <div className="dInlineBlock mr--10 float-left">
                                                        <input className="tgl tgl-light" id="cb4" type="checkbox" defaultChecked />
                                                        <label className="tgl-btn" htmlFor="cb4" />
                                                    </div>
                                                    <div className="dInlineBlock txt medium basic-font  float-left">When new tray added</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <div className="custom-switch-holder clr">
                                                    <div className="dInlineBlock mr--10 float-left">
                                                        <input className="tgl tgl-light" id="cb5" type="checkbox" />
                                                        <label className="tgl-btn" htmlFor="cb5" />
                                                    </div>
                                                    <div className="dInlineBlock txt medium basic-font  float-left">Send me alerts on my mobile</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <div className="custom-switch-holder clr">
                                                    <div className="dInlineBlock mr--10 float-left">
                                                        <input className="tgl tgl-light" id="cb6" type="checkbox" defaultChecked />
                                                        <label className="tgl-btn" htmlFor="cb6" />
                                                    </div>
                                                    <div className="dInlineBlock txt medium basic-font  float-left">When report is generated</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> {/* Page content Wrapper */}
                </div> {/* content */}
                <Footer />
            </div>
            {/* End Right content here */}
        </>
    )
}

export default RightContent;