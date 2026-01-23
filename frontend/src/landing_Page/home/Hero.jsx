import HomeHeroImage from "../../assets/homeHero.png";
import { Link } from "react-router-dom";
function Hero() {
    return ( 
       <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img className="mb-5" src={HomeHeroImage} alt="Home_Hero_img" />
                <h1  className="mt-5">Invest in everything</h1>
                <p className="">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to="/signup" ><button className="btn btn-primary btn-lg fs-5 mt-4 mb-3 " style={{width:"40vh", margin:"0 auto"}} >Signup now</button></Link>
            </div>
       </div>
     );
}

export default Hero;