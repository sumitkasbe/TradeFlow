import mainLogo from '../assets/logo.svg';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(240, 240, 240)" }} className='pb-3'>
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col-3">
                        <img src={mainLogo} alt="main_img" style={{ width: "45%" }} className='mb-4' />
                        <p> &copy; 2010 - 2025, Not TradeFlow Boking Ltd. <br /> All rights reserved.</p>

                        <div className='d-flex gap-3 text-muted mt-4'>
                            <div><i class="fa fa-twitter-square fs-4" aria-hidden="true"></i></div>
                            <div><i class="fa fa-facebook-square fs-4" aria-hidden="true"></i></div>
                            <div><i class="fa fa-instagram fs-4" aria-hidden="true"></i></div>
                            <div><i class="fa fa-linkedin-square fs-4" aria-hidden="true"></i></div>
                            <div><i class="fa fa-telegram fs-4" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div className="col-3" style={{lineHeight: "2.0"}}>
                        <h3 className='fs-4'>Company</h3>
                        <a className='text-black text-muted' href="">About</a> <br />
                        <a className='text-black text-muted' href="">Products</a> <br />
                        <a className='text-black text-muted' href="">Pricing</a> <br />
                        <a className='text-black text-muted' href="">Refferal programme</a> <br />
                        <a className='text-black text-muted' href="">Careers</a> <br />
                        <a className='text-black text-muted' href="">TradeFlow.tech</a> <br />
                        <a className='text-black text-muted' href="">Press & media</a> <br />
                        <a className='text-black text-muted' href="">TradeFlow cares (CSR)</a> <br />
                    </div>
                    <div className="col-3" style={{lineHeight: "2.0"}}>
                        <h3 className='fs-4'>Support</h3>

                        <a className='text-black text-muted' href="">Contact</a> <br />
                        <a className='text-black text-muted' href="">Support portal</a> <br />
                        <a className='text-black text-muted' href="">Z-connect blog</a> <br />
                        <a className='text-black text-muted' href="">List of charges</a> <br />
                        <a className='text-black text-muted' href="">Downloads & resources</a> <br />
                    </div>
                    <div className="col-3" style={{lineHeight: "2.0"}}>
                        <h3 className='fs-4'>Action</h3>

                        <a className='text-black text-muted' href="">Open an account</a> <br />
                        <a className='text-black text-muted' href="">Fund transfer</a> <br />
                        <a className='text-black text-muted' href="">60 day challenge</a> <br />
                    </div>
                </div>
                <p className='text-muted mt-5'>
                    TradeFlow Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through TradeFlow Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through TradeFlow Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: TradeFlow Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@TradeFlow.com, for DP related to dp@TradeFlow.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>

                <p className='text-muted'>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>

                <p className='text-muted'>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>

                <p className='text-muted'>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeFlow and offering such services, please create a ticket here.
                </p>

                <div className='mt-4 text-center' style={{textDecoration: "none"}}>
                    <a className='text-muted m-4' href="#">NSE</a>
                    <a className='text-muted m-4' href="">BSE</a>
                    <a className='text-muted m-4' href="">MCX</a>
                    <a className='text-muted m-4' href="">Terms & Conditions</a>
                    <a className='text-muted m-4' href="">Policies & Procedures</a>
                    <a className='text-muted m-4' href="">Privacy Policy</a>
                    <a className='text-muted m-4' href="">Disclosure</a>
                    <a className='text-muted m-4' href="">For Investor's Attention</a>
                    <a className='text-muted m-4' href="">Invester Charter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;