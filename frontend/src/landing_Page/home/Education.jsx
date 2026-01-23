import EducationImg from '../../assets/education.svg'
function Education() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <img src={EducationImg} alt="Varsity_Img" style={{width: "75%"}} />
                </div>
                <div className="col-6">
                    <h1 className='mb-5 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market eucation book in the world covering everything from the basics to advanced trading.</p>

                    <div className='mb-5'>
                        <a href="" style={{ textDecoration: "none" }}>Varcity <i class="fa fa-long-arrow-right m-1" aria-hidden="true"></i></a>
                    </div>

                    <p>TradingQ&A, the most active trading and investment community in India for <br /> all your market related queries.</p>

                    <div>
                        <a href="" style={{ textDecoration: "none" }}>TradingQ&A <i class="fa fa-long-arrow-right m-1" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Education;