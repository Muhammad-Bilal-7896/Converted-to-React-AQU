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
                    <div className="page-content-wrapper tray-management-page">
                        <div className="default-card clr pt--15 pb--15">
                            <div className="input-group float-right auto-width">
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-success"><span className="img-holder mr--5"><img src="assets/images/svg/plus-white-icon-lg.svg" /></span>Add Tray</button>
                                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        <div role="separator" className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="float-left dFlex" style={{ height: '38px' }}>
                                <span className="title-icon dInlineBlock mr--10"><a href="#">
                                    <img src="assets/images/svg/back-arrow-icon.svg" alt="" />
                                </a></span>
                                <h2 className="mb--0 bold xlarge2-font">Assign Tray</h2>
                            </div>
                        </div>
                        <div className="default-card full-vh">
                            <div className="p--30">
                                <form className="general-form">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor>Select Service Line</label>
                                                <div className="input-holder clr select">
                                                    <select className="form-control md">
                                                        <option>Select option</option>
                                                        <option>Service Line Option1</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor>Select Tray</label>
                                                <div className="input-holder clr search-holder">
                                                    <input type="text" className="form-control  md" id aria-describedby placeholder="Select Tray" defaultValue />
                                                    <span className="icon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <div className="tags clr">
                                                <div className="tag md mr--10 mb--15">
                                                    Biopsy Trays<img className="icon" src="assets/images/svg/close-icon.svg" alt="" />
                                                </div>
                                                <div className="tag md mr--10 mb--15">
                                                    Interventional Radiology Drape Trays<img className="icon" src="assets/images/svg/close-icon.svg" alt="" />
                                                </div>
                                                <div className="tag md mr--10 mb--15">
                                                    Pacemaker Trays<img className="icon" src="assets/images/svg/close-icon.svg" alt="" />
                                                </div>
                                                <div className="tag md mr--10 mb--15">
                                                    Combicath Trays<img className="icon" src="assets/images/svg/close-icon.svg" alt="" />
                                                </div>
                                                <div className="tag md mr--10 mb--15">
                                                    Peripherally Inserted Central Catheter (PICC) Insertion Trays<img className="icon" src="assets/images/svg/close-icon.svg" alt="" />
                                                </div>
                                                <div className="tag md mr--10 mb--15">
                                                    Perforated instrument Trays<img className="icon" src="assets/images/svg/close-icon.svg" alt="" />
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