function Hero() {
    return (
        <div className="container-fluid " style={{backgroundColor: "rgb(240, 240, 240)"}}>
            <div className="row p-5" >
                <div className="col-6">
                    <h1>Support Portal</h1>
                </div>

                <div className="col-6 text-end">
                    <button className="btn btn-primary">My Tickets</button>
                </div>

                <div className="mt-4">
                    <form role="search">
                        <div className="position-relative">
                            <i
                                className="fa fa-search position-absolute"
                                aria-hidden="true"
                                style={{
                                    top: "50%",
                                    left: "15px",
                                    transform: "translateY(-50%)",
                                    color: "#999"
                                }}
                            ></i>

                            <input
                                type="search"
                                className="form-control ps-5 text-muted"
                                placeholder="Eg: How do I open my account, How do i activate F&O.."
                                style={{ height: "8vh" }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
