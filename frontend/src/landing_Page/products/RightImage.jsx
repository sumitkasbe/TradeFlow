function RightImage({ imageUrl, productName, productDescription, learnMore}) {
    return ( 
        <div className="container text-muted">
            <div className="row p-5">
                <div className="col-6 p-5 mt-4">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn more</a>
                    </div>
                </div>

                <div className="col-6">
                    <img src={imageUrl} alt="aeda" style={{width: "90%"}}/>
                </div>

            </div>
        </div>
     );
}

export default RightImage;