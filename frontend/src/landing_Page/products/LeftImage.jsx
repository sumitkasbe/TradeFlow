import googlePlayStore from '../../assets/googlePlayBadge.svg'
import appleStore from '../../assets/appstoreBadge.svg'

function LeftImage({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container text-muted">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="col-6 p-5 mt-4">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='d-flex gap-5  p-3'>
                        <a href={tryDemo}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft: "35px"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3 d-flex gap-2'>
                        <a href={googlePlay}><img src={googlePlayStore} alt="googlePlay" /></a>
                        <a href={appStore} style={{marginLeft: "30px"}}><img src={appleStore} alt="appStrore" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftImage;