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
                        <div className="default-card clr">
                            <div className="float-left">
                                <div className="dFlex" style={{ height: '38px' }}>
                                    <h2 className="mb--0 bold xlarge2-font">Tray Management</h2>
                                </div>
                            </div>
                        </div>
                        <div className="default-card full-vh">
                            <div className="pt--100 pb--100 pl--30 pr--30">
                                <h1 className="mb--50 text-center xlarge2-font semiBold">You don’t have any tray information please upload data </h1>
                                <div className="upload-holder pt--50 pb--50 pl--15 pr--15">
                                    <div className="mb--30">
                                        <img src="assets/images/upload-file-img.png" alt="" />
                                    </div>
                                    <h5 className="xlarge-font bold">Upload Excel and CSV files only</h5>
                                    <p className="basic-font medium mb--0">you can simply drag and drop files here</p>
                                </div>
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