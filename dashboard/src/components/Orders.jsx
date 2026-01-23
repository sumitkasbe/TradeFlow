import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <p>You haven't placed any orders today</p>

                <div>
                    <Link to={"/"} className="btn" style={{width: "20%"}}>Get Started</Link>
                </div>
            </div>
        </div>
    )
};

export default Orders;