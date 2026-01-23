import zerodhaFundhouseimg from "../../assets/zerodhaFundhouse.png";
import SensibullImg from "../../assets/sensibullLogo.svg"
import GoldenpiLogo from "../../assets/goldenpiLogo.png";
import SmallcaseLogo from "../../assets/smallcaseLogo.png";
import StreakLogo from "../../assets/streakLogo.png";
import DittoLogo from "../../assets/dittoLogo.png";
import { Link } from "react-router-dom";


function Universe() {
    return (
        <div className="container mt-5 p-5 text-muted">
            <div className="row p-3 fs-8">
                <h1 className="text-muted text-center fs-3">The Zerodha Universe</h1>
                <p className="text-muted text-center fs-6 mt-3">Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 text-center mt-3 p-3">
                    <img className="mb-3" src={zerodhaFundhouseimg} alt="" style={{ width: "50%" }} />
                    <p>our asset management vanture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                <div className="col-4 text-center mt-3 p-3">
                    <img className="mb-3" src={SensibullImg} alt="" style={{ width: "50%" }} />
                    <p>Options trading platform that let you create strategies, analyze positions, and examine data points like open interest,  FII.DII, and more.</p>
                </div>

                <div className="col-4 text-center mt-3 p-3">
                    <img className="mb-3" src={GoldenpiLogo} alt="" style={{ width: "50%" }} />
                    <p>Bonds trading platform</p>
                </div>


                <div className="col-4 text-center mt-5 p-3">
                    <img className="mb-3" src={StreakLogo} alt="" style={{ width: "50%" }} />
                    <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>

                <div className="col-4 text-center mt-5 p-3">
                    <img className="mb-3" src={SmallcaseLogo} alt="" style={{ width: "50%" }} />
                    <p>Thematic investing platform that helps you invest in divesified baskets of stocks on ETFs.</p>
                </div>

                <div className="col-4 text-center mt-5 p-3">
                    <img className="mb-3" src={DittoLogo} alt="" style={{ width: "44%" }} />
                    <p>Personalized advice on life and health insurance. No spam and no miss - selling </p>
                </div>
                
                <div className="col-12 d-flex justify-content-center mt-5">
                    <Link to="/signup">
                        <button
                            className="btn btn-primary btn-lg fs-5"
                            style={{ width: "40vh" }}
                        >
                            Signup now
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Universe;