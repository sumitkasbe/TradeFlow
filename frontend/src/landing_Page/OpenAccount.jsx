import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">Open a TradeFlow account</h1>
        <p className="">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades
        </p>
        <Link to="/signup">
          <button
            className="btn btn-primary btn-lg fs-5 mt-3 mb-3 "
            style={{ width: "40vh", margin: "0 auto" }}
          >
            Sign up now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
