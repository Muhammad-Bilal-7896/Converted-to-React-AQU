const Login = () => {
    return (
        <>
            <div className="login-wrapper clr">
                <div className="left-img-holder clr">
                    {/* <img src="assets/imgs/login-page-main-img.jpg" alt=""> */}
                </div>
                <div className="right-form-holder clr">
                    <div className="form-holder clr">
                        <h1 className="text-center semiBold  mb--50"><span className="dBlock medium">Welcome to</span>Claim Your Profile</h1>
                        <form>
                            <div className="form-group">
                                <div className="input-holder clr has_error pt--10 pb--10 pl--15 pr--15">
                                    <span className="icon-holder">
                                        <img src="assets/images/svg/form-error-icon.svg" alt="" />
                                    </span>
                                    <div className="form-control">
                                        <h5 className="basic-font bold mb--0">Account not found</h5>
                                        <p className="mb--0 basic-font">Your invitation has expired. Please <a href="#" className="underline ">contact support</a>.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <div className="input-holder clr">
                                    <span className="icon-holder">
                                        <img src="assets/images/svg/email-icon.svg" alt="" />
                                    </span>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                                </div>
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <div className="input-holder clr">
                                    <span className="icon-holder">
                                        <img src="assets/images/svg/lock-icon.svg" alt="" />
                                    </span>
                                    <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Enter Password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <p>I accept <a href="#" className="underline">Terms &amp; Conditions</a> by signing up</p>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary full-width mb--50">Sign Up</button>
                            <div className="text-center">
                                <a href="#" className="underline">Need Help?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;