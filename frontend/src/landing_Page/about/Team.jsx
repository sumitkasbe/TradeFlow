import nithinKamathImg from '../../assets/nithinKamath.jpg';

function Team() {
    return (
        <div className="container">
            <div className="row border-top mt-5 gx-1 mb-5">
               <div className="text-center text-muted fs-3 mb-5">
                 <h1>People</h1>
               </div>
                <div className="col-5 text-center">
                    <img className='rounded-circle' src={nithinKamathImg} alt="Founder_Img" style={{width: "50%"}} />
                    <h4 className='text-muted mt-4 fs-5'>Nithin Kamath</h4>
                    <h6 className='text-muted'>Founder, CEO</h6>
                </div>
                <div className="col-7 p-3">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href="https://nithinkamath.me/">Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> / <a href="https://x.com/Nithin0dha">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;