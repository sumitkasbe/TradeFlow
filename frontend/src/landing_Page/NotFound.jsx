import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className="mt-5 mb-4">404 Not Found</h1>
                <p className="">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" ><button className="btn btn-primary btn-lg fs-5 mt-3 mb-3 " style={{ width: "40vh", margin: "0 auto" }} >Go Home</button></Link>
            </div>
        </div>
    );
}

export default NotFound;