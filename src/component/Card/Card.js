import React from 'react';

const Card = ({src, alt, cardName, cardStatus, srcFacebook, srcInstagram, srcTwitter, srcLinkedin}) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={src} alt={alt}/>
            </div>
            <div className="card-name">
                <span>{cardName}</span>
            </div>
            <div className="card-status">
                <span>{cardStatus}</span>
            </div>
            <div className="card-links">
                <img src={srcFacebook} alt="facebook" />
                <img src={srcInstagram} alt="instagram" />
                <img src={srcTwitter} alt="twitter" />
                <img src={srcLinkedin} alt="linkedin" />
            </div>
        </div>
    )
}

export default Card;