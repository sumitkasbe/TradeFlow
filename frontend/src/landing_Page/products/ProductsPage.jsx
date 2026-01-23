import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
import kiteImg from "../../assets/kite.png";
import Coin from "../../assets/coin.png";
import Varsity from "../../assets/varsity.png";
import ConsoleImg from "../../assets/console.png"
import kiteConnectImg from "../../assets/kiteconnect.png";


function ProductsPage() {
    return (
        <>
            <Hero />

            <LeftImage imageUrl={kiteImg} productName="kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />

            <RightImage imageUrl={ConsoleImg} productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="" />

            <LeftImage imageUrl={Coin} productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />

            <RightImage imageUrl={kiteConnectImg} productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" />

            <LeftImage imageUrl={Varsity} productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore="" />

            <p className="fs-4 text-muted text-center">
                Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.
            </p>

            <Universe  />
        </>
    );
}

export default ProductsPage;