import { Link } from "react-router-dom";
import signupImg from "../../assets/account_open.svg";

function Signup() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="text-center pt-4">
          <h1 className="fs-2">Open a free demat and trading account online</h1>
          <p className="fs-4 mt-3 mb-5">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>

        <div className="col-8">
          <img src={signupImg} alt="sing_up_img" style={{ width: "85%" }} />
        </div>

        <div className="col-4 text-center pt-5 mt-5">
          <h2 className="text-muted mt-5 pt-5">Signup now</h2>
          <p style={{ fontSize: "2.2vh" }}>
            Or track your existing application
          </p>
          <Link to="/usersignup">
            <button
              className="btn btn-primary btn-lg fs-4 mb-3"
              style={{ width: "30vh", margin: "0 auto", borderRadius: "20vh" }}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
